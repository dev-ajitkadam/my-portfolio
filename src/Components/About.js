import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "a web developer with a passion for creating innovative websites. As a dedicated coder, I actively participate in hackathons and coding challenges, constantly sharpening my skills. Alongside my love for coding, I enjoy playing cricket and indulging in esports games. My wanderlust fuels my desire for monthly outings with friends and family, creating cherished memories along the way. ",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Ajit Kadam" },
    { id: 2, title: "Email:", text: "kadamajit2002@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9309595586" },
    { id: 4, title: "Linkedin", text: "ajit-kadam-b542a6219" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              Feel free to get in touch with me using the contact information provided below. Whether you have a project in mind, want to collaborate, or simply have a question, I'm here to help. I value open communication and prompt responses, so feel confident reaching out. I look forward to connecting with you and discussing how we can work together to bring your ideas to life. Don't hesitate to drop me a line via email or give me a call. Let's create something amazing together!
              </div>
              <div className="about__info-p2">
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
