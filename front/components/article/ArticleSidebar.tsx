import Link from "next/link";
import Image from "next/image";

const ArticleSidebar = () => {
    return (
        <div className="w-[348px] h-[420px] p-6 mb-6 border hidden lg:block">
            <div className="text-center">
                <h2 className="text-[15px] tracking-[3px] font-semibold uppercase">
                    Upcoming Event
                </h2>
            </div>
            <div className="mt-8">
                <Link href="#">
                    <Image
                        src="/coffeebean-latte.jpg"
                        width={560}
                        height={420}
                        alt="image"
                    />
                </Link>
                <div className=" w-[152px] h-[28px] py-1 px-3 bg-primary text-white flex-center mx-auto relative top-[-13px]">
                    <p className="text-[12px] tracking-[2px] uppercase">Learn Events</p>
                </div>
            </div>
            <div className="mt-1 text-center">
                <Link
                    href="#"
                    className="text-[23px] font-['Playfair_Display']"
                >Professional Latte Art Class – Advanced Training</Link>
            </div>
        </div >
    )
}

export default ArticleSidebar;