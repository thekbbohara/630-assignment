
import React from "react";
import Image from "next/image";

// Define the reaction data array

const Reactions = ({ reactionsData, setReaction, setIsHover }) => {
  return (
    <div className="p-1 rounded-3xl flex flex-wrap gap-2 border-2 border-[#11111b] w-screen max-w-[350px] min-w-fit z-[100] bg-[#11111b]">
      {reactionsData.map((reaction) => (
        <strong
          key={reaction.type}
          className="relative"
          onClick={() => {
            setReaction(reaction);
            setIsHover(false);
          }}
        >
          <Image
            className="peer w-10 h-10 hover:scale-110"
            src={reaction.src}
            alt={reaction.label}
            height={720}
            width={1080}
          />
          <span className="absolute peer-hover:inline-block bg-[#11111b90] hidden -top-8 left-0 rounded-xl p-1 text-xs">
            {reaction.label}
          </span>
        </strong>
      ))}
    </div>
  );
};

export default Reactions;
