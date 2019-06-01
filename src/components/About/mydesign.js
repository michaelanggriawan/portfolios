import React from 'react';
import { useSpring, animated } from 'react-spring';
import './mydesign.scss';
import Flip from 'react-reveal/Flip';
import AboutMusic from './AboutMusic/aboutMusic';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const  Card2 = ({ Quotes, show, Shows  })=> {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  console.log(Quotes.image)
  let res;
  if( show ){
    res = <AboutMusic />
  }
  return (
    <Flip>
    <div className="quot">
      <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <img src={Quotes.image[0]} alt="ay" />
    </animated.div>
    
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <img src={Quotes.image[1]} alt="ay" />
    </animated.div>

    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <img src={Quotes.image[2]} alt="ay" />
    </animated.div>

    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans), marginButtom: '100px' }}
    >
      <img src={Quotes.image[3]} alt="ay" />
    </animated.div>
    </div>

    <div className="quotes" onClick={ Shows }>
        <div>Hi Michael, What about <div style={ button }>music ?</div></div>
    </div>

    <div>
      { res }
    </div>
    </Flip>
    
  )
}


const button = {
  display: 'inline-block',
  width:'7rem',
  backgroundColor: 'transparent',
  border: '2px solid black',
  textAlign: 'center',
}

export default Card2;