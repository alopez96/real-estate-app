import React, { useState } from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import NumberInput from './NumberInput';

function Form() {

  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState(0);
  const [cashflow, setCashflow] = useState(0);
  const [cashOnCash, setCashOnCash] = useState(0);


  const updateValue = (val) => {
    setIncome(val)
  }

  return (
    <div className="login-back">
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l shadow-5 bg-near-white center">
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
              />

              <NumberInput
                label='Total Investment'
              />
            </fieldset>

            <PrimaryBtn />
          </div>
        </main>
      </article>
    </div>
  );
}

export default Form;
