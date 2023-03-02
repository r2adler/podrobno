import React, {FC} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion'
import {Rating} from './components/Rating/Rating'

function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            Article1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
