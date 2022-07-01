export interface ICustomInput {
  taskText: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  buttonText?: string;
  label?: string;
  onClick?: (e: any) => void;
}
