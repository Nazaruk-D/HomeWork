import React from "react";

export type FilterType = "all" | "RUBLS" | "Dollars"

type NewFilterType = {
    currentMoney: MoneyType[],
    onClickFilterHandler: (value:FilterType) => void
}

type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

export const NewFilter = (props:NewFilterType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((e, index) => {
                    return (
                        <li key={index}>
                            <span> {e.banknots}</span>
                            <span> {e.value}</span>
                            <span> {e.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => {props.onClickFilterHandler("all")}}>All</button>
                <button onClick={() => {props.onClickFilterHandler("RUBLS")}}>Ruble</button>
                <button onClick={() => {props.onClickFilterHandler("Dollars")}}>USD</button>
            </div>
        </>
)}