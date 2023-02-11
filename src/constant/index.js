import {
    bitcoin,
    ether,
    tether,
    bnb,
    solana,
    xrp,
    cordona,
    ava,
    chart1,
    chart2
} from "../assets/images/index"
export const topNavPrices = [
    { id: 1, title: "تعداد:", total: "251,25" },
    { id: 2, title: "بازار:", total: "1,070,255,024,399$" },
    { id: 3, title: "24 گذشته:", total: "070,255,024,399$" },
    { id: 4, title: "امروز:", total: "54" },
    { id: 5, title: "رایج ها:", total: "بیت:41%  |  اتر: 18.1%" },
]


export const cryptoes = [
    { id: 1, title: "مجموع" },
    { id: 2, title: "ارزهای جدید" },
    { id: 3, title: "دسته بندی" },
    { id: 4, title: "لیست ها" },
    { id: 5, title: "برندگان و بازندگان" },
    { id: 6, title: "تقاضای زیاد" },
    { id: 6, title: "همه ارزها" },
    { id: 6, title: "نمودار سراسری" },
]

export const excahnge = [
    { id: 1, title: "تبادلات" },
    { id: 2, title: "تبادلات سریع" },
    { id: 3, title: "ارزهای تبادلی" },

]
export const NFT = [
    { id: 1, title: "NFT Fooler" },
    { id: 2, title: "قابل خرید" },
]

export const products = [
    { id: 1, title: "ترمینال کریپتکس " },
    { id: 2, title: " اپلیکیشن" },
    { id: 3, title: " رزومه" },
    { id: 4, title: " API" },
    { id: 5, title: " فروشگاه" },
]

export const learn = [
    { id: 1, title: "مقالات  " },
    { id: 2, title: " یادگیری" },
    { id: 3, title: " آنالیز" },
    { id: 4, title: " ویدیوها" },
    { id: 5, title: " پادکست ها" },
]


// MarketUpdate
// table

export const th = [
    { id: 1, title: "#" },
    { id: 2, title: "  " },
    { id: 3, title: " نام" },
    { id: 4, title: " آخرین قیمت" },
    { id: 5, title: "24 گذشته" },
    { id: 6, title: "ظرفیت بازار" },
    { id: 7, title: "هفته گذشته" },
]

export const tr = [
    
    { num: 1, img: bitcoin, span: "BTC",name:"بیت کوین",lastPrice:"$56,623.54",upordown:"+1.45%",marketCap:"$880,423,640,582",chart:chart1 },

    { num: 2, img: ether, span: "ETH",name:"اتریوم",lastPrice:"$56,623.54",upordown:"-5.12%",marketCap:"$880,423,640,582",chart:chart2 },

    { num: 3, img: tether, span: "USD",name:"تتر",lastPrice:"$56,623.54",upordown:"+1.45%",marketCap:"$880,423,640,582",chart:chart1 },

    { num: 4, img: bnb, span: "BNB",name:"بی ان بی",lastPrice:"$56,623.54",upordown:"-3.75%",marketCap:"$880,423,640,582",chart:chart2 },

    { num: 5, img: solana, span: "SOL",name:"سولانا",lastPrice:"$56,623.54",upordown:"+1.45%",marketCap:"$880,423,640,582",chart:chart1 },

    { num: 6, img: xrp, span: "SOL",name:"ایکس آر پی",lastPrice:"$56,623.54",upordown:"+1.45%",marketCap:"$880,423,640,582",chart:chart1 },

    { num: 7, img: cordona, span: "ADA",name:"کوردونا",lastPrice:"$56,623.54",upordown:"-5.12%",marketCap:"$880,423,640,582",chart:chart2 },

    { num: 8, img: ava, span: "AVAX",name:"آوا",lastPrice:"$56,623.54",upordown:"+1.45%",marketCap:"$880,423,640,582",chart:chart1 },


]




// Footer

export const footerItems = [
    {
        title: "محصولات",
        links: [
            {
                name: "اسپات",
                link: "https://www.cryptex.com/spot/",
            },
            {
                name: "ارزهای شگفت انگیز",
                link: "https://www.cryptex.com/wonderful-crypto/",
            },
            {
                name: "دلار",
                link: "https://www.cryptex.com/dollor/",
            },
            {
                name: "تبدیلات",
                link: "https://www.cryptex.com/exchange/",
            },
            {
                name: "پرداخت آسان",
                link: "https://www.cryptex.com/easy-pay/",
            }
        ],
    },
    {
        title: "سرویس ها",
        links: [
            {
                name: "پد امن",
                link: "https://www.cryptex.com/safe-pad/",
            },
            {
                name: "خرید ارز",
                link: "https://www.cryptex.com/buy-crypto/",
            },
            {
                name: "بازار",
                link: "https://www.cryptex.com/shopping/",
            },
            {
                name: "هوش مصنوعی کمکی",
                link: "https://www.cryptex.com/artifficial/",
            },
            {
                name: " ای پی آی ",
                link: "https://www.cryptex.com/api/",
            },
        ],
    },
    {
        title: " پشتیبانی",
        links: [
            {
                name: " یادگیری",
                link: "https://www.cryptex.com/learn/",
            },
            {
                name: " راهنمایی",
                link: "https://www.cryptex.com/guide/",
            },
            {
                name: "فیدبک",
                link: "https://www.cryptex.com/feedback/",
            },
            {
                name: "طرح سوال",
                link: "https://www.cryptex.com/get-a-request/",
            },
            {
                name: "اسناد",
                link: "https://www.cryptex.com/documention/",
            },
            {
                name: " قوانین",
                link: "https://www.cryptex.com/policy/",
            },
        ],
    },
    {
        title: " درباره ما",
        links: [
            {
                name: " درباره کریپتکس",
                link: "https://www.cryptex.com/about/",
            },
            {
                name: " بررسی اعتبار",
                link: "https://www.cryptex.com/Authenticity-Check/",
            },
            {
                name: "رزومه",
                link: "https://www.cryptex.com/career/",
            },
            {
                name: "ارتباطات",
                link: "https://www.cryptex.com/contacts/",
            },
            {
                name: "وبلاگ",
                link: "https://www.cryptex.com/blog/",
            },

        ],
    },

]
