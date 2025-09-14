"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Notes() {
  const router = useRouter();

  const projects = [
    {
      title: "GigsWall",
      desc: `🚀 A student-only freelance platform.  
      Imagine Fiverr, but every gig is posted by and for students.  
      Whether you’re designing, debugging, or editing resumes — this is the marketplace to trade your skills.`,
      highlights: [
        "🌍 Built a real student marketplace",
        "💬 Real-time chat with Socket.io",
        "🎨 Clean, modern UI with Tailwind",
      ],
      img: "/icons/gigswall.png",
      link: "https://gigswall.com",
      tags: ["Next.js", "TailwindCSS", "Socket.io"],
    },
    {
      title: "InnerSpace",
      desc: `💭 A cozy journaling app where your thoughts feel at home.  
      Write daily reflections, track moods, and let AI turn them into insights.  
      It’s like having a therapist… but without the awkward small talk.`,
      highlights: [
        "🤖 AI-powered weekly reflections",
        "📊 Mood + habit tracking with visuals",
        "🌸 Gentle, pastel aesthetic",
      ],
      img: "/icons/innerspace.png",
      link: "https://innerspaceai.netlify.app/",
      tags: ["FastAPI", "Postgres", "AI"],
    },
    {
      title: "HabitCheck",
      desc: `🌱 Because sticking to habits is tough — this app makes it fun.  
      Create habits, track streaks, and celebrate small wins (yes, even finishing a glass of water counts 💧).`,
      highlights: [
        "📆 Calendar-based habit tracker",
        "🔥 Streaks & progress visualization",
        "✨ Minimal, green-themed design",
      ],
      img: "/icons/habitcheck.png",
      link: "https://habitcheck.life",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio",
      desc: `🖥 My digital living room.  
      A space where I showcase my work, experiments, and ideas.  
      Always evolving — because no dev’s portfolio is ever really ‘done’.`,
      highlights: [
        "⚡ Built with Next.js + Tailwind",
        "📱 Fully responsive design",
        "🎨 Clean dark/light mode toggle",
      ],
      img: "/icons/portfolio.png",
      link: "https://manavisharma.netlify.app/",
      tags: ["Next.js", "TailwindCSS"],
    },
  ];

  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200/40 dark:bg-black/40">
      {/* macOS-style floating window */}
      <div className="bg-white dark:bg-gray-900 w-[1000px] h-[650px] rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700 flex flex-col overflow-hidden">
        
        {/* macOS Top Bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
          <div className="flex gap-2">
            {/* Red close button → goes to / */}
            <span
              onClick={() => router.push("/")}
              className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:brightness-90"
            ></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <p className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400">
            Projects
          </p>
        </div>
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-72 bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">📂 Projects</h2>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li
                  key={p.title}
                  onClick={() => setSelected(p)}
                  className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition ${
                    selected.title === p.title
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-600/40 dark:text-blue-200"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={28}
                    height={28}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">{p.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4">{selected.title}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
              {selected.desc}
            </p>

            {/* Screenshot Preview */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
              <Image
                src={selected.img}
                alt={selected.title}
                width={600}
                height={300}
                className="rounded-lg object-contain mx-auto"
              />
            </div>

            {/* Highlights */}
            <ul className="list-disc list-inside mb-6 space-y-1 text-gray-600 dark:text-gray-300">
              {selected.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {/* Buttons */}
            <a
              href={selected.link}
              target="_blank"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
            >
              🔗 Visit Project
            </a>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}