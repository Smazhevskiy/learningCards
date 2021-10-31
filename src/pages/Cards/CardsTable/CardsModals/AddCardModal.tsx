import React, {FC, useState} from 'react'
import {Modal} from '../../../../components/UI/Modal/Modal'
import {Input} from '../../../../components/UI/Input/Input'
import {Button} from '../../../../components/UI/Button/Button'
import {useModal} from '../../../../hooks/useModal'
import {useDispatch} from 'react-redux'
import {createCard} from '../../../../store/reducers/cards-reducer'
import {useTypedSelector} from '../../../../hooks/hooks'

type AddCardModalProps = {
    buttonDisable: boolean
}

export const AddCardModal: FC<AddCardModalProps> = ({buttonDisable}) => {
    const dispatch = useDispatch()
    const {isOpen, onToggle} = useModal()
    const currentCardsPackID = useTypedSelector(state => state.cards.currentCardsPackID)
    const [question, setQuestion] = useState('')

    const addPack = async () => {
        await dispatch(createCard({card: {cardsPack_id: currentCardsPackID, question}}))
        onToggle()
        setQuestion('')
    }

    return (
        <>
            <Button onClick={() => onToggle()} disabled={buttonDisable}>Add</Button>

            <Modal open={isOpen} onClick={() => onToggle()}>
                <label htmlFor={'cards-addCard'}>
                    Card question
                    <Input id={'cards-addCard'}
                           value={question}
                           onChange={e => setQuestion(e.currentTarget.value)}/>
                </label>
                <Button onClick={addPack}>Add</Button>
            </Modal>
        </>
    )
}