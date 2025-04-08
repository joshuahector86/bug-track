import { TaskCardType } from "../../types";

const TaskCard = ({
  title,
  description,
  status,
  author,
  createdAt,
  createdDate,
  updatedAt,
  updatedDate,
}: TaskCardType) => {
  return (
    <div className="p-4 min-w-[10rem] max-h-[10rem] overflow-hidden  border-b border-gray-400 shadow-sm m-2 bg-white hover:transform hover:scale-105 transition-transform duration-200 ease-in-out rounded-lg">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-sm text-gray-500">Status: {status}</p>
      <p className="text-sm text-gray-500">Author: {author}</p>
      <p className="text-sm text-gray-500">Created At: {createdAt}</p>
      <p className="text-sm text-gray-500">Created Date: {createdDate}</p>
      {updatedAt && (
        <p className="text-sm text-gray-500">Updated At: {updatedAt}</p>
      )}
      {updatedDate && (
        <p className="text-sm text-gray-500">Updated Date: {updatedDate}</p>
      )}
    </div>
  );
};

export default TaskCard;
