import Link from "next/link";
import "../styles/globals.css";

const _404 = async () => {
  return (
    <div className="flex items-center space-y-8 justify-center w-full h-screen flex-col">
      <h1 className="font-bold text-9xl">🤖</h1>
      <h1 className="font-bold text-4xl lg:text-8xl text-red-400">
        404 <span className="text-gray-500">Page not found</span>
      </h1>
      <Link href="/" className="text-lg underline hover:text-red-400">
        Return back to home
      </Link>
    </div>
  );
};

export default _404;
