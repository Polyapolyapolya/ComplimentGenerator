import React, { useState } from 'react';
import './App.css';
import pic1 from './pic1.png'

const compliments = [
  "Ты невероятно умная!",
  "Твоя улыбка освещает весь день!",
  "Ты вдохновляешь окружающих быть лучше!",
  "У тебя потрясающий вкус!",
  "Ты делаешь мир лучше просто своим присутствием!",
  "Ты обладаешь невероятной интуицией!",
  "Ты — пример доброты и заботы!",
  "Ты умеешь находить красоту в мелочах!",
  "Ты — настоящий лидер!",
  "Ты всегда находишь правильные слова!",
  "Ты — источник позитива!",
  "Ты умеешь слушать, как никто другой!",
  "Ты прекрасена внутри и снаружи!",
  "Ты — талантливый и уникальный человек!",
  "Ты заслуживаешь всего самого лучшего!"
];

function App() {
  const [compliment, setCompliment] = useState('');

  const generateCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setCompliment(compliments[randomIndex]);
  };

  const buttonText = compliment ? 'Еще комплимент!' : 'Хочу комплимент!';

  return (
    <div className="App">
      <div className='card'>
        <img src={pic1} width="360px" height="200px"/>
            <button onClick={generateCompliment}>{buttonText}</button>
      {compliment && (
        <div className="compliment-box">
          <p>{compliment}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;