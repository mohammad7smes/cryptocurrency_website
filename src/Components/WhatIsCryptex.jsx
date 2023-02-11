import aboutb from "../assets/images/about-banner.png";
import check from "../assets/images/check.png"
const WhatIsCryptex = () => {
    return (
        <section className="bg-eerieBlack_2 text-white  flex flex-col py-20 md:flex-row">
            <div className="mx-auto md:mx-2 md:w-[60%]">
                <img src={aboutb} alt="" className="max-w-[80%] mx-auto md:mx-2 md:my-[7rem]" />
            </div>
            <div className="mx-auto md:mx-2 my-5 md:w-[40%] md:ml-8">
                <h1 className="text-5xl text-center md:text-start">کریپتکس چیه؟</h1>
                <p className="text-justify my-7 text-md text-gray-400 w-[60%] md:w-[100%] mx-auto ">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا ب
                </p>
                <div className="flex flex-col justify-center md:justify-start">
                    <div className="flex justify-center md:justify-start">
                        <img src={check} alt="" className="w-[35px]" />
                        <h1 className="text-xl mx-3 ">ورم ایپسوم متن ساختگی با تولید سادگی</h1>
                    </div>
                    <p className="text-justify my-7 text-sm text-gray-400 w-[60%] md:w-[100%] mx-auto ">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                    </p>
                </div>
                <div className="flex flex-col justify-center md:justify-start">
                    <div className="flex justify-center md:justify-start">
                        <img src={check} alt="" className="w-[35px]" />
                        <h1 className="text-xl mx-3 ">ورم ایپسوم متن ساختگی با تولید سادگی</h1>
                    </div>
                    <p className="text-justify my-7 text-sm text-gray-400 w-[60%] md:w-[100%] mx-auto ">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                    </p>
                </div>
                <button className="md:w-[150px] bg-blue-700 rounded-lg p-3 hover:bg-blue-800 my-5 transition-all w-full">بیشتر بخوانید </button>
            </div>
        </section>
    )
}

export default WhatIsCryptex;