"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, FolderGit2, Home, Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-bold text-lg sm:text-xl tracking-tight text-white hover:text-sky-400 transition-colors flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white font-mono text-sm shadow-md">
            &lt;/&gt;
          </span>
          <span>{profile.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link href="/#projects" className="hover:text-white transition-colors flex items-center gap-1.5">
            <FolderGit2 className="w-4 h-4" />
            Projects
          </Link>
          <Link href="/articles" className="hover:text-white transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Articles
          </Link>
          <Link href="/#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            Contact
          </Link>

          <div className="h-4 w-px bg-slate-800" />

          {/* Social Links */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-4 pt-2 pb-6 flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 hover:text-white flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link
            href="/#projects"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 hover:text-white flex items-center gap-2"
          >
            <FolderGit2 className="w-4 h-4" />
            Projects
          </Link>
          <Link
            href="/articles"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 hover:text-white flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Articles
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 hover:text-white flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact
          </Link>
          <div className="pt-2 border-t border-slate-800 flex items-center gap-3 px-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-sky-400 hover:underline"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
