import React, { useState } from "react";
import { fabric } from "fabric";

const Home = () => {
  const [xaxis, setXaxis] = useState(0);
  const [yaxis, setYaxis] = useState(0);
  const [click, setClick] = useState("false");

  var canvas = new fabric.Canvas("canvas");

  var mainBox = new fabric.Rect({
    fill: "rgba(255,0,0,0.5)",
    cornerColor: "green",
    width: 200,
    height: 75,
    hasControls: true,
    hasBorders: true,
    selectable: true,
    left: 250,
    top: 200,
    originX: "center",
    originY: "center",
  });

  canvas.add(mainBox);

  canvas.renderAll();

  canvas.on("object:moving", function () {
    setXaxis(mainBox.translateX);
    setYaxis(mainBox.translateY);
    setClick("true");
  });

  return (
    <div className="canvas-info">
      <p>fabric-canvas works!</p>
      <p>Shape clicked: {click}</p>
      <p>x-axis position: {xaxis}</p>
      <p>y-axis position: {yaxis}</p>
    </div>
  );
};

export default Home;
