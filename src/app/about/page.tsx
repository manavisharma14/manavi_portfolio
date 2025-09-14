"use client";
import WindowWrapper from "@/components/WindowWrapper";

export default function About() {
  return (
    <WindowWrapper title="About Me">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 text-center text-gray-700 dark:text-gray-300">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">👩‍💻 Manavi Sharma</h1>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          Hi 👋 I’m <span className="font-semibold">Manavi Sharma</span>.  
          After completing my <span className="font-medium">B.Tech in Computer Science</span> at  
          <span className="font-semibold"> MIT, Manipal</span>, I’m now pursuing my  
          <span className="font-medium"> Master’s in Computer Science</span> at the  
          <span className="font-semibold"> University of Kansas</span>.
        </p>

        <p className="text-xs sm:text-sm md:text-md leading-relaxed mb-6 text-gray-600 dark:text-gray-400">
          I love building things at the intersection of <b>technology</b>, <b>design</b>, and <b>creativity</b>.  
          My journey has been all about <i>learning, experimenting, and sharing knowledge</i>.  
        </p>

        <p className="text-xs sm:text-sm md:text-md leading-relaxed mb-8 text-gray-600 dark:text-gray-400">
          Outside of coding and research, I write blogs on <b>manaviwrites.com</b>,  
          create portfolio projects, and explore ideas in AI, design systems, and interactive web experiences. 🚀
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {/* links remain same */}
        </div>
      </div>
    </WindowWrapper>
  );
}