
import FilterSidebar from "./filterSidebar";

const AllProducts = ({ products }) => {
    return (
        <div className="flex gap-8 my-10">
            <div>
                <FilterSidebar />
            </div>
            <div>
                <div className="grid grid-cols-3 gap-8">

                </div>
            </div>
        </div>
    );
};

export default AllProducts;
