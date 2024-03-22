import { useState, useEffect, useRef } from "react";
import campfireLogo from "/campfire-no-bg.png";
import campfireTitle from "/campfire-title.png";
import "./App.css";
import CampfireSDK from "./CampfireSDK";

const gradients = [
	"redOrange", "bluePurple", "yellowBlue", "dark"
]

function App() {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		CampfireSDK.init();
	}, [])

	const changeBackground = () => {
		setIndex(prevState => (prevState + 1) % gradients.length);
		const gradient = gradients[index];

		document.body.setAttribute("class", gradient);
	}

  return (
    <>
      <div id="app">
        <img onClick={changeBackground} src={campfireLogo} className="logo" alt="campfire logo" />
        <h1>
          open-source self-hosted collaborative deploy previews
        </h1>
      </div>
    </>
  );
}

export default App;
