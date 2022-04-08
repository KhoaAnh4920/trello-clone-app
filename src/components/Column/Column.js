import Card from 'components/Card/Card';
import React from 'react';
import './Column.scss';
import { mapOrder } from 'utilities/sorts'
import { Container, Draggable } from 'react-smooth-dnd';




function Column(props) {
  const { column } = props;
  const cards = mapOrder(column.card, column.cardOrder, 'id')


  const onCardDrop = (dropResult) => {
    console.log(dropResult);
  }


  return (
    <div className='column'>
      <header className='column-drag-handle'>{column.title}</header>
      <div className='card-list'>
        <Container
          groupName="khoaanh-columns"
          onDrop={onCardDrop}
          getChildPayload={index =>
            cards[index]
          }
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'cards-drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards && cards.map((item, index) => {
            return <Draggable key={index} ><Card card={item} /></Draggable>
          })}
        </Container>
      </div>
      <footer>Add another card</footer>
    </div>
  )
}

export default Column