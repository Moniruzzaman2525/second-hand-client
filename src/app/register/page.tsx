import RegisterForm from "@/components/modules/auth/register/RegisterForm";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const RegisterPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;
  return (
    <div>
      <RegisterForm query={query} />
    </div>
  );
};

export default RegisterPage;
