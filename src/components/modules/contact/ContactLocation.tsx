import Image from "next/image";
import location from "../../../app/assets/location.png";
import contact from "../../../app/assets/contact.png";
import message from "../../../app/assets/message.png";
import SHContainer from "@/components/ui/core/SHContainer";

const ContactLocation = () => {
    return (
        <div className="flex justify-center items-center gap-6 py-10 bg-gray-100">
            <SHContainer className="flex flex-col md:flex-row justify-between gap-8 items-center">
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-72 h-64">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Image src={location} alt="Location Icon" width={40} height={40} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        244/C Tejgaon I/A, Dhaka-1208, Bangladesh
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-72 h-64">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Image src={contact} alt="Call Icon" width={40} height={40} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        +880 1777-037916
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-72 h-64">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Image src={message} alt="Email Icon" width={40} height={40} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Write to Us</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        hi@secondbd.com
                    </p>
                </div>
            </SHContainer>
        </div>
    );
};

export default ContactLocation;
