import React from "react";

function Card(props) {
  return (
    // YOUR CODE HERE
    function Card(props) {
      return (
        <div className="card text-center">
          <div className="card-header">
            <h4>
              <i className={props.icon}></i>
              {props.title}
            </h4>
          </div>
          <div className="card-body">{props.children}</div>
        </div>
      );
    }
  );
}

export default Card;
