import React from 'react';
export default (props) => {
return (
    <div className="screen--container">
      <div className="screen-top">
        { props.expression }
      </div>
      <div className="screen-bottom">
        { props.total }
      </div>
    </div>
  )
}