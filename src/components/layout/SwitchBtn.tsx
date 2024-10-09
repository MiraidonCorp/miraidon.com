import * as React from "react"

const SwitchBtn = () => {
    const toggleDarkMode = () => {
        const body = document.getElementsByTagName("body")[0];
        const currentTheme = body.getAttribute("data-theme");

        if (currentTheme === "dark") {
            body.removeAttribute("data-theme");
        } else {
            body.setAttribute("data-theme", "dark");
        }
    };
    return (
        <div className="dark-light-switch-btn" onClick={toggleDarkMode}>
            <button className="switch-toggle" id="switch-toggle">
                <i className="bx bxs-moon"></i>
            </button>
        </div>
    );
};

export default SwitchBtn;