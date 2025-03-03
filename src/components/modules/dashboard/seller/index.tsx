'use client'
import { IItemId, IMeta, IPurchaseHistory } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NMTable } from "@/components/ui/core/SHTable";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";
import DeleteConfirmationModal from "@/components/ui/core/SHModel";
import { handleDeleteProduct } from "@/services/Product";
import { toast } from "sonner";


const SellerHistory = ({
    products,
    meta,
}: {
    products: IPurchaseHistory[];
    meta: IMeta;
}) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState<IPurchaseHistory | null>(null);

    const handleView = (product: IItemId) => {
        router.push(`/dashboard/listing/ads-details/${product._id}`);
    };

    const handleDelete = (product: IPurchaseHistory) => {
        setProductToDelete(product);
        setIsModalOpen(true);
    };


    const confirmDelete = async () => {
        try {
            if (productToDelete && productToDelete._id) {
                const res = await handleDeleteProduct(productToDelete._id);
                if (res) {
                    toast.success('Product deleted successfully!');
                } else {
                    toast.error('Failed to delete the product. Please try again.');
                }
                setProductToDelete(null);
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };


    const columns: ColumnDef<IPurchaseHistory>[] = [
        {
            accessorKey: "category",
            header: "Category",
            cell: ({ row }) => <span>{row.original.itemID.category}</span>,
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => <span>{row.original.status}</span>,
        },
        {
            accessorKey: "title",
            header: "Title",
            cell: ({ row }) => <span>{row.original.itemID.title}</span>,
        },
        {
            accessorKey: "price",
            header: "Price",
            cell: ({ row }) => <span>{row.original.itemID.price}</span>,
        },
        {
            accessorKey: "sellerID",
            header: "Seller",
            cell: ({ row }) => <span>{row.original.sellerID.name}</span>,
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <button
                        className="text-gray-500 hover:text-blue-500"
                        title="View"
                        onClick={() => handleView(row.original.itemID)}
                    >
                        <Eye className="w-5 h-5" />
                    </button>
                    <button
                        className="text-gray-500 hover:text-red-500"
                        title="Delete"
                        onClick={() => handleDelete(row.original)}
                    >
                        <Trash className="w-5 h-5" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <NMTable columns={columns} data={products || []} />
            <TablePagination totalPage={meta?.totalPage} />

            {/* Delete Confirmation Modal */}
            {productToDelete && (
                <DeleteConfirmationModal
                    item="Product"
                    name={productToDelete.itemID.title}
                    isOpen={isModalOpen}
                    onOpenChange={setIsModalOpen}
                    onConfirm={confirmDelete}
                />
            )}
        </div>
    );
};

export default SellerHistory;

