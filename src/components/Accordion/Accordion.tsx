import {FC} from "react";

interface AccordionProps {
    titleValue: string
    collapsed: boolean
}

export const Accordion: FC<AccordionProps> = (props) => {

    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            {
                !props.collapsed && <AccordionBody/>
            }
        </>
    )
}


interface AccordionTitleProps {
    title: string
}

function AccordionTitle(props: AccordionTitleProps) {

    return <h3>-- {props.title} --</h3>
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