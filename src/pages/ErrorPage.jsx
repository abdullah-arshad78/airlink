import { useEffect } from "react";}
import { Link } from "react-router-dom";
import MainNavigation from "../UI/MainNavigation";
const ErrorPage = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainNavigation />
      <main className=" pt-[13vh] sm:pt-[12vh] pb-4 w-screen px-8 min-w-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#1c50ca_100%)] h-screen">
        <h1 className="my-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-sky-600 heading-font text-[1.5rem] md:text-[2rem] font-black white-shadow">
          Oops something went wrong!
        </h1>
        <div className="w-full p-2 flex items-center justify-start">
          <Link className="text-blue-600 font-bold text-left hover:bg-slate-200 p-2 rounded-lg">
            Go to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
