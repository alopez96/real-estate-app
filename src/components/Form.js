

function Form(){

    return(
        <div className='login-back'>
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 bg-near-white center">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            {/* <legend className="f1 fw6 ph0 mh0">Cash on Cash</legend> */}
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Income</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="number"
              name="income"
              id="income"
              />
            </div>

            <div className="mv3">
              <label className="db fw6 lh-copy f6">Expenses</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="number" 
              name="expenses"
              id="expenses"
              />
            </div>
            
          </fieldset>
          <div className="">
          
          <div>
            <button className="b ph3 pv2 input-reset ba b--black bg-transparent f6 dib" 
            onClick={() => console.log('fill out email and name')}>
              Calculate
            </button>
          </div>

          </div>
        </div>
      </main>
    </article>
    </div>
    )
}

export default Form;