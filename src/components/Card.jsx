function Card({card}) {
  return (
    <div className={`bg-white mt-5 rounded-lg p-6 md:px-12 md:py-12 flex flex-col 
      items-center md:gap-20
      ${card.id === 2 ? `md:flex-row` : `md:flex-row-reverse`}`}>
        <img src={card.img} alt={card.altText} className="max-w-[250px] lg:h-64" />
        <div className="">
          <p className="font-poppins text-center md:text-left text-xl mt-10 mb-5">
            {card.title}
          </p>
          <p className="text-center font-openSans text-gray-400 md:text-left md:max-w-[80%]
            lg:max-w-[60%]">
            {card.description}
          </p>
        </div>
      </div>
  )
}

export default Card;