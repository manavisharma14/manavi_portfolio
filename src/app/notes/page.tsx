"use client";
import Image from "next/image";
import { useState } from "react";
import WindowWrapper from "@/components/WindowWrapper";

export default function Notes() {
  const projects = [
    {
      title: "GigsWall",
      desc: `🌍 A freelance marketplace where anyone can post gigs, and students bring them to life.  
      Born as a campus-only platform, it’s now scaling into a global hub for student-powered freelance work.  
      Whether it’s design, code, or content — students take on real-world projects and build experience.`,
      highlights: [
        " Started as student-only, now open for anyone to post gigs",
        " Students apply, work, and earn through real projects",
        " Real-time chat & notifications with Firebase",
        " Clean, modern UI with Tailwind + Next.js",
        " Secure authentication with JWT & Firebase",
      ],
      img: "/icons/gigswall.png",
      link: "https://gigswall.com",
      tags: ["Next.js", "TailwindCSS", "Firebase"],
    },
    {
      title: "InnerSpace",
      desc: `💭 A cozy journaling app where your thoughts feel at home.  
      Write daily reflections, track moods, and let AI turn them into insights.  
      It’s like having a therapist… but without the awkward small talk.`,
      highlights: [
        " AI-powered weekly reflections",
        " Mood + habit tracking with visuals",
        " Gentle, pastel aesthetic",
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
        " Calendar-based habit tracker",
        " Streaks & progress visualization",
        " Minimal, green-themed design",
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
        " Built with Next.js + Tailwind",
        " Fully responsive design",
        " Clean dark/light mode toggle",
      ],
      img: "/icons/portfolio.png",
      link: "https://manavisharma.netlify.app/",
      tags: ["Next.js", "TailwindCSS"],
    },
    {
      title: "ManaviWrites",
      desc: `✍️ My personal blog platform.  
      A space to share ideas on tech, creativity, and life — built with performance and readability in mind.`,
      highlights: [
        " Clean, minimal blog UI",
        " Fast, SEO-friendly setup",
        " Writing-focused design with Markdown support",
      ],
      img: "/icons/manaviwrites.png",
      link: "https://manaviwrites.com",
      tags: ["Next.js", "MDX", "TailwindCSS"],
    },
    {
      title: "PureLeaf",
      desc: `🌿 A skincare brand landing page.  
      Focused on clean, natural design with a modern hero section showcasing botanical skincare products.`,
      highlights: [
        " Minimal hero section with strong branding",
        " Full-screen background with overlay",
        " Fast, responsive layout built with Next.js",
      ],
      img: "/icons/pureleaf.png",
      link: "https://pureeleaf.vercel.app/",
      tags: ["Next.js", "TailwindCSS"],
    },
  ];

  const [selected, setSelected] = useState(projects[0]);

  return (
    <WindowWrapper title="📂 Projects" width="1000px" height="650px">
      <div className="flex h-full overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">My Projects</h2>
          <ul className="space-y-3">
            {projects.map((p) => (
              <li
                key={p.title}
                onClick={() => setSelected(p)}
                className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition ${
                  selected.title === p.title
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-200"
                }`}
              >
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={28}
                    height={28}
                    className="rounded cursor-pointer hover:opacity-90 transition"
                  />
                </a>
                <span className="text-sm font-medium">{p.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">{selected.title}</h1>
          <p className="text-gray-700 mb-4 whitespace-pre-line">
            {selected.desc}
          </p>

          {/* Screenshot */}
          <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-6">
            <a href={selected.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={selected.img}
                alt={selected.title}
                width={600}
                height={300}
                className="rounded-lg object-contain mx-auto cursor-pointer hover:opacity-90 transition"
              />
            </a>
          </div>

          {/* Highlights */}
          <ul className="list-disc list-inside mb-6 space-y-1 text-gray-600">
            {selected.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          {/* Footer: tags + action */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-gray-50 shadow-inner">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full 
                             bg-blue-100 text-blue-700 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Visit Project Button */}
            <a
              href={selected.link}
              target="_blank"
              className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 
                         text-white font-medium shadow-md transition"
            >
              🔗 View Project
            </a>
          </div>
        </div>
      </div>
    </WindowWrapper>
  );
}