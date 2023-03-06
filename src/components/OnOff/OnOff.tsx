import {useState} from 'react';

export const OnOff = () => {
    const [active, setActive] = useState(false)
    const setBtn = () => {
        setActive(!active)    }


    return (
        <div style={{display: 'flex'}}>
            <button onClick={setBtn} style={{backgroundColor: active ? 'green': 'white'}}>on</button>
            <button onClick={setBtn} style={{backgroundColor: active ? 'white': 'red'}}>off</button>
            <span style={{
                backgroundColor: active ? 'green' : 'red',
                border: '1px solid black ',
                borderRadius: '50px',
                width: 20,
                height: 20,
                display: 'inline-block',
            }}></span>
        </div>
    )
}