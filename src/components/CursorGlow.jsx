import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [pos, setPos] = useState({
    x: -300,
    y: -300
  });


  useEffect(() => {

    const move = (e) => {

      setPos({
        x: e.clientX,
        y: e.clientY
      });

    };

    window.addEventListener(
      "pointermove",
      move
    );


    return () => {

      window.removeEventListener(
        "pointermove",
        move
      );

    };

  }, []);


  return (

    <div
      className="cursor-glow"
      style={{
        left: pos.x,
        top: pos.y
      }}
    />

  );

}