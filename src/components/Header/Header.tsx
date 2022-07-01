import React from "react";
import { toTitleCase } from "../../utils/toTitleCase";

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <h1>{toTitleCase(title)}</h1>
    </div>
  );
};
