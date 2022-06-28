import React from 'react';

type ButtonType = {
    name: string,
    callBack: () => void
}


export const ButtonInput: React.FC<ButtonType> = (props) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};
