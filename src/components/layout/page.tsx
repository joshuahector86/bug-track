import Sidebar from "./sidebar";
import Topbar from "./topbar";

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="h-[100vh]">
      <Topbar />

      <div className="grid grid-cols-12 w-full h-[calc(100vh-5rem)]">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 ">{children}</div>
      </div>
    </div>
  );
};

export default Page;
