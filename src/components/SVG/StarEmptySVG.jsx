import * as React from "react";
const StarEmptySVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    style={{ width: "100%", height: "100%", position: "absolute" }}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeOpacity={0.37}
      d="m14.427 2.009 1.69 5.201a2.5 2.5 0 0 0 2.377 1.728h5.47c1.453 0 2.057 1.86.881 2.713l-4.424 3.215a2.5 2.5 0 0 0-.909 2.795l1.69 5.202c.45 1.382-1.132 2.53-2.308 1.677l-4.424-3.215a2.5 2.5 0 0 0-2.94 0L7.106 24.54c-1.176.854-2.758-.295-2.308-1.677l1.69-5.202a2.5 2.5 0 0 0-.909-2.795l-4.424-3.215c-1.176-.854-.572-2.713.881-2.713h5.47A2.5 2.5 0 0 0 9.883 7.21l1.69-5.201c.45-1.382 2.405-1.382 2.854 0Z"
    />
  </svg>
);
export default StarEmptySVG;
