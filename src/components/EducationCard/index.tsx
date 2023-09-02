import { ReactElement } from "react";

import { EducationItemResponse } from "@/lib/entities/education";
import ContentfulJsx from "../ContentfulJsX";
import ResumeItemCard from "../ResumeItemCard";
import EducationMeta from "./EducationMeta";
import EducationTitle from "./EducationTitle";

type EducationCardProps = EducationItemResponse;

export default function EducationCard(props: EducationCardProps): ReactElement {
  return (
    <ResumeItemCard metaData={<EducationMeta {...props} />}>
      <EducationTitle degree={props.degree} />
      <ContentfulJsx
        richTextDocument={props.description}
        alignItems={"flex-start"}
        textAlign={"left"}
      />
    </ResumeItemCard>
  );
}
