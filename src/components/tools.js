import React, { Component,Children } from 'react'
import './tools.css'


export class tools extends Component {
    render() {
        const { children } = this.props
        
        
        const onlyChild = React.Children.only(children);
        console.log(onlyChild);
     
        
        
        return (
            <div className='list-tools'>
                <div className='list-header'>
                    <select name='status'>
                        <option name='all'>All</option> 
                      <option name='active'>Active</option>  
                      <option name='non-active'>NonActive</option>  
                        
                </select>
                </div>
                {children}
                <div className='list-footer'>
                    Total  items
                </div>
        </div>
    )
   
  }
}

export default tools