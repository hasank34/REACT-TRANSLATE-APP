import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const TextContainer = ({ text, setText }) => {
  const { answer, isLoading, error } = useSelector((store) => store.translate);
  // console.log(answer);
  return (
    <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
      <div className="flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-[300px] max-h-[500px] text-black text-[20px] rounded p-[10px]"
        ></textarea>
      </div>

      <div className="flex-1 relative">
        <textarea
          value={answer}
          disabled
          className="w-full min-h-[300px] max-h-[500px] text-gray-300 text-[20px] rounded p-[10px]"
        ></textarea>
        {isLoading && (
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextContainer;
