import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaNode,
} from "react-icons/fa";

import {
  SiJavascript
} from "react-icons/si";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "My SKILLS",
    text:
      "Following are some of technology I've worked in the past or currently working on.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "HTML",
      text:
        "Backbone of every thing I create on web. PS. I Love <Tags>",
    },
    {
      id: 2,
      icon: <FaCss3Alt className="commonIcons" />,
      heading: "CSS-3",
      text:
        "Positioning, Alligning and beautifying my HTML for all type of screens.",
    },
    {
      id: 3,
      icon: <SiJavascript className="commonIcons" />,
      heading: "JavaScript",
      text:
        "Simplest, coolest and my personal favourite since I've first printed 'Hello World'",
    },
    {
      id: 4,
      icon: <FaReact className="commonIcons" />,
      heading: "React JS",
      text:
        "Using most advance JS Framework for the coolest web and hybrid apps",
    },
    {
      id: 5,
      icon: <FaJava className="commonIcons" />,
      heading: "java",
      text:
        "Unlocking the power of Java: Building seamless solutions.",
    },
    {
      id: 6,
      icon: <FaNode className="commonIcons" />,
      heading: "Node JS",
      text:
        "Elevating web development with Node.js: Creating scalable and efficient solutions.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
