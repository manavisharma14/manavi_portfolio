"use client";
import WindowWrapper from "@/components/WindowWrapper";

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
          I love building things at the intersection of <b>technology</b>, <b>design</b>, and <b>creativity</b>.  
          My journey has been all about <i>learning, experimenting, and sharing knowledge</i>.  
        </p>

        <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-8 text-gray-600">
          Outside of coding and research, I write blogs on{" "}
          <a
            href="https://manaviwrites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            manaviwrites.com
          </a>, create portfolio projects, and explore ideas in AI, design systems, and interactive web experiences. 🚀
        </p>

        {/* Grid for future links or buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {/* Example: */}
          {/* <a className="p-3 rounded-lg border bg-gray-50 hover:bg-gray-100 transition text-sm font-medium">
            📄 Resume
          </a>
          <a className="p-3 rounded-lg border bg-gray-50 hover:bg-gray-100 transition text-sm font-medium">
            💼 LinkedIn
          </a> */}
        </div>
      </div>
    </WindowWrapper>
  );
}