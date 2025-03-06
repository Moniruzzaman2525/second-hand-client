'use client'
import { IMeta, IProduct } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { CheckCircle, Eye, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NMTable } from "@/components/ui/core/SHTable";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";
import DeleteConfirmationModal from "@/components/ui/core/SHModel";
import { handleDeleteProduct } from "@/services/Product";
import PermissionModal from "@/components/ui/core/SHModel/PermissionModal";
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";

const ManageProductsByAdmin = ({
    products,
    meta,
}: {
    products: IProduct[];
    meta: IMeta;
}) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);
    const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
    const [productToPermission, setProductToPermission] = useState<IProduct | null>(null);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isConfirmOpenPermission, setIsConfirmOpenPermission] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")


    const handleView = (product: IProduct) => {
        router.push(`/dashboard/admin/listings/ads-details/${product._id}`);
    };

    const handleDelete = (product: IProduct) => {
        setProductToDelete(product);
        setIsModalOpen(true);
    };
    const handlePermission = (product: IProduct) => {
        setProductToPermission(product);
        setIsPermissionModalOpen(true);
    };


    const confirmDelete = async () => {
        try {
            if (productToDelete && productToDelete._id) {
                const res = await handleDeleteProduct(productToDelete._id);
                if (res.success) {
                    setIsConfirmOpen(true)
                    setModalContent('Product deleted successfully!');
                    setModalState('success')
                } else {
                    setIsConfirmOpen(true)
                    setModalContent('Failed to delete the product. Please try again.');
                    setModalState('failed')
                }
                setProductToDelete(null);
            }
        } catch (error: any) {
            setIsConfirmOpen(true)
            setModalContent(error.message);
            setModalState('failed')
        }
    };


    const columns: ColumnDef<IProduct>[] = [
        {
            accessorKey: "name",
            header: "Product Name",
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <Image
                        src={row.original.images[0]}
                        alt={row.original.title}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="truncate">{row.original.title}</span>
                </div>
            ),
        },
        {
            accessorKey: "category",
            header: "Category",
            cell: ({ row }) => <span>{row.original.category}</span>,
        },
        {
            accessorKey: "stock",
            header: "Stock",
            cell: ({ row }) => <span>{row.original.status}</span>,
        },
        {
            accessorKey: "price",
            header: "Price",
            cell: ({ row }) => <span>$ {row.original.price.toFixed(2)}</span>,
        },
        {
            accessorKey: "location",
            header: "City",
            cell: ({ row }) => <span>{row.original.location}</span>,
        },
        {
            accessorKey: "permission",
            header: "Permission",
            cell: ({ row }) => {
                const permission = row.original.permission;
                let textColor;
                if (permission === "pending") {
                    textColor = "text-yellow-500";
                } else if (permission === "reject") {
                    textColor = "text-red-500";
                } else if (permission === "accepted") {
                    textColor = "text-green-500";
                } else {
                    textColor = "text-gray-500";
                }
                return <span className={textColor}>{permission}</span>;
            },
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <button
                        className="text-gray-500 hover:text-blue-500"
                        title="View"
                        onClick={() => handleView(row.original)}
                    >
                        <Eye className="w-5 h-5" />
                    </button>
                    <button
                        className="text-gray-500 hover:text-red-500"
                        title="Permission"
                        onClick={() => handlePermission(row.original)}
                    >
                        <CheckCircle className="w-5 h-5" />
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
                    name={productToDelete.title}
                    isOpen={isModalOpen}
                    onOpenChange={setIsModalOpen}
                    onConfirm={confirmDelete}
                />
            )}
            {productToPermission && (
                <PermissionModal
                    isOpen={isPermissionModalOpen}
                    onClose={() => setIsPermissionModalOpen(false)}
                    product={productToPermission}
                    setIsConfirmOpen={setIsConfirmOpenPermission}
                    setModalContent={setModalContent}
                    setModalState={setModalState}
                />
            )}
            <SuccessModal
                isOpen={isConfirmOpen}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpen(false)}
            />
            <SuccessModal
                isOpen={isConfirmOpenPermission}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpenPermission(false)}
            />
        </div>
    );
};

export default ManageProductsByAdmin;
