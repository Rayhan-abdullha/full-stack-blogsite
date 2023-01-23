import shortid from "shortid";
export const db = [
  {
    newId: shortid.generate(),
    userName: "English Premier League",
    title: "Haaland scores hattrick as Man City tame Wolves",
    desc: "Erling Haaland’s fourth hat-trick in 19 English Premier League appearances hauled Manchester City to within two points of leaders Arsenal with a 3-0 win over Wolves on Sunday.Pep Guardiola got the reaction he was hoping for from the English champions after questioning their hunger to retain the title after Thursday’s 4-2 win over Tottenham.The hosts had to come from 2-0 down in a dramatic second half against Spurs, but there was little mystery over the destination of the three points once Haaland had broken Wolves’ resistance five minutes before half-time.",
    photo: '',
    categories: "Others",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    newId: shortid.generate(),
    userName: "Abir khan",
    title: "Thinking in React",
    desc: "Thinking in React is a methodology for building user interfaces using the React JavaScript library. It involves breaking down a UI into small, reusable components and thinking about how the data flows through the application. This approach helps to simplify the development process and makes it easier to maintain and update the application. The main idea behind Thinking in React is to break down a UI into small, reusable components, and then think about how the data flows through the application. This approach helps to simplify the development process and makes it easier to maintain and update the application.",
    photo: '',
    categories: "Programming",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    newId: shortid.generate(),
    userName: "Roni miya",
    title: "Mastering the useRef Hook",
    desc: "The useRef hook is a simple hook that takes an initial value as an argument and returns a ref object. The ref object has a single property called 'current' that stores the initial value. The value of 'current' can be updated at any time, and the hook will not re-render the component.",
    photo: "",
    categories: "Programming",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    newId: shortid.generate(),
    userName: "Ismail Abdullah",
    title: "Bangladesh Information",
    desc: "Bangladesh, country of South Asia, located in the delta of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers in the northeastern part of the Indian subcontinent Bangladesh Bangladesh The riverine country of Bangladesh (“Land of the Bengals”) is one of the most densely populated countries in the world, and its people are predominantly Muslim. As the eastern portion of the historical region of Bengal, the area once formed, along with what is now the Indian state of West Bengal, the province of Bengal in British India. With the partition of India in 1947, it became the Pakistani province of East Bengal (later renamed East Pakistan), one of five provinces of Pakistan, separated from the other four by 1,100 miles (1,800 km) of Indian territory. In 1971 it became the independent country of Bangladesh, with its capital at Dhaka.,",
    photo: '.',
    categories: "Politics",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
