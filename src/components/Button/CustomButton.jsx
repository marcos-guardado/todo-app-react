import { toTitleCase } from "../../utils/toTitleCase";
import "./CustomButton.css";

export default function CustomButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="custom-button">
      {toTitleCase(label)}
    </button>
  );
}
