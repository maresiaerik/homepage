import dynamic from "next/dynamic";
import React, { PropsWithChildren, ReactElement } from "react";

const NonSSRWrapper = (props: PropsWithChildren<any>): ReactElement => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
