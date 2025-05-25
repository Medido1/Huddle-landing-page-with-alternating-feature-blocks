import "../App";
import Card from "./Card";
import {cards} from "../../data";
import { useState } from "react";

function Main() {
  const [cardsData, setCardsData] = useState(cards);

  return (
    <main className="p-4 flex flex-col items-center gap-4 bg-gray-100">
      {cards.map(card => (
        <Card 
          key = {card.id}
          card = {card}
        />
      ))}
    </main>
  )
}

export default Main;