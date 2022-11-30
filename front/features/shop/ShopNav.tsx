import Link from "next/link";

const ShopNav = () => {
    return (
        <div className="h-[43px] mb-[24px] flex-center-between">

            <div className="hidden md:block">
                <ul className='flex'>
                    <li className="product-categories-li">
                        <Link href="#">
                            Shop all
                        </Link>
                    </li>
                    <li className="product-categories-li">
                        <Link href="#">
                            Coffee
                        </Link>
                    </li>
                    <li className="product-categories-li">
                        <Link href="#">
                            Cold Brew
                        </Link>
                    </li>
                    <li className="product-categories-li">
                        <Link href="#">
                            Decaf
                        </Link>
                    </li>
                    <li className="product-categories-li">
                        <Link href="#">
                            Merchandise
                        </Link>
                    </li>

                </ul>
            </div>

            <div className="w-full md:w-auto">
                <select className="w-full md:w-[240px] h-auto text-[0.8em] font-semibold leading-[1.5em]">
                    <option value="menu_order">Default Sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="latest">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">Sort by price: high to low</option>
                </select>
            </div>

        </div>
    )
}

export default ShopNav;