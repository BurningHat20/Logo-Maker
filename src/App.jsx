import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import { Button } from "./components/ui/button";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState();
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 ">
        <div className="md:col-span-2 border h-screen shadow-sm p-5">
          {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-3 bg-red-100">Icon Preview</div>
        <div className="">Ads Banner</div>
      </div>
    </>
  );
}

export default App;
