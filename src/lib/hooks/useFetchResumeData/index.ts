import { EducationItem, getEducation } from "@/lib/entities/education";
import { WorkExperience, getWorkExperience } from "@/lib/entities/work-experience";
import useFetchData, { FetchDataState, isDataAvailable } from "../useFetchData";

type ResumeData = {
  workExperience: WorkExperience[];
  education: EducationItem;
};

export default function useFetchResumeData(): FetchDataState<ResumeData | null> {
  const workExperience = useFetchData(getWorkExperience);
  const education = useFetchData(getEducation);

  const data: ResumeData | null =
    isDataAvailable(workExperience) && isDataAvailable(education)
      ? { education: education.data!, workExperience: workExperience.data! }
      : null;

  return {
    isError: education.isError || workExperience.isError,
    isLoading: education.isLoading || workExperience.isLoading,
    data,
  };
}
