import { Link } from "react-router-dom";
import { TaskCardType } from "../../types";

const TaskCard = ({ id, title, description, status, author }: TaskCardType) => {
  return (
    <Link to={`/task/${id}`} className="flex flex-col">
      <div className="p-4 min-w-[10rem] max-h-[10rem] overflow-hidden border-b border-gray-400 shadow-xl m-2 bg-white hover:transform hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg ">
        <h4 className="text-lg font-bold line-clamp-1 mb-2">{title}</h4>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        <p className="text-sm text-gray-500">Status: {status}</p>
        <p className="text-sm text-gray-500">Author: {author}</p>
      </div>
    </Link>
  );
};

export default TaskCard;
