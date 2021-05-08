import React from 'react';


function RentalForm({price, setPrice, rent, setRent}){

    return(
        <div>
            <form>
            <div className='mv3'>
                <label className="db fw6">Price</label>
                <input
                    className="pa2 input-reset ba bg-transparent"
                    onChange = {e => setPrice(e.target.value)}
                    value={price}
                />
            </div>
            <div className='mv3'>
                <label className="db fw6">Rent</label>
                <input
                    className="pa2 input-reset ba bg-transparent"
                    onChange = {e => setRent(e.target.value)}
                    value={rent}
                />
            </div>
            </form>
        </div>
    )
}

export default RentalForm;