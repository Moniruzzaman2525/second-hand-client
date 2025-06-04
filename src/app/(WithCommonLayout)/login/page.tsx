

import LoginForm from "@/components/modules/auth/login/LoginForm";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const LoginPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;

  return (
    <div>
      <LoginForm query={query} />
    </div>
  );
};

export default LoginPage;
