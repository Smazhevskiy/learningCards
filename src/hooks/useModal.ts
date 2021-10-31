import {useState} from 'react'

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    const onToggle = () => {
        setIsOpen(!isOpen)
    }

    return {onOpen, onClose, isOpen, onToggle}
}