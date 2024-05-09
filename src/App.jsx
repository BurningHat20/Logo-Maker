import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => console.log(value)} />
        </div>
        <div className="ml-64">body</div>
      </div>
    </>
  );
}

export default App;
