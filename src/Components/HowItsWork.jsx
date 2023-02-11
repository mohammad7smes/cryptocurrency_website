import ins1 from "../assets/images/instruction-1.png"
import ins2 from "../assets/images/instruction-2.png"
import ins3 from "../assets/images/instruction-3.png"
import ins4 from "../assets/images/instruction-4.png"
import connectLine from "../assets/images/connect-line.png"


const HowItsWork = ()=>{
    return(
        <section className="bg-eerieBlack_1 text-white  flex flex-col py-8">
            <div className="mx-auto mt-6">
                <h1 className="text-3xl md:text-4xl">کریپتکس چگونه کار می کند؟</h1>
                <p className="text-center w-[350px] my-6 text-gray-500 text-xl">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            </div>
            <div className="flex flex-col mx-auto text-center lg:flex-row my-7">
                <div className="lg:mx-3">
                    <img src={ins1} alt="" className="mx-auto" />
                    <span className="text-sm text-gray-500 text-center">مرحله اول</span>
                    <p className="text-center w-[250px] my-6 text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                </div>
                <div className="hidden lg:block mt-12">
                    <img src={connectLine} alt="" />
                </div>
                <div className="lg:mx-3">
                    <img src={ins2} alt="" className="mx-auto" />
                    <span className="text-sm text-gray-500 text-center">مرحله دوم</span>
                    <p className="text-center w-[250px] my-6 text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                </div>
                <div className="hidden lg:block mt-12">
                    <img src={connectLine} alt="" />
                </div>
                <div className="lg:mx-3">
                    <img src={ins3} alt="" className="mx-auto" />
                    <span className="text-sm text-gray-500 text-center">مرحله سوم</span>
                    <p className="text-center w-[250px] my-6 text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                </div>
                <div className="hidden lg:block mt-12">
                    <img src={connectLine} alt="" />
                </div>
                <div className="lg:mx-3">
                    <img src={ins4} alt="" className="mx-auto" />
                    <span className="text-sm text-gray-500 text-center">مرحله چهارم</span>
                    <p className="text-center w-[250px] my-6 text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                </div>
            </div>
        </section>
    )
}

export default HowItsWork;