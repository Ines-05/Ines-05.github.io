import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900/60 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:items-start items-center gap-1 text-center sm:text-left">
          <p className="text-sm text-slate-400">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Built with Next.js &amp; Tailwind CSS • Hosted on GitHub Pages
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={profile.socials.email}
            className="hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
