import React from 'react'
import Listitem from './listitem'

const obj = {
    title: 'appointment for october',
    descr: 'The patient is resheduled to october',
    isActive: true
}
function list() {
  return (
    <div className="app-body">
      <Listitem title={obj.title} descr={obj.descr} isActive={obj.isActive} />
    </div>
  );
}

export default list