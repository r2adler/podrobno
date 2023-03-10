import {FC, useState} from 'react';

interface UncontrolledAccordion {
    titleValue: string
}

export const UncontrolledAccordion: FC<UncontrolledAccordion> = ({titleValue}) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <AccordionTitle collapsed={collapsed} setCollapsed={setCollapsed} title={titleValue}/>
            <button onClick={() => setCollapsed(!collapsed)}>toggle</button>
            {
                !collapsed && <AccordionBody/>
            }
        </>
    )
}


interface AccordionTitleProps {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

const AccordionTitle: FC<AccordionTitleProps> = ({setCollapsed, collapsed, title}) => {

    return <h3 onClick={() => setCollapsed(!collapsed)}>-- {title} --</h3>
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}