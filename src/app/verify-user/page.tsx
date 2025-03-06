
import VerifyEmail from "@/components/modules/verifyUser";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const VerifyUser = async ({ searchParams }: { searchParams: SearchParams }) => {
    const query = await searchParams;
    const id = query.id as string | undefined;
    const token = query.token as string | undefined;

    return (
        <div>
            <VerifyEmail id={id} token={token} />
        </div>
    );
};

export default VerifyUser;
