import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex flex-col items-center w-full p-5 md:p-24">
      <SignUp />
  </div>
  );
}