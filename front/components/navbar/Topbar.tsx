import Image from 'next/image';

const Topbar = () => {
    return (

        <div className="h-[57px] lg:h-[42px] bg-topbarPrimary text-white">

            <div className="lg:h-[36px] lg:flex lg:justify-between lg:py-[3px] lg:px-[48px] lg:box-content">

                <div className="w-0 lg:w-[148px]"></div>

                <div className="flex items-center justify-center">
                    <p className="text-[12px] font-600 leading-[1.75em] tracking-[2px] uppercase">
                        free shipping on orders of $35+
                    </p>
                </div>

                <div className="flex items-center justify-center mt-2.5 lg:mt-0">

                    <div>
                        <ul className="flex">

                            <li className="pl-[18px]">
                                <a href='#'>
                                    <Image
                                        className="icon-hover"
                                        src='/instagram.png'
                                        width={16}
                                        height={16}
                                        alt='instagram picture'
                                    />
                                </a>
                            </li>

                            <li className="pl-[18px]">
                                <a href='#'>
                                    <Image
                                        className="icon-hover"
                                        src='/facebook.png'
                                        width={16}
                                        height={16}
                                        alt='facebook picture'
                                    />
                                </a>
                            </li>

                            <li className="pl-[18px]">
                                <a href='#'>
                                    <Image
                                        className="icon-hover"
                                        src='/twitter.png'
                                        width={16}
                                        height={16}
                                        alt='facebook picture'
                                    />
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="ml-[36px] hidden lg:block">
                        <a href='#'>
                            <Image
                                className="icon-hover"
                                src='/search.png'
                                width={17}
                                height={17}
                                alt='search picture'
                            />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Topbar;