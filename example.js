import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
const style = {
  width: 400,
}
const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Learn React',
        notes: 'So far so good'
      },
      {
        id: 2,
        text: 'Play Video Games',
        notes: 'beat Avenger\'s Black Order, where to go from here.'
      },
      {
        id: 3,
        text: 'Work in Garden',
        notes: 'Crepe Myrtle Died, Darn.'
      },
      {
        id: 4,
        text: 'Eat Pho',
        notes: 'Man! I miss Asian Bistro VII.'
      }
    ])
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      },
      [cards],
    )
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          notes={card.notes}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}
export default Container
