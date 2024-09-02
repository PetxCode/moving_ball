import { motion } from "framer-motion";
import { FC, useState } from "react";
import { MdPlayCircle } from "react-icons/md";
let timing = 8;
let inputNX = 19;
let inputNY = 29;

let move = Math.round(((inputNX / 20) * 580) / 10);
let moveY = Math.round(((inputNY / 40) * 710) / 10);

const moveNX = Array.from({ length: move }, (_, i: number) => {
  return -(i + 1) * 10;
});

const moveNY = Array.from({ length: moveY }, (_, i: number) => {
  return -(i + 1) * 10;
});

const moveNiY = Array.from({ length: moveNX.length }, () => {
  return 0;
});

const moveNiX = Array.from({ length: moveNX.length }, () => {
  return moveNX[moveNX.length - 1];
});

const moveNRY = Array.from({ length: moveY }, () => {
  return 90;
});

const BaseBass: FC<any> = ({ toggle }) => {
  const animate: any = {
    hidden: { x: 0, y: 0, rotate: 0 },
    visible: {
      x: moveNX.concat(moveNiX),
      y: moveNiY.concat(moveNY),
      rotate: moveNiY.concat(moveNRY),
      transition: {
        duration: timing,
        ease: "easeInOut",
        repeat: 0,
        repeatType: "",
      },
    },
  };

  return (
    <motion.div
      variants={toggle && animate}
      initial="hidden"
      animate="visible"
      className="w-6 h-6 bg-black rounded-full"
    >
      <motion.div
        // variants={toggle && rotateAnimate}
        initial="hidden"
        animate="visible"
        className="w-2 h-2 bg-white rounded-full absolute top-2 left-1"
      />
    </motion.div>
  );
};

const Display = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="">
      <MdPlayCircle
        className="cursor-pointer hover:text-red-500 transition-all duration-300"
        size={50}
        onClick={() => {
          setToggle(true);

          let timer = setTimeout(() => {
            setToggle(false);
            clearTimeout(timer);
          }, timing * 1000);
        }}
      />
      <div className="absolute w-2 h-2 rounded-full bg-purple-800 top-[30%] left-[9%] " />

      <div className="absolute w-[450px] h-2 rounded-[0px] bg-red-800 bottom-[20%] right-[4%] " />

      <div className="absolute  bottom-[6%] right-[2%] ">
        <BaseBass toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
};

export default Display;
