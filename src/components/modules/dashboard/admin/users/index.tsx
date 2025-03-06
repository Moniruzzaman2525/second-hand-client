'use client'
import { IMeta, IAuthUser } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { BanIcon, Eye, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NMTable } from "@/components/ui/core/SHTable";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";
import DeleteConfirmationModal from "@/components/ui/core/SHModel";
import BanConfirmationModal from "@/components/ui/core/SHModel/BanConfirmationModal";
import { useUser } from "@/context/UserContext";
import { banUnBanUser, handleDeleteUser } from "@/services/Admin";
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";

const ManageUser = ({
    users,
    meta,
}: {
    users: IAuthUser[];
    meta: IMeta;
}) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<IAuthUser | null>(null);
    const [isBanModalOpen, setIsBanModalOpen] = useState(false);
    const [banToUser, setBanToUser] = useState<IAuthUser | null>(null);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const { user } = useUser();
    const filteredUsers = users?.filter(u => u._id !== user?.userId);

    const handleView = (users: IAuthUser) => {
        router.push(`/dashboard/admin/listings/ads-details/${users._id}`);
    };

    const handleDelete = (users: IAuthUser) => {
        setUserToDelete(users);
        setIsModalOpen(true);
    };
    const banUser = (users: IAuthUser) => {
        setBanToUser(users);
        setIsBanModalOpen(true);
    };


    const confirmDelete = async () => {
        try {
            if (userToDelete && userToDelete._id) {
                const res = await handleDeleteUser(userToDelete._id);
                if (res.success) {
                    setIsConfirmOpen(true)
                    setModalContent('User deleted successfully!');
                    setModalState('success')
                } else {
                    setIsConfirmOpen(true)
                    setModalContent(`Failed to delete the User. Please try again.`);
                    setModalState('failed')
                }
                setUserToDelete(null);
            }
        } catch (error: any) {
            setIsConfirmOpen(true)
            setModalContent(error.message);
            setModalState('failed')
        }
    };
    const confirmBan = async () => {
        try {
            if (banToUser && banToUser._id) {
                const res = await banUnBanUser(banToUser._id);
                if (res.success) {
                    setIsConfirmOpen(true)
                    setModalContent(`User ${banToUser.ban ? "Unban" : "Ban"} successfully!`);
                    setModalState('success')
                } else {
                    setIsConfirmOpen(true)
                    setModalContent(`Failed to update user. Please try again.`);
                    setModalState('failed')
                }
                setBanToUser(null);
            }
        } catch (error: any) {
            setIsConfirmOpen(true)
            setModalContent(error.message);
            setModalState('failed')
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
            header: "Email",
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
            accessorKey: "ban",
            header: "Status",
            cell: ({ row }) => (
                <span
                    style={{
                        color: row.original.ban ? 'red' : 'green',
                    }}
                >
                    {row.original.ban ? "Ban" : "Active"}
                </span>
            ),
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
                        title={row.original.ban ? "Unban" : "Ban"}
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
            {userToDelete && (
                <DeleteConfirmationModal
                    item="User"
                    name={userToDelete.name}
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
            <SuccessModal
                isOpen={isConfirmOpen}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpen(false)}
            />
        </div>
    );
};

export default ManageUser;
