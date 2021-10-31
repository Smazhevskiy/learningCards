import {Button} from '../../../components/UI/Button/Button'
import {TableModel} from '../../../components/UI/Table/Table'
import {Card} from '../../../api/cards-api'
import {Sort} from '../../../components/UI/Sort/Sort'

export const cardsModel = (add: () => void,
                           remove: (id: string) => void,
                           update: (id: string) => void,
                           sort: (sort: string) => void,
                           userID: () => boolean): TableModel[] => [
    {
        header: index =>
            <th key={'question-title-' + index}><Sort sortBy={'question'} sortCallback={sort}>Question</Sort></th>,
        body: (item: Card) =>
            <td key={'question-cell-' + item._id}>{item.question}</td>
    },
    {
        header: index =>
            <th key={'answer-title-' + index}><Sort sortBy={'answer'} sortCallback={sort}>Answer</Sort></th>,
        body: (item: Card) =>
            <td key={'answer-cell-' + item._id}>{item.answer}</td>
    },
    {
        header: index =>
            <th key={'grade-title-' + index}><Sort sortBy={'grade'} sortCallback={sort}>Grade</Sort></th>,
        body: (item: Card) =>
            <td key={'grade-cell-' + item._id}>{item.grade}</td>
    },
    {
        header: index =>
            <th key={'updated-title-' + index}><Sort sortBy={'updated'} sortCallback={sort}>Updated</Sort></th>,
        body: (item: Card) => <td key={'updated-cell-' + item._id}>{item.updated.slice(5, 16)}</td>
    },
    {
        header: index =>
            <th key={'buttons-title-' + index}><Button onClick={add} disabled={userID()}>Add</Button></th>,
        body: (item: Card) =>
            <td key={'buttons-cell-' + item._id} className={'tablesButtonsCell'}>
                <Button onClick={() => remove(item._id)} disabled={userID()}>Delete</Button>
                <Button onClick={() => update(item._id)} disabled={userID()}>Update</Button>
            </td>
    }
]