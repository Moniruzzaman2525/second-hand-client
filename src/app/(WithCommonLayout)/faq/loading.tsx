import { FaqPageSkeleton } from "@/components/shared/Skeleton/fat-page";
import SHContainer from "@/components/ui/core/SHContainer";


const Loading = () => {
    return (
        <SHContainer>
            <FaqPageSkeleton />
        </SHContainer>

    );
};

export default Loading;
