import { futureSkills } from "./futureSkills.js";
import { nanoid } from "@reduxjs/toolkit";
import List from "../../../common/List/index";

const FutureSkills = () => {
  const futureSkillsWithIndex = futureSkills.map((skill) => ({
    ...skill,
    id: nanoid(),
  }));

  return <List listContent={futureSkillsWithIndex} />;
};

export default FutureSkills;
