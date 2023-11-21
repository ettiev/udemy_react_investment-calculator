import React from "react";

function ResultItem(props) {
    return (
        <tr>
            <td>{props.yearNumber}</td>
            <td>{props.totalSavings}</td>
            <td>{props.interestGained}</td>
            <td>{props.totalInterest}</td>
            <td>{props.investedCapital}</td>
        </tr>
    )
};

export default ResultItem;