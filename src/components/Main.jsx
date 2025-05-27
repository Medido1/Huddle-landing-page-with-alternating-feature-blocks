import "../App";
import Card from "./Card";
import {cards} from "../../data";
import { useState } from "react";

function Main() {
  const [cardsData, setCardsData] = useState(cards);

  return (
    <main className="relative p-4 flex flex-col items-center gap-4 bg-gray-100">
      <div className="mb-50">
        {cards.map(card => (
          <Card 
            key = {card.id}
            card = {card}
          />
        ))}
      </div>
      <div className="bg-white w-[90%] px-4 py-12 text-center rounded-lg shadow-lg
        absolute -bottom-20">
        <p className="font-poppins text-md mb-5">
          Ready To Build Your Community?
        </p>
        <button className="bg-[#FF4EDC] rounded-full text-white text-sm 
          font-bold px-14 py-2 cursor-pointer">
          Get Started For Free
        </button>
      </div>
    </main>
  )
}

export default Main;