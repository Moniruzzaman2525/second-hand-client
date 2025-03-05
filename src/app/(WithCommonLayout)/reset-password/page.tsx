import ResetPasswordUi from "@/components/modules/resetPassword/ResetPasswordUi";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const ResetPassword = async ({ searchParams }: { searchParams: SearchParams }) => {
    const query = await searchParams;
    const id = query.id as string | undefined;
    const token = query.token as string | undefined;
    return (
        <div>
            <ResetPasswordUi id={id} token={token} />
        </div>
    );
};

export default ResetPassword;
