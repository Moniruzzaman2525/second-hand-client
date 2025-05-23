import ProductCard from "@/components/ui/core/ProductCard"
import { IProduct } from "@/types"

export default function UserAdsSection({ product }: { product: IProduct[] }) {
    return (
        <div className="w-full ">

            <div className="flex items-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-700">User Ads</h2>
                <div className="ml-2 bg-amber-400 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                    <span className="text-white text-xs">{product.length}</span>
                </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden w-full max-w-full sm:max-w-xs">
                {
                    product.map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))
                }
            </div>
        </div>
    )
}
