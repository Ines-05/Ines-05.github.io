import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/50 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
            <Folder className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label={`GitHub repo for ${project.title}`}
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/50">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-900/60 text-sky-300 border border-slate-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
