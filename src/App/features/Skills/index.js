import {skills} from './skillsKnown.js';
import { nanoid } from '@reduxjs/toolkit';

const Skills = () => {
  const skillsWithIndex = skills.map((skill) => ({
    ...skill,
    id: nanoid(),
  }));

return (
  <div>
    {skillsWithIndex}
  </div>
);
};

export default Skills;