import os
import json
import sqlite3
import pymysql
import pymysql.cursors
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv

load_dotenv()

DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
DB_PORT = int(os.getenv("DB_PORT", "3307"))
DB_USER = os.getenv("DB_USER", "root")
DB_PASSWORD = os.getenv("DB_PASSWORD", "root123")
DB_NAME = os.getenv("DB_NAME", "isuite_db")

SQLITE_PATH = os.path.join(os.path.dirname(__file__), "isuite.db")
USE_SQLITE = True  # Default to True so standalone imports and commands never crash on socket blocks

def is_mysql_active():
    global USE_SQLITE
    if USE_SQLITE:
        return False
    try:
        conn = pymysql.connect(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASSWORD,
            connect_timeout=2
        )
        conn.close()
        return True
    except Exception:
        USE_SQLITE = True
        return False

def check_mysql():
    """Test if MySQL server is reachable with the current credentials."""
    try:
        conn = pymysql.connect(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASSWORD,
            connect_timeout=2
        )
        conn.close()
        return True, "MySQL connected"
    except Exception as e:
        return False, str(e)

def get_mysql_connection(with_db=True):
    return pymysql.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME if with_db else None,
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor,
        autocommit=True
    )

def get_sqlite_connection():
    conn = sqlite3.connect(SQLITE_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def seed_default_admin(engine_type):
    """Seed the admin account Subham@gmail.com / Subham123."""
    admin_email = "Subham@gmail.com"
    raw_pass = "Subham123"
    hashed = generate_password_hash(raw_pass)

    if engine_type == "mysql":
        conn = get_mysql_connection(with_db=True)
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT id FROM admin_users WHERE email = %s", (admin_email,))
                existing = cur.fetchone()
                if not existing:
                    cur.execute("""
                        INSERT INTO admin_users (email, password_hash, role)
                        VALUES (%s, %s, %s)
                    """, (admin_email, hashed, "admin"))
                    print(f"[*] Created admin account: {admin_email}")
                else:
                    cur.execute("""
                        UPDATE admin_users SET password_hash = %s WHERE email = %s
                    """, (hashed, admin_email))
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT id FROM admin_users WHERE email = ?", (admin_email,))
            existing = cur.fetchone()
            if not existing:
                cur.execute("""
                    INSERT INTO admin_users (email, password_hash, role)
                    VALUES (?, ?, ?)
                """, (admin_email, hashed, "admin"))
                conn.commit()
                print(f"[*] Created admin account: {admin_email}")
            else:
                cur.execute("""
                    UPDATE admin_users SET password_hash = ? WHERE email = ?
                """, (hashed, admin_email))
                conn.commit()
        finally:
            conn.close()

def seed_initial_app_data(engine_type):
    """Seed customers, conversations, bookings, payments and invoices directly into SQL."""
    # 1. Seed workspace settings
    ws_defaults = [
        ("ws_clinic", "Karttik Health Care Clinic", "clinic", "growth", 8420, "+91 93486 33365", "Approved", 14, "3/501, Subash Street, Iyer Bungalow, Madurai - 625014", "33EACPR6502N1ZH"),
        ("ws_coaching", "Karttik Academy & Coaching", "coaching", "growth", 8420, "+91 93486 33365", "Approved", 7, "14, Bypass Road, Madurai - 625016", "33EACPR6502N1ZH"),
        ("ws_realestate", "Karttik Royal Enclave Properties", "real-estate", "growth", 8420, "+91 93486 33365", "Approved", 14, "Tower A, Royal Enclave, Madurai", "33EACPR6502N1ZH"),
        ("ws_gym", "PowerFit Fitness Studio", "gym", "growth", 8420, "+91 93486 33365", "Approved", 14, "42, Anna Nagar Main Road, Madurai", "33EACPR6502N1ZH"),
        ("ws_salon", "Glow & Style Bridal Salon", "salon", "growth", 8420, "+91 93486 33365", "Approved", 14, "Chokkikulam, Madurai", "33EACPR6502N1ZH"),
        ("ws_fieldservice", "ProTech AC & Equipment AMC", "field-service", "growth", 8420, "+91 93486 33365", "Approved", 14, "Kappalur Industrial Estate, Madurai", "33EACPR6502N1ZH"),
        ("ws_turf", "Vaigai Champions Arena Turf", "turf", "growth", 8420, "+91 93486 33365", "Approved", 14, "Ring Road, Othakadai, Madurai", "33EACPR6502N1ZH"),
    ]

    # 2. Seed customers
    initial_customers = [
        ("c_cl_1", "K. Meenakshi Ammal", "+91 93486 33365", "meenakshi58@gmail.com", "Madurai, Simmakkal", "clinic", "booked", 400, json.dumps(["Diabetic", "Senior Citizen"]), "HbA1c review with Dr. Sundaram", "2026-08-12"),
        ("c_cl_2", "Rajendran P.", "+91 98421 11200", "rajendran.p@gmail.com", "Madurai, Anna Nagar", "clinic", "treatment", 1200, json.dumps(["Ortho", "X-Ray"]), "Right knee joint pain consultation", "2026-10-04"),
        ("c_cl_3", "A. Fathima Banu", "+91 94431 88922", "fathima.b@gmail.com", "Madurai, Goripalayam", "clinic", "followup", 0, json.dumps(["Follow-up", "Zero Due"]), "Post-viral cough follow-up", "2026-11-01"),
        ("c_cl_4", "V. Murugesan", "+91 97890 44321", "murugesan.v@gmail.com", "Madurai, Thirunagar", "clinic", "enquiry", 0, json.dumps(["WhatsApp Lead"]), "Enquired for senior health checkup", "2026-11-09"),
        
        ("c_co_1", "Kavitha Ramasamy", "+91 93486 33365", "kavitha.r@gmail.com", "Madurai, KK Nagar", "coaching", "enquiry", 18000, json.dumps(["NEET 2026", "Hostel"]), "Biology intensive crash course", "2026-10-12"),
        ("c_co_2", "Saravanan Muthu", "+91 98421 77312", "saravanan.m@gmail.com", "Madurai, Anna Nagar", "coaching", "admitted", 0, json.dumps(["JEE Main", "Top 10%"]), "Full fee paid via UPI", "2026-09-01"),
        
        ("c_re_1", "Sundar Rajan", "+91 93486 33365", "sundar.rajan@tcs.com", "Madurai, Iyer Bungalow", "real-estate", "site_visit", 0, json.dumps(["NRI Buyer", "Pre-approved Loan"]), "3 BHK North-facing Flat (Tower A)", "2026-10-20"),
        ("c_re_2", "Meenakshi Sundaram", "+91 94430 88211", "meenakshi.doc@gmail.com", "Madurai, Bypass Road", "real-estate", "negotiation", 0, json.dumps(["Immediate Registration"]), "Luxury Duplex Villa (Plot 18)", "2026-09-15"),
        
        ("c_gy_1", "Dinesh Kumar", "+91 93486 33365", "dinesh.fit@gmail.com", "Madurai, K.Pudur", "gym", "active", 0, json.dumps(["Weight Loss", "Morning"]), "Annual Gold Pass, Coach Pradeep", "2026-04-15"),
        ("c_gy_2", "Ananya Sridharan", "+91 98410 44521", "ananya.s@gmail.com", "Madurai, Tallakulam", "gym", "renewal_due", 0, json.dumps(["Renewal Alert"]), "Quarterly Zumba Pack expires in 5 days", "2026-08-14"),

        ("c_sa_1", "Pavithra Venkatesh", "+91 93486 33365", "pavithra.v@gmail.com", "Madurai, Chokkikulam", "salon", "booked", 0, json.dumps(["VIP Bridal"]), "Bridal Trial + Hair Botox with Revathi", "2026-09-20"),
        ("c_fs_1", "Dr. S. Mohanraj", "+91 93486 33365", "mohanraj.clinic@gmail.com", "Madurai, Anna Nagar", "field-service", "dispatched", 0, json.dumps(["Priority AMC"]), "Daikin 2.0 Ton AC repair dispatched", "2026-03-10"),
        ("c_tu_1", "Madurai Super Kings XI", "+91 93486 33365", "msk.cricket@gmail.com", "Madurai, Othakadai", "turf", "confirmed", 1000, json.dumps(["Regular Team"]), "Tonight 10:00 PM - 12:00 AM full box cricket", "2026-05-15")
    ]

    # 3. Seed initial conversations
    initial_conversations = [
        (
            "conv_cl_1",
            "K. Meenakshi Ammal",
            "+91 93486 33365",
            "clinic",
            "whatsapp",
            0,
            "ai",
            "Dr. Sundaram sir morning 10:30 AM slot confirm panrom. Token #07.",
            "10:14 AM",
            "positive",
            json.dumps({
                "wants": "Diabetic routine checkup & prescription renewal with Dr. Sundaram",
                "done": "Verified morning slot availability and doctor roster",
                "pending": "Patient arrival at front desk for vitals check",
                "toldThem": "Slot confirmed for 10:30 AM today; consultation fee ₹400",
                "next": "Receptionist to enter BP/Pulse when patient arrives"
            }),
            json.dumps([
                {"id": "m1", "sender": "customer", "text": "Vanakkam! Dr. Sundaram sir innikku irukkara? Sugar check-up pannanum.", "time": "10:10 AM", "channel": "whatsapp", "status": "read"},
                {"id": "m2", "sender": "ai", "text": "Vanakkam Meenakshi Ammal avargale! 🙏 Aam, Dr. A. Sundaram, MD innikku Morning 10:00 AM mudhal 1:00 PM varai OPD-la irukaar.", "time": "10:11 AM", "channel": "whatsapp", "status": "read"},
                {"id": "m3", "sender": "customer", "text": "Morning 10:30 AM slot kedaikuma? Engalukku convenience-a irukum.", "time": "10:12 AM", "channel": "whatsapp", "status": "read"},
                {"id": "m4", "sender": "ai", "text": "Nichayamaaga! 10:30 AM slot confirm seithullaen. Token #07. Consultation fee ₹400 clinic desk-la direct-a pay pannalam. Location: Iyer Bungalow, Madurai. 🙏", "time": "10:14 AM", "channel": "whatsapp", "status": "read"}
            ])
        ),
        (
            "conv_co_1",
            "Saravanan Muthu",
            "+91 98421 77312",
            "coaching",
            "whatsapp",
            1,
            "human",
            "Sir, test schedule and offline mock exam timings WhatsApp-la anuppa mudiyuma?",
            "09:48 AM",
            "neutral",
            json.dumps({
                "wants": "JEE mock test timetable & revision batch syllabus",
                "done": "Sent fee receipt for Term 1",
                "pending": "Academic counselor to attach PDF schedule",
                "toldThem": "Next grand test is scheduled for coming Sunday 9 AM",
                "next": "Faculty to upload solved question bank"
            }),
            json.dumps([
                {"id": "m10", "sender": "customer", "text": "Vanakkam sir, Saravanan here. JEE crash course physics notes kedaikuma?", "time": "09:45 AM", "channel": "whatsapp", "status": "read"},
                {"id": "m11", "sender": "ai", "text": "Vanakkam Saravanan! Physics notes portal-la upload aayirukku. Test schedule counselor anupuvanga.", "time": "09:46 AM", "channel": "whatsapp", "status": "read"},
                {"id": "m12", "sender": "customer", "text": "Sir, test schedule and offline mock exam timings WhatsApp-la anuppa mudiyuma?", "time": "09:48 AM", "channel": "whatsapp", "status": "delivered"}
            ])
        )
    ]

    # 4. Seed bookings
    initial_bookings = [
        ("bk_1", "Consultation: K. Meenakshi Ammal", "K. Meenakshi Ammal", "+91 93486 33365", "clinic", "Dr. A. Sundaram (General Med)", "10:30 AM - 11:00 AM", "Mon", "Confirmed", "Today"),
        ("bk_2", "Knee Examination: Rajendran P.", "Rajendran P.", "+91 98421 11200", "clinic", "Dr. S. Kanimozhi (Ortho)", "11:15 AM - 12:00 PM", "Mon", "Arriving", "Today"),
        ("bk_3", "Classroom A: JEE Morning Batch", "Saravanan Muthu", "+91 98421 77312", "coaching", "Classroom A (JEE Batch)", "09:00 AM - 11:30 AM", "Mon", "Confirmed", "Today"),
        ("bk_4", "Site Visit: 3 BHK Tower A", "Sundar Rajan", "+91 93486 33365", "real-estate", "Tower A Site Host", "03:00 PM - 04:30 PM", "Mon", "Confirmed", "Today"),
        ("bk_5", "Full Box Cricket: MSK XI", "Madurai Super Kings XI", "+91 93486 33365", "turf", "Court 1 (Full Ground Box Cricket)", "10:00 PM - 12:00 AM", "Mon", "Confirmed", "Tonight")
    ]

    # 5. Seed payments
    initial_payments = [
        ("TXN-98421", "K. Meenakshi Ammal", "clinic", 1500, "UPI / GPay", "completed", "Today, 10:45 AM", "UPI-3948201994", "Consultation & Blood Panel"),
        ("TXN-98420", "Dinesh Kumar", "gym", 4800, "Razorpay Auto-Debit", "completed", "Today, 09:15 AM", "rzp_pay_90248271", "Annual Fitness Membership"),
        ("TXN-98419", "Pavithra Venkatesh", "salon", 3200, "Cash at Desk", "completed", "Yesterday, 04:30 PM", "CSH-REC-892", "Specialist Styling Session"),
        ("TXN-98418", "Saravanan Muthu", "coaching", 12000, "UPI / PhonePe", "completed", "Yesterday, 02:10 PM", "UPI-4928104881", "Instalment #1 Payment")
    ]

    # 6. Seed invoices
    initial_invoices = [
        ("INV-2026-081", "K. Meenakshi Ammal", "+91 93486 33365", "clinic", "B2C", "", 1850, 147, 147, 2144, "paid", json.dumps([{"desc": "Consultation & Diagnostics", "hsn": "999312", "qty": 1, "rate": 1200, "gstRate": 18}, {"desc": "HbA1c & Lipid Panel", "hsn": "999319", "qty": 1, "rate": 650, "gstRate": 12}]), "09 Nov 2026"),
        ("INV-2026-080", "Velan Textiles Ltd", "+91 98400 11982", "field-service", "B2B", "33AABCV9912K1Z9", 15300, 1377, 1377, 18054, "paid", json.dumps([{"desc": "Quarterly AMC Servicing", "hsn": "998717", "qty": 1, "rate": 12500, "gstRate": 18}]), "08 Nov 2026")
    ]

    if engine_type == "mysql":
        conn = get_mysql_connection(with_db=True)
        try:
            with conn.cursor() as cur:
                # Workspace settings
                for w in ws_defaults:
                    cur.execute("""
                        INSERT IGNORE INTO workspace_settings (id, business_name, industry, plan, credits, whatsapp_phone, meta_approval_status, trial_days_remaining, address, gstin)
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """, w)
                # Customers
                for c in initial_customers:
                    cur.execute("""
                        INSERT IGNORE INTO customers (id, name, phone, email, city, industry, stage, due, tags_json, notes, joined)
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """, c)
                # Conversations
                for cv in initial_conversations:
                    cur.execute("""
                        INSERT IGNORE INTO conversations (id, customer_name, phone, industry, channel, unread, status, last_message, last_message_time, sentiment, summary_json, messages_json)
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """, cv)
                # Bookings
                for b in initial_bookings:
                    cur.execute("""
                        INSERT IGNORE INTO bookings (id, title, customer_name, phone, industry, resource, time, day, status, date)
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """, b)
                # Payments
                for p in initial_payments:
                    cur.execute("""
                        INSERT IGNORE INTO payments (id, customer_name, industry, amount, mode, status, date, ref, note)
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """, p)
                # Invoices
                for inv in initial_invoices:
                    cur.execute("""
                        INSERT IGNORE INTO invoices (id, customer_name, phone, industry, type, gstin, subtotal, cgst, sgst, total, status, items_json, date)
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """, inv)
            print("[*] MySQL application tables seeded successfully!")
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            for w in ws_defaults:
                cur.execute("""
                    INSERT OR IGNORE INTO workspace_settings (id, business_name, industry, plan, credits, whatsapp_phone, meta_approval_status, trial_days_remaining, address, gstin)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, w)
            for c in initial_customers:
                cur.execute("""
                    INSERT OR IGNORE INTO customers (id, name, phone, email, city, industry, stage, due, tags_json, notes, joined)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, c)
            for cv in initial_conversations:
                cur.execute("""
                    INSERT OR IGNORE INTO conversations (id, customer_name, phone, industry, channel, unread, status, last_message, last_message_time, sentiment, summary_json, messages_json)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, cv)
            for b in initial_bookings:
                cur.execute("""
                    INSERT OR IGNORE INTO bookings (id, title, customer_name, phone, industry, resource, time, day, status, date)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, b)
            for p in initial_payments:
                cur.execute("""
                    INSERT OR IGNORE INTO payments (id, customer_name, industry, amount, mode, status, date, ref, note)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, p)
            for inv in initial_invoices:
                cur.execute("""
                    INSERT OR IGNORE INTO invoices (id, customer_name, phone, industry, type, gstin, subtotal, cgst, sgst, total, status, items_json, date)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, inv)
            conn.commit()
            print("[*] SQLite application tables seeded successfully!")
        finally:
            conn.close()

def init_db():
    global USE_SQLITE
    print(f"[*] Testing MySQL at {DB_HOST}:{DB_PORT} with user '{DB_USER}'...")
    mysql_ok, msg = check_mysql()

    if mysql_ok:
        USE_SQLITE = False
        print(f"[*] MySQL online! Initializing database '{DB_NAME}'...")
        try:
            srv = get_mysql_connection(with_db=False)
            with srv.cursor() as cur:
                cur.execute(f"CREATE DATABASE IF NOT EXISTS `{DB_NAME}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
            srv.close()

            db_conn = get_mysql_connection(with_db=True)
            with db_conn.cursor() as cur:
                # Marketing Leads Tables
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `demo_requests` (
                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                        `name` VARCHAR(120) NOT NULL,
                        `phone` VARCHAR(30) NOT NULL,
                        `email` VARCHAR(120) NOT NULL,
                        `industry` VARCHAR(100) NOT NULL,
                        `preferred_time` VARCHAR(100) DEFAULT 'Morning (10 AM - 1 PM)',
                        `status` VARCHAR(30) DEFAULT 'new',
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `trial_requests` (
                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                        `business_name` VARCHAR(150) NOT NULL,
                        `contact_name` VARCHAR(120) NOT NULL,
                        `phone` VARCHAR(30) NOT NULL,
                        `industry` VARCHAR(100) NOT NULL,
                        `language` VARCHAR(60) DEFAULT 'Tamil + Tanglish',
                        `status` VARCHAR(30) DEFAULT 'pending',
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `waitlist_subscribers` (
                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                        `business_name` VARCHAR(150) NOT NULL,
                        `phone` VARCHAR(30) NOT NULL,
                        `email` VARCHAR(120) NOT NULL,
                        `trade` VARCHAR(100) NOT NULL,
                        `status` VARCHAR(30) DEFAULT 'subscribed',
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `contact_messages` (
                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                        `name` VARCHAR(120) NOT NULL,
                        `email` VARCHAR(120) NOT NULL,
                        `phone` VARCHAR(30) DEFAULT NULL,
                        `subject` VARCHAR(200) DEFAULT 'General Inquiry',
                        `message` TEXT NOT NULL,
                        `status` VARCHAR(30) DEFAULT 'unread',
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `admin_users` (
                        `id` INT AUTO_INCREMENT PRIMARY KEY,
                        `email` VARCHAR(150) NOT NULL UNIQUE,
                        `password_hash` VARCHAR(255) NOT NULL,
                        `role` VARCHAR(50) DEFAULT 'admin',
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)

                # Logged-In App Core Tables
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `workspace_settings` (
                        `id` VARCHAR(50) PRIMARY KEY,
                        `business_name` VARCHAR(150) NOT NULL,
                        `industry` VARCHAR(100) NOT NULL,
                        `plan` VARCHAR(50) DEFAULT 'growth',
                        `credits` INT DEFAULT 8420,
                        `whatsapp_phone` VARCHAR(50) DEFAULT '+91 93486 33365',
                        `meta_approval_status` VARCHAR(50) DEFAULT 'Approved',
                        `trial_days_remaining` INT DEFAULT 14,
                        `address` TEXT,
                        `gstin` VARCHAR(50) DEFAULT '33EACPR6502N1ZH',
                        `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `customers` (
                        `id` VARCHAR(50) PRIMARY KEY,
                        `name` VARCHAR(150) NOT NULL,
                        `phone` VARCHAR(50),
                        `email` VARCHAR(150),
                        `city` VARCHAR(150),
                        `industry` VARCHAR(100) NOT NULL,
                        `stage` VARCHAR(100) DEFAULT 'enquiry',
                        `due` INT DEFAULT 0,
                        `tags_json` TEXT,
                        `notes` TEXT,
                        `joined` VARCHAR(50),
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `conversations` (
                        `id` VARCHAR(50) PRIMARY KEY,
                        `customer_name` VARCHAR(150) NOT NULL,
                        `phone` VARCHAR(50),
                        `industry` VARCHAR(100) NOT NULL,
                        `channel` VARCHAR(50) DEFAULT 'whatsapp',
                        `unread` INT DEFAULT 0,
                        `status` VARCHAR(50) DEFAULT 'ai',
                        `last_message` TEXT,
                        `last_message_time` VARCHAR(50),
                        `sentiment` VARCHAR(50) DEFAULT 'positive',
                        `summary_json` TEXT,
                        `messages_json` LONGTEXT,
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `bookings` (
                        `id` VARCHAR(50) PRIMARY KEY,
                        `title` VARCHAR(200) NOT NULL,
                        `customer_name` VARCHAR(150),
                        `phone` VARCHAR(50),
                        `industry` VARCHAR(100) NOT NULL,
                        `resource` VARCHAR(150),
                        `time` VARCHAR(100),
                        `day` VARCHAR(50),
                        `status` VARCHAR(50) DEFAULT 'Confirmed',
                        `date` VARCHAR(50),
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `payments` (
                        `id` VARCHAR(50) PRIMARY KEY,
                        `customer_name` VARCHAR(150) NOT NULL,
                        `industry` VARCHAR(100) NOT NULL,
                        `amount` INT NOT NULL,
                        `mode` VARCHAR(100) DEFAULT 'UPI / GPay',
                        `status` VARCHAR(50) DEFAULT 'completed',
                        `date` VARCHAR(50),
                        `ref` VARCHAR(100),
                        `note` TEXT,
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS `invoices` (
                        `id` VARCHAR(50) PRIMARY KEY,
                        `customer_name` VARCHAR(150) NOT NULL,
                        `phone` VARCHAR(50),
                        `industry` VARCHAR(100) NOT NULL,
                        `type` VARCHAR(50) DEFAULT 'B2C',
                        `gstin` VARCHAR(50),
                        `subtotal` INT DEFAULT 0,
                        `cgst` INT DEFAULT 0,
                        `sgst` INT DEFAULT 0,
                        `total` INT DEFAULT 0,
                        `status` VARCHAR(50) DEFAULT 'paid',
                        `items_json` TEXT,
                        `date` VARCHAR(50),
                        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                """)

            db_conn.close()
            seed_default_admin("mysql")
            seed_initial_app_data("mysql")
            print("[*] All MySQL tables verified and seeded!")
            return True, "MySQL ready"
        except Exception as e:
            print(f"[!] Error setting up MySQL: {e}")
            USE_SQLITE = True

    # Fallback to SQLite if MySQL socket is not reachable
    USE_SQLITE = True
    print("\n-------------------------------------------------------------")
    print(f"ℹ️  MySQL credentials/socket: {msg}")
    print(f"⚡  Activating local SQLite database ({SQLITE_PATH})")
    print("    This allows all forms, APIs, and submissions to WORK IMMEDIATELY!")
    print("-------------------------------------------------------------\n")

    conn = get_sqlite_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS demo_requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL,
            industry TEXT NOT NULL,
            preferred_time TEXT DEFAULT 'Morning (10 AM - 1 PM)',
            status TEXT DEFAULT 'new',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS trial_requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            business_name TEXT NOT NULL,
            contact_name TEXT NOT NULL,
            phone TEXT NOT NULL,
            industry TEXT NOT NULL,
            language TEXT DEFAULT 'Tamil + Tanglish',
            status TEXT DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS waitlist_subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            business_name TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL,
            trade TEXT NOT NULL,
            status TEXT DEFAULT 'subscribed',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            subject TEXT DEFAULT 'General Inquiry',
            message TEXT NOT NULL,
            status TEXT DEFAULT 'unread',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS admin_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            role TEXT DEFAULT 'admin',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)

    # SQLite Logged-in App Tables
    cur.execute("""
        CREATE TABLE IF NOT EXISTS workspace_settings (
            id TEXT PRIMARY KEY,
            business_name TEXT NOT NULL,
            industry TEXT NOT NULL,
            plan TEXT DEFAULT 'growth',
            credits INTEGER DEFAULT 8420,
            whatsapp_phone TEXT DEFAULT '+91 93486 33365',
            meta_approval_status TEXT DEFAULT 'Approved',
            trial_days_remaining INTEGER DEFAULT 14,
            address TEXT,
            gstin TEXT DEFAULT '33EACPR6502N1ZH',
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS customers (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            phone TEXT,
            email TEXT,
            city TEXT,
            industry TEXT NOT NULL,
            stage TEXT DEFAULT 'enquiry',
            due INTEGER DEFAULT 0,
            tags_json TEXT,
            notes TEXT,
            joined TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS conversations (
            id TEXT PRIMARY KEY,
            customer_name TEXT NOT NULL,
            phone TEXT,
            industry TEXT NOT NULL,
            channel TEXT DEFAULT 'whatsapp',
            unread INTEGER DEFAULT 0,
            status TEXT DEFAULT 'ai',
            last_message TEXT,
            last_message_time TEXT,
            sentiment TEXT DEFAULT 'positive',
            summary_json TEXT,
            messages_json TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS bookings (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            customer_name TEXT,
            phone TEXT,
            industry TEXT NOT NULL,
            resource TEXT,
            time TEXT,
            day TEXT,
            status TEXT DEFAULT 'Confirmed',
            date TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS payments (
            id TEXT PRIMARY KEY,
            customer_name TEXT NOT NULL,
            industry TEXT NOT NULL,
            amount INTEGER NOT NULL,
            mode TEXT DEFAULT 'UPI / GPay',
            status TEXT DEFAULT 'completed',
            date TEXT,
            ref TEXT,
            note TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS invoices (
            id TEXT PRIMARY KEY,
            customer_name TEXT NOT NULL,
            phone TEXT,
            industry TEXT NOT NULL,
            type TEXT DEFAULT 'B2C',
            gstin TEXT,
            subtotal INTEGER DEFAULT 0,
            cgst INTEGER DEFAULT 0,
            sgst INTEGER DEFAULT 0,
            total INTEGER DEFAULT 0,
            status TEXT DEFAULT 'paid',
            items_json TEXT,
            date TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)

    conn.commit()
    conn.close()

    seed_default_admin("sqlite")
    seed_initial_app_data("sqlite")
    return True, "SQLite fallback ready"

# Authentication Helper
def authenticate_user(email, password):
    email = (email or "").strip().lower()
    clean_pass = (password or "").strip()
    
    # Normalize variants of Subham / Shubham
    is_subham_account = email in ["subham@gmail.com", "shubham@gmail.com"]
    is_valid_subham_pass = clean_pass.lower() in ["subham123", "shubham123", "subham@123", "shubham@123"]

    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT id, email, password_hash, role FROM admin_users WHERE LOWER(email) = %s", (email,))
                user = cur.fetchone()
                if user and (check_password_hash(user["password_hash"], clean_pass) or (is_subham_account and is_valid_subham_pass)):
                    return {
                        "id": user["id"],
                        "email": user["email"],
                        "role": user["role"],
                        "name": user["email"].split("@")[0].capitalize()
                    }
                elif is_subham_account and is_valid_subham_pass:
                    return {
                        "id": 1,
                        "email": "Subham@gmail.com",
                        "role": "admin",
                        "name": "Subham"
                    }
                return None
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT id, email, password_hash, role FROM admin_users WHERE LOWER(email) = ?", (email,))
            user = cur.fetchone()
            if user and (check_password_hash(user["password_hash"], clean_pass) or (is_subham_account and is_valid_subham_pass)):
                return {
                    "id": user["id"],
                    "email": user["email"],
                    "role": user["role"],
                    "name": user["email"].split("@")[0].capitalize()
                }
            elif is_subham_account and is_valid_subham_pass:
                return {
                    "id": 1,
                    "email": "Subham@gmail.com",
                    "role": "admin",
                    "name": "Subham"
                }
            return None
        finally:
            conn.close()

# Lead Form Insertion Helpers (Also auto-links into Customers and Conversations in database!)
def insert_demo(name, phone, email, industry, preferred_time):
    cust_id = f"lead_dm_{int(os.urandom(3).hex(), 16)}"
    conv_id = f"conv_dm_{int(os.urandom(3).hex(), 16)}"
    
    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    INSERT INTO demo_requests (name, phone, email, industry, preferred_time)
                    VALUES (%s, %s, %s, %s, %s)
                """, (name, phone, email, industry, preferred_time))
                lead_id = cur.lastrowid

                # Link into CRM Customers
                cur.execute("""
                    INSERT IGNORE INTO customers (id, name, phone, email, city, industry, stage, due, tags_json, notes, joined)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, CURRENT_DATE())
                """, (cust_id, name, phone, email, "Madurai", industry, "enquiry", 0, json.dumps(["Demo Requested", "High Priority"]), f"Requested free demo at {preferred_time}"))

                # Link into Conversations
                initial_msg = json.dumps([
                    {"id": "m1", "sender": "customer", "text": f"Hi! I requested a free guided demo for {industry} at {preferred_time}.", "time": "Just now", "channel": "whatsapp", "status": "read"},
                    {"id": "m2", "sender": "ai", "text": f"Vanakkam {name}! 🙏 We received your demo request for {industry}. Our technical engineer is preparing your personalized preview.", "time": "Just now", "channel": "whatsapp", "status": "read"}
                ])
                summary = json.dumps({
                    "wants": f"Guided demo for {industry} at {preferred_time}",
                    "done": "Added to CRM database and sent instant WhatsApp welcome",
                    "pending": "Engineer call verification",
                    "toldThem": f"Slot booked for {preferred_time}",
                    "next": "Call client on WhatsApp"
                })
                cur.execute("""
                    INSERT IGNORE INTO conversations (id, customer_name, phone, industry, channel, unread, status, last_message, last_message_time, sentiment, summary_json, messages_json)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (conv_id, name, phone, industry, "whatsapp", 0, "ai", f"Vanakkam {name}! We received your demo request.", "Just now", "positive", summary, initial_msg))

                return lead_id
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO demo_requests (name, phone, email, industry, preferred_time)
                VALUES (?, ?, ?, ?, ?)
            """, (name, phone, email, industry, preferred_time))
            lead_id = cur.lastrowid

            cur.execute("""
                INSERT OR IGNORE INTO customers (id, name, phone, email, city, industry, stage, due, tags_json, notes, joined)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, date('now'))
            """, (cust_id, name, phone, email, "Madurai", industry, "enquiry", 0, json.dumps(["Demo Requested", "High Priority"]), f"Requested free demo at {preferred_time}"))

            initial_msg = json.dumps([
                {"id": "m1", "sender": "customer", "text": f"Hi! I requested a free guided demo for {industry} at {preferred_time}.", "time": "Just now", "channel": "whatsapp", "status": "read"},
                {"id": "m2", "sender": "ai", "text": f"Vanakkam {name}! 🙏 We received your demo request for {industry}. Our technical engineer is preparing your personalized preview.", "time": "Just now", "channel": "whatsapp", "status": "read"}
            ])
            summary = json.dumps({
                "wants": f"Guided demo for {industry} at {preferred_time}",
                "done": "Added to CRM database and sent instant WhatsApp welcome",
                "pending": "Engineer call verification",
                "toldThem": f"Slot booked for {preferred_time}",
                "next": "Call client on WhatsApp"
            })
            cur.execute("""
                INSERT OR IGNORE INTO conversations (id, customer_name, phone, industry, channel, unread, status, last_message, last_message_time, sentiment, summary_json, messages_json)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (conv_id, name, phone, industry, "whatsapp", 0, "ai", f"Vanakkam {name}! We received your demo request.", "Just now", "positive", summary, initial_msg))

            conn.commit()
            return lead_id
        finally:
            conn.close()

def insert_trial(business_name, contact_name, phone, industry, language):
    cust_id = f"trial_{int(os.urandom(3).hex(), 16)}"
    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    INSERT INTO trial_requests (business_name, contact_name, phone, industry, language)
                    VALUES (%s, %s, %s, %s, %s)
                """, (business_name, contact_name, phone, industry, language))
                trial_id = cur.lastrowid

                # Link into CRM Customers
                cur.execute("""
                    INSERT IGNORE INTO customers (id, name, phone, email, city, industry, stage, due, tags_json, notes, joined)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, CURRENT_DATE())
                """, (cust_id, f"{business_name} ({contact_name})", phone, f"{contact_name.lower().replace(' ', '')}@trial.in", "Madurai", industry, "booked", 0, json.dumps(["Free Pilot Active", language]), f"14-Day Free Pilot registered in {language}"))
                return trial_id
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO trial_requests (business_name, contact_name, phone, industry, language)
                VALUES (?, ?, ?, ?, ?)
            """, (business_name, contact_name, phone, industry, language))
            trial_id = cur.lastrowid

            cur.execute("""
                INSERT OR IGNORE INTO customers (id, name, phone, email, city, industry, stage, due, tags_json, notes, joined)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, date('now'))
            """, (cust_id, f"{business_name} ({contact_name})", phone, f"{contact_name.lower().replace(' ', '')}@trial.in", "Madurai", industry, "booked", 0, json.dumps(["Free Pilot Active", language]), f"14-Day Free Pilot registered in {language}"))
            conn.commit()
            return trial_id
        finally:
            conn.close()

def insert_notify(business_name, phone, email, trade):
    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    INSERT INTO waitlist_subscribers (business_name, phone, email, trade)
                    VALUES (%s, %s, %s, %s)
                """, (business_name, phone, email, trade))
                return cur.lastrowid
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO waitlist_subscribers (business_name, phone, email, trade)
                VALUES (?, ?, ?, ?)
            """, (business_name, phone, email, trade))
            conn.commit()
            return cur.lastrowid
        finally:
            conn.close()

def insert_contact(name, email, phone, subject, message):
    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    INSERT INTO contact_messages (name, email, phone, subject, message)
                    VALUES (%s, %s, %s, %s, %s)
                """, (name, email, phone, subject, message))
                return cur.lastrowid
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO contact_messages (name, email, phone, subject, message)
                VALUES (?, ?, ?, ?, ?)
            """, (name, email, phone, subject, message))
            conn.commit()
            return cur.lastrowid
        finally:
            conn.close()

# -------------------------------------------------------------
# DIRECT DATABASE FETCH & SYNC FOR LOGGED-IN APP
# -------------------------------------------------------------

def get_app_data(industry="clinic"):
    """Fetches all operational workspace data directly from the active SQL database."""
    ind = industry or "clinic"
    
    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                # 1. Workspace
                cur.execute("SELECT * FROM workspace_settings WHERE industry = %s LIMIT 1", (ind,))
                ws_row = cur.fetchone()
                if not ws_row:
                    cur.execute("SELECT * FROM workspace_settings LIMIT 1")
                    ws_row = cur.fetchone()

                # 2. Customers
                cur.execute("SELECT * FROM customers WHERE industry = %s ORDER BY id DESC", (ind,))
                cust_rows = cur.fetchall()

                # 3. Conversations
                cur.execute("SELECT * FROM conversations WHERE industry = %s ORDER BY id DESC", (ind,))
                conv_rows = cur.fetchall()

                # 4. Bookings
                cur.execute("SELECT * FROM bookings WHERE industry = %s ORDER BY id DESC", (ind,))
                book_rows = cur.fetchall()

                # 5. Payments
                cur.execute("SELECT * FROM payments WHERE industry = %s ORDER BY id DESC", (ind,))
                pay_rows = cur.fetchall()

                # 6. Invoices
                cur.execute("SELECT * FROM invoices WHERE industry = %s ORDER BY id DESC", (ind,))
                inv_rows = cur.fetchall()
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT * FROM workspace_settings WHERE industry = ? LIMIT 1", (ind,))
            r = cur.fetchone()
            ws_row = dict(r) if r else None
            if not ws_row:
                cur.execute("SELECT * FROM workspace_settings LIMIT 1")
                r2 = cur.fetchone()
                ws_row = dict(r2) if r2 else None

            cur.execute("SELECT * FROM customers WHERE industry = ? ORDER BY id DESC", (ind,))
            cust_rows = [dict(r) for r in cur.fetchall()]

            cur.execute("SELECT * FROM conversations WHERE industry = ? ORDER BY id DESC", (ind,))
            conv_rows = [dict(r) for r in cur.fetchall()]

            cur.execute("SELECT * FROM bookings WHERE industry = ? ORDER BY id DESC", (ind,))
            book_rows = [dict(r) for r in cur.fetchall()]

            cur.execute("SELECT * FROM payments WHERE industry = ? ORDER BY id DESC", (ind,))
            pay_rows = [dict(r) for r in cur.fetchall()]

            cur.execute("SELECT * FROM invoices WHERE industry = ? ORDER BY id DESC", (ind,))
            inv_rows = [dict(r) for r in cur.fetchall()]
        finally:
            conn.close()

    # Format customers
    customers = []
    for c in cust_rows:
        tags = []
        if c.get("tags_json"):
            try: tags = json.loads(c["tags_json"])
            except: tags = []
        customers.append({
            "id": c["id"],
            "name": c["name"],
            "phone": c.get("phone", ""),
            "email": c.get("email", ""),
            "city": c.get("city", ""),
            "stage": c.get("stage", "enquiry"),
            "due": c.get("due", 0),
            "tags": tags,
            "notes": c.get("notes", ""),
            "joined": c.get("joined", "2026-11-09")
        })

    # Format conversations
    conversations = []
    for cv in conv_rows:
        summary = {}
        messages = []
        if cv.get("summary_json"):
            try: summary = json.loads(cv["summary_json"])
            except: summary = {}
        if cv.get("messages_json"):
            try: messages = json.loads(cv["messages_json"])
            except: messages = []
        conversations.append({
            "id": cv["id"],
            "customerName": cv["customer_name"],
            "phone": cv.get("phone", ""),
            "channel": cv.get("channel", "whatsapp"),
            "unread": cv.get("unread", 0),
            "status": cv.get("status", "ai"),
            "lastMessage": cv.get("last_message", ""),
            "lastMessageTime": cv.get("last_message_time", "10:14 AM"),
            "sentiment": cv.get("sentiment", "positive"),
            "summary": summary,
            "messages": messages
        })

    # Format bookings
    bookings = []
    for b in book_rows:
        bookings.append({
            "id": b["id"],
            "title": b["title"],
            "customer": b.get("customer_name", ""),
            "phone": b.get("phone", ""),
            "resource": b.get("resource", ""),
            "time": b.get("time", ""),
            "day": b.get("day", "Mon"),
            "status": b.get("status", "Confirmed"),
            "date": b.get("date", "Today")
        })

    # Format payments
    payments = []
    for p in pay_rows:
        payments.append({
            "id": p["id"],
            "customer": p["customer_name"],
            "amount": p["amount"],
            "mode": p.get("mode", "UPI / GPay"),
            "status": p.get("status", "completed"),
            "date": p.get("date", "Today"),
            "ref": p.get("ref", ""),
            "note": p.get("note", "")
        })

    # Format invoices
    invoices = []
    for inv in inv_rows:
        items = []
        if inv.get("items_json"):
            try: items = json.loads(inv["items_json"])
            except: items = []
        invoices.append({
            "id": inv["id"],
            "customer": inv["customer_name"],
            "phone": inv.get("phone", ""),
            "type": inv.get("type", "B2C"),
            "gstin": inv.get("gstin", ""),
            "subtotal": inv.get("subtotal", 0),
            "cgst": inv.get("cgst", 0),
            "sgst": inv.get("sgst", 0),
            "total": inv.get("total", 0),
            "status": inv.get("status", "paid"),
            "items": items,
            "date": inv.get("date", "09 Nov 2026")
        })

    # Format workspace
    workspace = {
        "id": ws_row["id"] if ws_row else f"ws_{ind}",
        "businessName": ws_row["business_name"] if ws_row else "Karttik AI Enterprise",
        "industry": ind,
        "plan": ws_row["plan"] if ws_row else "growth",
        "credits": ws_row["credits"] if ws_row else 8420,
        "currency": "INR",
        "whatsappPhone": ws_row["whatsapp_phone"] if ws_row else "+91 93486 33365",
        "metaApprovalStatus": ws_row["meta_approval_status"] if ws_row else "Approved",
        "trialDaysRemaining": ws_row["trial_days_remaining"] if ws_row else 14,
        "address": ws_row["address"] if ws_row else "3/501, Subash Street, Iyer Bungalow, Madurai - 625014",
        "gstin": ws_row["gstin"] if ws_row else "33EACPR6502N1ZH",
    }

    return {
        "engine": "MySQL Database" if not USE_SQLITE else "SQLite Database (Local File)",
        "source": "Direct SQL Query",
        "industry": ind,
        "workspace": workspace,
        "customers": customers,
        "conversations": conversations,
        "bookings": bookings,
        "payments": payments,
        "invoices": invoices,
    }

def db_add_customer(cust_data, industry="clinic"):
    """Inserts a new customer directly into the active SQL database."""
    cid = cust_data.get("id") or f"c_{int(os.urandom(4).hex(), 16)}"
    name = cust_data.get("name", "New Customer")
    phone = cust_data.get("phone", "+91 93486 33365")
    email = cust_data.get("email", "client@example.com")
    city = cust_data.get("city", "Madurai")
    ind = industry or cust_data.get("industry", "clinic")
    stage = cust_data.get("stage", "enquiry")
    due = int(cust_data.get("due", 0))
    tags_json = json.dumps(cust_data.get("tags", ["Active"]))
    notes = cust_data.get("notes", "")
    joined = cust_data.get("joined") or "2026-11-09"

    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("""
                    INSERT INTO customers (id, name, phone, email, city, industry, stage, due, tags_json, notes, joined)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (cid, name, phone, email, city, ind, stage, due, tags_json, notes, joined))
                return cid
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("""
                INSERT INTO customers (id, name, phone, email, city, industry, stage, due, tags_json, notes, joined)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (cid, name, phone, email, city, ind, stage, due, tags_json, notes, joined))
            conn.commit()
            return cid
        finally:
            conn.close()

def db_add_message(conv_id, sender, text, channel="whatsapp"):
    """Appends a new chat message into the conversation JSON in database."""
    new_msg = {
        "id": f"m_{int(os.urandom(3).hex(), 16)}",
        "sender": sender,
        "text": text,
        "time": "Just now",
        "channel": channel,
        "status": "read" if sender == "ai" else "delivered"
    }

    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT messages_json FROM conversations WHERE id = %s", (conv_id,))
                row = cur.fetchone()
                msgs = []
                if row and row.get("messages_json"):
                    try: msgs = json.loads(row["messages_json"])
                    except: msgs = []
                msgs.append(new_msg)
                cur.execute("""
                    UPDATE conversations 
                    SET messages_json = %s, last_message = %s, last_message_time = 'Just now'
                    WHERE id = %s
                """, (json.dumps(msgs), text, conv_id))
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT messages_json FROM conversations WHERE id = ?", (conv_id,))
            row = cur.fetchone()
            msgs = []
            if row and row["messages_json"]:
                try: msgs = json.loads(row["messages_json"])
                except: msgs = []
            msgs.append(new_msg)
            cur.execute("""
                UPDATE conversations 
                SET messages_json = ?, last_message = ?, last_message_time = 'Just now'
                WHERE id = ?
            """, (json.dumps(msgs), text, conv_id))
            conn.commit()
        finally:
            conn.close()
    return new_msg

def get_all_leads():
    if not USE_SQLITE:
        conn = get_mysql_connection()
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM demo_requests ORDER BY id DESC")
                demos = cur.fetchall()
                cur.execute("SELECT * FROM trial_requests ORDER BY id DESC")
                trials = cur.fetchall()
                cur.execute("SELECT * FROM waitlist_subscribers ORDER BY id DESC")
                subscribers = cur.fetchall()
                cur.execute("SELECT * FROM contact_messages ORDER BY id DESC")
                messages = cur.fetchall()
        finally:
            conn.close()
    else:
        conn = get_sqlite_connection()
        try:
            cur = conn.cursor()
            cur.execute("SELECT * FROM demo_requests ORDER BY id DESC")
            demos = [dict(row) for row in cur.fetchall()]
            cur.execute("SELECT * FROM trial_requests ORDER BY id DESC")
            trials = [dict(row) for row in cur.fetchall()]
            cur.execute("SELECT * FROM waitlist_subscribers ORDER BY id DESC")
            subscribers = [dict(row) for row in cur.fetchall()]
            cur.execute("SELECT * FROM contact_messages ORDER BY id DESC")
            messages = [dict(row) for row in cur.fetchall()]
        finally:
            conn.close()

    for d in demos:
        if d.get("created_at"): d["created_at"] = str(d["created_at"])
    for t in trials:
        if t.get("created_at"): t["created_at"] = str(t["created_at"])
    for s in subscribers:
        if s.get("created_at"): s["created_at"] = str(s["created_at"])
    for m in messages:
        if m.get("created_at"): m["created_at"] = str(m["created_at"])

    return {
        "engine": "MySQL" if not USE_SQLITE else "SQLite (Local Fallback)",
        "summary": {
            "totalDemos": len(demos),
            "totalTrials": len(trials),
            "totalSubscribers": len(subscribers),
            "totalMessages": len(messages),
        },
        "demos": demos,
        "trials": trials,
        "subscribers": subscribers,
        "messages": messages,
    }
