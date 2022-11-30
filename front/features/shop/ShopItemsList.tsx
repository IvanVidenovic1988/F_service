import ShopItem from "../../components/shop/ShopItem";


const ShopItemsList = ({ items }: any) => {

    return (
        <div className="grid w-full gap-x-6 md:gap-x-12 sm:grid-rows-6 sm:grid-cols-2 md:grid-rows-3 md:grid-cols-4">
            {items.map((item: any) => {
                return (
                    <ShopItem
                        id={item.id}
                        src={item.attributes.cover.data.attributes.url}
                        title={item.attributes.title}
                        price={item.attributes.price}
                    />
                )
            })}
        </div>
    );
}

export default ShopItemsList;