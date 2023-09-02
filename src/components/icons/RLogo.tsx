import { Icon, IconProps } from "@chakra-ui/icon";
import { ReactElement } from "react";

export default function RLogo({ ...props }: IconProps): ReactElement {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" boxSize={10} {...props}>
      <linearGradient
        id="__u04104Xr4WevsSMNpCfa_CLvQeiwFpit4_gr1"
        x1="7.773"
        x2="29.818"
        y1="6.952"
        y2="27.783"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#bec1c4"></stop>
        <stop offset="1" stopColor="#939399"></stop>
      </linearGradient>
      <path
        fill="url(#__u04104Xr4WevsSMNpCfa_CLvQeiwFpit4_gr1)"
        d="M24,6C10.745,6,0,13.291,0,22.286s10.745,16.286,24,16.286s24-7.291,24-16.286S37.255,6,24,6 z M26.5,35C16.283,35,8,29.627,8,23s8.283-12,18.5-12S45,16.373,45,23S36.717,35,26.5,35z"
      ></path>
      <linearGradient
        id="__u04104Xr4WevsSMNpCfb_CLvQeiwFpit4_gr2"
        x1="25.124"
        x2="32.304"
        y1="14.251"
        y2="35.285"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".003" stopColor="#008ded"></stop>
        <stop offset="1" stopColor="#0061a7"></stop>
      </linearGradient>
      <path
        fill="url(#__u04104Xr4WevsSMNpCfb_CLvQeiwFpit4_gr2)"
        d="M39.051,33.469 c-0.578-0.945-1.437-1.669-2.442-2.105c3.401-0.841,5.926-3.904,5.926-7.564c0-4.307-3.493-7.8-7.8-7.8H20.001v26h6.933V31.6h1.955 c0.967,0,1.856,0.525,2.321,1.373L36.175,42h8.093L39.051,33.469z M26.935,21.2h6.067c1.435,0,2.6,1.165,2.6,2.6 s-1.165,2.6-2.6,2.6h-6.067V21.2z"
      ></path>
    </Icon>
  );
}
