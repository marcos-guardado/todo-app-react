import { toTitleCase } from "../../utils/toTitleCase";

export function Header({ title }) {
  return (
    <div>
      <h1>{toTitleCase(title)}</h1>
    </div>
  );
}
