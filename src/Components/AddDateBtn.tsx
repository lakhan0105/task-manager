import React from "react";
import calendarIcon from "../assets/icons/calender_icon.svg";
import moment from "moment";

const AddDateBtn: React.FC<{
  selectedDate: Date | null;
  onClick?: () => void;
}> = ({ selectedDate, onClick }) => {
  return (
    <button
      type="button"
      className="min-w-[98px] px-1 h-[30px] border border-black/20 rounded-xl flex items-center justify-center gap-1"
      onClick={onClick}
    >
      <img src={calendarIcon} alt="calendar icon not found" />
      <span className="text-xs font-semibold text-black/60">
        {selectedDate ? moment(selectedDate).calendar() : "Add Date"}
      </span>
    </button>
  );
};

export default AddDateBtn;
