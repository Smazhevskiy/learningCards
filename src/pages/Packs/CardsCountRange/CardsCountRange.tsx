import React, {FC, useEffect, useState} from 'react'
import {Range} from 'rc-slider'
import _ from 'lodash'
import {setCurrentCardsCount} from '../../../store/reducers/packs-reducer'
import {useDispatch} from 'react-redux'

type CardsCountRangeProps = {
    minCardsCount: number
    maxCardsCount: number
    currentCardsCount: number[]
}

export const CardsCountRange: FC<CardsCountRangeProps> = ({minCardsCount, maxCardsCount, currentCardsCount}) => {
    const dispatch = useDispatch()
    const [rangeValues, setRangeValues] = useState([minCardsCount, maxCardsCount])

    const rangeMarks = {
        [minCardsCount]: {style: {fontSize: 16}, label: minCardsCount},
        [maxCardsCount]: {style: {fontSize: 16}, label: maxCardsCount}
    }

    const onRangeChangeHandler = (values: number[]) => {
        setRangeValues(values)
        debouncedRange(values)
    }

    const debouncedRange = _.debounce(values => dispatch(setCurrentCardsCount({values: values})), 500) //TODO useCallback?

    useEffect(() => {
        setRangeValues([minCardsCount, maxCardsCount])
    }, [minCardsCount, maxCardsCount])

    return (
        <Range
            step={1}
            value={rangeValues}
            marks={rangeMarks}
            min={minCardsCount}
            max={maxCardsCount}
            onChange={onRangeChangeHandler}
            style={{margin: '32px 8px 48px 8px', width: 'inherit'}}/>
    )
}