import React, {FC, useCallback, useState} from 'react'
import {Range} from 'rc-slider'
import _ from 'lodash'
import {setMinMaxCardsCount} from '../../../store/reducers/packs-reducer'
import {useDispatch} from 'react-redux'

type CardsCountRangeProps = {
    minCardsCount: number
    maxCardsCount: number
}

export const CardsCountRange: FC<CardsCountRangeProps> = ({minCardsCount, maxCardsCount}) => {
    const dispatch = useDispatch()
    const [rangeValues, setRangeValues] = useState([minCardsCount, maxCardsCount])

    const rangeMarks = {
        0: {style: {fontSize: 16}, label: rangeValues[0]},
        100: {style: {fontSize: 16}, label: rangeValues[1]}
    }

    const onRangeChangeHandler = (values: number[]) => {
        setRangeValues(values)
        debouncedRange(values)
    }

    const debouncedRange = useCallback(_.debounce(values => dispatch(setMinMaxCardsCount({values: values})), 300), [])

    return (
        <Range value={rangeValues}
               marks={rangeMarks}
               onChange={onRangeChangeHandler}
               style={{margin: '32px 8px 48px 8px', width: 'inherit'}}/>
    )
}