import { useEffect } from "react";
import { AddTaskRow, Table } from "./index";
import { getTasks } from "../feature/tasks/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";

const ListView: React.FC = () => {
  const { currUserData } = useSelector((state: RootState) => state.authReducer);
  const { allTasks } = useSelector((state: RootState) => state.tasksReducer);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const userId = currUserData?.$id;
    if (userId) {
      dispatch(getTasks(userId));
    }
  }, [currUserData, dispatch]);

  // function to filter the to-do tasks
  const todo = allTasks?.filter((task) => {
    if (task.status === "to-do") {
      return task;
    }
  });

  // in-progress tasks data
  const inProgressData = allTasks?.filter((task) => {
    if (task.status === "in-progress") {
      return task;
    }
  });

  // completed tasks
  const completedData = allTasks?.filter((task) => {
    if (task.status === "completed") {
      return task;
    }
  });

  return (
    <section className="w-full list-view">
      {/* TABLES */}
      <Table title={"todo"} headerBg={"FAC3FF"} data={todo}>
        <AddTaskRow />
      </Table>
      <Table title={"progress"} headerBg={"85D9F1"} data={inProgressData} />
      <Table title={"completed"} headerBg={"CEFFCC"} data={completedData} />
    </section>
  );
};

export default ListView;
