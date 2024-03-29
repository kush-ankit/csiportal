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
  {
    img: "https://firebasestorage.googleapis.com/v0/b/csi-srmcem.appspot.com/o/Aditya%20Verma.png?alt=media&token=f71b1e18-5da7-47e8-a4f2-8d6699696b47",
    name: "ADITYA VERMA",
    post: "✪ DESIGNER",
  },


];
function Team() {
  return (
    <div name='Team' className="main w-full h-fit flex flex-col justify-evenly pb-20 md:pb-0 bg-slate-200 bg-opacity-30 overflow-hidden md:overflow-visible">
      <div className="header">
        <img
          src="https://i.ibb.co/yhtxD0n/CSIsrmcem-1.png"
          alt="CSIsrmcem-1"
          className="scale-150 h-40"
        />
      </div>
      <div className="team-list ">
        <ul class="grid grid-cols-2 md:grid-cols-4 gap-5">
          {teamList.map((obj) => {
            return <li ><TeamCard img={obj.img} name={obj.name} post={obj.post} /></li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Team;
