import "./App.css";
import ImageCont from "./components/imageComp";
import Navbar from "./components/navbar";
import TabPanel from "./components/tabs";

export default function App() {
  return (
    <div>
      <Navbar />
      <ImageCont />
      <TabPanel />
    </div>
  );
}
