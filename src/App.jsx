import { useState, useEffect } from "react";
import campfireLogo from "/campfire.png";
import "./App.css";
import CampfireSDK from "./CampfireSDK";

function App() {
	useEffect(() => {
		CampfireSDK.init();
	}, [])

  return (
    <>
      <div>
        <a href="https://github.com/campfire-previews/campfire-app" target="_blank">
          <img src={campfireLogo} className="logo" alt="campfire logo" />
        </a>
        <h1>
          open-source self-hosted collaborative deploy previews
        </h1>
      </div>
    </>
  );
}

export default App;
