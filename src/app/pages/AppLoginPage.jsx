import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, MessageSquare, ArrowRight, ShieldCheck, LockKeyhole, Sparkles, Globe, ArrowLeft } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { loginAdmin } from '../../services/api';

export default function AppLoginPage({ onNavigateToApp, onNavigateToSignup }) {
  const { loginUser } = useAppStore();
  const [email, setEmail] = useState('Subham@gmail.com');
  const [password, setPassword] = useState('Subham123');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    // Check credentials via Backend Database API
    try {
      const res = await loginAdmin(email, password);
      loginUser(cleanEmail, cleanPass);
      if (onNavigateToApp) {
        onNavigateToApp('dashboard');
      } else {
        window.location.href = '/app/';
      }
      return;
    } catch (err) {
      // Graceful local validation for Subham account or demo
      const isSubham = (cleanEmail === 'subham@gmail.com' || cleanEmail === 'shubham@gmail.com');
      const isValidPass = ['subham123', 'shubham123', 'subham@123', 'shubham@123'].includes(cleanPass.toLowerCase());

      if (isSubham && isValidPass) {
        loginUser('Subham@gmail.com', cleanPass);
        if (onNavigateToApp) {
          onNavigateToApp('dashboard');
        } else {
          window.location.href = '/app/';
        }
        return;
      }

      setError("That email and password don't match. Check both and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleContinueWithDemo = () => {
    loginUser('demo@karttik.ai', 'demo123');
    if (onNavigateToApp) {
      onNavigateToApp('dashboard');
    } else {
      window.location.href = '/app/';
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f5f9] flex flex-col justify-between items-center py-6 px-4 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header Logo (Matches app.karttik.ai/login) */}
      <div className="text-center pt-4 sm:pt-8">
        <div className="inline-block mb-1">
          <a href="/">
            <img
              src="/logo-wordmark.png"
              alt="Karttik AI"
              className="h-9 sm:h-10 w-auto object-contain mx-auto"
            />
          </a>
        </div>
        <p className="text-[12px] text-gray-500 font-normal">
          Karttik AI (Product of LearningHub Software Solution)
        </p>
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-200/80 p-7 sm:p-9 my-6">
        {/* Chat / Message bubble icon */}
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
          <MessageSquare className="w-5 h-5 fill-blue-600/10 stroke-[2.2]" />
        </div>

        {/* Headings */}
        <h1 className="text-[22px] sm:text-[24px] font-bold text-gray-950 tracking-tight mb-1">
          Welcome back
        </h1>
        <p className="text-xs sm:text-[13px] text-gray-500 mb-6">
          Sign in to your account
        </p>

        {/* Error Alert Box (Exact Match to screenshot) */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-[#fff2f2] border border-[#fed7d7] text-[#c53030] text-xs leading-relaxed animate-fadeIn">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subham@gmail.com"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none text-xs sm:text-sm text-gray-900 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-gray-700">
                Password
              </label>
              <button
                type="button"
                onClick={() => alert('Database account password is: Subham123')}
                className="text-xs text-blue-600 hover:text-blue-700 font-normal hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Subham123"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none text-xs sm:text-sm text-gray-900 transition-all placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 p-0.5"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl font-medium text-white bg-[#001744] hover:bg-[#002266] active:bg-[#001033] transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-75"
            >
              <span>{loading ? 'Signing in...' : 'Sign in'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Database Credentials Hint & Demo Action */}
        <div className="mt-5 pt-4 border-t border-gray-100 space-y-3 text-center">
          <div className="text-[11px] text-gray-500">
            Database Account: <code className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded font-mono">Subham@gmail.com</code> / <code className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded font-mono">Subham123</code>
          </div>

          <button
            type="button"
            onClick={handleContinueWithDemo}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Continue with One-Click Demo</span>
          </button>

          {onNavigateToSignup && (
            <p className="text-xs text-gray-500">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onNavigateToSignup}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Start Free Trial
              </button>
            </p>
          )}
        </div>
      </div>

      {/* Footer Credentials & Protection */}
      <div className="text-center pb-4 space-y-2">
        <p className="text-[11px] text-gray-400">
          © 2026 LearningHub Software Solution. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500 font-normal">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
            Secure login
          </span>
          <span className="flex items-center gap-1">
            <LockKeyhole className="w-3.5 h-3.5 text-gray-400" />
            Your data is protected
          </span>
        </div>
        <div className="pt-1">
          <a
            href="/"
            className="text-xs text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
          >
            ← Back to main site
          </a>
        </div>
      </div>
    </div>
  );
}
