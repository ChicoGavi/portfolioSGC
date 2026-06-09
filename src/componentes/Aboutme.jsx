
function Aboutme({ref}){
        return (
            <section  id='about' ref={ref} className="bg-neutral text-gray-300 py-32 px-6 sm:px-12 lg:px-24 font-sans min-h-screen flex items-center ">
                <div  className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div  className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-linear-to-r from-primary via-tertiary to-secondary pb-2">
                            About Me
                        </h2>

                        <p className="text-lg leading-relaxed">
                            I’m a Systems Administration student and Full Stack Developer who is aspiring to be a Cybersecurity Professional
                            who loves building resilient defenses and scaling technological innovation.
                            <br/>
                            Over time, I’ve explored<span className="font-semibold text-white"> full-stack development </span>
                            and technical leadership through <span className="font-semibold text-white">founding Vértice</span>.
                            and found my passion in vulnerability analysis and the strategic vision of the Purple Team space.
                        </p>

                        <p className="text-lg leading-relaxed">
                            I’m proficient in <span className="text-secondary font-semibold">JavaScript, Rust, Java, SQL, Python, Linux and networking (Cisco IOS) </span>.
                            And I enjoy working at the intersection of software engineering, systems administration, and IT infrastructure.
                        </p>

                        <p className="text-lg leading-relaxed">
                            My key areas of interest include  <span className="text-primary font-semibold">Offensive Security, Server Administration and
                    Integrating Software development with tactical Purple Team Operations</span>,
                            alongside my passion for strengthening the LATAM tech ecosystem through community building.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Whenever possible, I love building threat simulations, secure architectures and modern web ecosystems, ensuring that projects align with comprehensive
                            security frameworks, regulatory compliance, and global industry standards.
                        </p>
                    </div>

                    <div
                        className="w-full rounded-xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.15)] border border-gray-800 bg-[#0a0a0a]">

                        <div className="flex items-center px-4 py-3 bg-[#111111] border-b border-gray-800">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                            </div>
                            <div className="mx-auto text-xs text-gray-500 font-mono tracking-widest">
                                bash - SG@portfolio
                            </div>
                        </div>

                        <div className="p-6 font-mono text-sm md:text-base space-y-4">
                            <div className="flex">
                                <span className="text-secondary font-bold pr-2">➜</span>
                                <span className="text-primary font-bold pr-2">~</span>
                                <span className="text-gray-200">./initialize_profile.sh</span>
                            </div>

                            <div className="text-gray-400 pl-4 space-y-1">
                                <p className='text-primary font-bold'> const santiagoGaviria = <span className='text-secondary font-semibold'>{'{'}</span>  </p>
                                <p className='pl-4'> role: <span className='text-primary '> 'Software Engineer' </span> </p>
                                <p className='pl-4'> location: <span className='text-primary '> 'Pereira, Colombia' </span> </p>
                                <p className='pl-4'> focus: <span className='text-primary '> ['Cybersecurity', 'Development', 'IT'] </span> </p>
                                <p className='pl-4'> languages: <span className='text-primary '> ['Spanish', 'English'] </span> </p>
                                <p className="text-secondary font-semibold"> {'}'}</p>
                            </div>


                        </div>

                    </div>

                </div>
            </section>
        )
}

export {Aboutme};