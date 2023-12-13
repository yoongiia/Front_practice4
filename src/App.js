import React from "react"
import Content from "../src/components/Content.js"
import Footer from "../src/components/Footer.js"
import Header from "./components/Header" 
import SideBar from "../src/components/SideBar.js"
function App() {
  return (
    <>
    
     <Header title="Header"/>
     <div style={{display: "flex", flexDirection:"row", width:"100%", height:"500px"}}>
        <SideBar title="SideBar"/>
        <Content title="Content"/>
     </div>
     <Footer title="Footer"/>
     
    </>

  );
}

export default App;
