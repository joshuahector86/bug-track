import { Link, useParams } from "react-router-dom";
import mockTasks from "../../data/mock-data";
import Page from "../../components/layout/page";
import { ArrowLeft } from "lucide-react";
import Button from "../../components/general/button";
import Badge from "../../components/general/badge";

const IndividualTask = () => {
  const { id } = useParams();

  return (
    <Page className="flex flex-col gap-4">
      <Link to="/">
        <Button>
          <ArrowLeft />
        </Button>
      </Link>
      {mockTasks
        .filter((task) => task.id === id)
        .map((task) => (
          <div className="flex flex-col gap-10" key={task.id}>
            <div className="flex flex-col gap-1 rounded bg-gray-100 p-4 shadow-lg">
              <h1 className=" font-bold  mb-2">{task.title}</h1>
              <p className="text-sm ">Date Created: {task.createdDate}</p>
              <p className="text-sm flex items-center gap-1">
                Status:
                <Badge>{task.status}</Badge>
              </p>
              <p className="text-sm ">Author: {task.author}</p>
            </div>
            <div className="flex flex-col gap-2 border-b border-gray-400 pb-4">
              <h4 className="text-gray-500">Description</h4>
              <div className="text-lg">{task.description}</div>
            </div>
          </div>
        ))}

      <div className="flex items-center gap-2">
        <Button
          onClick={() => {
            alert("This is just a mock site sorry. Can't do that.");
          }}
        >
          Edit Task
        </Button>
        <Button
          className="bg-red-500 hover:bg-red-700"
          onClick={() => {
            alert("No");
          }}
        >
          Delete Task
        </Button>
      </div>
    </Page>
  );
};

export default IndividualTask;
