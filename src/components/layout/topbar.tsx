import { Bug, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
      <Link className="flex items-center gap-2" to="/">
        <Bug width={40} height={40} />
        <h1 className="">Bug Tracker</h1>
      </Link>

      <Link
        to="/settings"
        className="hover:text-gray-400 flex items-center gap-1"
      >
        <Settings className="w-5" />
        <p>Settings</p>
      </Link>
    </div>
  );
};

export default Topbar;
