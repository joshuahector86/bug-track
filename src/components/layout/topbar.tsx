import { Bug } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="flex items-center gap-2">
        <div>
          <Bug width={40} height={40} />
        </div>
        <h1 className="">Bug Tracker</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div>Account</div>
        <div>Settings</div>
      </div>
    </div>
  );
};

export default Topbar;
