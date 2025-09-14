"use client";
import WindowWrapper from "@/components/WindowWrapper";

export default function About() {
  return (
    <WindowWrapper title="About Me" width="900px" height="600px">
      <div className="flex-1 overflow-y-auto p-8 text-center text-gray-700 dark:text-gray-300">
        <h1 className="text-3xl font-bold mb-4">👩‍💻 Manavi Sharma</h1>

        <p className="text-lg leading-relaxed mb-6">
          Hi 👋 I’m <span className="font-semibold">Manavi Sharma</span>.  
          After completing my <span className="font-medium">B.Tech in Computer Science</span> at  
          <span className="font-semibold"> MIT, Manipal</span>, I’m now pursuing my  
          <span className="font-medium"> Master’s in Computer Science</span> at the  
          <span className="font-semibold"> University of Kansas</span>.
        </p>

        <p className="text-md leading-relaxed mb-6 text-gray-600 dark:text-gray-400">
          I love building things at the intersection of <b>technology</b>, <b>design</b>, and <b>creativity</b>.  
          My journey has been all about <i>learning, experimenting, and sharing knowledge</i>.  
        </p>

        <p className="text-md leading-relaxed mb-8 text-gray-600 dark:text-gray-400">
          Outside of coding and research, I write blogs on <b>manaviwrites.com</b>,  
          create portfolio projects, and explore ideas in AI, design systems, and interactive web experiences. 🚀
        </p>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {[
            {
              href: "https://www.linkedin.com/in/manavi-sharma-521014222/",
              label: "LinkedIn",
              desc: "Professional profile & updates",
              icon: "💼",
            },
            {
              href: "https://manavisharma.netlify.app/",
              label: "Portfolio",
              desc: "Showcasing my projects",
              icon: "🌐",
            },
            {
              href: "https://www.manaviwrites.com/",
              label: "Blog",
              desc: "Thoughts on tech & life",
              icon: "✍️",
            },
            {
              href: "https://github.com/manavisharma14",
              label: "GitHub",
              desc: "Code, experiments & repos",
              icon: "🖥",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="p-4 rounded-lg bg-gray-100/70 dark:bg-gray-700/70 backdrop-blur 
                         hover:bg-gray-200 dark:hover:bg-gray-600 transition text-left"
            >
              {link.icon} <span className="font-medium">{link.label}</span>  
              <p className="text-sm text-gray-500 dark:text-gray-300">{link.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </WindowWrapper>
  );
}