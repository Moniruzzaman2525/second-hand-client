import { DashboardLayout } from "@/components/layout/dashboard-layout";
import MessageApp from "@/components/modules/dashboard/message";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllMessage } from "@/services/Message";

const MessagePage = async () => {
    const { data: message } = await getAllMessage();
    return (
        <DashboardLayout>
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer >
                    <MessageApp message={message} />
                </SHContainer>
            </div>
        </DashboardLayout>
    );
};

export default MessagePage;
