import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {ButtonInput} from "./components/ButtonInput";


function App() {
    const [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])

    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {
        console.log(title)
        let newMessage = {message: title};
        setMessage([newMessage, ...message])

    }

    const callBackHandler = () => {
        addMessage(title)
        setTitle("")
    }
    return (
        <div className={"App"}>
            <Input setTitle={setTitle} title={title}/>
            <ButtonInput name={"+"} callBack={callBackHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}


export default App;
