import React from "react";

type ButtonTypeProps = {
    name: string
    callback: ()=>void
}

export const Button = (props: ButtonTypeProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}