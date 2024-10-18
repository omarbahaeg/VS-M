import * as React from "react";
import {
  PlasmicCtCheckbox,
  DefaultCtCheckboxProps
} from "./plasmic/vital_sync_hrm/PlasmicCtCheckbox";

import { CheckboxRef } from "@plasmicapp/react-web";

export interface CtCheckboxProps extends DefaultCtCheckboxProps {
  // Feel free to add any additional props that this component should receive
}
function CtCheckbox_(props: CtCheckboxProps, ref: CheckboxRef) {
  const { plasmicProps, state } =
    PlasmicCtCheckbox.useBehavior<CtCheckboxProps>(props, ref);
  return <PlasmicCtCheckbox {...plasmicProps} />;
}

const CtCheckbox = React.forwardRef(CtCheckbox_);

export default Object.assign(
  CtCheckbox,

  {
    __plumeType: "checkbox",
    __plasmicFormFieldMeta: { valueProp: "isChecked" }
  }
);
