import React, {ChangeEvent, useState} from 'react';

type FullInputProps = {
    addMessage: (title:string)=> void
}

export const FullInput = (props: FullInputProps) => {
    let [title,setTitle] = useState("")

    const onChangeInputHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler =()=> {
        props.addMessage(title)
        setTitle('')
    }

    return (
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>
    );
};

