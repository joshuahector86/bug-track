import { Bell } from "lucide-react";
import Page from "../../components/layout/page";
import { mockAccount } from "../../data/mock-data";
import Input from "../../components/layout/input";
import Button from "../../components/general/button";

const Settings = () => {
  return (
    <Page className=" overflow-auto">
      <div className="flex flex-col gap-4">
        <h1>Account Information</h1>
        <div className="">
          <h5>{mockAccount.name}</h5>
          <p className="text-gray-500">{mockAccount.email}</p>
        </div>
        <div>
          <h5>Language</h5>
          <select className="p-2 border rounded-md ">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="jp">Japanese</option>
          </select>
        </div>
        <h5 className="flex items-center gap-2">
          <Bell />
          Notifications
        </h5>
        <div className="h-[10rem] overflow-auto border border-gray-200 rounded-md shadow-sm">
          {mockAccount.notifications.map((item) => (
            <p className="hover:bg-gray-400 p-2 rounded-md" key={item.id}>
              {item.title}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h5>Change Password</h5>
          <div className="grid md:grid-cols-4 gap-4">
            <Input type="password" placeholder="current password" />
            <Input type="password" placeholder="new password" />
            <Input type="password" placeholder="retype new password" />
            <Button
              onClick={() => {
                alert("changes made");
              }}
            >
              Change Password
            </Button>
          </div>
        </div>
        <Button
          className="bg-red-500 hover:bg-red-700"
          onClick={() => {
            alert("Yeah.... you don't get to do that unfortunately....");
          }}
        >
          Delete Account
        </Button>
      </div>
    </Page>
  );
};

export default Settings;
