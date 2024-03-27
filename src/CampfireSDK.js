import * as rrweb from "rrweb";

class CampfireSDK {
	constructor() {
		this.init();
	}

	initRrweb() {
		console.log("init rrweb")
		if (window) {
			window.addEventListener("message", (e) => {
				// We want to retrieve the domain of the parent app's URL
				// Eventually, we'll want to check if the origin is https://feedback-interface.DOMAIN
				// for a layer of security.

				// Match (regexp) if origin is [https://(.+).feedback-interface]
				const validOriginRegExp = /https:\/\/feedback-interface\.(.*)/
				if (validOriginRegExp.test(e.origin)) {
					console.log("origin: ", e.origin)
					new rrweb.record({
						emit() {},
						recordCrossOriginIframes: true,
					})
				}
			})
		}
	}

	initCSSEditor() {
		document.addEventListener("mouseover", (e) => {
			e.target.style.border = "#9ecaed";
			e.target.style.boxShadow = "0 0 10px #9ecaed";
		})

		document.addEventListener("mouseout", (e) => {
			if (e.target !== document.body && e.target instanceof HTMLElement) {
				e.target.style.border = "";
				e.target.style.boxShadow =  "";
			}
		})

		document.addEventListener("click", (e) => {
			
		});
	}

	init() {
		this.initRrweb();
		// this.initCSSEditor();
	}
}

export default CampfireSDK;