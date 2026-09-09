import React, { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const GITHUB_USER = "oliveira533";
const EXCLUDED_REPOS = new Set([
  GITHUB_USER,
  "portfolio",
  "cv",
  "cursos-e-material",
]);

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30`,
          {
            headers: { Accept: "application/vnd.github+json" },
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Não foi possível carregar os projetos do GitHub.");
        }

        const repos = await response.json();

        const mapped = repos
          .filter(
            (repo) =>
              !repo.archived &&
              !EXCLUDED_REPOS.has(repo.name) &&
              (!repo.fork || Boolean(repo.description))
          )
          .slice(0, 8)
          .map((repo) => {
            const tech = [
              ...(repo.topics || []),
              ...(repo.language ? [repo.language] : []),
            ].filter((item, index, list) => list.indexOf(item) === index);

            return {
              title: repo.name.replace(/[-_]/g, " "),
              description:
                repo.description ||
                "Projeto disponível no GitHub. Confira o repositório para mais detalhes.",
              link: repo.homepage || repo.html_url,
              github: repo.html_url,
              tech: tech.length > 0 ? tech : ["GitHub"],
            };
          });

        setProjects(mapped);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Erro ao buscar projetos.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="projects"
      className="bg-gradient-to-bl from-gray-800 via-gray-900 to-blue-900 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-2xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 
            bg-clip-text text-transparent"
        >
          Projetos
        </h2>

        {loading && (
          <p className="text-center text-gray-300 text-sm sm:text-base">
            Carregando projetos do GitHub...
          </p>
        )}

        {error && (
          <p className="text-center text-red-400 text-sm sm:text-base">{error}</p>
        )}

        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-gray-300 text-sm sm:text-base">
            Nenhum projeto encontrado.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.github}
              className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-green-500/50 
                transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
            >
              <div className="space-y-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white capitalize">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-[0.8rem] sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 transition-all duration-300 
                        transform hover:-translate-y-2 shadow-xl bg-green-600/20 text-green-400 
                        rounded-full text-[0.8rem] sm:text-sm border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="inline-flex items-center gap-2 bg-gradient-to-r
                       from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700
                        text-white px-6 py-3 rounded-lg transition-all duration-300 
                        transform hover:scale-105"
                  >
                    {project.link.includes("github") ? (
                      <FaGithub className="text-xl" />
                    ) : (
                      <FiExternalLink />
                    )}
                    <span className="text-[0.8rem] sm:text-sm">View Project</span>
                  </button>

                  {!project.link.includes("github") && (
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="inline-flex items-center gap-2 border border-gray-600
                        hover:border-green-500/50 text-gray-200 px-6 py-3 rounded-lg
                        transition-all duration-300 transform hover:scale-105"
                    >
                      <FaGithub className="text-xl" />
                      <span className="text-[0.8rem] sm:text-sm">GitHub</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
