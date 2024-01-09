import { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Header.scss";

class Header extends Component {
  state = {
    active: false,
  };
  showMode = () => {
    this.setState((prevState) => {
      let darkmode = document.querySelector(".darkmode span"),
        lightmode = document.querySelector(".lightmode span"),
        body = document.querySelector("body");
      return {
        light: (lightmode.style.display = "block"),
        dark: (darkmode.style.display = "none"),
        body: body.classList.add("dark"),
        darkMode: (prevState.active = true),
      };
    });
  };
  hideMode = () => {
    this.setState((prevState) => {
      let darkmode = document.querySelector(".lightmode span"),
        lightmode = document.querySelector(".darkmode span"),
        body = document.querySelector("body");
      return {
        light: (lightmode.style.display = "block"),
        dark: (darkmode.style.display = "none"),
        body: body.classList.remove("dark"),
        darkMode: (prevState.active = false),
      };
    });
  };
  render() {
    const { active } = this.state;

    return (
      <header>
        <div className="header container">
          <h1>Where in the world?</h1>
          <div
            className="dark__light"
            onClick={active === false ? this.showMode : this.hideMode}
          >
            <div className="darkmode">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5532 11.815C8.66857 11.815 5.51929 8.92783 5.51929 
                  5.36821C5.51929 4.0253 5.96679 2.78158 6.73143 1.75C3.69036 2.69515 1.5 5.33122 1.5 8.43807C1.5 12.3385 4.94929 15.5 9.20357 15.5C12.5929 15.5 15.4696
                  13.4932 16.5 10.7045C15.375 11.4048 14.0161 11.815 12.5532 11.815Z"
                  fill="white"
                  stroke="#111517"
                  stroke-width="1.25"
                />
              </svg>
              <span>Dark Mode</span>
            </div>
            <div className="lightmode">
              <span>Light Mode</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
