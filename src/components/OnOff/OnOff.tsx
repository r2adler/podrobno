import {useState} from 'react';


export const OnOff = () => {
    const [active, setActive] = useState(false)
    const setBtn = () => setActive(!active)

    const onStyle = {
        backgroundColor: active ? 'green' : 'white',
        width: '40px',
        padding: '3px',
    }

    const offStyle = {
        backgroundColor: active ? 'white' : 'red',
        width: '40px',
        padding: '3px',
        marginLeft: '2px'
    }
    const indicatorStyle = {
        backgroundColor: active ? 'green' : 'red',
        border: 'none',
        borderRadius: '50px',
        width: 20,
        height: 20,
        display: 'inline-block',
        marginLeft: '5px',
    }


    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <button onClick={setBtn} style={onStyle}>on</button>
            <button onClick={setBtn} style={offStyle}>off</button>
            <span style={indicatorStyle}></span>
        </div>
    )
}