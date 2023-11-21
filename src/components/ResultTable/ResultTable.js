import React from "react";
import ResultItem from "./ResultItem";
import styles from "./ResultTable.module.css"

function ResultTable(props) {
        
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
       
          
    return (
        <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          { 
            props.displayData.map((item) => {
                return(
                    <ResultItem 
                        key={Math.random()} 
                        yearNumber={item.year} 
                        totalSavings={formatter.format(item.savingsEndOfYear)} 
                        interestGained={formatter.format(item.yearlyInterest)}
                        totalInterest={formatter.format(item.savingsEndOfYear - item.initialInvestment - item.yearlyContribution * item.year)}
                        investedCapital={formatter.format(item.initialInvestment + item.yearlyContribution * item.year)}
                    />
                )    
            })
          }
        </tbody>
      </table>
    )
}

export default ResultTable;