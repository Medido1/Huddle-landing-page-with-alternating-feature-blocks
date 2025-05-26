import growTogether from "./src/assets/images/illustration-grow-together.svg";
import flowingConversation from "./src/assets/images/illustration-flowing-conversation.svg";
import yourUsers from "./src/assets/images/illustration-your-users.svg"

const cards = [
  {
    id:1,
    img: growTogether,
    altText: "growTogether illustration",
    title : "Grow Together",
    description: `Generate meaningful discussions with your audience and build a strong, 
      loyal community.Think of the insightful conversations you miss 
      out on with a feedback form.`,
  },
  {
    id:2,
    img:flowingConversation,
    altText: "Flowing conversation illustration",
    title: "Flowing Conversations",
    description: `You wouldn't paginate a conversation in real life, so why do it online? Our threads 
      have just-in-time loading for a more natural flow.`
  },
  {
    id:3,
    img: yourUsers,
    altText: "Your users illustration",
    title: "Your Users",
    description: `It takes no time at all to integrate Huddle with your app's authentication solution. 
      This means, once signed in to your app, your users can start chatting immediately.`
  }
]

export {cards}