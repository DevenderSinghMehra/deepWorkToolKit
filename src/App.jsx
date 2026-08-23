import { useState } from "react";
import NavBar from "./components/NavBar";
import { Timer } from "./components/Timer";

function App() {
  return (
    <main className=" min-h-screen flex items-center justify-center bg-[#2A2A2A] font-sans text-white">
      {/* <NavBar /> */}
      <Timer />
    </main>
  );
}

export default App;
