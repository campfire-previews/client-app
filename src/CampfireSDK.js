class CampfireSDK {
	constructor() {

	}

	static addrrwebCDNLinks() {
		const RRWEB_STYLESHEET_URL = "https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.css";
		const RRWEB_CDN_URL = "https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.js"

		const RRWEB_STYLESHEET_ELEMENT = document.createElement("LINK");
		RRWEB_STYLESHEET_ELEMENT.setAttribute("rel", "stylesheet");
		RRWEB_STYLESHEET_ELEMENT.setAttribute("href", RRWEB_STYLESHEET_URL);

		const RRWEB_CDN_ELEMENT = document.createElement("SCRIPT");
		RRWEB_CDN_ELEMENT.setAttribute("src", RRWEB_CDN_URL);

		document.head.appendChild(RRWEB_STYLESHEET_ELEMENT)
		document.head.appendChild(RRWEB_CDN_ELEMENT)
	}

	static addrrwebPlayerCDNLinks() {
		const RRWEB_PLAYER_STYLESHEET_URL = "https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/style.css"
		const RRWEB_PLAYER_CDN_URL = "https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/index.js";

		const RRWEB_PLAYER_STYLESHEET_ELEMENT = document.createElement("LINK");
		RRWEB_PLAYER_STYLESHEET_ELEMENT.setAttribute("rel", "stylesheet");
		RRWEB_PLAYER_STYLESHEET_ELEMENT.setAttribute("href", RRWEB_PLAYER_STYLESHEET_URL);

		const RRWEB_PLAYER_CDN_ELEMENT = document.createElement("SCRIPT");
		RRWEB_PLAYER_CDN_ELEMENT.setAttribute("src", RRWEB_PLAYER_CDN_URL);

		
		document.head.appendChild(RRWEB_PLAYER_STYLESHEET_ELEMENT)
		document.head.appendChild(RRWEB_PLAYER_CDN_ELEMENT)
	}

	static addCDNLinks() {
		this.addrrwebCDNLinks();
		this.addrrwebPlayerCDNLinks();
	}

	static init() {
		this.addCDNLinks();
		if (window) {
			window.addEventListener("message", (e) => {
				console.log(e.data)
				// We want to retrieve the domain of the parent app's URL
				// Eventually, we'll want to check if the origin is https://feedback-interface.DOMAIN
				// for a layer of security.
				if (e.origin === "http://localhost:5173") {
					new rrweb.record({
						emit() {},
						recordCrossOriginIframes: true,
					})
				}
			})
		}
	}
}

export default CampfireSDK;