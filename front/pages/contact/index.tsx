const Contact = () => {
    return (

        <div className="py-[60px]">
            <div className="h-[59px] mb-[30px] text-[17px] text-center">
                <p className="text-[#3a3a3b] uppercase"><strong>Contact Form</strong></p>
                <a className="text-textOrange"
                    href='#'
                >Contact Form 7</a>
            </div>

            <div className="max-w-[700px] mx-auto my-0">

                <div className="mx-[60px] mb-6">

                    <form>
                        <div className="h-[79px] mb-6">
                            <label>
                                <p className="input-heading">
                                    Company
                                </p>
                                <input
                                    className="input"
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className="h-[79px] mb-6">
                            <label>
                                <p className="input-heading">
                                    Contact Name
                                </p>
                                <input
                                    className="input"
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className="h-[79px] mb-6">
                            <label>
                                <p className="input-heading">
                                    Your Email
                                </p>
                                <input
                                    className="input"
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className="h-[79px] mb-6">
                            <label>
                                <p className="input-heading">
                                    Phone
                                </p>
                                <input
                                    className="input"
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className="h-[79px] mb-6">
                            <label>
                                <p className="input-heading">
                                    Business Type
                                </p>
                                <select className="input">
                                    <option value="option1">option1</option>
                                    <option value="option2">option2</option>
                                    <option value="option3">option3</option>
                                </select>
                            </label>
                        </div>

                        <div className="mb-[24px] text-[13px] font-[600] uppercase tracking-[3px]">
                            <label>
                                <p>Tell Uss More About You</p>
                                <textarea className="w-full h-[170px] py-[12px] px-[17px] border" />
                            </label>
                        </div>

                        <button className="w-full md:w-[141px] h-[51px] button button-hover">
                            Send
                        </button>

                    </form>


                </div>

            </div>

            <div>

                <div className="h-[60px] text-center mb-[29px]">
                    <p className='uppercase'><strong>Nwesletter Sign Up Form</strong></p>
                    <a href='#' className="text-textOrange">MailChimp</a>
                </div>

                <div className="max-w-[1128px] h-[350px] p-[60px] mx-auto my-0 bg-[#f6f6f7]">
                    <form className="text-center">
                        <h3 className="text-[33px] font-bold mt-[12px] mb-[33px]">
                            Never miss out
                        </h3>
                        <p className="text-[17px] mb-[24px]">
                            Sign up for our Newsletter and get the latest AMAYA news, unique offers and access to exclusive products.
                        </p>

                        <div className="mb-[24px]">
                            <input
                                className="w-full md:w-[300px] h-[51px] mb-[12px] md:mt-[12px] md:mx-[12px] bg-[#f6f6f7] font-bold text-center border"
                                type='email'
                                placeholder='Enter Email'
                            ></input>
                            <button className="w-full md:w-[141px] h-[51px] button button-hover">
                                SIGN UP
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;