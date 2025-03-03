'use client'
import { IMeta, IAuthUser } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { BanIcon, Eye, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NMTable } from "@/components/ui/core/SHTable";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";
import DeleteConfirmationModal from "@/components/ui/core/SHModel";
import { handleDeleteProduct } from "@/services/Product";
import { toast } from "sonner";
import BanConfirmationModal from "@/components/ui/core/SHModel/BanConfirmationModal";
import { useUser } from "@/context/UserContext";

const ManageUser = ({
    users,
    meta,
}: {
    users: IAuthUser[];
    meta: IMeta;
}) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState<IAuthUser | null>(null);
    const [isBanModalOpen, setIsBanModalOpen] = useState(false);
    const [banToUser, setBanToUser] = useState<IAuthUser | null>(null);
    const { user } = useUser();
    const filteredUsers = users?.filter(u => u._id !== user?.userId);
    console.log(user)

    const handleView = (users: IAuthUser) => {
        router.push(`/dashboard/admin/listings/ads-details/${users._id}`);
    };

    const handleDelete = (users: IAuthUser) => {
        setProductToDelete(users);
        setIsModalOpen(true);
    };
    const banUser = (users: IAuthUser) => {
        setBanToUser(users);
        setIsBanModalOpen(true);
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
    const confirmBan = async () => {
        try {
            console.log(banToUser)
        } catch (error: any) {
            toast.error(error.message);
        }
    };


    const columns: ColumnDef<IAuthUser>[] = [

        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => <span>{row.original.name}</span>,
        },
        {
            accessorKey: "email",
            header: "Stock",
            cell: ({ row }) => <span>{row.original.email}</span>,
        },
        {
            accessorKey: "phoneNumber",
            header: "Phone Number",
            cell: ({ row }) => <span>{row.original.phoneNumber}</span>,
        },
        {
            accessorKey: "location",
            header: "City",
            cell: ({ row }) => <span>{row.original.location}</span>,
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
                        title="Delete"
                        onClick={() => handleDelete(row.original)}
                    >
                        <Trash className="w-5 h-5" />
                    </button>
                    <button
                        className="text-gray-500 hover:text-red-500"
                        title="Delete"
                        onClick={() => banUser(row.original)}
                    >
                        <BanIcon className="w-5 h-5" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <NMTable columns={columns} data={filteredUsers || []} />
            <TablePagination totalPage={meta?.totalPage} />

            {/* Delete Confirmation Modal */}
            {productToDelete && (
                <DeleteConfirmationModal
                    name={productToDelete.name}
                    isOpen={isModalOpen}
                    onOpenChange={setIsModalOpen}
                    onConfirm={confirmDelete}
                />
            )}
            {/* Delete Confirmation Modal */}
            {banToUser && (
                <BanConfirmationModal
                    user={banToUser}
                    isOpen={isBanModalOpen}
                    onOpenChange={setIsBanModalOpen}
                    onConfirm={confirmBan}
                />
            )}
        </div>
    );
};

export default ManageUser;
