import { useState } from "react";
import enterSvg from "../assets/icons/enter.svg";
import AddDateBtn from "./AddDateBtn";
import SelectOption from "./SelectOption";
import { InputRowData, TaskStatusInterface } from "../utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addTask } from "../feature/tasks/taskSlice";
import toast from "react-hot-toast";

const AddTaskRow: React.FC = () => {
  const { currUserData } = useSelector((state: RootState) => state.authReducer);
  console.log(currUserData);
  const dispatch = useDispatch<AppDispatch>();

  // state to store the inputRow where we can add the input details to create a task
  const [showInputRow, setShowInputRow] = useState<boolean>(false);

  const taskStatus: TaskStatusInterface[] = [
    { id: 1, name: "to-do" },
    { id: 2, name: "in-progress" },
    { id: 3, name: "completed" },
  ];

  const taskCategory: TaskStatusInterface[] = [
    { id: 1, name: "work" },
    { id: 2, name: "personal" },
  ];

  const initialInputRowData: InputRowData = {
    userId: currUserData ? currUserData.$id : null,
    taskTitle: "",
    dueDate: new Date(),
    status: null,
    category: null,
  };

  const [inputRowData, setInputRowData] =
    useState<InputRowData>(initialInputRowData);

  const handleTaskStatusChange = (newStatus: string) => {
    setInputRowData((prev) => {
      return { ...prev, status: newStatus };
    });
  };

  const handleTaskCategoryChange = (newCategory: string) => {
    setInputRowData((prev) => {
      return { ...prev, category: newCategory };
    });
  };

  const handleDueDateChange = (date: Date | null) => {
    setInputRowData((prev) => {
      return { ...prev, dueDate: date };
    });
  };

  // shows the input row (where we take the task details from the user)
  function handleShowInputRow() {
    setShowInputRow(true);
  }

  // clears the input form data and hides the input row
  function handleCancelInputRow() {
    setShowInputRow(false);
  }

  // function to handleAddTask
  async function handleAddTask() {
    try {
      await dispatch(addTask(inputRowData));
      console.log("hello");
      toast.success("added successfully");
    } catch (error) {
      toast.error("Failed to add task!");
    }
  }

  // css dynamic classes for controlling the input row
  const inputRowHeight: string = showInputRow
    ? "h-[147px] pt-5"
    : "h-[0px] overflow-hidden p-0";

  return (
    <div className="border-b">
      <div className="py-3 border-b border-black/10">
        {/* button to show the input row to add a task */}
        <button
          className="ml-10 uppercase text-sm font-bold"
          onClick={handleShowInputRow}
        >
          + add task
        </button>
      </div>

      {/* row to take the task input information when add task is clicked */}
      <div className={`flex items-start ml-14 ${inputRowHeight}`}>
        <div className="flex-1">
          {/* TASK TITLE INPUT */}
          <input
            type="text"
            placeholder="Task Title"
            className="bg-transparent text-sm outline-none"
            onChange={(e) => {
              setInputRowData((prev) => {
                return { ...prev, taskTitle: e.target.value };
              });
            }}
          />

          {/* buttons container */}
          <div className="text-sm mt-8 flex items-center gap-5">
            {/* ADD TASK */}
            <button
              className="bg-[#7B1984] uppercase text-white font-bold flex items-center justify-center gap-1 text-sm w-[84px] h-[30px] px-2 rounded-3xl"
              onClick={handleAddTask}
            >
              <span>add</span> <img src={enterSvg} alt="enter svg not found" />
            </button>

            <button
              className="uppercase font-bold"
              onClick={handleCancelInputRow}
            >
              cancel
            </button>
          </div>
        </div>

        {/* DATE INPUT */}
        <div className="flex-1">
          <DatePicker
            showTimeSelect
            selected={inputRowData.dueDate}
            onChange={handleDueDateChange}
            customInput={<AddDateBtn selectedDate={inputRowData.dueDate} />}
          />
        </div>

        {/* TASK STATUS */}
        <div className="flex-1 relative">
          <SelectOption
            options={taskStatus}
            value={inputRowData.status}
            onChange={handleTaskStatusChange}
          />
        </div>

        {/* TASK CATEGORY */}
        <div className="flex-1">
          <SelectOption
            options={taskCategory}
            value={inputRowData.category}
            onChange={handleTaskCategoryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddTaskRow;
