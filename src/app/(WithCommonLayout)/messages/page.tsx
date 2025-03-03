import MessageApp from "@/components/modules/dashboard/message";
import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllMessage } from "@/services/Message";

const MessagePage = async () => {
    const { data: message } = await getAllMessage();
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer >
                    <MessageApp message={message} />
                </SHContainer>
            </div>
        </div>
    );
};

export default MessagePage;
