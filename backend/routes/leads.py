from flask import Blueprint, request, jsonify
from database import (
    insert_demo,
    insert_trial,
    insert_notify,
    insert_contact,
    get_all_leads,
    get_connection
)

leads_bp = Blueprint("leads", __name__, url_prefix="/api")

@leads_bp.route("/health", methods=["GET"])
def health_check():
    db_status = "connected"
    try:
        conn = get_connection(with_db=False)
        conn.close()
    except Exception as e:
        db_status = f"disconnected: {e}"

    return jsonify({
        "status": "ok",
        "service": "isuite-ai-backend",
        "database": db_status
    }), 200

# 1. Demo Booking API
@leads_bp.route("/leads/demo", methods=["POST"])
def book_demo():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    phone = (data.get("phone") or "").strip()
    email = (data.get("email") or "").strip()
    industry = (data.get("industry") or "clinic").strip()
    preferred_time = (data.get("preferredTime") or "Morning (10 AM - 1 PM)").strip()

    if not name or not phone or not email:
        return jsonify({"error": "Name, phone, and email are required."}), 400

    try:
        lead_id = insert_demo(name, phone, email, industry, preferred_time)
        return jsonify({
            "success": True,
            "message": f"Demo requested! Our product engineer will call {phone} within 15 minutes.",
            "data": {
                "id": lead_id,
                "name": name,
                "phone": phone,
                "email": email,
                "industry": industry,
                "preferredTime": preferred_time
            }
        }), 201
    except Exception as e:
        return jsonify({"error": f"Database error: {str(e)}"}), 500

# 2. Trial Registration API
@leads_bp.route("/leads/trial", methods=["POST"])
def register_trial():
    data = request.get_json(silent=True) or {}
    business_name = (data.get("businessName") or "").strip()
    contact_name = (data.get("contactName") or "").strip()
    phone = (data.get("phone") or "").strip()
    industry = (data.get("industry") or "clinic").strip()
    language = (data.get("language") or "Tamil + Tanglish").strip()

    if not business_name or not contact_name or not phone:
        return jsonify({"error": "Business name, contact name, and phone are required."}), 400

    try:
        trial_id = insert_trial(business_name, contact_name, phone, industry, language)
        return jsonify({
            "success": True,
            "message": f"14-Day Free Pilot created for {business_name}! Check your WhatsApp.",
            "data": {
                "id": trial_id,
                "businessName": business_name,
                "contactName": contact_name,
                "phone": phone,
                "industry": industry,
                "language": language
            }
        }), 201
    except Exception as e:
        return jsonify({"error": f"Database error: {str(e)}"}), 500

# 3. Notify / Waitlist Subscription API
@leads_bp.route("/leads/notify", methods=["POST"])
def subscribe_notify():
    data = request.get_json(silent=True) or {}
    business_name = (data.get("businessName") or "").strip()
    phone = (data.get("phone") or "").strip()
    email = (data.get("email") or "").strip()
    trade = (data.get("trade") or "Wholesale & Distribution").strip()

    if not business_name or not phone or not email:
        return jsonify({"error": "Business name, phone, and email are required."}), 400

    try:
        sub_id = insert_notify(business_name, phone, email, trade)
        return jsonify({
            "success": True,
            "message": f"Subscribed! You will receive VIP early access to {trade} on WhatsApp.",
            "data": {
                "id": sub_id,
                "businessName": business_name,
                "phone": phone,
                "email": email,
                "trade": trade
            }
        }), 201
    except Exception as e:
        return jsonify({"error": f"Database error: {str(e)}"}), 500

# 4. Contact Message API
@leads_bp.route("/contact", methods=["POST"])
def submit_contact():
    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    subject = (data.get("subject") or "General Inquiry").strip()
    message = (data.get("message") or "").strip()

    if not name or not email or not message:
        return jsonify({"error": "Name, email, and message are required."}), 400

    try:
        msg_id = insert_contact(name, email, phone, subject, message)
        return jsonify({
            "success": True,
            "message": "Thank you! Your message has been received.",
            "data": {
                "id": msg_id,
                "name": name,
                "email": email,
                "phone": phone,
                "subject": subject
            }
        }), 201
    except Exception as e:
        return jsonify({"error": f"Database error: {str(e)}"}), 500

# 5. Admin Viewer Endpoint to inspect all leads directly in browser
@leads_bp.route("/admin/leads", methods=["GET"])
def leads_viewer():
    try:
        data = get_all_leads()
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": f"Failed to retrieve leads: {str(e)}"}), 500
