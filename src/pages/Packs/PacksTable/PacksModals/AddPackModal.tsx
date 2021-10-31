import React, {FC, useState} from 'react'
import {Modal} from '../../../../components/UI/Modal/Modal'
import {Input} from '../../../../components/UI/Input/Input'
import {Checkbox} from '../../../../components/UI/Checkbox/Checkbox'
import {Button} from '../../../../components/UI/Button/Button'

type AddPackModalProps = {
    open: boolean
    onToggle: () => void
    addPack: any
}

export const AddPackModal: FC<AddPackModalProps> = ({addPack, open, onToggle}) => {
    const [name, setName] = useState('')
    const [isPrivate, setIsPrivate] = useState(false)

    return (
        <Modal open={open} onClick={() => onToggle()}>
            <Input value={name} onChange={e => setName(e.currentTarget.value)}/>
            <Checkbox checked={isPrivate} onChange={e => setIsPrivate(e.currentTarget.checked)}>
                Set to private
            </Checkbox>
            <Button onClick={() => addPack(name, isPrivate)}>Send</Button>
        </Modal>
    )
}