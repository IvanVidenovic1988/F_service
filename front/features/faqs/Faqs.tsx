import { FC, useState } from "react"
import { FAQ } from "../../pages/faq";

import styles from './Faqs.module.css'

export type Props = {
    faqs: FAQ[];
}

const Faqs: FC<Props> = ({ faqs }) => {

    const [question, setQuestion] = useState<number[]>([])

    const toggleQA = (selectedQuestion: number) => {
        if (question.includes(selectedQuestion)) {
            setQuestion((currState) => currState.filter(menu => menu !== selectedQuestion))
        } else {
            setQuestion((menu) => [...menu, selectedQuestion])
        }
    }


    return (
        <>
            {faqs.map((faq) => {
                return (
                    <div key={faq.id} className="border-b" >

                        <div
                            className="flex items-center w-full hover:cursor-pointer"
                            onClick={() => toggleQA(faq.id)}
                        >

                            <div className="w-[14px] h-[14px] relative">
                                <div className="w-[14px] h-[3px] bg-black absolute top-[39%]"></div>
                                <div className={question.includes(faq.id) ? styles['vertical-active'] : styles['vertical-passive']}></div>
                            </div>

                            <div className="py-[12px] pr-[24px] pl-[10px] text-[18px]">
                                <p><strong>Q: {faq.attributes.question}</strong></p>
                            </div>

                        </div>

                        <div className={question.includes(faq.id) ? styles['answer-active'] : styles['answer-passive']}>
                            <p>A: {faq.attributes.Answer}</p>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default Faqs;