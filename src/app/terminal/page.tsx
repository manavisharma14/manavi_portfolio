"use client";
import { useState, useRef, useEffect } from "react";
import WindowWrapper from "@/components/WindowWrapper";

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    "Last login: Sat Sep 13 12:04:45 on console",
    "Type `help` to see available commands.",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string | string[]> = {
    help: [
      "Available commands:",
      "whoami       → About me",
      "education    → My academic background",
      "projects     → Highlighted work",
      "links        → My profiles",
      "date         → Show current date/time",
      "echo <msg>   → Repeat your message",
      "fortune      → Random fun quote",
      "clear        → Clear screen",
    ],
    whoami: "👩‍💻 Manavi Sharma — CS @ KU | Ex-MIT Manipal | Builder & Writer",
    education: [
      "🎓 B.Tech Computer Science — MIT Manipal",
      "🎓 Master's in Computer Science — University of Kansas",
      "🎮 Expected Graduation: 2026",
    ],
    projects: [
      "🚀 GigsWall — Student freelance platform",
      "🧠 InnerSpace — Self-care journaling app",
      "📊 HabitCheck — Habit tracker",
      "🌐 Portfolio — Personal website",
    ],
    links: [
      "🔗 LinkedIn: linkedin.com/in/manavi-sharma-521014222",
      "🌐 Portfolio: manavisharma.netlify.app",
      "✍️ Blog: manaviwrites.com",
      "🐙 GitHub: github.com/manavisharma14",
    ],
    fortune: [
      "✨ Keep shipping, keep learning.",
      "🚀 The best projects start small.",
      "💡 Curiosity is your greatest tool.",
      "🌱 Code. Reflect. Grow.",
    ],
  };

  const promptLine = (cmd: string) =>
    `<span class="text-green-400">manavisharma</span>@<span class="text-cyan-400">MacBook-Air</span> <span class="text-blue-400">~</span> % ${cmd}`;

  const handleCommand = (cmd: string) => {
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "date") {
      setHistory((prev) => [...prev, promptLine(cmd), new Date().toString()]);
      return;
    }
    if (cmd.startsWith("echo ")) {
      setHistory((prev) => [...prev, promptLine(cmd), cmd.slice(5)]);
      return;
    }
    if (cmd === "fortune") {
      const quotes = commands.fortune as string[];
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setHistory((prev) => [...prev, promptLine(cmd), random]);
      return;
    }
    if (commands[cmd]) {
      setHistory((prev) => [
        ...prev,
        promptLine(cmd),
        ...(Array.isArray(commands[cmd]) ? commands[cmd] : [commands[cmd]]),
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        promptLine(cmd),
        `zsh: command not found: ${cmd}`,
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input.trim());
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
<WindowWrapper title="Terminal — zsh" width="700px" height="500px" variant="terminal">
  {/* Just the terminal body now */}
  <div className="flex flex-col h-full text-sm">
    {history.map((line, i) => (
      <p
        key={i}
        className="whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: line }}
      />
    ))}

    <form onSubmit={handleSubmit} className="flex mt-2">
      <span>
        <span className="text-green-400">manavisharma</span>@
        <span className="text-cyan-400">MacBook-Air</span>{" "}
        <span className="text-blue-400">~</span> %
      </span>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-transparent outline-none flex-1 caret-gray-100 ml-2"
        autoFocus
      />
      <span className="animate-blink">▮</span>
    </form>
    <div ref={bottomRef} />
  </div>
</WindowWrapper>
  );
}