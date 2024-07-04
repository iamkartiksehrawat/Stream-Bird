"use client";

import { Button } from "@/components/ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { expand, collapse } from "@/store/slices/usesidebar";
import { useMediaQuery } from "usehooks-ts";

import { CustomToolTip } from "@/components/customtooltip";

const ToggleSidebar = () => {
  const dispatch = useDispatch();
  const ismobile = useMediaQuery("(max-width: 640px)");

  const collapsed = useSelector(
    (state: RootState) => state.usesidebar.collapsed
  );

  const handletoggle = () => {
    if (collapsed) {
      dispatch(expand());
    } else {
      dispatch(collapse());
    }
  };
  return (
    <div>
      {ismobile ? null : (
        <CustomToolTip
          placement="bottom"
          asChild
          content={collapsed ? "Expand" : "Collapse"}
        >
          <Button variant="ghost" size="sm" onClick={handletoggle}>
            <IconMenu2 />
          </Button>
        </CustomToolTip>
      )}
    </div>
  );
};

export default ToggleSidebar;
