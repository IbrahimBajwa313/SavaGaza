import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

export default function AsNow() {
  const [startCount, setStartCount] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);  // Trigger the counting when the element is in view
        }
      },
      { threshold: .1 }  // Adjust threshold if necessary
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <section className='flex flex-col justify-around'>
      <div
        className="bg-black text-white flex flex-row justify-center pt-20 pb-40"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)" }}
      >
        <span>
          <p className="text-3xl font-bold">As for Now,</p>
          
          <h3 ref={countUpRef} className="text-9xl font-semibold">
            {startCount && (
              <CountUp start={0} end={186000} duration={1} separator="," />
            )}
          </h3>

          <p className="text-3xl font-bold">
            Innocent civilians have been killed; <br />
            directly or indirectly
          </p>
        </span>
      </div>

      <div
        className="bg-red-600 text-white flex flex-row justify-evenly pt-40 pb-40 -mt-28"
        style={{ clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)" }}
      >
        <span>
        <p className="text-2xl font-bold">As for Now,</p>
          
          <h3 ref={countUpRef} className="text-8xl text-[7rem] font-semibold">
            {startCount && (
              <CountUp start={0} end={186000} duration={1} separator="," />
            )}
          </h3>

          <p className="text-2xl font-bold">
            Innocent civilians have been killed; <br />
            directly or indirectly
          </p>
        </span>

        <span>
          <p className="text-2xl font-bold">As for Now,</p>
          
          <h3 ref={countUpRef} className="text-8xl text-[7rem] font-semibold">
            {startCount && (
              <CountUp start={0} end={186000} duration={1} separator="," />
            )}
          </h3>

          <p className="text-2xl font-bold">
            Innocent civilians have been killed; <br />
            directly or indirectly
          </p>
        </span>
      </div>

      <div
        className="bg-green-600 text-white flex flex-row justify-center  pt-40 pb-20 -mt-28"
        style={{ clipPath: "polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)" }}
      >
        <span>
          <p className="text-3xl font-bold">As for Now,</p>
          
          <h3 ref={countUpRef} className="text-9xl font-semibold">
            {startCount && (
              <CountUp start={0} end={186000} duration={1} separator="," />
            )}
          </h3>

          <p className="text-3xl font-bold">
            Innocent civilians have been killed; <br />
            directly or indirectly
          </p>
        </span>
      </div>
    </section>
  );
}
