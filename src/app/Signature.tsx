"use client";

import { useEffect, useRef, useState } from "react";
import "../Styling/Styling.css";
import Image from "next/image";

const Signature: React.FC = () => {
  return (
    <main>
      <div className="ContactBox">
        <div className="ContactBoxIcons">
          <Image
            src="/Envelope.png"
            alt="Envelope Icon"
            className="contactIcon"
            width={100}
            height={100}
          />
          <Image
            src="/GitHub.png"
            alt="GitHub Icon"
            className="contactIcon"
            width={100}
            height={100}
          />
          <Image
            src="/LinkedIn.png"
            alt="LinkedIn Icon"
            className="contactIcon"
            width={100}
            height={100}
          />
        </div>
        <div className="ContactBoxText">
          Kristopher Pepper 2024
        </div>
      </div>
    </main>
  );
};

export default Signature;
