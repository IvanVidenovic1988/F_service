import Image from 'next/image';

export const getStaticPaths = async () => {
    const response = await fetch("http://localhost:1337/api/shop-items?populate=*")
    const data = await response.json()

    const paths = data.data.map((path: any) => {
        return {
            params: { id: path.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id
    const response = await fetch(`${'http://localhost:1337/api/shop-items'}/${id}?populate=*`)
    const data = await response.json()

    return {
        props: { singleItem: data.data }
    }
}


const SingleItemDetails = ({ singleItem }: any) => {
    console.log("singleItem: ", singleItem)

    return (
        <div className='w-full'>
            <div className="max-w-[1206px] mx-auto my-0 p-[24px] lg:py-[60px] lg:px-[48px]">
                <div className="md:flex">
                    <div className="w-full md:w-[50%] mb-6">
                        <Image
                            src={`${'http://localhost:1337'}${singleItem.attributes.cover.data.attributes.url}`}
                            className="w-full"
                            width={600}
                            height={839}
                            alt='arrow-down picture'
                        />
                    </div>
                    <div className="md:w-[50%] mb-12 p-6 md:pt-12 md:pr-[0px] md:pb-[60px] md:pl-[60px]">
                        <h1 className="text-[40px] leading-[43px] font-['Playfair_Display']">{singleItem.attributes.title}</h1>

                        <div className="mb-6 pt-6 flex text-[21px]">
                            <p>$ {singleItem.attributes.price} -</p>
                            <p>$ {singleItem.attributes.price}</p>
                        </div>

                        <div className="mt-[42px] mb-[48px]">
                            <p className="mb-[30px] text-[17px] leading-[30px]">{singleItem.attributes.description}</p>
                            <div className="h-[60px] mb-[30px]">
                                <strong className="text-[17px] leading-[30px]">NOTES</strong>
                                <p className='text-[17px]'>Earthy – Chocolate – Blackberry – Cherry</p>
                            </div>
                        </div>

                        <div className='h-[366px] mb-12'>
                            <div className='mb-[76px]'>
                                <form>
                                    <label>
                                        <p className='mb-[7px] text-[12px] font-semibold uppercase tracking-[2px]'>Size</p>
                                        <select className="w-[240px] h-[44px] pr-[34px] pl-[17px] text-[14px]">
                                            <option value="option1">Choose an option</option>
                                            <option value="option2">500gr</option>
                                            <option value="option3">800gr</option>
                                        </select>
                                    </label>

                                    <label className=''>
                                        <p className='mt-[20px] mb-[7px] text-[12px] font-semibold uppercase tracking-[2px]'>Roast</p>
                                        <select className="w-[240px] h-[44px] pr-[34px] pl-[17px] text-[14px]">
                                            <option value="option1">Choose an option</option>
                                            <option value="option2">500gr</option>
                                            <option value="option3">800gr</option>
                                        </select>
                                    </label>
                                </form>
                            </div>

                            <div className=''>
                                <input
                                    className='w-[70px] h-[44px] pr-[6px] pl-[17px] border block'
                                    type="number"
                                    placeholder='3'
                                />
                                <button className='w-full md:w-[190px] h-[44px] mt-[36px] button button-hover'>
                                    add to cart
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='p-6 mt-6 text-center'>
                    <div className='pb-6 mb-6 border-b'>
                        <h1 className='py-[6px] text-[14px] font-[700] uppercase tracking-[2px]'
                        >Additional Information</h1>
                    </div>
                    <div className='mt-[31px] mb-6 md:grid md:grid-rows-2 md:grid-cols-3'>
                        <div className='h-[74px] px-6'>
                            <h2 className='text-[15px] font-[700]'>SIZE</h2>
                            <p className='text-[15px]'>500g, 800g</p>
                        </div>
                        <div className='h-[74px] px-6'>
                            <h2 className='text-[15px] font-[700]'>ROAST</h2>
                            <p className='text-[15px]'>Whole Bean, Mild Roast, Dark Roast</p>
                        </div>
                        <div className='h-[74px] px-6'>
                            <h2 className='text-[15px] font-[700]'>HARVEST</h2>
                            <p className='text-[15px]'>October – December</p>
                        </div>
                        <div className='h-[74px] px-6'>
                            <h2 className='text-[15px] font-[700]'>COUNTRY</h2>
                            <p className='text-[15px]'>Ehiopian</p>
                        </div>
                        <div className='h-[74px] px-6'>
                            <h2 className='text-[15px] font-[700]'>REGION</h2>
                            <p className='text-[15px]'>Halo Beriti Woreda, Gedeb District</p>
                        </div>
                        <div className='h-[74px] px-6'>
                            <h2 className='text-[15px] font-[700]'>ALTITUDE</h2>
                            <p className='text-[15px]'>1800-2200 meters</p>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <h2 className='text-[13px] mt-[60px] mx-6 mb-6 font-[700] uppercase tracking-[2px]'
                    >Related Products</h2>
                </div>
            </div>
        </div>
    );
}

export default SingleItemDetails;
