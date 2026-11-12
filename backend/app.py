import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from database import init_db
from routes.leads import leads_bp

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "isuite-ai-secret-key-2026")

    # Enable CORS for React dev server
    CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

    # Initialize MySQL schema and tables
    success, msg = init_db()
    if not success:
        print(f"\n[!] Notice: Database connection pending user credentials. Details: {msg}\n")

    # Register API blueprints
    app.register_blueprint(leads_bp)

    @app.route("/")
    def index():
        return jsonify({
            "message": "Karttik AI Backend API is running with MySQL + Flask",
            "endpoints": [
                "/api/health",
                "/api/leads/demo",
                "/api/leads/trial",
                "/api/leads/notify",
                "/api/contact",
                "/api/admin/leads"
            ]
        })

    return app

if __name__ == "__main__":
    port = int(os.getenv("FLASK_PORT", 5000))
    app = create_app()
    print(f"\n🚀 Server running on http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)
