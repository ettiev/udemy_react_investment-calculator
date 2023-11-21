import React, { useState } from "react";
import styles from "./InputForm.module.css"


function InputForm(props) {
    const [currentSavings, setCurrentSaving] = useState(10000);
    const [yearlyContribution, setYearlyContribution] = useState(1200);
    const [expectedReturn, setExpectedReturn] = useState(7);
    const [duration, setDuration] = useState(10);


    function submitHandler(event) {
        event.preventDefault();
        const userData = {
            currentSavings: currentSavings,
            yearlyContribution: yearlyContribution,
            expectedReturn: expectedReturn,
            duration: duration
        }
        props.submit(userData)
        resetHandler(); 
    }
    function resetHandler() {
      setCurrentSaving(10000);
      setDuration(10);
      setExpectedReturn(7);
      setYearlyContribution(1200);
    }

    function changeHandler(event) {
        if (event.target.id === "current-savings"){
            setCurrentSaving(event.target.value);
        } else if (event.target.id === "yearly-contribution"){
            setYearlyContribution(event.target.value);
        } else if (event.target.id === "expected-return"){
            setExpectedReturn(event.target.value);
        } else {
            setDuration(event.target.value);
        }
    }
    return (
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={`${styles["input-group"]}`}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input 
                type="number" 
                id="current-savings" 
                value={currentSavings} 
                onChange={changeHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
                type="number" 
                id="yearly-contribution" 
                value={yearlyContribution} 
                onChange={changeHandler}/>
          </p>
        </div>
        <div className={`${styles["input-group"]}`}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input 
                type="number" 
                id="expected-return" 
                value={expectedReturn} 
                onChange={changeHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input 
                type="number" 
                id="duration" 
                value={duration} 
                onChange={changeHandler} />
          </p>
        </div>
        <p className={styles.actions}>
          <button 
            type="reset" 
            className={styles.buttonAlt}
            onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default InputForm;