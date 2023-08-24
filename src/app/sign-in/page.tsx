import { SignIn } from "@clerk/nextjs";
 
type RedirectParams = {
  searchParams: { redirect: string };
}

export default function Page({searchParams}: RedirectParams) {
  return (
    <div className="flex flex-col items-center w-full pt-10 p-5 md:p-24">
      <SignIn redirectUrl={searchParams.redirect}/>
    </div>
  );
}