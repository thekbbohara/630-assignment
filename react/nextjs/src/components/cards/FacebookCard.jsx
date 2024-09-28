"use client";

import Image from "next/image";
import Reactions from "@/components/reactions";
import { useState, useEffect } from "react";
import {
  IconThumbUp,
  IconThumbUpFilled,
  IconMessageCircle,
  IconShare3,
} from "@tabler/icons-react";

const FacebookCard = () => {
  const reactionsData = [
    { type: "like", label: "like", color: "blue", src: "/icons/like.png" },
    {
      type: "heart",
      label: "heart",
      color: "red-700",
      src: "/icons/heart.png",
    },
    {
      type: "care",
      label: "care",
      color: "yellow-700",
      src: "/icons/care.png",
    },
    {
      type: "haha",
      label: "haha",
      color: "yellow-700",
      src: "/icons/haha.png",
    },
    { type: "wow", label: "wow", color: "yellow-700", src: "/icons/wow.png" },
    { type: "sad", label: "sad", color: "yellow-700", src: "/icons/sad.png" },
    {
      type: "angry",
      label: "angry",
      color: "orange-700",
      src: "/icons/angry.png",
    },
  ];
  const [isHover, setIsHover] = useState(false);
  const [isReacting, setIsReacting] = useState(false);
  const [isMouseOnLike, setIsMouseOnLike] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [reaction, setReaction] = useState(null);

  useEffect(() => {
    if (isMouseOnLike === false && isReacting === false) {
      const hoverTimeOut = setTimeout(() => {
        setIsHover(false);
      }, 1000);
      return () => {
        clearTimeout(hoverTimeOut);
      };
    }
    if (isMouseOnLike === true && isLikeClicked === false) {
      const hoverTimeOut = setTimeout(() => {
        setIsHover(true);
      }, 1000);
      return () => {
        clearTimeout(hoverTimeOut);
      };
    }
  }, [isMouseOnLike, isReacting, isLikeClicked]);

  const handleLike = () => {
    if (reaction) {
      setReaction(null);
    } else {
      setReaction(reactionsData[0]);
    }
    setIsLikeClicked(true);
    // setIsHover(false);
  };

  return (
    <section className="bg-[#11111b] max-w-md py-2   rounded-xl m-auto">
      <header className="p-2">
        <div>
          <div className="flex">
            <i></i>

            <strong>WION Web Team</strong>
          </div>
        </div>
        <div>
          <p className="leading-4">
            Japanese schools have banned ponytails, apparently because they’re
            too distracting.
          </p>
        </div>
      </header>
      <div className=" bg-[#1e1e2e]">
        <Image
          alt="japanese girl with ponytail"
          className="max-w-md max-h-[75vh] w-full object-cover"
          src="https://i.pinimg.com/564x/71/42/b4/7142b4069609f6109ecd6d85bca0d677.jpg"
          width={1080}
          height={720}
        />
      </div>
      <footer>
        <div className="status py-2 px-4 flex justify-between">
          <div className="flex gap-1">
            <IconThumbUpFilled className="bg-blue-600 rounded-full p-[2px]" />
            <span>3.59k</span>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-1">
              291 <IconMessageCircle className="" />
            </div>
            <div className="flex gap-1">
              15 <IconShare3 />
            </div>
          </div>
        </div>
        <div className="w-[95%] mx-auto h-[1px] bg-white"></div>
        <div className="action flex justify-between py-2 px-6">
          <button className="flex gap-1 relative">
            <div
              onClick={handleLike}
              onMouseEnter={() => {
                setIsMouseOnLike(true);
              }}
              onMouseLeave={() => {
                setIsMouseOnLike(false);
                setIsLikeClicked(false);
              }}
              className="select-none flex gap-1 hover:bg-[#cdd6f440] rounded-md px-3 py-1"
            >
              {reaction ? (
                <>
                  <Image src={reaction.src} alt={reaction.type} height={40} width={40} className="object-cover w-6 h-6" />
                  {reaction.type}
                </>
              ) : (
                <><IconThumbUp /> Like</>
              )}
            </div>
            {isHover && ( 
              <div
                onMouseEnter={() => {
                  setIsReacting(true);
                }}
                onMouseLeave={() => {
                  setIsReacting(false);
                  setIsHover(false);
                }}
                className="absolute w-full -top-16 -left-3"
              >
                <Reactions
                  reactionsData={reactionsData}
                  setReaction={setReaction}
                  setIsHover={setIsHover}
                />
              </div>
            )}
          </button>
          <button className="flex gap-1 hover:bg-[#cdd6f440] rounded-md px-3 py-1">
            <IconMessageCircle className="" /> comment
          </button>
          <button className="flex gap-1 hover:bg-[#cdd6f440] rounded-md px-3 py-1">
            <IconShare3 /> share
          </button>
        </div>
      </footer>
    </section>
  );
};

export default FacebookCard;
