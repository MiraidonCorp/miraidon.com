import React from "react";

const BackToTop = () => {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	React.useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<button
			type="button"
			className={`position-fixed text-center border-0 p-0 ${
				isVisible ? "show-top-btn" : "hide-top-btn"
			}`}
			id="backtotop"
			onClick={scrollToTop}
		>
			<i className="flaticon-chevron-3"></i>
		</button>
	);
};

export default BackToTop;
