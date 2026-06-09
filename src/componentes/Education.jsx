function Education({ refEducation, study }) {
    return (
        <section ref={refEducation} id="education" className=" flex flex-col justify-center bg-neutral min-h-screen py-16 px-6">
            <div className="text-center mb-12 py-8">
                <h2 className="text-3xl md:text-4xl text-white font-bold tracking-wide">
                    Education & <span className="text-primary">Training</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {
                    study.map((study) => (
                        <div className="bg-[#0d0d12] border border-gray-800 p-6 rounded-2xl relative transition-all duration-300 hover:border-tertiary">
                            {study.current?<div className="absolute top-4 right-4 bg-secondary text-neutral text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Current
                            </div>: <div></div> }



                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 flex items-center justify-center border border-secondary rounded-full mb-4">
                                    <span className="text-secondary text-xl">🎓</span>
                                </div>

                                <h3 className="text-white font-medium mb-1">{study.title}</h3>
                                <p className="text-secondary text-sm mb-6">{study.description}</p>

                                <div className="text-gray-400 text-sm space-y-2">
                                    <p> <b>Date:</b> {study.date}</p>
                                    <p> <b>From: </b> {study.from} </p>
                                </div>
                            </div>
                        </div>

                    ))
                }

                {/* Replicar este bloque segun la cantidad de tarjetas que esten en el array de objetos o API.*/}

            </div>




        </section>

    )
}


export {Education}