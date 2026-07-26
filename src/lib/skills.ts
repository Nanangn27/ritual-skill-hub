import { mockSkills } from "@/data/mockSkills";

export function getAllSkills() {
  return mockSkills;
}

export function getSkillById(id: string | number) {
  return mockSkills.find(
    (skill) => String(skill.id) === String(id)
  );
}

export function getRelatedSkills(id: string | number, limit = 3) {
  return mockSkills
    .filter((skill) => String(skill.id) !== String(id))
    .slice(0, limit);
}
