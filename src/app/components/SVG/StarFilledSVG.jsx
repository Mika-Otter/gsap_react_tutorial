import * as React from "react";
const StarFilledSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    style={{ width: "100%", height: "100%", position: "absolute" }}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M11.098 1.854c.599-1.843 3.205-1.843 3.804 0l1.69 5.202a2 2 0 0 0 1.902 1.382h5.47c1.937 0 2.743 2.479 1.175 3.618l-4.424 3.215a2 2 0 0 0-.727 2.236l1.69 5.201c.599 1.843-1.51 3.375-3.078 2.236l-4.424-3.214a2 2 0 0 0-2.352 0L7.4 24.944c-1.568 1.14-3.677-.393-3.078-2.236l1.69-5.201a2 2 0 0 0-.726-2.237L.86 12.056c-1.568-1.14-.762-3.618 1.175-3.618h5.47a2 2 0 0 0 1.902-1.382l1.69-5.202Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={24}
        x2={-2}
        y1={-4}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#7CFF18" />
      </linearGradient>
    </defs>
  </svg>
);
export default StarFilledSVG;
