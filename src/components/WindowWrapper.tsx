// WindowWrapper.tsx
"use client";
import { useRouter } from "next/navigation";
import Draggable from "react-draggable";
import { ReactNode, useRef } from "react";

export default function WindowWrapper({
  title,
  children,
  width = "700px",
  height = "auto",
  variant = "default",
  className = "",
}: {
  title: string;
  children: ReactNode;
  width?: string;
  height?: string;
  variant?: "default" | "terminal";
  className?: string;
}) {
  const router = useRouter();
  const nodeRef = useRef<HTMLDivElement>(null);

  const isTerminal = variant === "terminal";

  return (
    <div className="h-screen w-screen bg-gray-200/40 dark:bg-black/40 flex items-center justify-center">
      <Draggable handle=".window-toolbar" nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          className={`rounded-xl shadow-2xl border overflow-hidden 
            ${isTerminal 
              ? "bg-[#2b2b2b]/80 backdrop-blur-md border-gray-700 text-gray-100 font-mono" 
              : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-gray-300 dark:border-gray-700"
            }
            w-[95%] sm:w-[90%] md:w-[750px] lg:w-[900px]
            h-[75vh] sm:h-[80vh] md:h-[600px]
            ${className}
          `}
          style={{ maxWidth: width, maxHeight: height }}
        >
          {/* Toolbar */}
          <div
            className={`window-toolbar flex items-center px-4 py-2 border-b cursor-move
              ${isTerminal 
                ? "bg-[#1e1e1e]/80 border-gray-700 text-sm text-gray-300"
                : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300"
              }`}
          >
            <div className="flex gap-2">
              <button
                onClick={() => router.push("/")}
                className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition"
              />
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="flex-1 text-center truncate">{title}</div>
          </div>

          {/* Content */}
          <div className="p-4 h-[calc(100%-2.5rem)] overflow-y-auto">{children}</div>
        </div>
      </Draggable>
    </div>
  );
}