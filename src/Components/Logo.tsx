import taskIcon from "../assets/icons/task.svg";

const Logo: React.FC = () => {
  return (
    <div className="flex items-end gap-0.5 mb-[7px]">
      <img src={taskIcon} alt="task icon not found" />
      <h2 className="text-2xl font-bold text-[#7B1984]">TaskBuddy</h2>
    </div>
  );
};

export default Logo;
