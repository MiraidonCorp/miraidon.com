import React from "react";
import preloadGif from "../../images/preloader.gif";

const Preloader = () => {
	return (
		<div className="preloader-area" id="preloader">
			<div className="loader">
				<img src={preloadGif} alt="preloader" />
				<div className="waviy">
					<span>D</span>
					<span>O</span>
					<span>J</span>
					<span>I</span>
				</div>
			</div>
		</div>
	);
};

export default Preloader;
