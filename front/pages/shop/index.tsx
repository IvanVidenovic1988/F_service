import { FC } from 'react';
import ShopItemsList from '../../features/shop/ShopItemsList';
import ShopNav from '../../features/shop/ShopNav';


export const getStaticProps = async () => {

    const response = await fetch("http://localhost:1337/api/shop-items?populate=*")
    const data = await response.json()

    return {
        props: { items: data.data }
    }
}

const ShopPage: FC = ({ items }: any) => {

    return (

        <div className="w-full pt-[60px] px-[24px] lg:px-[48px]">
            <div>

                <h1 className="heading">
                    Shop
                </h1>

                <ShopNav />
                <ShopItemsList items={items} />

            </div >
        </div >
    );
}

export default ShopPage;