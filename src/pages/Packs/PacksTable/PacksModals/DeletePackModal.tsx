import React, {FC, memo} from 'react'
import {useDispatch} from 'react-redux'
import {useModal} from '../../../../hooks/useModal'
import {deleteCardsPack} from '../../../../store/reducers/packs-reducer'
import {Button} from '../../../../components/UI/Button/Button'
import {Modal} from '../../../../components/UI/Modal/Modal'

type DeletePackModalProps = {
    packID: string
    buttonDisable: boolean
}

export const DeletePackModal: FC<DeletePackModalProps> = memo( ({packID, buttonDisable}) => {
    console.log('del pack modal render')
    const dispatch = useDispatch()
    const {isOpen, onToggle} = useModal()

    const deletePack = async () => {
        await dispatch(deleteCardsPack({id: packID}))
    }

    return (
        <>
            <Button style={{background:'orangered'}} onClick={() => onToggle()} disabled={buttonDisable}>Delete</Button>

            <Modal open={isOpen} onClick={() => onToggle()}>
                <Button onClick={deletePack} secondary style={{marginBottom: 24}}>Delete</Button>
                <Button  onClick={() => onToggle()}>Cancel</Button>
            </Modal>
        </>
    )
})