import React from "react";
import "./InputElement.css";
import avatarMan from "../assets/avatar-man.svg";
import avatarWoman from "../assets/avatar-woman.svg";

const InputElement = ({
  name1,
  name2,
  setName1,
  setName2,
  calculateFLAMES,
}) => {
  return (
    <div className="input-bg w-[90%] mx-auto mt-4 rounded-xl p-6">
      <h1 className="font-[beauty] text-4xl text-rose-950 text-center mb-3 ">
        Find Your Flames
      </h1>
      <form
        onSubmit={calculateFLAMES}
        className="flex flex-col items-center justify-center gap-y-2"
      >
        <img src={avatarWoman} alt="avatar" />
        <input
          type="text"
          placeholder="Enter Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          className="text-input-bg rounded-xl py-2 px-3  focus:outline-none focus:border-none font-itim bg-rose-100 text-center border border-rose-300 placeholder:text-gray-500"
          required
        />
        <img src={avatarMan} alt="avatar" />
        <input
          type="text"
          placeholder="Enter Name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          className="text-input-bg rounded-xl py-2 px-3 focus:outline-none focus:border-none font-itim bg-rose-100 text-center border-rose-300 placeholder:text-gray-500"
          required
        />
        <br />
        <button
          type="submit"
          className=" text-pink-200 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-900 to-rose-300 bg-transparent border border-rose-300 text-xl font-itim shadow-xl"
        >
          Find Your Status
        </button>
      </form>
    </div>
  );
};

export default InputElement;
