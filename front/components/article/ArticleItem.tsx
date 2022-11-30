import Link from "next/link";
import Image from "next/image"

const ArticleItem = () => {
    return (
        <div className="w-full lg:max-w-[876px] p-6">
            <div className="mb-3 text-center">
                <Link
                    href="#"
                    className="px-2 text-[13px] text-textOrange tracking-[2px] uppercase"
                >Events</Link>
                <Link
                    href="#"
                    className="px-2 text-[13px] text-textOrange tracking-[2px] uppercase"
                >Learn</Link>
            </div>

            <div className="w-full mt-[10px] mb-[36px] text-center">
                <Link
                    href="#"
                    className="text-[30px] text-hover font-['Playfair_Display']"
                >Everything you need to know about Espresso Brewing</Link>
            </div>

            <div className="mb-[50px]">
                <Link href="#">
                    <Image
                        src="/coffeebean-espresso.jpg"
                        width={950}
                        height={950}
                        alt="image"
                    />
                </Link>
                <div className=" w-[173px] h-[30px] py-1 px-3 bg-primary text-white flex-center mx-auto relative top-[-13px]">
                    <p className="text-[12px] tracking-[2px] uppercase">San Francisco</p>
                </div>
            </div>

            <div className="my-6">
                <p>
                    Medium turkish french press percolator, crema wings at carajillo mazagran.
                    Cream, at, acerbic redeye iced americano coffee white.
                    To go medium espresso latte ...
                </p>
            </div>

            <div className="max-w-[828px] md:h-[44px] mt-9 flex">
                <div className="md:w-[33.33%] flex">
                    <p className="text-[49px]">13</p>
                    <div>
                        <span className="block uppercase">November</span>
                        <span className="block">2022</span>
                    </div>
                </div>
                <div className="md:w-[33.33%] flex-center">
                    <button className="w-[173px] h-[39px] button button-hover">
                        Read More
                    </button>
                </div>
                <div className="md:w-[33.33%]">

                </div>
            </div>
        </div>
    )
}

export default ArticleItem;