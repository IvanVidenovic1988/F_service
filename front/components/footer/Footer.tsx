import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <div className="md:h-[245px] w-full bg-primary">

                <div className="md:max-w-[1248px] md:h-[245px] mx-auto my-0 py-[24px] block">
                    <div className="md:flex">

                        <div className="footer-nav h-[150px] md:mr-[12px]">
                            <h2 className="footer-nav-heading">
                                About
                            </h2>
                            <div>
                                <ul>
                                    <li className="footer-nav-li text-hover">The Company</li>
                                    <li className="footer-nav-li text-hover">FAQ</li>
                                    <li className="footer-nav-li text-hover">Privacy Policy</li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-nav h-[150px] md:mx-[12px]">
                            <h2 className="footer-nav-heading">
                                Locations
                            </h2>
                            <div>
                                <ul>
                                    <li className="footer-nav-li text-hover">Novi Sad</li>
                                    <li className="footer-nav-li text-hover">Beograd</li>
                                    <li className="footer-nav-li text-hover">San Francisco</li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-nav md:h-[150px] md:ml-[12px] ">
                            <h2 className="footer-nav-heading">
                                Follow Allong
                            </h2>
                            <div className="flex justify-center text-center">

                                <ul className="flex content-center">
                                    <li className="px-[12px] mt-[16px]">
                                        <a href='#'>
                                            <Image
                                                className="icon-hover"
                                                src='/instagram.png' width={22} height={22}
                                                alt='instagram picture'
                                            />
                                        </a>
                                    </li>

                                    <li className="px-[12px] mt-[16px]">
                                        <a href='#'>
                                            <Image
                                                className="icon-hover"
                                                src='/facebook.png' width={22} height={22}
                                                alt='facebook picture'
                                            />
                                        </a>
                                    </li>

                                    <li className="px-[12px] mt-[16px]">
                                        <a href='#'>
                                            <Image
                                                className="icon-hover"
                                                src='/twitter.png' width={22} height={22}
                                                alt='facebook picture'
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="h-[180px] md:h-[88px] w-full bg-primary">
                <div className="md:h-[40px] md:flex justify-between items-end box-content py-[24px]">

                    <div className="footer-bottom-text-container md:mr-[12px] lg:ml-[60px] md:text-left">
                        <p className="footer-bottom-text">
                            © 2020 Amaya. All Rights Reserved
                        </p>
                    </div>
                    <div className="footer-bottom-text-container md:mx-[12px] py-[24px] md:py-0">
                        <p className="footer-bottom-text">
                            Logo
                        </p>
                    </div>
                    <div className="footer-bottom-text-container md:ml-[12px] lg:mr-[60px] md:text-right">
                        <p className="footer-bottom-text">
                            Because We Love Cofee
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;