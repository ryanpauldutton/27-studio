export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };

 export const moveUp = {
    hidden: {
        translateY: 0,
    },
    show: {
        translateY: -20,
    }
 };

 export const textMotion = {
    rest: {
      color: "grey",
      y: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      color: "white",
      y: -25,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };