import { Joke } from '../Joke';
import './style.css';
import React, { useEffect, useState } from 'react';

export const HomePage = () => {
const [joke, setJoke] = useState([])



useEffect(() => {
  const fetchName = async () => {
    const response = await fetch('http://localhost:4000/api/jokes');
    const json = await response.json();
    setJoke(json.data);
  };

  fetchName();
}, []);
  


  return (
    <div className="container">
      {joke.map((item) => (
        <Joke key={item.id} userAvatar={item.avatar} userName={item.name} text={item.text} likes={item.likes} dislikes={item.dislikes}/> 
      ))}
     
    </div>
  );

  
};



