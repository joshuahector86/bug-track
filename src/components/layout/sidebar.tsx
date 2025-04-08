import { Square } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: <Square width={20} height={20} />,
    },
  ];

  return (
    <div className="bg-gray-800 h-full">
      <div>
        {sidebarItems.map((item) => (
          <Link
            to={item.href}
            className="flex items center gap-2 text-white p-4 hover:bg-gray-700 cursor-pointer"
          >
            <div>{item.icon}</div>
            <h4 className="hidden lg:block">{item.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
