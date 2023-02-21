import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../App.css";

function About() {
  return (
    <>
      <Navbar />
      <h1>About Me</h1>
      <div className="about">
        I am a Computer Engineering undergraduate from the Zakir Husain College
        of Engineering and Technology, Aligarh Muslim University. I am
        passionate about software development and have worked on several
        projects involving web development, application development, and other
        software-related solutions. I am an Open Source Enthusiast and am now
        leading the&nbsp;
        <Link
          to="https://gdsc.community.dev/zakir-husain-college-of-engineering-and-technology-aligarh/"
          target="_blank"
        >
          Google Developer Student Club, ZHCET
        </Link>
      </div>
      <div className="achievments">
        <h2>Achievements</h2>
        <div className="cards">
          <Card
            head="Android Study Jam - GDSC ZHCET & AMU"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis impedit dicta provident aspernatur ipsa, neque et delectus magni unde culpa natus laudantium molestias atque perspiciatis rem dolor nisi, mollitia velit ex pariatur fuga. Consequatur!"
            showBtn={true}
          />
          <Card
            head="M.A.Z.E. Web Development - Winner"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis impedit dicta provident aspernatur ipsa, neque et delectus magni unde culpa natus laudantium molestias atque perspiciatis rem dolor nisi, mollitia velit ex pariatur fuga. Consequatur!"
          />
          <Card
            head="M.A.Z.E. Competitive Programming - Winner"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis impedit dicta provident aspernatur ipsa, neque et delectus magni unde culpa natus laudantium molestias atque perspiciatis rem dolor nisi, mollitia velit ex pariatur fuga. Consequatur!"
          />
        </div>
        <div className="cards">
          {/* <Card
            head="Android Study Jam - GDSC ZHCET & AMU"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis impedit dicta provident aspernatur ipsa, neque et delectus magni unde culpa natus laudantium molestias atque perspiciatis rem dolor nisi, mollitia velit ex pariatur fuga. Consequatur!"
            showBtn={true}
          />
          <Card
            head="M.A.Z.E. Web Development - Winner"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis impedit dicta provident aspernatur ipsa, neque et delectus magni unde culpa natus laudantium molestias atque perspiciatis rem dolor nisi, mollitia velit ex pariatur fuga. Consequatur!"
          /> */}
          <Card
            head="Date-a-Thon (PROMETEO3.0 IIT Jodhpur) - 5th Rank"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis impedit dicta provident aspernatur ipsa, neque et delectus magni unde culpa natus laudantium molestias atque perspiciatis rem dolor nisi, mollitia velit ex pariatur fuga. Consequatur!"
          />
        </div>
      </div>
    </>
  );
}

export default About;
