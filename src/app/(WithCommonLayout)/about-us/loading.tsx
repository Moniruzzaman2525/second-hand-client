import { AboutPageSkeleton } from "@/components/shared/Skeleton/about-us";
import SHContainer from "@/components/ui/core/SHContainer";


const Loading = () => {
    return (
        <SHContainer>
            <AboutPageSkeleton />
        </SHContainer>

    );
};

export default Loading;
