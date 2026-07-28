function Experience({refExperience, experience}) {
    return (
        <section ref={refExperience} id="experience" className="bg-neutral text-white py-32 px-4 font-sans min-h-screen">
            <div className="max-w-5xl mx-auto w-full">

                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Professional <span
                        className="text-transparent bg-clip-text bg-linear-to-r from-primary to-tertiary">Experience</span>
                    </h2>
                    <div className="h-1 w-24 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary"></div>


                    {
                        experience.map((experience) => (

                            experience.id % 2 === 1 ?

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 relative">
                                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full shadow-[0_0_12px_rgba(34,197,94,0.8)] z-10 mt-6 md:mt-0"></div>
                                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 flex justify-start md:justify-end">
                                        <div
                                            className="bg-white/2 border border-white/5 rounded-2xl p-6 relative w-full max-w-md hover:border-white/10 transition-colors">

                                            { experience.current ? <div
                                                className="absolute -top-3 right-6 bg-secondary text-neutral text-[10px] sm:text-xs font-bold px-4 py-1 rounded-full tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                                                Current
                                            </div>:
                                                <div></div>
                                            }


                                            <div className="flex items-center gap-4 mb-5 mt-2">
                                                <div
                                                    className="shrink-0 w-10 h-10 rounded-full border border-tertiary flex items-center justify-center text-secondary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.118l-12.14.921c-1.145.087-2.113-.81-2.113-1.956v-5.334a2.25 2.25 0 012.25-2.25h15.75c.915 0 1.68.618 1.889 1.458zm-15.75-9.3a2.25 2.25 0 012.25-2.25h5.25a2.25 2.25 0 012.25 2.25v2.25h-9.75v-2.25z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                                                    <p className="text-primary text-sm">{experience.company}</p>
                                                </div>
                                            </div>

                                            <div
                                                className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4 font-medium">
                                                <div className="flex items-center gap-1.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-secondary">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                                                    </svg>
                                                    <span>{experience.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-secondary">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                                    </svg>
                                                    <span>{experience.from}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {experience.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-1/2 pl-12"></div>
                                </div>
                                :

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 relative">
                                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.8)] z-10 mt-6 md:mt-0"></div>

                                    <div className="hidden md:block w-1/2 pr-12"></div>

                                    <div className="w-full md:w-1/2 pl-16 md:pl-12 flex justify-start">
                                        <div
                                            className="bg-white/2 border border-white/5 rounded-2xl p-6 relative w-full max-w-md hover:border-white/10 transition-colors">

                                            { experience.current ? <div
                                                    className="absolute -top-3 right-6 bg-secondary text-neutral text-[10px] sm:text-xs font-bold px-4 py-1 rounded-full tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                                                    Current
                                                </div>:
                                                <div></div>
                                            }

                                            <div className="flex items-center gap-4 mb-5 mt-2">
                                                <div
                                                    className="flex-shrink-0 w-10 h-10 rounded-full border border-green-500 flex items-center justify-center text-green-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         stroke-width="2" stroke="currentColor" className="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.118l-12.14.921c-1.145.087-2.113-.81-2.113-1.956v-5.334a2.25 2.25 0 012.25-2.25h15.75c.915 0 1.68.618 1.889 1.458zm-15.75-9.3a2.25 2.25 0 012.25-2.25h5.25a2.25 2.25 0 012.25 2.25v2.25h-9.75v-2.25z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                                                    <p className="text-green-500 text-sm">{experience.company}</p>
                                                </div>
                                            </div>

                                            <div
                                                className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4 font-medium">
                                                <div className="flex items-center gap-1.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         stroke-width="2" stroke="currentColor" className="w-4 h-4 text-[#06B6D4]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                                                    </svg>
                                                    <span>{experience.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         stroke-width="2" stroke="currentColor" className="w-4 h-4 text-[#06B6D4]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                                    </svg>
                                                    <span>{experience.from}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {experience.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        ))

                    }





                </div>
            </div>
        </section>
    )

}

export default Experience;