import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";

function App() {
    // const myFirstSub = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Vasya")
    // }
    // const mySecondSub = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im Petya")
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    // const foo1=()=>{
    //     console.log(100200)
    // }
    // const foo2=(num:number)=>{
    //     console.log((num))
    // }


    const Button1Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }

    const Button2Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }

    const Button3Foo =() => {
        console.log("Im stupid button")
    }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{*/}
            {/*    console.log(("Hello"))}}>MyYoutubeChanel-1</button>*/}
            {/*<button onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler("Vasya")}> MyYoutubeChanel-1 </button>*/}
            {/*<button onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler("Ivan")}> MyYoutubeChanel-2 </button>*/}
            {/*<button onClick={(event: React.MouseEvent<HTMLButtonElement>)=>onClickHandler('Vasya')}> MyYoutubeChanel-1 </button>*/}
            {/*<button onClick={(event: React.MouseEvent<HTMLButtonElement>)=>onClickHandler('Ivan')}> MyYoutubeChanel-2 </button>*/}
            {/*<button onClick={foo1}> Button </button>*/}
            {/*<button onClick={() => foo2(100200)}> Button </button>*/}
            <Button name={"MyYoutubeChanel-1"} callback={()=>Button1Foo("Im Vasya", 21)}/>
            <Button name={"MyYoutubeChanel-2"} callback={()=>Button2Foo("Im Ivan", 23)}/>
            <Button name={"Typaya knopka"} callback={Button3Foo}/>
        </div>
    )
}


export default App;
