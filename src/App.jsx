import Landing from "./app/components/Landing/Landing";
import "./app/styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNotch from "./Tutorial/01-NotchLoader/AppNotch";
import AppClipPathLoader from "./Tutorial/02-ClipPathLoader/AppClipPathLoader";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tutorial/NotchLoader" element={<AppNotch />} />
          <Route
            path="/tutorial/ClipPathLoader"
            element={<AppClipPathLoader />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
