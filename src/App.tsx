import { Body } from "./pages";
import { SideBar } from "./templates";
import bodyData from "./pages/bodyData";
import sideBarData from "./templates/SideBar/sideBarData";
import "./App.scss";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <SideBar data={sideBarData} />
      <Body data={bodyData} />
    </div>
  );
};

export default App;
