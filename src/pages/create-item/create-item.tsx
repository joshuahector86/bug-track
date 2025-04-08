import Page from "../../components/layout/page";
import TaskForm from "../../forms/task-form";

const CreateItem = () => {
  return (
    <Page>
      <TaskForm
        onSubmit={() => {
          alert("create form submission to an actual API");
        }}
      />
    </Page>
  );
};

export default CreateItem;
