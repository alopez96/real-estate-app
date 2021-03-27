

function PrimaryBtn({ cta, action }){

    return(
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent f6 dib" 
        onClick={() => action()}>
            {cta}
        </button>
    )
}

export default PrimaryBtn;