import Link from 'next/link';

const Cart = () => {
    return (
        <div className="max-w-[1248px] my-0 mx-auto pt-[60px]">
            <div className="px-[60px] pb-[60px]">

                <div className='text-center'>
                    <h1 className="heading">Cart</h1>
                </div>

                <div>
                    <div className="text-center mb-[120px]">
                        <p className='mb-[24px] py-[24px] text-[17px]'>
                            Your cart is currently empty
                        </p>

                        <button className='h-[44px] py-[7px] px-[38px] bg-[#242434] text-textOrange text-[14px] tracking-[2px] uppercase button-hover'>
                            <Link href="/shop">
                                Return to shop
                            </Link>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Cart;