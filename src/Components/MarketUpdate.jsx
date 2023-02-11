
import { th, tr } from "../constant"

const MarketUpdate = () => {
    return (
        <section className="bg-eerieBlack_2 py-5 text-white">
            <div className="flex justify-between px-10 mt-10">
                <h1 className="text-3xl">بروزرسانی بازار</h1>
                <a href="#" className="text-blue-600 hover:text-blue-700">مشاهده همه ارزها</a>
            </div>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-7" dir="rtl">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" dir="rtl">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sm:text-lg">
                        <tr>

                            {th.map((item, index) => {
                                return (
                                    <th scope="col" class="px-6 py-3" key={index}>
                                        {item.title}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tr.map((item, index) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 md:text-xl">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.num}
                                    </th>
                                    <td class="px-2 py-4">
                                        <img src={item.img} alt="bitcoin" className="w-[20px] md:w-[25px] mx-auto items-center" />
                                        <span className="text-gray-500 font-poppins font-bold">{item.span}</span>
                                    </td>
                                    <td class="px-6 py-4">
                                        <span className="mx-auto -mt-5 -translate-y-10">{item.name}</span>
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.lastPrice}
                                    </td>
                                    <td class={`${item.upordown.includes("-") ? "text-red-700" : "text-green-700"} px-6 py-4`}>
                                        {item.upordown}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.marketCap}
                                    </td>
                                    <td class="px-6 py-4">
                                        <img src={item.chart} alt="" />
                                    </td>
                                    <td class="px-2 py-4">
                                        <button type="button" className="border border-blue-700 p-3 rounded-md hover:bg-blue-700 text-white">معامله</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>


        </section>
    )
}

export default MarketUpdate;