import React from 'react'
import Tools from '../components/tools';
import Listitem from './listitem'

const arr = [
  {
    title: "appointment for october",
    descr: "The patient is resheduled to october",
    isActive: true,
  },
  {
    title: "appointment for november",
    descr: "The patient is resheduled to october",
    isActive: false,
  },
  {
    title: "appointment for december",
    descr: "The patient is resheduled to october",
    isActive: true,
  },
];
function list() {
  return (
    <Tools>
    <div className="app-body">
      {
        arr.map((obj) =>{
          return <Listitem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive} />
          
        })
      }
      </div>
      </Tools>
  );
}

export default list