import React from "react";
import TeamCard from "../components/TeamCard";
import "./Team.css";

const teamList = [
  {
    img: "https://i.ibb.co/DQNtR85/Untitled-design-2.png",
    name: "HARIOM DWIVEDI",
    post: "✪ CHAIRPERSON",
  },
  {
    img: "https://i.ibb.co/HTsPwc4/aditya-1.png",
    name: "ADITYA KUMAR SINGH",
    post: "✪ VICE-CHAIRPERSON",
  },
  {
    img: "https://i.ibb.co/rKB0vZp/divyansh.png",
    name: "DIVYANSH SRIVASTAVA",
    post: "✪ SECRETARY",
  },
  {
    img: "https://i.ibb.co/6Yh3n0W/ketan.png",
    name: "KETAN KUMAR",
    post: "✪ VICE-SECRETARY",
  },
  {
    img: "https://i.ibb.co/RBQpygq/farhana.png",
    name: "FARHANA KHAN",
    post: "✪ TREASURER",

  },
  {
    img: "https://i.ibb.co/SwRjTxk/167212281343-removebg.png",
    name: "ANKIT KUSHWAHA",
    post: "✪ WEB-MASTER",
  },


];
function Team() {
  return (
    <div name='Team' className="main w-full md:h-screen h-fit flex flex-col justify-evenly ">
      <div className="header">
        <a href="index.html">
          <img
            src="https://i.ibb.co/yhtxD0n/CSIsrmcem-1.png"
            alt="CSIsrmcem-1"
            className="scale-150 h-60"
          />
        </a>
      </div>
      <div className="team-list ">
        <ul class="flex flex-col md:flex-row">
          {teamList.map((obj) => {
            return <li ><TeamCard img={obj.img} name={obj.name} post={obj.post} /></li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Team;
