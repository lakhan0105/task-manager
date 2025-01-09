export interface TaskStatusInterface {
  id: number;
  name: string;
}

export interface InputRowData {
  userId: string | null;
  taskTitle: string;
  dueDate: Date | null;
  status: string | null;
  category: string | null;
}
