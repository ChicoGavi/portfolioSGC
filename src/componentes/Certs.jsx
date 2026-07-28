import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

function Certs({refCerts, certs}) {
    return (
        <section ref={refCerts} id="certs" className="bg-neutral py-16 px-6 text-white">
            <div className="text-center mb-12 py-12">
                <h2 className="text-4xl font-bold">
                    Certifications & <span className="text-primary">Credentials</span>
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 h-full">

                <button className="prev-btn text-secondary hover:text-tertiary text-4xl font-bold p-2 hidden md:block cursor-pointer disabled:opacity-30">
                    {"<"}
                </button>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {certs.map((cert) => (
                        <SwiperSlide>
                            <div className="bg-[#0a0a0f] border border-gray-800 p-8 rounded-2xl flex-col-reverse py-16 text-center content-center transition-all hover:border-primary h-72 ">

                                {cert.current ?  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary rounded-full text-primary text-[10px] font-bold uppercase mb-6 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                                    In Progress
                                </div> : null }

                                <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">({cert.description})</p>
                                <p className="text-secondary text-sm mb-6">{cert.platform}</p>
                            </div>
                        </SwiperSlide>
                    ))  }

                </Swiper>

                <button className="next-btn text-secondary hover:text-tertiary text-4xl font-bold p-2 hidden md:block cursor-pointer disabled:opacity-30">
                    {">"}
                </button>

            </div>
        </section>



    )
}

export { Certs };