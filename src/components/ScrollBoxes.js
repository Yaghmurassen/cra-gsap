import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import styles from "../style/ScrollBoxes.module.css";
import "../App.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div>
      <section className="w-full h-screen flex-center flex-col">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>

      <div
        className="w-full h-screen flex justify-center items-center gap-4 flex-col"
        ref={main}
      >
        {/* <div className={`${styles.box} text-blue-500`}>box</div>
        <div className={`${styles.box} text-blue-500`}>box</div>
        <div className={`${styles.box} text-blue-500`}>box</div> */}
        {/* <div className={styles.box}>box</div> */}
        <div className="box flex w-[75px] h-[75px] bg-green-500 rounded-xl items-center text-center p-4 text-blue-500">
          box
        </div>
        <div className="box text-blue-500">box</div>
        <div className="box text-blue-500">box</div>
        <div className="box text-blue-500">box</div>
      </div>
      <section className="w-full h-screen"></section>
    </div>
  );
}
