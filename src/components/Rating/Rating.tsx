import {FC} from 'react';

interface RatingProps {
    value: number
    setValue: (value: number) => void
}

export const Rating: FC<RatingProps> = ({value, setValue}) => {

    return (
        <div>
            <Star onClick={() => setValue(1)} selected={value > 0}/>

            <Star onClick={() => setValue(2)} selected={value > 1}/>

            <Star onClick={() => setValue(3)} selected={value > 2}/>

            <Star onClick={() => setValue(4)} selected={value > 3}/>

            <Star onClick={() => setValue(5)} selected={value > 4}/>

        </div>
    )
}

interface StarProps {
    selected: boolean
    onClick: () => void
}

const Star: FC<StarProps> = ({selected, onClick}) => {
    if (selected) {
        return <span onClick={onClick}><b>star</b></span>
    }
    return <span onClick={onClick}>star</span>
}