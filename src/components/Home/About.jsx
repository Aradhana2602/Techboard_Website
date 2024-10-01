import React, { useState } from 'react';
import './About.css';

function About() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Function to update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div
        className="glow"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
        }}
      ></div>
      <div className="content">
        <h1>About </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam alias eum assumenda iure nulla impedit laboriosam itaque, ea illum perspiciatis repellendus obcaecati doloremque enim perferendis soluta, veniam eius modi, quia consequuntur commodi velit minus molestias nisi nam. Tenetur quod aspernatur sed consectetur, ipsam nemo, numquam modi commodi fugiat omnis eius suscipit porro veritatis assumenda minus magnam atque ducimus asperiores quasi dicta explicabo? Natus veniam eligendi aliquam atque nulla nam aliquid rerum corporis rem tenetur, dolor incidunt nobis sunt quam veritatis! Ex blanditiis dolores ad assumenda. Nulla est repudiandae enim accusamus quae impedit, et consequatur, delectus laudantium dolorum, quaerat aspernatur dolorem?</p>
      </div>
    </div>
  );
}

export default About;
