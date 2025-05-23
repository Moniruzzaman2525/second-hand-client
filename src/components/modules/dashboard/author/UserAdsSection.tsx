import { Eye, Share2, Heart } from "lucide-react"

export default function UserAdsSection() {
    return (
        <div className="w-full ">
            {/* Header */}
            <div className="flex items-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-700">User Ads</h2>
                <div className="ml-2 bg-amber-400 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                    <span className="text-white text-xs">1</span>
                </div>
            </div>

            {/* Product Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden w-full max-w-full sm:max-w-xs">
                <div className="p-4">
                    <div className="w-full h-48 bg-slate-100 flex items-center justify-center rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-16 h-16 text-slate-400"
                        >
                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                            <path d="M12 18h.01" />
                        </svg>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-lg font-medium text-slate-700">Samsung Galaxy A55 5G</h3>
                        <p className="text-lg font-semibold mt-1">₹33,000</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex space-x-4">
                            <button className="text-gray-500 hover:text-gray-700">
                                <Eye size={18} />
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                                <Share2 size={18} />
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                                <Heart size={18} />
                            </button>
                        </div>
                        <span className="text-sm text-gray-500">13 Views</span>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">1</span> of{" "}
                <span className="font-medium">1</span> results
            </div>
        </div>
    )
}
