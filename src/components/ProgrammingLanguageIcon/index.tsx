import { IconProps } from "@chakra-ui/icon";
import { ReactElement } from "react";

import type { ProgrammingLanguage } from "@/lib/entities/project";
import CssLogo from "../icons/CssLogo";
import NextJsLogo from "../icons/NextjsLogo";
import PythonLogo from "../icons/PythonLogo";
import RLogo from "../icons/RLogo";
import ReactLogo from "../icons/ReactLogo";
import ReduxLogo from "../icons/ReduxLogo";
import TypescriptLogo from "../icons/TypescriptLogo";

type LanguageToIconMap = Record<ProgrammingLanguage, ({ ...props }: IconProps) => ReactElement>;

const languageToIconMap: LanguageToIconMap = {
  typescript: TypescriptLogo,
  nextjs: NextJsLogo,
  react: ReactLogo,
  css: CssLogo,
  python: PythonLogo,
  r: RLogo,
  redux: ReduxLogo,
};

type ProgrammingLanguageIconProps = IconProps & {
  programmingLanguage: ProgrammingLanguage;
};

export default function ProgrammingLanguageIcon({
  programmingLanguage,
  ...props
}: ProgrammingLanguageIconProps): ReactElement | null {
  const Logo = languageToIconMap[programmingLanguage];

  if (Logo === undefined) {
    return null;
  }

  return <Logo {...props} />;
}
