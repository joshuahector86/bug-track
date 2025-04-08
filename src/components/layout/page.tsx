import Sidebar from "./sidebar";
import Topbar from "./topbar";

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page = ({ children, className }: PageProps) => {
  return (
    <div className="h-[100vh]">
      <Topbar />

      <div className="flex gap-2 w-full h-[calc(100vh-5rem)]">
        <div className="max-w-[15rem]">
          <Sidebar />
        </div>
        <div className={`text-black p-10 pb-20 w-full ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
