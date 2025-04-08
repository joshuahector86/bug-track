import TaskContainer from "../../components/dashboard/task-container";
import Button from "../../components/general/button";
import SearchBar from "../../components/general/search-bar";
import Page from "../../components/layout/page";

const Dashboard = () => {
  return (
    <Page className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Button className="max-w-[10rem]" link="create-item">
          Create New Task
        </Button>
        <SearchBar placeholder="Search tasks..." />
      </div>
      <TaskContainer />
    </Page>
  );
};

export default Dashboard;
