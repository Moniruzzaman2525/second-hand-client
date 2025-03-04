
import SHContainer from "@/components/ui/core/SHContainer"
import { TestimonialCarousel } from "./TestimonialSection"

const TestHomePage: React.FC = () => {
    return (
        <div className="hidden md:flex flex-col items-center py-8 sm:py-16 lg:py-20 space-y-8 bg-[#f8fafd]">
            <SHContainer className="">
                <h2 className="text-3xl font-semibold text-center mb-6">What Our Users Say</h2>
                <TestimonialCarousel />
            </SHContainer>
        </div>
    )
}

export default TestHomePage
