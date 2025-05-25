function Card({card}) {
  return (
    <div className="bg-white mt-10 rounded-lg p-6">
        <img src={card.img} alt={card.altText} />
        <p className="font-poppins text-center text-xl mt-10 mb-5">
          {card.title}
        </p>
        <p className="text-center font-openSans text-gray-400">
          {card.description}
        </p>
      </div>
  )
}

export default Card;