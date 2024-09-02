import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { MdPlayCircle } from "react-icons/md";

let time = 6;
let inputX = 18;
let inputXI = 9;
let inputY = 33;

let pointX = Math.round((inputX / 20) * 680);
let pointXI = Math.round((inputXI / 20) * 680);

let pointY = Math.round((inputY / 40) * 680);

let moveNX = Array.from({ length: pointX / 10 }, (_, i: number) => {
  return -(i + 1) * 10;
});

let movePX = Array.from({ length: pointXI / 10 }, (_, i: number) => {
  return moveNX[moveNX.length - 1] + (i + 1) * 10;
});

let moveNY = Array.from({ length: pointY / 10 }, (_, i: number) => {
  return -(i + 1) * 10;
});

let moveNSY = Array.from({ length: moveNX.length }, () => {
  return 0;
});

let moveNSYI = Array.from({ length: moveNX.length }, () => {
  return moveNY[moveNY.length - 1];
});

let moveNSX = Array.from({ length: moveNY.length }, () => {
  return moveNX[moveNX.length - 1];
});

let rotateX = Array.from({ length: moveNX.length }, () => {
  return 0;
});

let rotateY = Array.from({ length: moveNY.length }, () => {
  return 90;
});

const BlackBall: FC<any> = ({ toggle }) => {
  const animate: {} = {
    hidden: { x: 0, y: 0, rotate: 0 },
    visible: {
      x: moveNX.concat(moveNSX, movePX),
      y: moveNSY.concat(moveNY, moveNSYI),
      rotate: rotateX.concat(rotateY),
      transition: {
        duration: time,
        ease: "easeInOut",
        // repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <motion.div
      variants={toggle && animate}
      initial="hidden"
      animate="visible"
      className="w-8 h-8 rounded-full bg-black"
    >
      <div className="w-2 h-2 bg-white rounded-full absolute top-3 left-1" />
    </motion.div>
  );
};

const DisplayScreen = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <MdPlayCircle
        onClick={() => {
          setToggle(true);
          const timer = setTimeout(() => {
            setToggle(false);
            clearTimeout(timer);
          }, time * 1000);
        }}
        className="text-[55px] text-red-500 absolute top-5 left-[10%] hover:text-red-600 cursor-pointer duration-300 transition-all"
      />
      <div className="w-4 h-4 rounded-full bg-red-700 absolute top-[20%] left-[15%]" />

      <div className="w-4 h-4 rounded-full bg-red-700 absolute top-[20%] left-[55%]" />

      <div className="w-[600px] h-4 rounded-[2px] bg-purple-700 absolute bottom-[20%] right-[3%]" />

      <div className=" absolute bottom-[10%] right-[5%]">
        <BlackBall toggle={toggle} />
      </div>
    </div>
  );
};

export default DisplayScreen;
