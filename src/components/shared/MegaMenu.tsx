import Link from "next/link"

const MegaMenu = () => {
    const categories = [
        { label: "Laptop PC", value: "laptop pc" },
        { label: "Mobile", value: "mobile" },
        { label: "Electronics", value: "electronics" },
        { label: "Gadget Accessories", value: "gadget accessories" },
        { label: "Home Appliance", value: "home appliance" },
        { label: "Video Game Consoles", value: "video game consoles" },
        { label: "Vehicles", value: "vehicles" },
        { label: "Fashion", value: "fashion" },
        { label: "For Kids", value: "for kids" },
        { label: "Hobbies Sports", value: "hobbies sports" },
        { label: "Health & Beauty", value: "health and beauty" },
    ]

    return (
        <div className="container mx-auto py-6 px-4 md:px-40 fixed top-[9%] left-0 z-50 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[0, 1, 2].map((columnIndex) => (
                    <div key={columnIndex}>
                        <ul className="space-y-3">
                            {categories
                                .filter((_, index) => index % 3 === columnIndex)
                                .map((category) => (
                                    <li key={category.label}>
                                        <Link
                                            href={`/products?category=${category.value}`}
                                            className="text-[#374B5C] hover:text-red-600 transition-colors relative group flex items-center"
                                        >
                                            <span className="absolute -left-5 opacity-0 group-hover:opacity-100 text-blue-500 transition-all duration-300 ease-in-out group-hover:-translate-x-0 -translate-x-2">
                                                •
                                            </span>
                                            {category.label}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MegaMenu
