import { useState } from "react";
import './App.css'
import img1 from "./images/frame1.png";
import img2 from "./images/frame2.png";
import img3 from "./images/frame3.png";
import img4 from "./images/frame4.png";

function App() {
  const [cards] = useState([
    {
      title: "PARIS",
      text: "Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas.",
      image: img1,
    },
    {
      title: "LONDON",
      text: "When exploring London, you will come across lots of excitement by chance, so try to take everything in rather than just rushing around to all of the major tourist haunts.",
      image: img2,
    },
    {
      title: "BARCELONA",
      text: "Overlooking the Mediterranean Sea, and famous for Gaudi and other Art Nouveau architecture. Barcelona is one of Europe's trendiest cities.",
      image: img3,
    },
    {
      title: "PRAGUE",
      text: "Old-world charm meets modern vibrancy in Europe's capital of stunning architecture, with the iconic Charles Bridge and a captivating cultural scene.",
      image: img4,
    },
  ]);

  return (
    <div className="parentdiv">
      <div className="child">
    <div>
      <h1 className="title">CITIES TO VISIT IN EUROPE</h1>
      <div className="cards">
        {cards.map((card, i) => (
          <div key={i} className="card">
            <img src={card.image} alt={`Image for ${card.title}`} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;