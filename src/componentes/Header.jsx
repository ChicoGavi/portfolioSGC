
function Header( { callBack } ) {
    return (
        <nav
            className="bg-[#0b0b12] text-gray-300 border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20  ">

                    <div className="shrink-0 flex items-center">
                        <a href="#" className="flex items-center space-x-2 group">
                            <div
                                className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-purple-950/30 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-purple-400 transition-colors">
                                <p className='font-bold'>SG</p>
                            </div>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8  flex-wrap overflow-hidden">
                        <div className="flex space-x-8 text-lg font-custom">
                            <a  onClick={ (() => callBack('hero')) } className=" cursor-pointer  text-white hover:text-primary transition-colors">Home</a>
                            <a onClick={(() => callBack('about'))}  className=" cursor-pointer hover:text-primary  transition-colors">About</a>
                            <a onClick={(() => callBack('projects'))}   className=" hover:text-primary cursor-pointer  transition-colors">Projects</a>
                            <a  onClick={(() => callBack('experience'))} className=" hover:text-primary cursor-pointer  transition-colors">Experience</a>
                            <a  onClick={(() => callBack('education'))} className=" hover:text-primary cursor-pointer  transition-colors">Education</a>
                            <a  onClick={(() => callBack('skills'))} className=" hover:text-primary cursor-pointer  transition-colors">Skills</a>
                            <a  onClick={(() => callBack('certs'))} className=" hover:text-primary cursor-pointer  transition-colors">Certs</a>
                            <a  onClick={(() => callBack('contact'))} className=" hover:text-primary cursor-pointer  transition-colors">Contact</a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/ChicoGavi" target='_blank' className="hover:text-white transition-colors" aria-label="GitHub">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/santiago-gaviria-c/" target='_blank' className="hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="https://drive.google.com/file/d/1RbpJGYAVcnCBS38oNvreCt2wbIMQRU3w/view?usp=drive_link" target={'_blank'}  className="hover:text-white transition-colors" aria-label="Curriculum Vitae">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10 9 9 9 8 9"/>
                                </svg>
                            </a>

                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button id="mobile-menu-button" type="button"
                                className="text-gray-400 hover:text-white focus:outline-none"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path id="hamburger-icon" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                <path id="close-icon" className="hidden" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            <div className="hidden md:hidden bg-[#0e0e18] border-b border-gray-800" id="mobile-menu">
                <div className="px-4 pt-2 pb-4 space-y-3 text-base font-medium">
                    <a  onClick={(() => callBack('hero') )}  className="block cursor-pointer text-white hover:bg-purple-950/30 px-3 py-2 rounded-md">Home</a>
                    <a  onClick={(() => callBack('about'))} className="block cursor-pointer hover:bg-purple-950/30 hover:text-white px-3 py-2 rounded-md">About</a>
                    <a  onClick={(() => callBack('projects'))} className="block cursor-pointer hover:bg-purple-950/30 hover:text-white px-3 py-2 rounded-md">Projects</a>
                    <a  onClick={(() => callBack('experience'))}  className="block cursor-pointer hover:bg-purple-950/30 hover:text-white px-3 py-2 rounded-md">Experience</a>
                    <a  onClick={(() => callBack('education'))} className="block cursor-pointer hover:bg-purple-950/30 hover:text-white px-3 py-2 rounded-md">Education</a>
                    <a  onClick={(() => callBack('skills'))} className="block cursor-pointer hover:bg-purple-950/30 hover:text-white px-3 py-2 rounded-md">Skills</a>
                    <a  onClick={(() => callBack('certs'))} className="block cursor-pointer hover:bg-purple-950/30 hover:text-white px-3 py-2 rounded-md">Certs</a>
                    <a  onClick={(() => callBack('contact'))} className="block cursor-pointer hover:bg-purple-950/30 hover:text-white px-3 py-2 rounded-md">Contact</a>

                    <div className="pt-4 border-t border-gray-800 flex space-x-6 px-3">
                        <a href="https://github.com/ChicoGavi" target='_blank' className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/santiago-gaviria-c/" target='_blank' className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Header;