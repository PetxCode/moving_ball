import React from "react";
import { motion } from "framer-motion";

let x = 50;
let y = 59;

let moveX = Array.from({ length: x }, (_, i: number) => {
  return -(i + 1) * 10;
});

let moveY = Array.from({ length: y }, (_, i: number) => {
  return -(i + 1) * 10;
});

let movePauseX = Array.from({ length: y }, () => {
  return moveY[moveY.length - 1];
});
let movePauseY = Array.from({ length: x }, () => {
  return moveX[0];
});

let rotateX = Array.from({ length: x }, (_, i: number) => {
  return 0;
});

const Ball = () => {
  const animate: any = {
    hidden: { x: 0, y: 0, rotate: 0 },
    visiable: {
      x: moveX.concat(movePauseX),
      y: movePauseY.concat(moveY),
      // rotate: rotateX,
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      variants={animate}
      initial="hidden"
      animate="visiable"
      className="bg-black w-8 h-8 rounded-full"
    >
      <div className="w-2 h-2 rounded-full absolute top-[0.6rem] left-1 bg-white" />
    </motion.div>
  );
};

const Build = () => {
  return (
    <div>
      <div className="absolute w-4 h-4 rounded-full bg-red-600 top-[20%] left-[5%]" />

      <div className="absolute w-[400px] h-5 rounded-sm bg-black bottom-[15%] right-[5%]" />

      <div className="absolute  rounded-sm  bottom-[5%] right-[2%]">
        <Ball />
      </div>
    </div>
  );
};

export default Build;
