import { useEffect, useState } from "react";
import jerry from "../assets/jerry.mp4";

const Loader = () => {
  const [sec, setSec] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 flex flex-col backdrop-blur-[2px] w-[90vw] rounded-xl mx-auto mt-10 border-[2px] border-gray-400 gap-5 justify-center items-center">
      <video src={jerry} className="rounded-xl" autoPlay ></video>
      <p className="font-itim text-2xl">
        Generating in <span className="text-rose-800">{sec}</span> secs...
      </p>
    </div>
  );
};

export default Loader;
