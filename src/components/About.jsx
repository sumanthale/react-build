// import { useState } from "react";
import UserImg from "../assets/image.png";

function About() {
  return (
    <>
      <section className="max-w-screen-md mx-auto" id="about">
        <h2 className="text-center mb-6 font-bold text-4xl">About Me..!</h2>

        <div className="flex flex-col gap-6 mx-auto w-full">
          <a href="" className="mx-auto">
            <img src={UserImg} alt="photo" className="w-60" />
          </a>
          <div className=" px-4">
            <p className="text-left text-lg">
              Enthusiastic web developer focused to develop websites and has 3
              years of experience by completing 5 cerifications in 2 companies
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
