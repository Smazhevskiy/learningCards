import React, {FC} from 'react'
import {useParams} from 'react-router-dom'

export const Learn: FC = () => {
    const {id} = useParams<{id: string}>()

    return (
        <div>
            <h1>Learn</h1>
            <h1>{id}</h1>
        </div>
    )
}