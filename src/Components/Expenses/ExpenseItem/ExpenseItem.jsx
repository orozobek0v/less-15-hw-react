import { Component } from "react";
import ExpenseTime from "../ExpenseTime/ExpenseTime";
import "./ExpenseItem.css";

class ExpenseItem extends Component {
  render(props) {
    return (
      <div className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseTime date={this.props.date} />
        <div className="expense-item__description">
          <h2>{this.props.title}</h2>
          <div className="expense-item__price">{this.props.amount}$</div>
        </div>
      </div>
    );
  }
}

// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       {/* <div>{props.date.toISOString()}</div> */}
//       <ExpenseTime date={props.date} />
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">{props.amount}$</div>
//       </div>
//     </div>
//   );
// }
export default ExpenseItem;
