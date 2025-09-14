"use client";
import { useState } from "react";
import WindowWrapper from "@/components/WindowWrapper";

export default function Mail() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000); // reset after 3s
  };

  return (
    <WindowWrapper title="✉️ Contact Me" width="600px" height="auto">
      <div className="p-6">
        {sent && (
          <div className="p-4 mb-6 rounded-md bg-green-100 text-green-800 
                          dark:bg-green-800/40 dark:text-green-200 text-center">
            ✅ Message sent (demo)
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* From */}
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

          {/* Subject */}
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

          {/* Message */}
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

          {/* Button */}
          <button
            type="submit"
            className="w-full px-6 py-2 rounded-md bg-blue-600/80 hover:bg-blue-600 
                       text-white font-medium shadow-md backdrop-blur-sm transition"
          >
            Send
          </button>
        </form>
      </div>
    </WindowWrapper>
  );
}