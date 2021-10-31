import React, {FC, useCallback, useState} from 'react'
import {Range} from 'rc-slider'
import _ from 'lodash'
import {setMinMaxGrade} from '../../../store/reducers/cards-reducer'
import {useDispatch} from 'react-redux'

type CardsGradeRangeProps = {
    minGrade: number
    maxGrade: number
}

export const CardsGradeRange: FC<CardsGradeRangeProps> = ({minGrade, maxGrade}) => {
    const dispatch = useDispatch()
    const [rangeValues, setRangeValues] = useState([minGrade, maxGrade])
    const rangeMarks = {
        0: {style: {fontSize: 16}, label: rangeValues[0]},
        6: {style: {fontSize: 16}, label: rangeValues[1]}
    }

    const onRangeChangeHandler = (values: number[]) => {
        setRangeValues(values)
        debouncedRange(values)
    }

    const debouncedRange = useCallback(_.debounce(values => dispatch(setMinMaxGrade({values: values})), 500), [])

    return (
        <Range value={rangeValues}
               marks={rangeMarks}
               max={6}
               onChange={onRangeChangeHandler}
               style={{margin: '32px 8px 48px 8px', width: 'inherit'}}/>
    )
}