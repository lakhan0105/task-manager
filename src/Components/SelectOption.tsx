import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import plusIcon from "../assets/icons/add_icon.svg";
import type { TaskStatusInterface } from "../utils";

const SelectOption: React.FC<{
  options: TaskStatusInterface[];
  value: string | null;
  onChange: (newValue: string) => void;
}> = ({ options, value, onChange }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      {value === null ? (
        <ListboxButton className="border border-black/30 w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
          <img src={plusIcon} alt="not found" />
        </ListboxButton>
      ) : (
        <ListboxButton className="h-[30px] bg-[#DDDADD] capitalize px-2 rounded">
          {value}
        </ListboxButton>
      )}

      <ListboxOptions anchor="bottom">
        {options.map((option: TaskStatusInterface) => {
          return (
            <ListboxOption
              key={option.id}
              value={option.name}
              className="data-[focus]:bg-blue-100"
            >
              {option.name}
            </ListboxOption>
          );
        })}
      </ListboxOptions>
    </Listbox>
  );
};

export default SelectOption;
