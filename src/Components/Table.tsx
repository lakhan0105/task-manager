import { ReactNode, useState } from "react";
import arrowDown from "../assets/icons/chevron-down.svg";
import checkMark from "../assets/icons/checkmark.svg";
import moment from "moment";

interface TableComponentProps {
  title: string | null;
  headerBg: string | null;
  data: any[] | null | undefined;
  children?: ReactNode | null;
}

const Table: React.FC<TableComponentProps> = ({
  title,
  headerBg,
  data,
  children,
}) => {
  const [showContent, setShowContent] = useState<boolean>(true);

  // function to show/hide the tasks table content
  function toggleContent() {
    setShowContent((prev) => {
      return !prev;
    });
  }

  // set the height of the table content dynamically
  const height: string = showContent ? "min-h-[331px]" : "h-0";
  const angle: string = showContent ? "rotate-0" : "rotate-180";

  console.log(data);

  return (
    <div className="table w-full rounded-xl overflow-hidden mb-8">
      {/* table header */}
      <div
        className={`h-[46px] flex justify-between items-center px-2`}
        style={{ backgroundColor: `#${headerBg}` }}
      >
        <h2 className="capitalize">{title}</h2>
        <button onClick={toggleContent}>
          <img className={angle} src={arrowDown} alt="arrow down not found" />
        </button>
      </div>

      {/* table content */}
      <div className={`${height} relative bg-[#f1f1f1]`}>
        {/* add a task by clicking and filling the details in this component*/}
        {children}

        <>
          {data?.map((item) => {
            const dueDateStr = moment(item.dueDate).calendar();

            return (
              <div className="border-b flex py-4 text-sm font-medium pl-12">
                <div className="flex-1 flex items-center gap-1">
                  <img src={checkMark} alt="checkmark icon not found" />{" "}
                  <span className="mb-0.5">{item.taskTitle}</span>
                </div>
                <div className="flex-1">{dueDateStr}</div>
                <div className="flex-1  uppercase">
                  <span className="bg-[#DDDADD] p-1.5 rounded text-xs">
                    {item.status}
                  </span>
                </div>
                <div className="flex-1 ">{item.category}</div>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Table;
