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
    <div className="p-2  border-b border-gray-400 shadow-sm m-4">
      <h2 className="text-lg font-bold">{title}</h2>
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
