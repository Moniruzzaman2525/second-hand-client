
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IAuthUser } from "@/types";

interface DeleteModalProps {
    user: IAuthUser;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onConfirm: () => void;
}

const BanConfirmationModal: React.FC<DeleteModalProps> = ({
    user,
    isOpen,
    onOpenChange,
    onConfirm,
}) => {
    console.log(user)
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{user.ban ? "Unban User" : "Ban User"}</DialogTitle>

                    <DialogDescription>
                        Are you sure you want to {user.ban ? "Unban" : "Ban"} {" "}
                        <span className="font-semibold text-red-500">{user.name}</span>?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={() => {
                            onConfirm();
                            onOpenChange(false);
                        }}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BanConfirmationModal;
