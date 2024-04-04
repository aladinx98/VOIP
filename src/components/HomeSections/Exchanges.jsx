
import bitmart from "../../assets/Images/gateioLogo.svg"
import uniswap from "../../assets/Images/uniswap.png"
import mexc from "../../assets/Images/mexc.png"

const Exchanges = () => {
    return (
        <>
            <div id="exchange-main">
                <div className="relative flex flex-col  items-center gap-20 min-h-[50vh]   w-[100vw]  justify-center   px-4 pb-14 md:px-20 desktop:flex-col desktop:items-center ">
                    <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                        <h1
                            className='text-5xl uppercase  font-bold tablet:text-4xl '>
                            {/* <span className="text-primary-gradient" >Voip </span> */}
                            {/* to hits */}
                            <span className="text-primary-gradient  text-4xl " >  Coming Soon... </span>

                        </h1>

                    </div>

                    <div className=" w-fit flex flex-wrap gap-20 justify-center items-center laptop:gap-10 " >



                        <div className=" flex justify-center items-center  h-52 max-w-[332px] origin-top-left   bg-white bg-opacity-5 rounded-[40px] border-2 border-[--secondry1-color] backdrop-blur-[42px]" >
                            <div className="p-7">
                                <img src={uniswap} alt="" />
                            </div>

                        </div>
                        <div className=" flex justify-center items-center  h-52 max-w-[332px] origin-top-left   bg-white bg-opacity-5 rounded-[40px] border-2 border-[--secondry1-color] backdrop-blur-[42px]" >
                            <div className="px-10">
                                <img src={mexc} alt="" />
                            </div>

                        </div>
                        <div className=" flex justify-center items-center  h-52 max-w-[332px] origin-top-left   bg-white bg-opacity-5 rounded-[40px] border-2 border-[--secondry1-color] backdrop-blur-[42px]" >
                            <div className="p-10">
                                <img src={bitmart} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Exchanges