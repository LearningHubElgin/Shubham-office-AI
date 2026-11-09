/**
 * API service for communicating with the Flask MySQL backend.
 * Uses relative URL '/api' which Vite proxies to http://localhost:5000 in development.
 */

const API_BASE = '/api';

async function handleResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errorMsg = data.error || data.message || `Request failed with status ${response.status}`;
    throw new Error(errorMsg);
  }
  return data;
}

export async function submitDemoRequest(payload) {
  const response = await fetch(`${API_BASE}/leads/demo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
}

export async function submitTrialRequest(payload) {
  const response = await fetch(`${API_BASE}/leads/trial`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
}

export async function submitNotifySubscription(payload) {
  const response = await fetch(`${API_BASE}/leads/notify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
}

export async function submitContactMessage(payload) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
}

export async function fetchAllLeads() {
  const response = await fetch(`${API_BASE}/admin/leads`);
  return handleResponse(response);
}

export async function loginAdmin(email, password) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
}

export async function fetchWorkspaceAppData(industry = 'clinic') {
  const response = await fetch(`${API_BASE}/app/data?industry=${encodeURIComponent(industry)}`);
  return handleResponse(response);
}

export async function createCustomerAPI(customer, industry = 'clinic') {
  const response = await fetch(`${API_BASE}/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ customer, industry }),
  });
  return handleResponse(response);
}

export async function sendChatMessageAPI(convId, sender, text, channel = 'whatsapp') {
  const response = await fetch(`${API_BASE}/conversations/message`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ convId, sender, text, channel }),
  });
  return handleResponse(response);
}
