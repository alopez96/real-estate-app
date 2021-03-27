import React, { useState } from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import NumberInput from './NumberInput';

function Form() {

  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [cashOnCash, setCashOnCash] = useState(0);


  const updateValue = (valName, val) => {
    if(valName === 'Income'){
      setIncome(val)
    } else if(valName === 'Expenses'){
      setExpenses(val)
    } else if(valName === 'Total Investments'){
      setInvestments(val)
    }
  }

  const getCashflow = () => {
    var totalMonthlyCashflow;
    totalMonthlyCashflow = income - expenses;
    return totalMonthlyCashflow;
  }

  const getCashOnCash = () => {
    var cashOnCashReturn;
    var annualCashflow = getCashflow() * 12;
    var totalInvestment = investments;
    cashOnCashReturn = (annualCashflow / totalInvestment) * 100;

    console.log('income', income)
    console.log('expenses', expenses)
    console.log('investments', investments)
    setCashOnCash(cashOnCashReturn)
  }

  return (
    <div className="login-back">
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-100-m w-100-l shadow-5 bg-near-white center">
        <main className="pa4 black-80">
          <div className="measure">

            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <NumberInput
                label='Income'
                value={income}
                updateValue={updateValue}
              />
              <NumberInput
                label='Expenses'
                value={expenses}
                updateValue={updateValue}
              />

              <NumberInput
                label='Total Investments'
                value={investments}
                updateValue={updateValue}
              />
            </fieldset>

            <PrimaryBtn
              cta='Calculate'
              action={getCashOnCash}
            />

            <div className='flex'>
              <h4>
                <span className='gray'>
                  Cash on Cash Return
                </span>
                {' ' + cashOnCash}
              </h4>
            </div> 
          </div>
        </main>
      </article>
    </div>
  );
}

export default Form;
