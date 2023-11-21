import React, { useState } from "react"
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import ResultTable from "./components/ResultTable/ResultTable";
import styles from "./App.module.css"

function App() {
  
  const [displayTable, setDisplayTable] = useState([])
  
  const yearlyData = []; // per-year results
  
  const calculateHandler = (userInput) => {
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const initialInvestment = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialInvestment: initialInvestment
      });
    }
    // do something with yearlyData ...
    setDisplayTable(yearlyData);
  };

  let displayContent = <p className={`${styles["no-data"]}`}>There is no data to display!</p>
    if (displayTable.length !== 0) {
      displayContent = (
        <ResultTable 
          displayData={displayTable}
        />
      )
    }

  return (
    <div>
      <Header />
      <InputForm 
        submit={calculateHandler}/>
      {displayContent}
    </div>
  );
}

export default App;
