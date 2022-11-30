import { FC } from 'react';
import Faqs from '../../features/faqs/Faqs';

export type FAQ = {
    id: number;
    attributes: {
        Answer: string;
        createdAt: string;
        publishedAt: string;
        question: string;
        updatedAt: string;
    };
}

export type Props = {
    faqs: FAQ[];
}

export const getStaticProps = async () => {

    const response = await fetch('http://localhost:1337/api/f-a-qs')
    const data = await response.json()

    return {
        props: { faqs: data.data }
    }
}



const Faq: FC<Props> = ({ faqs }) => {

    return (
        <div className="max-w-[700px] h-[700px] mx-auto my-0">

            <div className="max-w-[700px] h-[700px] p-[60px]">

                <div className="text-center">
                    <h1 className="text-[2.618em] leading-[1.2em] text-primary font-['Playfair_Display'] font-medium m-[48px]">FAQ</h1>
                </div>

                <Faqs faqs={faqs} />

            </div>

        </div >
    );
}

export default Faq;