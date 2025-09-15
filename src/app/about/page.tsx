"use client";
import WindowWrapper from "@/components/WindowWrapper";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <WindowWrapper title="About Me">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 text-center text-gray-700">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          👩‍💻 Manavi Sharma
        </h1>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          Hi 👋 I’m <span className="font-semibold">Manavi Sharma</span>.  
          After completing my <span className="font-medium">B.Tech in Computer Science</span> at  
          <span className="font-semibold"> MIT, Manipal</span>, I’m now pursuing my  
          <span className="font-medium"> Master’s in Computer Science</span> at the  
          <span className="font-semibold"> University of Kansas</span>.
        </p>

        <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-6 text-gray-600">
          I’m passionate about building things that people actually find useful — from small tools to full projects.  
          I love working at the intersection of <b>technology</b>, <b>design</b>, and <b>creativity</b>, always experimenting with new ideas and learning by building.
        </p>

        <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-8 text-gray-600">
          Outside of coding, I share my thoughts on{" "}
          <a
            href="https://manaviwrites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            manaviwrites.com
          </a>
          , work on portfolio projects, and explore new ideas in interactive web experiences. 🚀
        </p>

        {/* Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto">
          <a
            href="https://www.linkedin.com/in/manavi-sharma-521014222/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-lg border bg-gray-50 hover:bg-gray-100 transition p-3 text-sm font-medium"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            LinkedIn
          </a>

          <a
            href="https://github.com/manavisharma14"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-lg border bg-gray-50 hover:bg-gray-100 transition p-3 text-sm font-medium"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            GitHub
          </a>

          <a
            href="mailto:manavisharma14@gmail.com"
            className="group flex items-center justify-center gap-2 rounded-lg border bg-gray-50 hover:bg-gray-100 transition p-3 text-sm font-medium"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Email
          </a>
        </div>
      </div>
    </WindowWrapper>
  );
}