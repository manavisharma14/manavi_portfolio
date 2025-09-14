"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Draggable from "react-draggable";

export default function Trash() {
  const router = useRouter();
  const nodeRef = useRef<HTMLDivElement>(null); // 👈 create a ref

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200/40 dark:bg-black/40">
      <Draggable handle=".window-toolbar" nodeRef={nodeRef}>
        <div
          ref={nodeRef} // 👈 attach it here
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl w-[600px] rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700 overflow-hidden absolute"
        >
          {/* Toolbar (drag handle) */}
          <div className="window-toolbar h-10 bg-gray-100 dark:bg-gray-800 flex items-center px-4 border-b border-gray-300 dark:border-gray-700 cursor-move">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              🗑 Trash
            </span>
          </div>

          {/* Content */}
          <div className="p-10 text-center">
            <h1 className="text-3xl font-bold mb-4">404 — You found the Trash!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Looks like this page doesn’t exist anymore...  
              (or maybe it was thrown away 👀)
            </p>
            <button
              onClick={() => router.push("/")}
              className="px-6 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-400 transition"
            >
              ⬅ Back to Desktop
            </button>
          </div>
        </div>
      </Draggable>
    </div>
  );
}