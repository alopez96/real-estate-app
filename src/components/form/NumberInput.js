

function NumberInput({ label }){

    return(
        <div className='mv3'>
            <label className="db fw6 lh-copy f6">{label}</label>
            <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                name="income"
                id="income"
            />
        </div>
    )
}

export default NumberInput;