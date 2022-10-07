import React from 'react';
import Student from './Student'
import styles from './School.module.css'

export class School extends React.Component {
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        };
    }
    render() {
        
    
          return (
              <div>
            <h2 id="time" className={styles.Mh1}>It is {this.state.date.toLocaleTimeString()}.</h2>
           <ul>
           {this.props.list.map((s)=>{
             return<Student detials={s} key={s.id}/>})}
           </ul>
           </div>
          )
        
    }
    componentDidMount() {
        const oneSecond = 1000;
        setInterval(() => {
          this.setState({ date: new Date() });
        }, oneSecond);
          }

          componentWillUnmount(){
            clearInterval(this.intervalID);
          }

  }
export default School;