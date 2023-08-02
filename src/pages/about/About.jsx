import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  // ProfileImg,
} from "./About.style";
// import profile from "../../assets/about.png";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";

const About = () => {
  return (
    <AboutContainer>
      {/* <ProfileImg src={profile} alt="profile" /> */}
      <InfoContainer>
        <h2>Hi, I'm Mikdat</h2>
        <h3>
          I'm currently learning different frontend development languages.
        </h3>
        <h4>
          I already know JavaScript, ReactJS, Next.js, React Native,
          Node.js, and Python.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
        <IconContainer>
          {iconData.map(item => (
            <a href={item.href}>
              <Icon key={item.icon} {...item} />
            </a>
          ))}
        </IconContainer>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
