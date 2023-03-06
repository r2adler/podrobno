import {FC} from 'react';

interface RatingProps {
    value: number
}
export const Rating: FC<RatingProps> = (props: any) => {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

interface StarProps {
    selected: boolean
}
function Star(props: any) {
    if (props.selected === true) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }
}