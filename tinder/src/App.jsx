import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    {
      name: "John",
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Emma",
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Alex",
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    }
  ]);

  const swiped = (direction, name) => {
    console.log("Swiped " + direction + " on " + name);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="app">
      <h1>🔥 Tinder Swipe Clone</h1>

      <div className="cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default App;