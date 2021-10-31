import React, {FC} from 'react'
import {cardsModel} from './cardsModel'
import {setSortCardsMethod} from '../../../store/reducers/cards-reducer'
import {useDispatch} from 'react-redux'
import {Card} from '../../../api/cards-api'
import {Table} from '../../../components/UI/Table/Table'

type CardsTableProps = {
    cards: Card[]
    cardsPackID: string
    isOwner: boolean
}

export const CardsTable: FC<CardsTableProps> = ({cards, cardsPackID, isOwner}) => {
    const dispatch = useDispatch()
    const model = cardsModel(sortMethod => dispatch(setSortCardsMethod({sortCarsMethod: sortMethod})), isOwner)

    return (
        <Table model={model} data={cards}/>
    )
}