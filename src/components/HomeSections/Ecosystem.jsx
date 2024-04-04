import echo1 from "../../assets/Images/echo1.png"
import echo2 from "../../assets/Images/echo2.png"
import echo3 from "../../assets/Images/echo3.png"
import echo4 from "../../assets/Images/echo4.png"
import echo5 from "../../assets/Images/echo5.png"

const Ecosystem = () => {
    return (
        <>
            <div id="Ecosystem" className="flex z-10 gap-14 flex-col bg-cover w-[100vw] min-h-[130vh] bg-no-repeat   bg-left  bg-[url(/ecosystem.png)] items-center justify-center my-14">
                <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        VoIP Finance   <span className="text-primary-gradient leading-tight   " >Ecosystem  </span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">

                        The VoIP Finance ecosystem merges communication technology with the security and transparency of cutting-edge blockchain networks. It offers users innovative and annonymous calls solutions, using crypto, which enable seamless, enhanced privacy and security features.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center max-w-[1400px] gap-28 laptop:gap-10 " >


                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left   bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo1} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3>Introducing Voip Token into DeFi    </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                                Voip Finance (DeFi) platform, revolutionizing the VoIP ecosystem with its innovative token-based solution. Say     hello to anonymous calls, ensuring your peace of mind.

                            </div>
                        </div>
                    </div>

                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo2} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3>Empowering Voip  with DeFi & Web3    </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                                Voip Finance is a world where your Erc-20 DeFi/Web3 wallet seamlessly connects with a secure Voip DeFi calling system, backed by multi-layered blockchain technology.

                            </div>
                        </div>
                    </div>

                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo3} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3> Connect with Direct Inward Dial  </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                                Direct Inward Dial feature allows businesses to   receive calls from anywhere in the world, empowering them with end-to-end control over their communication channels.

                            </div>
                        </div>
                    </div>

                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo4} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3> Stake and Earn Rewards in VOIP   </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                                Users who stake VoIP tokens can participate to recieve rewards while reaping their benefits of investment, also gain access to features like make calls globally with rewards.

                            </div>
                        </div>
                    </div>

                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo5} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3>Integrating Voip with   Web3 PBX  </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                                Integrating DeFi and Web3 principles into the PBX system within the VoIP ecosystem can unlock new opportunities for innovation, efficiency, and decentralization.
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Ecosystem