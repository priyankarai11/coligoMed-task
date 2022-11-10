/** @format */
import { useContext } from "react";
import { data } from "../../features/HomePage/context";

function ContextComp() {
  const getValue = useContext(data);
  TAGNAME.map((ele) => {
    if (ele.tag === "BaseLine") {
      ele.getValue = getValue.BaseLine;
    }
    if (ele.tag === "MyLifeCare") {
      ele.getValue = getValue.MyLifeCare;
    }
  });
}

// TAGNAME.map((ele) => (ele.getValue = getValue.MyLifeCare));

export { ContextComp };

export const TAGNAME = [
  {
    id: 1,
    tag: "BaseLine",
    header: "BaseLine",
    getValue: "",
  },
  {
    id: 2,
    tag: "MyLifeCare",
    header: "MyLifeCare Date",
    getValue: "",
  },
];
