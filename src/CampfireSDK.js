import * as rrweb from "rrweb";

class CampfireSDK {
	constructor() {

	}

	static init() {
		if (window) {
			window.addEventListener("message", (e) => {
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