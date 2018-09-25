import React from 'react';
import { Textfit } from 'react-textfit';
export default (props) => {
return (
    <div className="screen--container">
      <Textfit
        max={40}
        throttle={60}
        mode="single"
        className="screen-top"
      >
        { props.expression }
      </Textfit>
      <Textfit
        max={150}
        mode="single"
        className="screen-bottom"
      >
        { props.total }
      </Textfit>
    </div>
  )
}