import React, { useState, FormEvent, ChangeEvent } from "react";

// Import the interface if it's defined elsewhere
interface TaskCardProps {
  title: string;
  description: string;
  status: string;
  author: string;
  createdAt: string;
  createdDate: string;
  updatedAt?: string;
  updatedDate?: string;
}

interface ValidationErrors {
  title?: string;
  description?: string;
  status?: string;
  author?: string;
  createdAt?: string;
  createdDate?: string;
}

interface TaskFormProps {
  initialValues?: TaskCardProps;
  onSubmit: (task: TaskCardProps) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialValues, onSubmit }) => {
  const defaultValues: TaskCardProps = {
    title: "",
    description: "",
    status: "Not Started",
    author: "",
    createdAt: "",
    createdDate: "",
  };

  const [task, setTask] = useState<TaskCardProps>(
    initialValues || defaultValues
  );
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const statusOptions = [
    "Not Started",
    "In Progress",
    "Pending",
    "Completed",
    "Recurring",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));

    // Clear error for this field if user is typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    if (!task.title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    } else if (task.title.length > 100) {
      newErrors.title = "Title is too long (max 100 characters)";
      isValid = false;
    }

    if (!task.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    if (!task.author.trim()) {
      newErrors.author = "Author is required";
      isValid = false;
    }

    if (!task.status) {
      newErrors.status = "Status is required";
      isValid = false;
    }

    if (!task.createdAt) {
      newErrors.createdAt = "Created time is required";
      isValid = false;
    } else {
      // Basic time format validation (HH:MM)
      const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
      if (!timeRegex.test(task.createdAt)) {
        newErrors.createdAt = "Invalid time format (use HH:MM)";
        isValid = false;
      }
    }

    if (!task.createdDate) {
      newErrors.createdDate = "Created date is required";
      isValid = false;
    } else {
      // Basic date validation (YYYY-MM-DD)
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(task.createdDate)) {
        newErrors.createdDate = "Invalid date format (use YYYY-MM-DD)";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      // If editing an existing task, preserve the original creation timestamps
      // and update the updated timestamps
      if (initialValues) {
        const updatedTask = {
          ...task,
          createdAt: initialValues.createdAt,
          createdDate: initialValues.createdDate,
          updatedAt: new Date().toTimeString().slice(0, 5), // HH:MM format
          updatedDate: new Date().toISOString().slice(0, 10), // YYYY-MM-DD format
        };
        onSubmit(updatedTask);
      } else {
        // For new tasks, use the input creation timestamps
        onSubmit(task);
      }
    }
  };

  // Set current date and time as default when creating a new task
  const setCurrentDateTime = () => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
    const currentDate = now.toISOString().slice(0, 10); // YYYY-MM-DD format

    setTask((prevTask) => ({
      ...prevTask,
      createdAt: currentTime,
      createdDate: currentDate,
    }));
  };

  return (
    <div className="task-form-container">
      <h2>{initialValues ? "Edit Task" : "Create New Task"}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="title">Title*</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            className={errors.title && submitted ? "error" : ""}
          />
          {errors.title && submitted && (
            <div className="error-message">{errors.title}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description*</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            rows={4}
            className={errors.description && submitted ? "error" : ""}
          />
          {errors.description && submitted && (
            <div className="error-message">{errors.description}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="status">Status*</label>
          <select
            id="status"
            name="status"
            value={task.status}
            onChange={handleChange}
            className={errors.status && submitted ? "error" : ""}
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.status && submitted && (
            <div className="error-message">{errors.status}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="author">Author*</label>
          <input
            type="text"
            id="author"
            name="author"
            value={task.author}
            onChange={handleChange}
            className={errors.author && submitted ? "error" : ""}
          />
          {errors.author && submitted && (
            <div className="error-message">{errors.author}</div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="createdAt">Created Time*</label>
            <input
              type="text"
              id="createdAt"
              name="createdAt"
              placeholder="HH:MM"
              value={task.createdAt}
              onChange={handleChange}
              className={errors.createdAt && submitted ? "error" : ""}
            />
            {errors.createdAt && submitted && (
              <div className="error-message">{errors.createdAt}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="createdDate">Created Date*</label>
            <input
              type="text"
              id="createdDate"
              name="createdDate"
              placeholder="YYYY-MM-DD"
              value={task.createdDate}
              onChange={handleChange}
              className={errors.createdDate && submitted ? "error" : ""}
            />
            {errors.createdDate && submitted && (
              <div className="error-message">{errors.createdDate}</div>
            )}
          </div>
        </div>

        {!initialValues && (
          <button
            type="button"
            onClick={setCurrentDateTime}
            className="secondary-button"
          >
            Use Current Date & Time
          </button>
        )}

        {initialValues && (
          <div className="form-row">
            <div className="form-group read-only">
              <label>Last Updated Time</label>
              <input
                type="text"
                value={task.updatedAt || "Not updated yet"}
                readOnly
              />
            </div>

            <div className="form-group read-only">
              <label>Last Updated Date</label>
              <input
                type="text"
                value={task.updatedDate || "Not updated yet"}
                readOnly
              />
            </div>
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="primary-button">
            {initialValues ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
