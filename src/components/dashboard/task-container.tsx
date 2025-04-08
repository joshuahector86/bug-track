import {
  TaskBlockedColumn,
  TaskCompletedColumn,
  TaskInProgressColumn,
  TaskInReviewColumn,
  TaskNotStartedColumn,
} from "./task-column";

const TaskContainer = () => {
  return (
    <div className="w-full h-full border border-gray-200 rounded shadow-md">
      <div className="grid grid-cols-5 place-items-center  p-4 bg-gray-100 border-b border-gray-200">
        {taskHeadings.map((heading) => (
          <div key={heading.column} className="text-center">
            <h2 className="text-lg font-bold">{heading.title}</h2>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 place-items-start p-4">
        <TaskNotStartedColumn />
        <TaskInProgressColumn />
        <TaskBlockedColumn />
        <TaskInReviewColumn />
        <TaskCompletedColumn />
      </div>
    </div>
  );
};

const taskHeadings = [
  { title: "Planned", column: "not-started" },
  { title: "In Progress", column: "in-progress" },
  { title: "Blocked", column: "blocked" },
  { title: "In Review", column: "in-review" },
  { title: "Completed", column: "completed" },
];

export default TaskContainer;
