import React, {FC, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Button} from '../../components/UI/Button/Button'
import {Card} from '../../api/cards-api'
import {useTypedSelector} from '../../hooks/hooks'
import {useDispatch} from 'react-redux'
import {fetchCards, gradeAnswer} from '../../store/reducers/cards-reducer'
import {getCard, grades} from '../../utils/cardsLearning'
import {PATH} from '../../routes/routes'

export const Learn: FC = () => {
    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [first, setFirst] = useState<boolean>(true)

    const cards = useTypedSelector(state => state.cards.cards)
    const [card, setCard] = useState<Card>({
        _id: 'fake',
        cardsPack_id: '',
        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
        shots: 0,
        type: '',
        rating: 0,
        __v: 346,
        user_id: '',
        created: '',
        updated: '',
    })


    useEffect(() => {
        if (first) {
            dispatch(fetchCards({cardsPack_id: id}))
            setFirst(false)
        }

        if (cards.length > 0) setCard(getCard(cards))

        return () => {
        }
    }, [dispatch, id, cards, first])

    const onNext = () => {
        setIsChecked(false)

        if (cards.length > 0) {
            // dispatch
            setCard(getCard(cards))
        } else {
        }
    }

    return (
        <div>
            <h1>Learn</h1>
            <h3>{card.question}</h3>
            <Button onClick={() => setIsChecked(!isChecked)}>Check yourself</Button>

            {isChecked &&
			<>
				<div>{card.answer}</div>
				<h3>Оцените свой ответ</h3>

				<div>
                    {grades.map((grade, index) =>
                        <Button key={grade}
                                onClick={() => dispatch(gradeAnswer({card_id: card._id, grade: index + 1}))}>
                            {grade}
                        </Button>)}
				</div>


				<Button onClick={onNext}>Next</Button>

			</>}

            <Link to={PATH.CARDS + '/' + id}>Show stats</Link>
        </div>
    )
}