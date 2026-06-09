function Contact({refContact}) {
    return (
        <section ref={refContact} id="contact" className="bg-neutral py-20 px-6 text-white  md:py-36 " >

            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-400 max-w-lg mx-auto">
                    Let's talk. I'm on the lookout for my next project. If you think I'd be a good fit for your team.
                </p>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Columna Izquierda: Información de contacto */}
                <div className="space-y-4">
                    {[
                        { icon: '📧', label: 'EMAIL', value: 'san03gaviria@protonmail.com', link: 'mailto:san03gaviria@protonmail.com' },
                        { icon: 'in', label: 'LINKEDIN', value: 'Santiago Gaviria', link: 'https://www.linkedin.com/in/santiago-gaviria-c/' },
                        { icon: '📍', label: 'LOCATION', value: 'Pereira, Colombia', link: 'https://www.google.com/maps/place/Pereira,+Risaralda,+Colombia/@4.8052107,-75.713672,13z/data=!3m1!4b1!4m6!3m5!1s0x8e388748eb56c1fd:0x95b39410f9f1dfbc!8m2!3d4.8087174!4d-75.690601!16zL20vMDVqX2tk?hl=en_GB&entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D' },
                    ].map((item, index) => (
                        <a href={item.link} target="_blank" key={index} className="bg-[#0a0a0f] cursor-pointer p-4 rounded-xl border border-gray-800 flex items-center gap-4">
                                <div className="bg-secondary/10 p-3 rounded-lg text-secondary font-bold">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 tracking-widest">{item.label}</p>
                                    <p className="text-sm font-medium">{item.value}</p>
                                </div>
                        </a>


                    ))}
                </div>

                {/* Columna Derecha: Formulario */}
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name *" className="w-full bg-[#0a0a0f] border border-gray-800 p-4 rounded-xl focus:border-secondary outline-none transition-all" />
                    <input type="email" placeholder="Email Address *" className="w-full bg-[#0a0a0f] border border-gray-800 p-4 rounded-xl focus:border-secondary outline-none transition-all" />
                    <textarea placeholder="Message *" rows="4" className="w-full bg-[#0a0a0f] border border-gray-800 p-4 rounded-xl focus:border-secondary outline-none transition-all"></textarea>

                    <button className="w-full bg-primary hover:bg-tertiary text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                        <span>Send Message</span>
                    </button>
                </form>

            </div>
        </section>
    );
}

export { Contact };