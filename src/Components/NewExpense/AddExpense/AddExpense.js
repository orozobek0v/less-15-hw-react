import { Component } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./AddExpense.css";

class AddExpense extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  render() {
    return (
      <div className="new-expense">
        <ExpenseForm />
      </div>
    );
  }
}

// function AddExpense() {
//   return (
//     <div className="new-expense">
//       <ExpenseForm />
//     </div>
//   );
// }

export default AddExpense;
