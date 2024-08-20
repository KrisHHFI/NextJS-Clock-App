"use client";

import { useEffect, useRef, useState } from "react";
import "../Styling/Styling.css";
import Image from "next/image";

const Signature: React.FC = () => {
  return (
    <main>
      <div className="ContactBox">
        <div className="ContactBoxIcons">
          <a
            className="ContactBoxIconContainer"
            href="mailto:kristopherpepperuk(at)@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Envelope.png"
              alt="Envelope Icon"
              className="contactIcon"
              width={100}
              height={100}
            />
          </a>
          <a
            className="ContactBoxIconContainer"
            href="https://github.com/KrisHHFI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/GitHub.png"
              alt="GitHub Icon"
              className="contactIcon"
              width={100}
              height={100}
            />
          </a>
          <a
            className="ContactBoxIconContainer"
            href="https://www.linkedin.com/in/kristopher-pepper-824184136/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/LinkedIn.png"
              alt="LinkedIn Icon"
              className="contactIcon"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="ContactBoxText">
          Kristopher Pepper 2024
        </div>
      </div>
    </main>
  );
};

export default Signature;
