import {Button} from '../../../components/UI/Button/Button'
import {TableModel} from '../../../components/UI/Table/Table'
import {Card} from '../../../api/cards-api'
import {Sort} from '../../../components/UI/Sort/Sort'
import {AddCardModal} from './CardsModals/AddCardModal'
import {DeleteCardModal} from './CardsModals/DeleteCardModal'
import {UpdateCardModal} from './CardsModals/UpdateCardModal'

export const cardsModel = (sort: (sort: string) => void, isOwner: boolean): TableModel[] => [
    {
        header: index =>
            <th key={'question-title-' + index}>
                <Sort sortBy={'question'} sortCallback={sort}>Question</Sort>
            </th>,
        body: (item: Card) =>
            <td key={'question-cell-' + item._id}>{item.question}</td>
    },
    {
        header: index =>
            <th key={'answer-title-' + index}>
                <Sort sortBy={'answer'} sortCallback={sort}>Answer</Sort>
            </th>,
        body: (item: Card) =>
            <td key={'answer-cell-' + item._id}>{item.answer}</td>
    },
    {
        header: index =>
            <th key={'grade-title-' + index}>
                <Sort sortBy={'grade'} sortCallback={sort}>Grade</Sort>
            </th>,
        body: (item: Card) =>
            <td key={'grade-cell-' + item._id}>{item.grade}</td>
    },
    {
        header: index =>
            <th key={'updated-title-' + index}>
                <Sort sortBy={'updated'} sortCallback={sort}>Updated</Sort>
            </th>,
        body: (item: Card) =>
            <td key={'updated-cell-' + item._id}>{item.updated.slice(5, 16)}</td>
    },
    {
        header: index =>
            <th key={'buttons-title-' + index}>
                <AddCardModal buttonDisable={isOwner}/>
            </th>,
        body: (item: Card) =>
            <td key={'buttons-cell-' + item._id} className={'tablesButtonsCell'}>
                <DeleteCardModal cardID={item._id} buttonDisable={isOwner}/>
                <UpdateCardModal cardID={item._id} buttonDisable={isOwner} prevCardName={item.question}/>
            </td>
    }
]