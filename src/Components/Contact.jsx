import React from "react";
import { Link } from "react-router-dom";
// import linkedin from "../assets/img/linkedin.svg";
// import github from "../assets/img/github.svg";
// import discord from "../assets/img/discord.svg";
// import facebook from "../assets/img/facebook.svg";
// import instagram from "../assets/img/instagram.svg";
// import spotify from "../assets/img/spotify.svg";
// import telegram from "../assets/img/telegram.svg";
// import twitter from "../assets/img/twitter.svg";
// import Navbar from "./Navbar";
import "../App.css";

function Contact() {
  return (
    <>
      <Navbar />
      <h1>Contact Me!</h1>
      <div className="intro">
        Here are the links to my social media accounts. Feel free to contact me
        anytime as per your requirement
      </div>
      {/* <div className="socials">
        <ul>
          <li>
            <Link to="https://www.linkedin.com/in/sumirvats/" target="_blank">
              <img src={linkedin} alt="LinkedIn" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/SumirVats2003" target="_blank">
              <img src={github} alt="GitHub" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/sumirvats003/" target="_blank">
              <img src={instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/profile.php?id=100076179461405"
              target="_blank"
            >
              <img src={facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/SumirVats" target="_blank">
              <img src={twitter} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link
              to="https://discordapp.com/users/845655120846520350"
              target="_blank"
            >
              <img src={discord} alt="Discord" />
            </Link>
          </li>
          <li>
            <Link to="https://t.me/dont_AskMyName" target="_blank">
              <img src={telegram} alt="Telegram" />
            </Link>
          </li>
          <li>
            <Link
              to="https://open.spotify.com/user/7nm6pjcwga95skj35yc1tjn5x?si=zzjf94_hRSiB3xLVC6B8ig"
              target="_blank"
            >
              <img src={spotify} alt="Spotify" />
            </Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default Contact;
