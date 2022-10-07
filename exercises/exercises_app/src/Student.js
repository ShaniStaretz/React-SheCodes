import React from 'react';
import  * as styles  from './Student.module.css'
  
export class Student extends React.Component {
    render() {
      const liS=this.props.detials.id===1? styles.li1:styles.li2;
        if (this.props.detials!==null) {
          return (
            <li className={liS}>the name is {this.props.detials.name} and the average grade is {this.props.detials.grade} </li>
          )
        } else {
            return null;
        }
    }
  }
  export default Student;