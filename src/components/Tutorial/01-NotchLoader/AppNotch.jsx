import { useEffect, useRef, useState } from "react";
import Home from "./Home/Home";
import NotchLoader from "./NotchLoader/NotchLaoder";
import gsap from "gsap";

export default function AppNotch() {
  const [isLoader, setIsLoader] = useState(true);
  return (
    <>
      <Home />
      {isLoader && <NotchLoader setIsLoader={setIsLoader} />}
    </>
  );
}
