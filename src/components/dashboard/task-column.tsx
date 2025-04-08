import mockTasks from "../../data/mock-data";
import TaskCard from "./task-card";

const scrollStyle = "h-full overflow-auto scrollbar hover:bg-gray-100";

const TaskNotStartedColumn = () => {
  return (
    <div className={scrollStyle}>
      {mockTasks.map((task) => (
        <div key={task.title}>
          {task.status === "not-started" ? (
            <TaskCard
              title={task.title}
              description={task.description}
              status={task.status}
              author={task.author}
              createdAt={task.createdAt}
              createdDate={task.createdDate}
              updatedAt={task.updatedAt}
              updatedDate={task.updatedDate}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

const TaskInProgressColumn = () => {
  return (
    <div className={scrollStyle}>
      {mockTasks.map((task) => (
        <div key={task.title}>
          {task.status === "in-progress" ? (
            <TaskCard
              title={task.title}
              description={task.description}
              status={task.status}
              author={task.author}
              createdAt={task.createdAt}
              createdDate={task.createdDate}
              updatedAt={task.updatedAt}
              updatedDate={task.updatedDate}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

const TaskBlockedColumn = () => {
  return (
    <div className={scrollStyle}>
      {mockTasks.map((task) => (
        <div key={task.title}>
          {task.status === "blocked" ? (
            <TaskCard
              title={task.title}
              description={task.description}
              status={task.status}
              author={task.author}
              createdAt={task.createdAt}
              createdDate={task.createdDate}
              updatedAt={task.updatedAt}
              updatedDate={task.updatedDate}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

const TaskInReviewColumn = () => {
  return (
    <div className={scrollStyle}>
      {mockTasks.map((task) => (
        <div key={task.title}>
          {task.status === "review" ? (
            <TaskCard
              title={task.title}
              description={task.description}
              status={task.status}
              author={task.author}
              createdAt={task.createdAt}
              createdDate={task.createdDate}
              updatedAt={task.updatedAt}
              updatedDate={task.updatedDate}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

const TaskCompletedColumn = () => {
  return (
    <div className={scrollStyle}>
      {mockTasks.map((task) => (
        <div key={task.title}>
          {task.status === "completed" ? (
            <TaskCard
              title={task.title}
              description={task.description}
              status={task.status}
              author={task.author}
              createdAt={task.createdAt}
              createdDate={task.createdDate}
              updatedAt={task.updatedAt}
              updatedDate={task.updatedDate}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};
export {
  TaskNotStartedColumn,
  TaskInProgressColumn,
  TaskBlockedColumn,
  TaskInReviewColumn,
  TaskCompletedColumn,
};
