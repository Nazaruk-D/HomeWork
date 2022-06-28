import React from 'react';

type InputType = {
    setTitle: (title:string)=>void
    title: string
}

export const Input = (props:InputType) => {
    const onChangeInputHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log(event.currentTarget.value)
        props.setTitle(event.currentTarget.value)
    }
    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
};
