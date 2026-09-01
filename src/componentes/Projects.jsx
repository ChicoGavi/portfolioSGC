import useProjects from "../utils/ProjectList.js";
import { Swiper, SwiperSlide } from 'swiper/react';

// IMPORTACIONES OFICIALES DE SWIPER (Obligatorias)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// IMPORTAMOS LOS MÓDULOS DE NAVEGACIÓN
import { Navigation, Pagination } from 'swiper/modules';

function Projects({refProject}) {
    const projectsGithub = useProjects();
    const hasProjects = projectsGithub && projectsGithub.length > 0;

    return (
        <section ref={refProject} id='projects' className="bg-neutral text-white py-32 px-4 font-sans min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                {/* ENCABEZADO */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-primary">Projects</span>
                    </h2>
                    <div className="h-1 w-24 bg-linear-to-r from-primary to-tertiary mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-400 text-sm md:text-base">
                        Explore my repositories and cybersecurity tools from GitHub
                        {hasProjects ? ` (${projectsGithub.length} found)` : ''}
                    </p>
                </div>

                {!hasProjects ? (
                    <div className="text-center py-20 border-2 border-dashed border-white/10 rounded-2xl bg-white/2">
                        <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-secondary rounded-full mb-4"></div>
                        <p className="text-gray-400 text-lg font-medium">Cargando proyectos de GitHub...</p>
                    </div>
                ) : (
                    // CONTENEDOR LIMPIO: Sin botones externos ni flexbox que rompan el Swiper
                    <div className="w-full relative px-2 md:px-12">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={true} // <-- NAVEGACIÓN NATIVA DE SWIPER ACTIVADA
                            pagination={{
                                clickable: true,
                                dynamicBullets: true // Hace que los puntitos se vean mejor si son muchos
                            }}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            // Damos estilo a las flechas nativas usando variables de CSS de Swiper
                            style={{
                                "--swiper-navigation-color": "#06b6d4", // Color cyan (tu text-secondary)
                                "--swiper-pagination-color": "#06b6d4",
                                "--swiper-navigation-size": "25px",     // Tamaño de las flechas
                            }}
                            className="w-full pb-14" // pb-14 da espacio abajo para los puntitos
                        >
                            {projectsGithub.map((project) => (
                                <SwiperSlide key={project.id} className="h-auto">
                                    <a href={project.html_url} target="_blank" rel="noreferrer" className="block h-full">
                                        <div className="bg-white/2 border border-white/5 cursor-pointer rounded-2xl p-6 flex flex-col hover:border-primary transition-all duration-300 group h-full min-h-[300px]">

                                            {/* Iconos */}
                                            <div className="flex justify-between items-start mb-6">
                                                <svg className="text-tertiary w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                <span className="text-secondary hover:text-white transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </span>
                                            </div>

                                            <h3 className="text-xl font-semibold mb-3 text-white break-words">
                                                {project.name}
                                            </h3>
                                            <p className="text-gray-400 text-sm grow mb-8 line-clamp-3">
                                                {project.description || "Proyecto sin descripción en GitHub."}
                                            </p>

                                            <div className="flex items-center justify-between text-xs text-gray-400 border-t border-white/10 pt-4 mt-auto">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                                                    <span className="font-medium">{project.language || "Varios"}</span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <span className="text-yellow-400">★</span> {project.stargazers_count}
                                                </span>
                                                    <span className="flex items-center gap-1">
                                                    <span className="text-secondary">⑂</span> {project.forks_count}
                                                </span>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                <div className="mt-14 flex justify-center">
                    <a href="https://github.com/ChicoGavi?tab=repositories" target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-2 px-8 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-neutral transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export {Projects};