"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../Styling/Clock.css"; // Ensure this is a global stylesheet

const fullTurn = 360;

const Clock: React.FC = () => {
  const [toggle, setToggle] = useState(true);

  // Refs for the clock hands and gears
  const dateRef = useRef<HTMLDivElement | null>(null);
  const hourHandRef = useRef<HTMLDivElement | null>(null);
  const minuteHandRef = useRef<HTMLDivElement | null>(null);
  const secondHandRef = useRef<HTMLDivElement | null>(null);

  // Refs for the images
  const secondHandGearRef = useRef<HTMLDivElement | null>(null);
  const secondHandGear2Ref = useRef<HTMLDivElement | null>(null);
  const signedGearRef = useRef<HTMLDivElement | null>(null);
  const signedGearBulkierRef = useRef<HTMLDivElement | null>(null);
  const signedGearSmallRef = useRef<HTMLDivElement | null>(null);
  const minuteHandGearRef = useRef<HTMLDivElement | null>(null);
  const hourHandGearRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateClock = () => {
      const localTime = new Date();

      // Get the current hours, minutes, and seconds
      const date = localTime.getDate();
      const hours = localTime.getHours();
      const minutes = localTime.getMinutes();
      const seconds = localTime.getSeconds();

      // Calculate the rotation angles
      let hourRotation = ((hours % 12) / 12) * fullTurn;
      hourRotation += (minutes / 60) * 30;
      const minuteRotation = (minutes / 60) * fullTurn;
      const secondRotation = ((seconds + localTime.getMilliseconds() / 1000) / 60) * fullTurn;

      // Ensure the elements are not null before accessing their styles
      if (dateRef.current) dateRef.current.innerHTML = date.toString();
      if (hourHandRef.current) hourHandRef.current.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
      if (minuteHandRef.current) minuteHandRef.current.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
      if (secondHandRef.current) secondHandRef.current.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;

      // Ensure image refs are not null before accessing their styles
      if (secondHandGearRef.current) secondHandGearRef.current.style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
      if (secondHandGear2Ref.current) secondHandGear2Ref.current.style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
      if (signedGearRef.current) signedGearRef.current.style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
      if (minuteHandGearRef.current) minuteHandGearRef.current.style.transform = `translate(-50%, -50%) rotate(${minuteRotation}deg)`;
      if (signedGearBulkierRef.current) signedGearBulkierRef.current.style.transform = `translate(-50%, -50%) rotate(${-minuteRotation}deg)`;
      if (signedGearSmallRef.current) signedGearSmallRef.current.style.transform = `translate(-50%, -50%) rotate(${-hourRotation}deg)`;
      if (hourHandGearRef.current) hourHandGearRef.current.style.transform = `translate(-50%, -50%) rotate(${hourRotation}deg)`;
    };

    // Update the clock every 100 milliseconds
    const interval = setInterval(updateClock, 100);
    
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to only run on mount and unmount

  useEffect(() => {
    const clockFace = document.querySelector('.face') as HTMLElement;
    const alphanumerics = document.querySelectorAll('.alphanumerics') as NodeListOf<HTMLElement>;
    const gears = document.querySelectorAll('.gears') as NodeListOf<HTMLElement>;

    if (clockFace) {
      if (toggle) {
        clockFace.style.backgroundColor = '#fffcf5';
        alphanumerics.forEach(alphanumeric => alphanumeric.style.display = 'block');
        gears.forEach(gear => gear.style.display = 'none');
      } else {
        clockFace.style.backgroundColor = 'transparent';
        alphanumerics.forEach(alphanumeric => alphanumeric.style.display = 'none');
        gears.forEach(gear => gear.style.display = 'block');
      }
    }
  }, [toggle]); // Dependency on toggle to update the clock face display

  return (
    <main>
      <div className="clock">
        <Image
          src="/Clock Case.png"
          alt="Clock Case"
          className="clockCaseImage clockCentre"
          width={300}
          height={300}
        />
        <div className="face clockCentre" onClick={() => setToggle(prev => !prev)}>
          <div id="alphanumerics" className="alphanumerics">
            <p className="twelve">12</p>
            <p className="one">1</p>
            <p className="two">2</p>
            <p className="three">3</p>
            <p className="four">4</p>
            <p className="five">5</p>
            <p className="six">6</p>
            <p className="seven">7</p>
            <p className="eight">8</p>
            <p className="nine">9</p>
            <p className="ten">10</p>
            <p className="eleven">11</p>
            <Image
              src="/Signature.svg"
              alt="Signature"
              className="signature clockCentre"
              width={100}
              height={100}
            />
            <div id="date" ref={dateRef}></div>
          </div>
          <div id="gears" className="gears">
            <div ref={hourHandGearRef}>
              <Image
                src="/Hour Hand Gear.svg"
                alt="Hour Hand Gear"
                className="hourHandGearImage clockCentre"
                width={100}
                height={100}
              />
            </div>
            <div ref={signedGearSmallRef}>
              <Image
                src="/Signed Gear 3.svg"
                alt="Signed Gear Small"
                className="signedGearImageSmall"
                width={100}
                height={100}
              />
            </div>
            <div ref={signedGearRef}>
              <Image
                src="/Signed Gear.svg"
                alt="Signed Gear"
                className="signedGearImage"
                width={100}
                height={100}
              />
            </div>
            <div ref={minuteHandGearRef}>
              <Image
                src="/Minute Hand Gear.svg"
                alt="Minute Hand Gear"
                className="minuteHandGearImage clockCentre"
                width={100}
                height={100}
              />
            </div>
            <div ref={signedGearBulkierRef}>
              <Image
                src="/Signed Gear 2.svg"
                alt="Signed Gear Bulkier"
                className="signedGearBulkierImage"
                width={100}
                height={100}
              />
            </div>
            <div ref={secondHandGearRef}>
              <Image
                src="/Second Hand Gear.svg"
                alt="Second Hand Gear"
                className="secondHandGearImage clockCentre"
                width={100}
                height={100}
              />
            </div>
            <div ref={secondHandGear2Ref}>
              <Image
                src="/Second Hand Gear 2.svg"
                alt="Second Hand Gear 2"
                className="secondHandGearImage2"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div id="hands" className="clockCentre">
            <div className="handBase"></div>
            <div className="hourHand clockCentre" ref={hourHandRef}>
              <div className="hourHandInvertedPointer"></div>
              <div className="hourHandPointer"></div>
            </div>
            <div className="minuteHand clockCentre" ref={minuteHandRef}>
              <div className="minuteHandInvertedPointer"></div>
              <div className="minuteHandPointer"></div>
            </div>
            <div className="secondHand clockCentre" ref={secondHandRef}>
              <div className="secondHandPointer"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Clock;
