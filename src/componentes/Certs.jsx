function Certs({refCerts}) {
    return (
        <section ref={refCerts} id="certs" className="bg-neutral py-16 px-6 text-white">
            <div className="text-center mb-12 py-12">
                <h2 className="text-4xl font-bold">Certifications & <span className="text-primary">Credentials</span></h2>
                <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Contenedor del Slider */}
            <div className="max-w-6xl mx-auto flex  items-center justify-center gap-4">

                <button className="text-secondary hover:text-tertiary text-4xl font-bold p-2  md:block">{"<"}</button>

                <div className="grid grid-cols-3 grid-rows-1 gap-6 w-full">
                    <div className="bg-[#0a0a0f] border border-gray-800 p-8 rounded-2xl text-center transition-all hover:border-primary">
                        <div className="inline-block px-3 py-1 bg-primary/10 border border-primary rounded-full text-primary text-[10px] font-bold uppercase mb-6 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                            In Progress</div>
                        <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center border border-gray-800"><span className="text-3xl">🛡️</span></div>
                        <h3 className="font-semibold text-lg mb-1">OSCP</h3>
                        <p className="text-sm text-gray-400 mb-4">(Offensive Security Certified Professional)</p>
                        <p className="text-secondary text-sm mb-6">Offensive Security</p>
                        <div className="text-gray-500 text-xs flex justify-center items-center gap-2"><span>📅 In progress</span></div>
                    </div>


                    <div className="bg-[#0a0a0f] border border-gray-800 p-8 rounded-2xl text-center transition-all hover:border-tertiary">
                        <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary rounded-full text-secondary text-[10px] font-bold uppercase mb-6 shadow-[0_0_10px_rgba(6,182,212,0.3)]">In Progress</div>
                        <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center border border-gray-800"><span className="text-3xl">💻</span></div>
                        <h3 className="font-semibold text-lg mb-1">CPTS</h3>
                        <p className="text-sm text-gray-400 mb-4">(Certified Penetration Testing Specialist)</p>
                        <p className="text-secondary text-sm mb-6">Hack The Box</p>
                        <div className="text-gray-500 text-xs flex justify-center items-center gap-2"><span>📅 In progress</span></div>
                    </div>


                    <div className="bg-[#0a0a0f] border border-gray-800 p-8 rounded-2xl text-center transition-all hover:border-tertiary">
                        <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary rounded-full text-secondary text-[10px] font-bold uppercase mb-6 shadow-[0_0_10px_rgba(6,182,212,0.3)]">In Progress</div>
                        <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center border border-gray-800"><span className="text-3xl">🔍</span></div>
                        <h3 className="font-semibold text-lg mb-1">CHFI</h3>
                        <p className="text-sm text-gray-400 mb-4">(Computer Hacking Forensic Investigator)</p>
                        <p className="text-secondary text-sm mb-6">EC-Council</p>
                        <div className="text-gray-500 text-xs flex justify-center items-center gap-2"><span>📅 In progress</span></div>
                    </div>
                </div>


                <button className="text-secondary hover:text-tertiary text-4xl font-bold p-2  md:block">{">"}</button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <div className="w-6 h-2 rounded-full bg-secondary"></div>
            </div>
        </section>
    )
}

export { Certs };