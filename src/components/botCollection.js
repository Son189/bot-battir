import React, { useState, useEffect } from 'react';
import BotArmy from './BotArmy';

const BotCollection = (props) => {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('https://api.npoint.io/52e04eaa96c92025acfa/bots/')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const selectBot = bot => {
    setSelectedBot(bot);
  };
  const handleEnlist = bot => {
    props.addBot(bot);
    setSelectedBot(null);
  }

  const handleBack = () => {
    setSelectedBot(null);
  }

  return (
    <div>
      <h1>Bot Collection</h1>
   
      <div class="cards" >
      
  
    
        {bots.map((bot) => (
         
         <div className='card' key={bot.id} onClick={() => selectBot(bot)}>
         <img  src={bot.avatar_url} class="card-img-top" alt={bot.name}/>
        
          <p  class="card-text" >health:{bot.health}</p> 
          <p class="card-text">damage: {bot.damage}</p> 
          <p class="card-text">armor:{bot.armor} </p>
          <p class="card-text">bot_class: {bot.bot_class}</p> 
          <p class="card-text"> catchphrase: {bot.catchphrase} </p>
          <p  class="card-text">created_at: {bot.created_at}</p> 
          <p class="card-text">updated_at: {bot.updated_at}</p> 
          </div>
          
        
        ))}
    
      
</div>
     </div> 
      );
};


   
  

export default BotCollection;
