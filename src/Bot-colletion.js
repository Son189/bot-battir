import React, { useState, useEffect } from 'react';
import BotSpecs from './botSpecs';

function BotCollection(props) {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  
  useEffect(() => {
    fetch('https://api.npoint.io/52e04eaa96c92025acfa/bots/')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = bot => {
    setSelectedBot(bot);
  }

  const handleEnlist = bot => {
    props.addBot(bot);
    setSelectedBot(null);
  }

  const handleBack = () => {
    setSelectedBot(null);
  }

  const handleDelete = bot => {
    fetch(`https://api.npoint.io/3f9834e1240b04eb4361/bots/${bot.id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          setBots(bots.filter(b => b.id !== bot.id));
        } else {
          throw new Error("Failed to load bot.");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Failed to load bot.");
      });
  };

  return (
    <center className='body'>
      <div>
            <h2 className='tittle'>Bot Battlr App
              <h6>clickon the bot to add to your Army</h6>
            </h2>
            {selectedBot ? (
              <BotSpecs
                bot={selectedBot}
                handleEnlist={handleEnlist}
                handleBack={handleBack}
              />
            ) : (
              bots.map(bot => (
                <div
                  className='bot-card'
                  onClick={() => handleClick(bot)}
                  key={bot.id}
                >
                  <img className='bot-img' src={bot.avatar_url} alt={bot.name} />
                  <div className='divtwo'>
                    <h5 className='bot-name'>
                      {bot.name}
                       </h5>
                    
                          <h6 className='bot-catchphrace'>{bot.catchphrase}</h6>
                          <p className='bot-armor'>{bot.armor}</p>
                          <p className='bot-damage'>{bot.damage}</p>
                          <p className='bot-health'>{bot.health}</p>
                     
                    <button className='delete-bot' onClick={() => handleDelete(bot)}>x</button>
                    </div> 
                </div>
                
            )))}
              
            
        </div>
        </center>
  );
}

export default BotCollection;
