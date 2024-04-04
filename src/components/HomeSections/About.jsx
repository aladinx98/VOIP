

import abt1 from "../../assets/Images/abt1.png"


const About = () => {

    return (
        <>
            {/* bg-[url('/assets/aboutbg.svg')] */}
            <div className="flex relative gap-16 phone:gap-3 flex-col items-center justify-center my-[100px] phone:my-[50px] phone:mb-[40px] ">


                <div id="blob" className=" absolute right-0 top-[10%] tablet:top-[40%]  z-0 " >
                    <svg xmlns="http://www.w3.org/2000/svg" width={836} height={987} viewBox="0 0 836 987" fill="none">
                        <g filter="url(#filter0_bdf_1020_149)">
                            <path d="M833 519.62C833 642.58 715.884 753 593.071 753C470.257 753 227 614.913 227 491.953C227 368.993 507.645 227 630.458 227C753.272 227 833 396.66 833 519.62Z" fill="#551FE5" fillOpacity="0.35" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_bdf_1020_149" x="0.699997" y="0.699997" width="1414.2" height="986.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="25.2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1020_149" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx={352} dy={4} />
                                <feGaussianBlur stdDeviation="114.95" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_1020_149" result="effect2_dropShadow_1020_149" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1020_149" result="shape" />
                                <feGaussianBlur stdDeviation="113.15" result="effect3_foregroundBlur_1020_149" />
                            </filter>
                        </defs>
                    </svg>

                </div>

                <div className=" z-10  text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        What Is <span className="text-primary-gradient    " >Voip Finance</span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        Voip Finance {"isn't"} your typical communication tool—it seamlessly merges Voice over Internet Protocol (VOIP) with blockchain technology, offering a unique approach that enables the transmission of voice communication and multimedia sessions over the internet
                    </p>
                </div>


                <div id="about-main" className=" z-10 relative flex justify-center items-center  py-8 min-h-[60vh] gap-10 w-[100vw]  overflow-hidden tablet:flex-col tablet:items-center " >




                    <div id="about-left" className=' object-cover flex justify-center items-center h-[90%] w-[40%] tablet:w-[80%] phone:w-[90%]'>
                        <div className=" w-[60%]   h-[90%]  tablet:w-[70%] tablet:phone:w-[75%] " >

                            <img
                                src={abt1}
                                className="rounded-[20px] border "
                                alt="Picture "
                            />
                        </div>
                    </div>

                    <div id="about-right" className=' h-[100%] w-[60%] flex flex-col justify-center items-center    gap-[20px]  tablet:w-[80%]'>
                        <div className='w-[100%] flex flex-col   gap-[30px]'>
                            <div className=" space-y-4 ">
                                <h3 className=' w-fit  text-primary-gradient font-bold text-5xl '>Key Features</h3>
                                {/* <h1
                                    className='text-5xl oxanium '>
                                    <span className="text-primary-gradient font-bold " >VOIP</span>  DeFi Crypto Call
                                </h1> */}
                            </div>


                            <ul

                                className='flex flex-col gap-[20px] w-[75%] tablet:w-[100%] text-[23px]  leading-tight'>
                                <li className=" font-extralight " >
                                    <span className="text-2xl font-medium "> Privacy : </span> Make secure calls to anywhere in the world anonymously and hassle free.
                                </li>
                                <li className="font-extralight  " >
                                    <span className="text-2xl font-medium "> Benefits : </span> Call Routing, Call Termination, Call Forwarding, Call Conferencing, Direct Inward dialing also.
                                </li>
                                <li className="font-extralight  " >
                                    <span className="text-2xl font-medium "> Accessibility : </span> Connect unlimited local and International with your love ones, Families or business clients using blockchain technology.
                                </li>
                                <li className="font-extralight  " >
                                    <span className="text-2xl font-medium "> Security : </span> Enjoy end-end Encrypted calls while keeping identity secure with Voip Finance DeFi and Web3 systems.
                                </li>
                                <li className="font-extralight  " >
                                    <span className="text-2xl font-medium ">Rewards :</span> Earn rewards to make calls globally. Use your rewards to make and receive calls seamlessly and save your spendings.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default About