
import heroImage from "../assets/hero_img_animada.png";
import { TypeAnimation } from 'react-type-animation';

function Hero({refHero, callback}) {
    return (
        <section id='hero' ref={refHero} className="relative bg-neutral text-gray-300 min-h-[calc(100vh-5rem)]  items-center  overflow-hidden py-20 md:py-36">
            <div
                className=" absolute  top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div
                className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 ">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center ">

                    <div className="md:col-span-7 space-y-6    ">
                        <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-primary uppercase">
                            Hi, I'm
                        </p>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold  text-white flex flex-col gap-1">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-indigo-300 p-2">
            Santiago
          </span>
                            <span className='px-4'>Gaviria</span>
                        </h1>

                        <div className="flex items-center space-x-2 text-lg sm:text-2xl font-mono text-purple-300/90">
                            <TypeAnimation
                                sequence={[
                                    'System Administrator',
                                    1500,
                                    'Software Developer',
                                    1500,
                                    'Cybersecurity Enthusiast',
                                    2000

                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '', display: 'inline-block' }}
                                repeat={Infinity}

                            />


                        </div>

                        <p className="font-custom  font-bold sm:text-base text-gray-400  tracking-wide">
                            Engineering Social Impact
                        </p>

                        <div className="pt-4 flex flex-wrap gap-4 items-center">
                            <a  onClick={ (() => {callback('contact')})}
                               className="inline-flex items-center space-x-2 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30">
                                <span>Contacto</span>
                            </a>

                            <a href="#"
                               className="inline-flex items-center space-x-2 bg-transparent border border-purple-500/40 hover:border-purple-400 text-gray-300 hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all hover:bg-purple-900/20">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10 9 9 9 8 9"/>
                                </svg>
                                <a href={'https://drive.google.com/file/d/1RbpJGYAVcnCBS38oNvreCt2wbIMQRU3w/view?usp=drive_link'} target="_blank" rel="noopener noreferrer">

                                    Download CV</a>
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-5 flex justify-center md:justify-end relative">
                        <div
                            className="relative w-full max-w-[320px] sm:max-w-95 md:max-w-full animate-[float_4s_ease-in-out_infinite]">
                            <img
                                src={heroImage}
                                alt="Robot Ahmed Avatar 3D"
                                className="w-full rounded-2xl h-auto object-contain drop-shadow-[0_10px_20px_rgba(168,85,247,0.15)]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Hero;