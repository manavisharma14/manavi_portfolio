"use client";
import { useState } from "react";

export default function Mail() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000); // reset after 3s
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200/40 dark:bg-black/40">
      {/* Floating macOS-style window */}
      <div className="backdrop-blur-lg bg-white/40 dark:bg-gray-800/30 
                      border border-white/20 dark:border-gray-700/40
                      shadow-2xl rounded-2xl w-full max-w-2xl overflow-hidden">
        
        {/* macOS Top Bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-300/30 dark:border-gray-700/40 bg-gray-100/50 dark:bg-gray-800/50">
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <p className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400">
            ✉️ Contact Me
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          {sent ? (
            <div className="p-4 mb-6 rounded-md bg-green-100 text-green-800 dark:bg-green-800/40 dark:text-green-200 text-center">
              ✅ Message sent (demo)
            </div>
          ) : null}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                From
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-md border border-gray-300/40 dark:border-gray-600/40 
                           p-2 bg-white/50 dark:bg-gray-700/50
                           text-gray-900 dark:text-gray-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500/70
                           transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md border border-gray-300/40 dark:border-gray-600/40 
                           p-2 bg-white/50 dark:bg-gray-700/50
                           text-gray-900 dark:text-gray-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500/70
                           transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-md border border-gray-300/40 dark:border-gray-600/40 
                           p-2 bg-white/50 dark:bg-gray-700/50
                           text-gray-900 dark:text-gray-200
                           focus:outline-none focus:ring-2 focus:ring-blue-500/70
                           transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 rounded-md bg-blue-600/80 hover:bg-blue-600 
                         text-white font-medium shadow-md backdrop-blur-sm transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}