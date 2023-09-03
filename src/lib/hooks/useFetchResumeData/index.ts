import { EducationItem, getEducation } from "@/lib/entities/education";
import { Skills, getSkills } from "@/lib/entities/skills";
import { WorkExperience, getWorkExperience } from "@/lib/entities/work-experience";
import useFetchData, { FetchDataState, isDataAvailable } from "../useFetchData";

type ResumeData = {
  workExperience: WorkExperience[];
  education: EducationItem;
  skills: Skills;
};

export default function useFetchResumeData(): FetchDataState<ResumeData | null> {
  const workExperience = useFetchData(getWorkExperience);
  const education = useFetchData(getEducation);
  const skills = useFetchData(getSkills);

  const data: ResumeData | null =
    isDataAvailable(workExperience) && isDataAvailable(education) && isDataAvailable(skills)
      ? { education: education.data!, workExperience: workExperience.data!, skills: skills.data! }
      : null;

  return {
    isError: education.isError || workExperience.isError || skills.isError,
    isLoading: education.isLoading || workExperience.isLoading || skills.isLoading,
    data,
  };
}
