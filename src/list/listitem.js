import React from 'react'
import './listitem.css'
import Label from './label';
function Listitem(props) {
  const {
    title,
    descr,
    isActive
  } = props;
    return (
      <div className="list-item">
        <div className="list-title">
          <h4>{title}</h4>
        </div>
        <div className="list-descr"> {descr}</div>
        <div className="list-label">
          <Label isActive={isActive} />
        </div>
      </div>
    );
  }
export default Listitem