import Link from 'next/link';
import Image from 'next/image';

const ShopItem = ({ id, src, title, price }: any) => {

    return (
        <div key={id} className="group mb-[22px] md:mb-[32px]">
            <Link href={`${/shop/}${id}`}>
                <Image
                    src={`${'http://localhost:1337'}${src}`}
                    width={600}
                    height={839}
                    alt='picture'
                />
                <div className="text-center">
                    <h2 className="mt-[12px] text-[19px] leading-[1.5em] font-['Playfair_Display']">{title}</h2>
                    <div className='h-[30px] flex-center'>
                        <span className="text-[14px]">${price} -</span>
                        <span className="text-[14px]">${price}</span>
                    </div>
                </div>
            </Link>

            <div className="mt-[5px] text-center invisible group-hover:visible">
                <Link href="#" className="text-[13px] text-[#db9457] tracking-[1px] uppercase">
                    Select options
                </Link>
            </div>
        </div>
    );
}

export default ShopItem;