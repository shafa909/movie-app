import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MovieContainer from "./components/MovieContainer";

const drawerWidth = 275;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="App">
      <SideBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <MovieContainer 
       drawerWidth={drawerWidth}
       handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     {/* <div className="main-container">
//       {data.map(function (item, i) {
//         return <Card data={item} />;
//       })}
//     </div> */}
//   </div>
// );

