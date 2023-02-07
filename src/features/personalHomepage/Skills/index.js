import { skills } from "./skills.js";
import { nanoid } from "@reduxjs/toolkit";
import List from "../../../common/List/index.js";

const Skills = () => {
  const skillsWithIndex = skills.map((skill) => ({
    ...skill,
    id: nanoid(),
  }));

  return <List listContent={skillsWithIndex} />;
};

export default Skills;
