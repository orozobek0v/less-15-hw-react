import { Component } from "react";
import "./ExpenseTime.css";

class ExpenseTime extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-unused-vars
    this.month = props.date.toLocaleString("en-US", { month: "long" });
    // eslint-disable-next-line no-unused-vars
    this.day = props.date.toLocaleString("en-US", { day: "2-digit" });
    // eslint-disable-next-line no-unused-vars
    this.year = props.date.getFullYear();
  }

  render() {
    const timeSecond = new Date();
    const yearSecond = timeSecond.getFullYear();
    let givenTime;
    if (yearSecond > this.year) {
      givenTime = yearSecond - this.year + " years ago ";
    }
    if (yearSecond === this.year) {
      givenTime = yearSecond;
    } else {
      givenTime = "Error";
    }

    return (
      <div className="expense-time">
        <div className="expense-time__month">{this.month}</div>
        <div className="expense-time__day">{this.day}</div>
        <div className="expense-time__year">{givenTime}</div>{" "}
      </div>
    );
  }
}

// function ExpenseTime(props) {
//   const month = props.date.toLocaleString("en-US", { month: "long" });
//   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
//   const year = props.date.getFullYear();

//   const timeSecond = new Date();
//   const yearSecond = timeSecond.getFullYear();
//   let givenTime;
//   if (yearSecond > year) {
//     givenTime = yearSecond - year + " years ago ";
//   } else if (yearSecond === year) {
//     givenTime = yearSecond;
//   } else {
//     givenTime = "Error";
//   }

//   return (
//     <div className="expense-time">
//       <div className="expense-time__month">{month}</div>
//       <div className="expense-time__day">{day}</div>
//       <div className="expense-time__year">{givenTime}</div>
//     </div>
//   );
// }
export default ExpenseTime;
