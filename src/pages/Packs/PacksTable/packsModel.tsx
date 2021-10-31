import {Button} from '../../../components/UI/Button/Button'
import {PATH} from '../../../routes/routes'
import {Link} from 'react-router-dom'
import {TableModel} from '../../../components/UI/Table/Table'
import {CardsPack} from '../../../api/packs-api'
import {Sort} from '../../../components/UI/Sort/Sort'

export const packsModel = (add: () => void,
                           remove: (id: string) => void,
                           update: (id: string) => void,
                           sort: (sort: string) => void,
                           userID: string | undefined): TableModel[] => [
    {
        header: index =>
            <th key={'name-title-' + index}><Sort sortBy={'name'} sortCallback={sort}>Pack Name</Sort></th>,
        body: (item: CardsPack) =>
            <td key={'name-cell-' + item._id}><Link to={PATH.CARDS + '/' + item._id}>{item.name}</Link></td>
    },
    {
        header: index =>
            <th key={'userName-title-' + index}><Sort sortBy={'user_name'} sortCallback={sort}>User Name</Sort></th>,
        body: (item: CardsPack) =>
            <td key={'name-cell-' + item.user_name}>{item.user_name}</td>
    },
    {
        header: index =>
            <th key={'cardsCount-title-' + index}><Sort sortBy={'cardsCount'} sortCallback={sort}>Cards count</Sort>
            </th>,
        body: (item: CardsPack) =>
            <td key={'cardsCount-cell-' + item._id}>{item.cardsCount}</td>
    },
    {
        header: index =>
            <th key={'updated-title-' + index}><Sort sortBy={'updated'} sortCallback={sort}>Updated</Sort></th>,
        body: (item: CardsPack) =>
            <td key={'updated-cell-' + item._id}>{item.updated.slice(5, 16)}</td>
    },
    {
        header: index =>
            <th key={'buttons-title-' + index}><Button onClick={add}>Add</Button></th>,
        body: (item: CardsPack) =>
            <td key={'buttons-cell-' + item._id} className={'tablesButtonsCell'}>
                <Link to={PATH.LEARN + '/' + item._id}>Learn</Link>
                <Button onClick={() => remove(item._id)} disabled={item.user_id !== userID}>Delete</Button>
                <Button onClick={() => update(item._id)} disabled={item.user_id !== userID}>Update</Button>
            </td>
    },

]