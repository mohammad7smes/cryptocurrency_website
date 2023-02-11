import appBanner from "../assets/images/app-banner.png"
import check from "../assets/images/check.png"
import googleplay from "../assets/images/googleplay.png"
import appstore from "../assets/images/appstore.png"
const OurApp = () => {

    return (
        <section className="bg-eerieBlack_1 text-white  flex flex-col md:flex-row py-10 md:justify-around">
            <div className="my-10 mx-auto md:mx-10">
                <h1 className="text-3xl text-center md:text-start md:text-4xl">
                    سرمایه گذاری امن تر و <br /> تجربه بهتر با اپلیکشن
                </h1>
                <p className="my-5 text-xl text-gray-600">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br /> از صنعت چاپ
                </p>

                <div className="flex flex-col justify-center md:justify-start">
                    <div className="flex justify-center md:justify-start">
                        <img src={check} alt="" className="w-[35px]" />
                        <h1 className="text-xl mx-3 ">ورم ایپسوم متن ساختگی با تولید سادگی</h1>
                    </div>
                    <p className="text-justify my-7 text-sm text-gray-400 w-[60%] md:w-[100%] mx-auto ">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                </div>
                <div className="flex flex-col justify-center md:justify-start mx-auto">
                    <div className="flex justify-center md:justify-start">
                        <img src={check} alt="" className="w-[35px]" />
                        <h1 className="text-xl mx-3 ">ورم ایپسوم متن ساختگی با تولید سادگی</h1>
                    </div>
                    <p className="text-justify my-7 text-sm text-gray-400 w-[60%] md:w-[100%] mx-auto ">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                </div>
                <div className="flex flex-col md:flex-row ">
                    <div className="my-2 md:mx-2">
                        <a href="#">
                            <img src={googleplay} alt="" />
                        </a>
                    </div>
                    <div className="mt-2">
                        <a href="#">
                            <img src={appstore} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto md:mx-0">
                <img src={appBanner} alt="" className="mx-auto md:mx-0" />
            </div>
        </section>
    )
}

export default OurApp;