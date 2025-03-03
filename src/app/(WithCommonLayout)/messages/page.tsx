import MessageApp from "@/components/modules/dashboard/message";
import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";

const MessagePage = () => {
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer >
                    <MessageApp />
                </SHContainer>
            </div>
        </div>
    );
};

export default MessagePage;
