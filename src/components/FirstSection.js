import React from "react";
import "./FirstSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function FirstSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  imgStart,
  alt,
}) {
  return (
    <div>
      <div className={ lightBg ? "home__first-section" : "home__first-section darkBg" }>
        <div className="container">
            <div className="row home__first-row" style={{ display: "flex", flexDirection: imgStart === "start" ? "row-reverse" : "row" }}>
                
                <div className="col">
                    <div className="home__first-text-wrapper">
                         <div className="top-line">{topLine}</div> 
                         <h1 className={ lightText ? "heading" : "heading dark"}>{headline}</h1>
                         <p className={ lightTextDesc ? "home__first-subtitle" : "home__fist-subtitle dark"}>{description}</p>
                    <Link to='/'>
                        <Button buttonSize="btn--wide" buttonColor="blue">{buttonLabel}</Button>
                    </Link>
                    </div>
                </div>

                <div className="col">
                    <div className="home__first-img-wrapper">
                        <img src={img} alt={alt} className="home__first-img"/>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default FirstSection;
