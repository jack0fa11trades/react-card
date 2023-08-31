import { useState } from "react";
import './App.css'
import img1 from "./images/frame1.png";
import img2 from "./images/frame2.png";
import img3 from "./images/frame3.png";
import img4 from "./images/frame4.png";

function App() {
  const [cards] = useState([
    {
      title: "Card-1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      image: img1,
    },
    {
      title: "Card-2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      image: img2,
    },
    {
      title: "Card-3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      image: img3,
    },
    {
      title: "Card-4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      image: img4,
    },
  ]);

  return (
    <div>
      <section>
        <div className="parent-div">
          <div className="container">
            <h1>Responsive Cards</h1>
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <img src={card.image} alt={`Image for ${card.title}`} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
