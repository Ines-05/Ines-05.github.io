import Link from "next/link";
import { ArrowRight, Code2, Sparkles, FolderGit2, BookOpen, Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { getAllArticles } from "@/lib/articles";
import { ProjectCard } from "@/components/ProjectCard";
import { ArticleCard } from "@/components/ArticleCard";

export default async function HomePage() {
  const articles = await getAllArticles();
  const latestArticles = articles.slice(0, 2);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-24 py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-14 pb-4 flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for projects &amp; collaboration</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">{profile.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl">
            {profile.role}
          </p>
        </div>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          {profile.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-sky-500/20"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/articles"
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700 flex items-center gap-2"
          >
            Read Articles
            <BookOpen className="w-4 h-4" />
          </Link>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Code2 className="w-6 h-6 text-sky-400" />
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.skills.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="space-y-8 scroll-mt-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <FolderGit2 className="w-6 h-6 text-sky-400" />
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Selected client work, side projects, and open source tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-sky-400" />
              Latest Articles
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Thoughts on software engineering, performance, and best practices.
            </p>
          </div>
          <Link
            href="/articles"
            className="text-sm font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <div className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10 text-center space-y-6">
          <div className="inline-flex p-3 rounded-xl bg-sky-500/10 text-sky-400">
            <Send className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-white">Let&apos;s Build Something Together</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Whether you have an idea for a project, a question about an article, or just want to connect, my inbox is always open.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={profile.socials.email}
              className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-sky-500/20"
            >
              <Mail className="w-4 h-4" />
              Send an Email
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700 flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700 flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
