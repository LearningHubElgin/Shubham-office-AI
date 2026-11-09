import os
import pymysql
import pymysql.cursors
from dotenv import load_dotenv

load_dotenv()

DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
DB_PORT = int(os.getenv("DB_PORT", "3307"))
DB_USER = os.getenv("DB_USER", "root")
DB_PASSWORD = os.getenv("DB_PASSWORD", "root123")
DB_NAME = os.getenv("DB_NAME", "isuite_db")

def get_connection(with_db=True):
    """Establish and return a PyMySQL connection with dictionary cursor."""
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

def init_db():
    """Create database and tables if they don't exist."""
    print(f"[*] Connecting to MySQL at {DB_HOST}:{DB_PORT} as '{DB_USER}'...")
    try:
        # Step 1: Ensure database exists
        server_conn = get_connection(with_db=False)
        with server_conn.cursor() as cursor:
            cursor.execute(
                f"CREATE DATABASE IF NOT EXISTS `{DB_NAME}` "
                f"CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
            )
        server_conn.close()
        print(f"[*] Database '{DB_NAME}' verified/created.")

        # Step 2: Ensure tables exist
        db_conn = get_connection(with_db=True)
        with db_conn.cursor() as cursor:
            # Demo requests table
            cursor.execute("""
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

            # Free trial requests table
            cursor.execute("""
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

            # Waitlist subscribers table
            cursor.execute("""
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

            # Contact messages table
            cursor.execute("""
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

        db_conn.close()
        print("[*] All MySQL tables verified/created successfully!")
        return True, "Database initialized successfully"
    except Exception as e:
        print(f"[!] Database initialization note: {e}")
        return False, str(e)

# CRUD Helper functions
def insert_demo(name, phone, email, industry, preferred_time):
    conn = get_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO `demo_requests` (name, phone, email, industry, preferred_time)
                VALUES (%s, %s, %s, %s, %s)
            """, (name, phone, email, industry, preferred_time))
            lead_id = cur.lastrowid
        return lead_id
    finally:
        conn.close()

def insert_trial(business_name, contact_name, phone, industry, language):
    conn = get_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO `trial_requests` (business_name, contact_name, phone, industry, language)
                VALUES (%s, %s, %s, %s, %s)
            """, (business_name, contact_name, phone, industry, language))
            trial_id = cur.lastrowid
        return trial_id
    finally:
        conn.close()

def insert_notify(business_name, phone, email, trade):
    conn = get_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO `waitlist_subscribers` (business_name, phone, email, trade)
                VALUES (%s, %s, %s, %s)
            """, (business_name, phone, email, trade))
            sub_id = cur.lastrowid
        return sub_id
    finally:
        conn.close()

def insert_contact(name, email, phone, subject, message):
    conn = get_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO `contact_messages` (name, email, phone, subject, message)
                VALUES (%s, %s, %s, %s, %s)
            """, (name, email, phone, subject, message))
            msg_id = cur.lastrowid
        return msg_id
    finally:
        conn.close()

def get_all_leads():
    conn = get_connection()
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

            # Format datetime objects for JSON serialization
            for d in demos:
                if d.get("created_at"):
                    d["created_at"] = str(d["created_at"])
            for t in trials:
                if t.get("created_at"):
                    t["created_at"] = str(t["created_at"])
            for s in subscribers:
                if s.get("created_at"):
                    s["created_at"] = str(s["created_at"])
            for m in messages:
                if m.get("created_at"):
                    m["created_at"] = str(m["created_at"])

            return {
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
    finally:
        conn.close()
