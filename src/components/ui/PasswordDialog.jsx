'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function PasswordDialog({ isOpen, onClose, onSuccess, projectTitle }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const correctPassword = 'postman2024'; // Simple password - you can change this

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      onSuccess();
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-slate-900">Password Required</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} className="text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
              autoFocus
            />
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>
          
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 px-6 py-2 font-sans text-sm  items-center tracking-wide bg-zinc-900 rounded hover:bg-zinc-800 text-slate-50 transition-colors w-auto"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}