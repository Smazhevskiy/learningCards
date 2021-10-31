import React, {FC} from 'react'
import {Table} from '../../../components/UI/Table/Table'
import {packsModel} from './packsModel'
import {deleteCardsPack, setSortCardsPackMethod, updateCardsPack} from '../../../store/reducers/packs-reducer'
import {useDispatch} from 'react-redux'
import {CardsPack} from '../../../api/packs-api'
import {useModal} from '../../../hooks/useModal'
import {AddPackModal} from './PacksModals/AddPackModal'

type PacksTableProps = {
    cardPacks: CardsPack[]
    userID: string | undefined
}

export const PacksTable: FC<PacksTableProps> = ({cardPacks, userID}) => {
    const dispatch = useDispatch()
    const {isOpen, onToggle} = useModal()

    const addPack = () => {
        //dispatch(createCardsPack({cardsPack: {name, private: isPrivate}}))
    }

    const removePack = (id: string) => {
        dispatch(deleteCardsPack({id}))
    }

    const updatePack = (id: string) => {
        dispatch(updateCardsPack({cardsPack: {_id: id, name: ''}}))
    }

    const packsSortMethod = (sortMethod: string) => {
        dispatch(setSortCardsPackMethod({sortCardPacksMethod: sortMethod}))
    }

    const model = packsModel(addPack, removePack, updatePack, packsSortMethod, userID)

    return (
        <>
            <Table model={model} data={cardPacks}/>
            {/*<Modal open={isOpen} onClick={() => onToggle()}><h1>235236</h1></Modal>*/}
            <AddPackModal addPack={addPack} open={isOpen} onToggle={onToggle}/>
        </>
    )
}