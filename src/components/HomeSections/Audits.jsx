
import audit1 from "../../assets/Images/audit1.png"
import audit2 from "../../assets/Images/audit2.png"
import audit3 from "../../assets/Images/audit3.png"

const Audits = () => {
    return (
        <>
            <div id="audit-main" className=" py-20">
                <div className="relative flex flex-col  items-center gap-20 min-h-[20vh]   w-[100vw]  justify-center   px-4    md:px-20 desktop:flex-col desktop:items-center ">
                    {/* <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                        <h1
                            className='text-5xl  font-bold tablet:text-4xl '>
                            <span className="text-primary-gradient" >Voip </span>
                            Set To Launch On
                            <span className="text-primary-gradient" > Multiple Exchanges </span>

                        </h1>

                    </div> */}

                    <div className=" w-[100vw] flex flex-wrap gap-5 justify-center items-center laptop:gap-10 px-5 " >


                        <div className=" flex justify-center items-center  min-h-52 max-w-[450px] origin-top-left   bg-white bg-opacity-5 rounded-[40px] border-2 border-[--secondry1-color] backdrop-blur-[42px] p-5 phone:p-2 " >
                            <div className="p-1 flex gap-5 phone:flex-col-reverse phone:justify-center phone:items-center ">

                                <div className=" flex flex-col gap-5">
                                    <h1 className=" text-2xl  phone:text-center font-medium  ">Secured Platform</h1>
                                    <p className=" phone:text-center  text-sm font-thin w-auto  pr-[0.5vw] " >Our platform is built on cutting-edge blockchain technology, ensuring end-to-end encryption and data protection.</p>
                                </div>
                                <div className=" w-[80%] flex items-center justify-center " >
                                    <div className=" phone:w-[70%]  ">
                                        <img src={audit1} className=" h-full w-full " alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" flex justify-center items-center  min-h-52 max-w-[450px] origin-top-left   bg-white bg-opacity-5 rounded-[40px] border-2 border-[--secondry1-color] backdrop-blur-[42px] p-5 phone:p-2 " >
                            <div className="p-1 flex gap-5 phone:flex-col-reverse phone:justify-center phone:items-center ">

                                <div className=" flex flex-col gap-5">
                                    <h1 className=" text-2xl  phone:text-center font-medium  ">Solid Proof KYC </h1>
                                    <p className=" phone:text-center  text-sm font-thin w-auto  pr-[0.5vw] " >We prioritize transparency, trust, and regulatory compliance. That’s why our KYC process is backed by Solid Proof.</p>
                                </div>
                                <div className=" w-[70%] flex items-center justify-center " >
                                    <div className=" phone:w-[50%]  ">
                                        <img src={audit2} className=" h-full w-full " alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" flex justify-center items-center  min-h-52 max-w-[450px] origin-top-left   bg-white bg-opacity-5 rounded-[40px] border-2 border-[--secondry1-color] backdrop-blur-[42px] p-5 phone:p-2 " >
                            <div className="p-1 flex gap-5 phone:flex-col-reverse phone:justify-center phone:items-center ">

                                <div className=" flex flex-col gap-5">
                                    <h1 className=" text-2xl  phone:text-center font-medium  ">Audited by Coinsult </h1>
                                    <p className=" phone:text-center  text-sm font-thin w-auto  pr-[0.5vw] " >
                                        {"We've"} partnered with Coinsult for rigorous audits of our smart contracts and platform infrastructure.</p>
                                </div>
                                <div className=" w-[80%] flex items-center justify-center " >
                                    <div className=" phone:w-[50%]  ">
                                        <img src={audit3} className=" h-full w-full " alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default Audits