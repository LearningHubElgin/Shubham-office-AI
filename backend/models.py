from datetime import datetime
from database import db

class DemoRequest(db.Model):
    __tablename__ = "demo_requests"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    industry = db.Column(db.String(100), nullable=False)
    preferred_time = db.Column(db.String(100), nullable=True)
    status = db.Column(db.String(30), default="new")  # new, contacted, completed, cancelled
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone": self.phone,
            "email": self.email,
            "industry": self.industry,
            "preferredTime": self.preferred_time,
            "status": self.status,
            "createdAt": self.created_at.isoformat() if self.created_at else None,
        }

class TrialRequest(db.Model):
    __tablename__ = "trial_requests"

    id = db.Column(db.Integer, primary_key=True)
    business_name = db.Column(db.String(150), nullable=False)
    contact_name = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(30), nullable=False)
    industry = db.Column(db.String(100), nullable=False)
    language = db.Column(db.String(60), default="Tamil + Tanglish")
    status = db.Column(db.String(30), default="pending")  # pending, active, expired
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "businessName": self.business_name,
            "contactName": self.contact_name,
            "phone": self.phone,
            "industry": self.industry,
            "language": self.language,
            "status": self.status,
            "createdAt": self.created_at.isoformat() if self.created_at else None,
        }

class WaitlistSubscriber(db.Model):
    __tablename__ = "waitlist_subscribers"

    id = db.Column(db.Integer, primary_key=True)
    business_name = db.Column(db.String(150), nullable=False)
    phone = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    trade = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(30), default="subscribed")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "businessName": self.business_name,
            "phone": self.phone,
            "email": self.email,
            "trade": self.trade,
            "status": self.status,
            "createdAt": self.created_at.isoformat() if self.created_at else None,
        }

class ContactMessage(db.Model):
    __tablename__ = "contact_messages"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(30), nullable=True)
    subject = db.Column(db.String(200), nullable=True)
    message = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(30), default="unread")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "subject": self.subject,
            "message": self.message,
            "status": self.status,
            "createdAt": self.created_at.isoformat() if self.created_at else None,
        }

