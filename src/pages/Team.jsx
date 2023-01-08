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
    post: "✪ SECRATRY",
  },
  {
    img: "https://i.ibb.co/6Yh3n0W/ketan.png",
    name: "KETAN KUMAR",
    post: "✪ VICE-SECRATRY",
  },
  {
    img: "https://i.ibb.co/RBQpygq/farhana.png",
    name: "FARHANA KHAN",
    post: "✪ TREASURER",
    
  },
  {
    img: "https://i.ibb.co/pxvxmx2/ankit.png",
    name: "ANKIT KUSHWAHA",
    post: "✪ WEB-MASTER",
  },
  

];
function Team() {
  return (
    <div className="main ">
      <div className="header">
        <a href="index.html">
          <img
            src="https://i.ibb.co/yhtxD0n/CSIsrmcem-1.png"
            alt="CSIsrmcem-1"
          />
        </a>
      </div>
      <div className="team-list">
      <ul class="flex flex-wrap">
      {teamList.map((obj) => {
        return <li ><TeamCard  img={obj.img} name={obj.name} post={obj.post} /></li>;
      })}
      </ul>
      </div>
    </div>
  );
}

export default Team;
