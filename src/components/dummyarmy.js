import React from 'react';

import { useState } from 'react';

function YourBotArmy(props) {
  const [bots, setBots] =useState([]);
  //const yourArmy = props.yourArmy;

  const handleRemove = (bot) => {
    props.removeBot(bot);
  }
  const handleDelete = (bot) => {
    fetch(`https://api.npoint.io/3f9834e1240b04eb4361/bots/${bot.id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          setBots(bots.filter(b => b.id !== bot.id));
        } else {
          throw new Error("");
        }
      })
      .catch(error => {
        console.error(error);
        alert("")
      });
  };


  return (
    <center>
    <div className='army'>
      <h4 className='bot-army'>Your Bot Army
      <h6> remove from your army</h6>
      </h4>
      
      <div  >
        {props.yourArmy.map(bot => (
          <div className='bot-card' onClick={() => handleRemove(bot)}
          key={bot.id}>
          <img className='bot-img' src={bot.avatar_url} alt={bot.name} />
            <div className='divtwo'>
            <h5 className='bot-name'>{bot.name}</h5>
            <h6 className='bot-catchphrace'>{bot.catchphrase}</h6>
            <p className='bot-armor'> {bot.armor}</p>
            <p className='bot-damage'>{bot.damage}</p>
            <p className='bot-health'>{bot.health}</p>
            <button className='delete-bot' onClick={() => handleDelete(bot)}>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </center>
  );
}

export default YourBotArmy;
