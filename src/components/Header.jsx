import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <img src="/logo.svg" alt="logo" />
      <Button className="flex gap-2 items-center">
        <Download className="h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default Header;
