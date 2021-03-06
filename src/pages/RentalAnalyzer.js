import React, { useState } from 'react';

//import custom components
import RentalForm from '../components/forms/RentalForm';
import PrimaryBtn from '../components/buttons/PrimaryBtn';


function RentalAnalyzer(){

    const [price, setPrice] = useState(0)
    const [rent, setRent] = useState(0)
    const [cashflow, setCashflow] = useState(0)
    const [cashoncash, setCashoncash] = useState(0)
    const [cashNeeded, setCashNeeded] = useState(0)
    
    const loan_duration = 30;
    const interest_rate_perecent = 0.04;
    const down_payment_percent = 0.03;
    const tax_percent = 0.0075;
    const insurance = 2500;
    const pmi_percent = 0.01;

    // define other expenses
    const vacancy_percent = 0.10;
    const repairs_percent = 0.10;
    const property_mgt_percent = 0.10;

    var down_payment = price * down_payment_percent;

    /*
    Calculate the total cash needed to bring to the table for closing deal
    = down payment + closing costs + anticipated repairs + $10,000
    */
    const getCashNeeded = () => {

        // closing cost is usally 2-5 percent of the total loan amount
        var closing_cost = (price - down_payment) * 0.05;

        /*
        assume anticipated repairs is 5k
        therefore, total cash needed will be:
        down payment + closing costs + 15k
        */
       var total = down_payment + closing_cost + 15000;
       
       setCashNeeded(total);
       return total;
    }


    /*
    getMonthlyExpenses
    = taxes + insurance + vacancy percentage + repairs + property management
        + mortgage payments + PMI
    
    mortgage payments = M
    M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    P = principal loan amount
    i = monthly interest rate
    n = number of months required to repay the loan
    */
    const getMonthlyExpenses = () => {
        // define principal loan amount
        var principal_amount = price - down_payment;

        // define monthly interest rate
        var monthly_interest = interest_rate_perecent / 12;
        
        //define number of months required to pay loan
        var number_of_months = loan_duration * 12;

        // define temp variable for redability and to ensure PEMDAS math
        let temp = monthly_interest + 1;
        temp = temp ^ number_of_months;
        temp = temp * monthly_interest;
        let top_half = temp;
        let bottom_half = ((1+monthly_interest)^number_of_months) - 1;

        let total_mortgage = principal_amount * (top_half / bottom_half);
        console.log('total_mortgage', total_mortgage)

        // define monthly expenses
        var insurance_monthly = insurance/12;
        var pmi_monthly = (pmi_percent * price)/12;
        var taxes_monthly = (tax_percent * price)/12;
        var vacancy_monthly = vacancy_percent/12;
        var repairs_monthly = repairs_percent/12;
        var property_mgt_monthly = property_mgt_percent/12;

        var other_expenses = (insurance_monthly + pmi_monthly
            + taxes_monthly + vacancy_monthly + repairs_monthly
            + property_mgt_monthly);
        var total_expenses = total_mortgage + other_expenses;

        console.log('total_expenses', total_expenses)
        return total_expenses;
    }

    /*
    getMonthlyProfit
    this will be rent + any other payment form
    usually will be just limited to rent
    */
    const getMonthlyProfit = () => {
        return rent;
    }

    /*
    getCashflow
    this will be monthly profit - monthly expenses
    */
    const getCashflow = () => {
        const cash_flow = getMonthlyProfit() - getMonthlyExpenses();
        setCashflow(cash_flow);
        return cash_flow;
    }

    /*
    getCashoncash
    this will tell us what kind of return we are get on our investment anually
    you want to shoot for 12%
    the stock market usually performs at 10, so we want to outdo 10%
    but for starting out in Cali, it's ok to get something 6-12%
    to calculate this value, we need to:
        divide the annual cash flow by total initial investment * 100 percent
    */
    const getCashoncash = () => {
        var annual_cashflow = getCashflow() * 12;

        var cash_on_cash = (annual_cashflow / down_payment) * 100;
        
        setCashoncash(cash_on_cash)
        return cash_on_cash;
    }


    const onPressBtn = () => {
        getCashflow()
        getCashoncash()
        getCashNeeded()
    }
    
    return(
        <div>
            <RentalForm
            price={price}
            setPrice={setPrice}
            rent={rent}
            setRent={setRent}
            />

            <PrimaryBtn
            cta={'Get cash flow'}
            action={onPressBtn}
            />

            <p>Cashflow: {cashflow}</p>
            <p>Cash on cash: {cashoncash}</p>
            <p>Cash Neeeded: {cashNeeded}</p>
        </div>
    )
}

export default RentalAnalyzer;