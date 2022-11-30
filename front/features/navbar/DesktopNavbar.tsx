import Image from 'next/image';
import Link from 'next/link';


const DesktopNavbar = () => {
    return (
        <div className="hidden w-full lg:block">

            <div className="w-full h-[44px] my-[24px] px-[48px] flex-center">
                <div className="flex w-full">

                    <ul className="flex">

                        <li className='nav-li pr-[34px]'>
                            <Link href="/" className="nav-text text-hover">
                                Home
                            </Link>
                        </li>

                        <li className='group relative nav-li pl-[18px] pr-[34px]'>
                            <Link href="#" className="nav-text text-hover">
                                Pages
                            </Link>
                            <Image
                                src='/arrow.png'
                                width={13}
                                height={13}
                                alt='arrow-down picture'
                            />

                            <ul className="dropdown">
                                <li className="px-[18px] h-[45px] flex items-center">
                                    <Link href="/about" className="dropdown-link ">
                                        About
                                    </Link>
                                </li>

                                <div className='w-[12px] h-[1px] ml-[18px] bg-[#444444]'></div>

                                <li className="px-[18px] h-[45px] flex items-center">
                                    <Link href="/faq" className="dropdown-link">
                                        FAQ
                                    </Link>
                                </li>

                                <div className='w-[12px] h-[1px] ml-[18px] bg-[#444444]'></div>

                                <li className="px-[18px] h-[45px] flex items-center">
                                    <Link href="/contact" className="dropdown-link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className='nav-li pl-[18px] pr-[34px]'>
                            <Link href="/articles" className='flex-center nav-text text-hover'>
                                Articles
                                <Image
                                    src='/arrow.png'
                                    width={13}
                                    height={13}
                                    alt='arrow-down picture'
                                />
                            </Link>
                        </li>
                    </ul>

                    <div className="mx-auto">
                        logo
                    </div>

                    <ul className="flex">
                        <li className='nav-li px-[18px]'>
                            <Link href="#" className="nav-text text-hover">
                                Wholesale
                            </Link>
                        </li>

                        <li className='group nav-li relative pl-[18px] pr-[34px]'>
                            <Link href="/shop" className='flex-center nav-text text-hover'>
                                Shop
                                <Image
                                    src='/arrow.png'
                                    width={13}
                                    height={13}
                                    alt='arrow-down picture'
                                />
                            </Link>

                            <ul className="dropdown">
                                <li className="px-[18px] h-[45px] flex items-center">
                                    <Link href="/cart" className="dropdown-link">
                                        Cart
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className='nav-li pl-[18px]'>
                            <Link href="#" className="nav-text text-hover">
                                Locations
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DesktopNavbar;