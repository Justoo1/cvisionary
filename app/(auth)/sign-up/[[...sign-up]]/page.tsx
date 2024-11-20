import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
  return (
    <main className="flex h-screen items-center justify-center p-3">
      <SignUp />
    </main>
  );
};

export default SignupPage;
