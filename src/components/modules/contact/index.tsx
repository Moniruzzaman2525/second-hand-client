import SHContainer from "@/components/ui/core/SHContainer";
import { MoveRight } from "lucide-react";
import React from "react";

const ContactForm = () => {
    return (
        <div className="bg-gray-200 min-h-screen p-10">

            <SHContainer className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-4xl font-bold text-gray-800">
                        <span className="text-yellow-500">Contact</span> us
                    </h2>
                    <h2 className="mt-4 w-1/3 px-4 py-2 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] rounded-lg text-sm">
                        How Can We Help?
                    </h2>
                    <h3 className="mt-6 text-2xl font-semibold text-gray-800">We Are Ready to Help</h3>
                    <p className="mt-2 text-gray-600">
                        Check our Q&A guidelines to see if your question has already been
                        answered. If not, please contact us and we will get back to you as
                        soon as possible.
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <span className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            F
                        </span>
                        <span className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            I
                        </span>
                        <span className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            Y
                        </span>
                    </div>
                </div>


                <div className="w-full md:w-1/2 bg-[#f2f4f8] p-10 rounded-lg shadow-lg">
                    <h3 className=" flex justify-center px-20 text-[24px] font-semibold text-[#374b5c]">
                        Did not find the answer? Ask us questions directly
                    </h3>
                    <form className="mt-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="w-full p-3 border border-[#e1e7f1] rounded-lg"
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full p-3 border border-[#e1e7f1] rounded-lg"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-3 border border-[#e1e7f1] rounded-lg"
                        />
                        <textarea
                            placeholder="Message *"
                            className="w-full resize-none p-3 border border-[#e1e7f1] rounded-lg h-32"
                        ></textarea>
                        <div className="flex items-center">
                            <input type="checkbox" id="privacy" className="mr-2" />
                            <label htmlFor="privacy" className="text-gray-600">
                                I accept the <span className="text-[#537cd9]">privacy</span> <span className="text-[#6d90df]">policy</span>
                            </label>
                        </div>
                        <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                className="w-1/4 flex justify-center gap-5 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] py-3 rounded-lg text-lg"
                            >
                                <span>Send</span> <MoveRight />
                            </button>
                        </div>
                    </form>
                </div>
            </SHContainer>
        </div>
    );
};

export default ContactForm;
