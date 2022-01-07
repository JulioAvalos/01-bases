import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log(
      '%cSe llego al valor maximo',
      'color:red; background-color:black;'
    );

    gsap.to('.mi-objeto', { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
      gsap.to('.mi-objeto', { y: 0, duration: 1, ease: 'bounce.out' });
    });

  }, [counter]);

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <h2 className='mi-objeto'>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
