import React, {FC, useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion'
import {Rating} from './components/Rating/Rating'
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';

function App() {
    const [value, setValue] = useState<number>(0)
    return (
        <div className={'App'}>
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*Article1*/}
            <UncontrolledAccordion titleValue='Menu'/>
            <Rating value={value} setValue={setValue}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff/>
            <OnOff/>
        </div>
    );
}

interface PageTitleProps {
    title: string
}

const PageTitle: FC<PageTitleProps> = ({title}) => {
    return <h1>{title}</h1>
}

export default App;
