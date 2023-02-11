import HeroImg from "../assets/images/hero-banner.png"
const Hero = () => {
    return(
        <section className="bg-eerieBlack_1 text-white  border-t border-gray-600 flex flex-col md:flex-row py-8">
            <div className="max-w-[100%] mt-10 mx-auto md:mx-4  md:-translate-x-24">
                <h1 className="my-5 text-4xl md:text-5xl w-[50%]">خرید و فروش ارزهای دیجیتال در کریپتکس</h1>
                <h1 className="text-xl text-gray-400 my-10"> کریپتکس راحتترین، سریعترین و امن ترین راه معاملات ارزی است</h1>
                <button className="w-[150px] bg-blue-700 rounded-lg p-3 hover:bg-blue-800 my-5 transition-all">شروع کنید</button>
            </div>
            <div className="mx-auto md:mx-2 my-4">
                <img src={HeroImg} alt="hero-banner" />
            </div>

        </section>
    )
}

export default Hero;