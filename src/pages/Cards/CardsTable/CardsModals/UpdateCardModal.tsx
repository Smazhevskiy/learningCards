import React, {FC, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useModal} from '../../../../hooks/useModal'
import {Button} from '../../../../components/UI/Button/Button'
import {Modal} from '../../../../components/UI/Modal/Modal'
import {Input} from '../../../../components/UI/Input/Input'
import {updateCard} from '../../../../store/reducers/cards-reducer'

type UpdatePacksModalProps = {
    cardID: string
    buttonDisable: boolean
    prevCardName: string
}

export const UpdateCardModal: FC<UpdatePacksModalProps> = ({cardID, buttonDisable, prevCardName}) => {
    const dispatch = useDispatch()
    const {isOpen, onToggle} = useModal()
    const [question, setQuestion] = useState(prevCardName)

    const updatePack = async () => {
        await dispatch(updateCard({card: {_id: cardID, question}}))
        onToggle()
    }

    return (
        <>
            <Button onClick={() => onToggle()} disabled={buttonDisable}>Update</Button>

            <Modal open={isOpen} onClick={() => onToggle()}>
                <label htmlFor={'cards-updateCard'}>
                    New card name
                    <Input id={'cards-updateCard'}
                           value={question}
                           onChange={e => setQuestion(e.currentTarget.value)}/>
                </label>

                <Button onClick={updatePack}>Update</Button>
            </Modal>
        </>
    )
}