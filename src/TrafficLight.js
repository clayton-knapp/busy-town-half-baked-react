import React from 'react';

export default function TrafficLight(props) {



  return (
    // this component takes in a prop called color. It is either 'red', 'yellow' or 'green'.
    <div className='traffic-light'>
      {/* in each of these divs, set it up so that if the color matches, add the css class 'on' to the classNames */}

      {/* A SOLUTION I DONT LIKE - RENDERS ALL THREE */}
      {/* {(props.color === 'red') && <div><div className={`red circle on`}></div><div className={`yellow circle`}></div><div className={`green circle`}></div></div>} */}


      {/* for example, the css classes for the div below should be `red circle on`, if props.color is 'red' */}
      {/* ONE SOLUTION - TERNARY TO RENDER ALL CLASS NAMES */}
      <div className={
        (props.color === 'red')
          ? 'red circle on'
          : 'red circle'
      }></div>


      {/* the css classes for the div below should be `yellow circle on`, if props.color is 'yellow' */}
      {/* SECOND SOLUTION - USES TEMPATE LITERAL -IS THIS OK? */}
      <div className={`yellow circle ${
        (props.color === 'yellow') && 'on'
      }`}></div>


      {/*  the css classes for the div below should be `green circle on`, if props.color is 'green' */}
      {/* THIRD SOLUTION - USES TERNARY TO RENDER WHOLE DIV */}
      {
        (props.color === 'green')
          ? <div className={`green circle on`}></div>
          : <div className={`green circle`}></div>
      }
    </div>
  );
}
