import localFont from "next/font/local";

const mirzaFont = localFont({
  src: [
    {
      path: "../../public/font/Mirza-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Mirza-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Mirza-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Mirza-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default mirzaFont;
