import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  ShieldCheck, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Trash2, 
  Lock,
  MoreVertical
} from 'lucide-react';
import { useAppStore } from '../store/appStore';

export default function TeamPage() {
  const { workspace, currentConfig } = useAppStore();
  const [showInviteModal, setShowInviteModal] = useState(false);

  // Dynamic industry role title
  const industryRole = currentConfig?.calendarResourceLabel || 'Specialist';

  // Seed Team Members
  const [team, setTeam] = useState([
    {
      id: 'tm_1',
      name: 'Subham',
      email: 'Subham@gmail.com',
      phone: '+91 93486 33365',
      role: 'Founder & Admin',
      access: 'Super Admin',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'tm_2',
      name: 'Dr. A. Sundaram / Senior Faculty',
      email: 'sundaram.lead@clinic.com',
      phone: '+91 98421 88910',
      role: `Chief ${industryRole}`,
      access: 'Staff (Assigned only)',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 'tm_3',
      name: 'Priya Narayanan',
      email: 'priya.frontdesk@karttik.demo',
      phone: '+91 94432 11988',
      role: 'Front Desk Coordinator',
      access: 'Front Desk Operator',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    }
  ]);

  // Invite form state
  const [inviteName, setInviteName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [invitePhone, setInvitePhone] = useState('');
  const [inviteRole, setInviteRole] = useState(`Senior ${industryRole}`);
  const [inviteAccess, setInviteAccess] = useState('Staff');

  const handleInviteSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      id: `tm_${Date.now()}`,
      name: inviteName,
      email: inviteEmail,
      phone: invitePhone,
      role: inviteRole,
      access: inviteAccess,
      status: 'Invite Sent',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    };
    setTeam([...team, newMember]);
    setShowInviteModal(false);
    setInviteName('');
    setInviteEmail('');
    setInvitePhone('');
    alert(`Invite email sent to ${inviteEmail} with workspace login details!`);
  };

  const handleRemoveMember = (id) => {
    if (confirm('Are you sure you want to revoke workspace access for this member?')) {
      setTeam(team.filter(m => m.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Users className="w-5 h-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Team & Permissions</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage your staff, assign role permissions, and track active team members.
          </p>
        </div>

        <button
          onClick={() => setShowInviteModal(true)}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 flex items-center gap-1.5 shadow-sm"
        >
          <UserPlus className="w-3.5 h-3.5" /> Invite Member
        </button>
      </div>

      {/* Team Cards Table */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-[11px] font-semibold">
              <tr>
                <th className="px-5 py-3.5">Staff Member</th>
                <th className="px-5 py-3.5">Contact Details</th>
                <th className="px-5 py-3.5">Industry Role</th>
                <th className="px-5 py-3.5">Permission Preset</th>
                <th className="px-5 py-3.5 text-center">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {team.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={m.avatar}
                        alt={m.name}
                        className="w-9 h-9 rounded-full object-cover border border-gray-200"
                      />
                      <div>
                        <span className="font-bold text-gray-900">{m.name}</span>
                        {m.id === 'tm_1' && (
                          <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                            YOU
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-600">
                    <div>{m.email}</div>
                    <div className="text-[11px] text-gray-400 font-mono">{m.phone}</div>
                  </td>
                  <td className="px-5 py-3.5 font-medium text-gray-900">
                    {m.role}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                      <ShieldCheck className="w-3 h-3 text-blue-600" />
                      {m.access}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" /> {m.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    {m.id !== 'tm_1' && (
                      <button
                        onClick={() => handleRemoveMember(m.id)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                        title="Remove member"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-gray-900 text-base">Invite New Staff Member</h3>
              <button onClick={() => setShowInviteModal(false)} className="text-gray-400 hover:text-gray-600 font-bold">✕</button>
            </div>

            <form onSubmit={handleInviteSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kannan"
                  value={inviteName}
                  onChange={(e) => setInviteName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="ramesh@business.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Mobile / WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="+91 93486 33365"
                  value={invitePhone}
                  onChange={(e) => setInvitePhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Trade Role</label>
                  <input
                    type="text"
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Role Permission</label>
                  <select
                    value={inviteAccess}
                    onChange={(e) => setInviteAccess(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
                  >
                    <option>Staff (Assigned only)</option>
                    <option>Front Desk Operator</option>
                    <option>Super Admin</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t">
                <button type="button" onClick={() => setShowInviteModal(false)} className="px-4 py-2 rounded-xl text-xs text-gray-600">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">Send Workspace Invite</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

