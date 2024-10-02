import * as React from "react";
import {
  PlasmicTableSearch,
  DefaultTableSearchProps
} from "./plasmic/vital_sync_hrm/PlasmicTableSearch";

import { TextInputRef } from "@plasmicapp/react-web";

export interface TableSearchProps extends DefaultTableSearchProps {
  // Feel free to add any additional props that this component should receive
}
function TableSearch_(props: TableSearchProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTableSearch.useBehavior<TableSearchProps>(
    props,
    ref
  );
  return <PlasmicTableSearch {...plasmicProps} />;
}

const TableSearch = React.forwardRef(TableSearch_);

export default Object.assign(
  TableSearch,

  {
    __plumeType: "text-input"
  }
);
