import {
  TaskBlockedColumn,
  TaskCompletedColumn,
  TaskInProgressColumn,
  TaskInReviewColumn,
  TaskNotStartedColumn,
} from "./task-column";

const TaskContainer = () => {
  return (
    <div className="w-full h-full lg:border border-gray-200 rounded lg:shadow-md overflow-hidden pb-10">
      <div className="lg:grid grid-cols-5 place-items-center p-4 bg-gray-100 border-b border-gray-200 hidden ">
        {taskHeadings.map((heading) => (
          <div key={heading.column} className="text-center">
            <h4>{heading.title}</h4>
          </div>
        ))}
      </div>
      <div className="overflow-auto h-full scrollbar lg:hidden text-center grid grid-cols-2 gap-10 ">
        <div>
          <h4 className="bg-gray-200 p-4 rounded-md">Planned</h4>
          <TaskNotStartedColumn />
        </div>
        <div>
          <h4 className="bg-gray-200 p-4 rounded-md">In Progress</h4>
          <TaskInProgressColumn />
        </div>

        <div>
          <h4 className="bg-gray-200 p-4 rounded-md">Blocked</h4>
          <TaskBlockedColumn />
        </div>
        <div>
          <h4 className="bg-gray-200 p-4 rounded-md">In Review</h4>
          <TaskInReviewColumn />
        </div>
        <div>
          <h4 className="bg-gray-200 p-4 rounded-md">Completed</h4>
          <TaskCompletedColumn />
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-5 place-items-center p-4 h-full">
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
