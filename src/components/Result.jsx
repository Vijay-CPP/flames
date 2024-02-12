import React from "react";

const Result = ({ data, name1, name2, clean }) => {
  return (
    <div className="w-[90%] mx-auto my-5 bg-gradient-to-r from-[#e592aad3] to-[#e9a1b541] backdrop-blur-[2px] bg-transparent rounded-xl p-5 border-rose-300 border flex flex-col items-center justify-center">
      <h1 className="font-[beauty] text-5xl text-center text-rose-950">
        {data.title}
      </h1>
      <img
        src={data.image}
        className="mx-auto h-[30vh] my-5"
        alt={data.title + "-image"}
      />
      <p className="font-[beauty] text-2xl my-2">
      {name1 + " & " + name2}
      </p>
      <p className="font-itim text-center ">{data.desc}</p>
      <button className="text-pink-200 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-900 to-rose-300 bg-transparent border border-rose-300 text-xl font-itim shadow-xl mt-4" onClick={clean}>
        Go back
      </button>
    </div>
  );
};

export default Result;
