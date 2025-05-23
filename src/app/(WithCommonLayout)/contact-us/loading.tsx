import { ContactPageSkeleton } from "@/components/shared/Skeleton/contact-page";
import SHContainer from "@/components/ui/core/SHContainer";


const Loading = () => {
    return (
        <SHContainer>
            <ContactPageSkeleton />
        </SHContainer>

    );
};

export default Loading;
