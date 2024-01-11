import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function App() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".box", { rotation: 360, duration: 2, delay: 1 });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="app">
      <div className="box text-center">Hello</div>
    </div>
  );
}
