function Skills({refSkills, skills}) {
    return (
        <section ref={refSkills} id='skills' className="bg-neutral min-h-screen py-16 px-6 text-white">
            <div className="text-center mb-16 py-12">
                <h2 className="text-4xl font-bold mb-2">Skills</h2>
                <p className="text-gray-400"> {skills.length} domains</p>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                {skills.map((skill) => (
                    <div className="bg-[#0a0a0f] border border-gray-800 p-6 rounded-2xl relative overflow-hidden group hover:border-secondary transition-all">

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-secondary/10 p-2 rounded-lg text-secondary">🖥️</div>
                                <h3 className="text-xl font-semibold">{skill.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skill.tools.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-sm text-gray-300 hover:text-secondary transition-colors">
                                    {skill} </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>





        </section>

    )
}


export {Skills};