import React, { useState, useEffect } from 'react';


function BotCollection(props) {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);


  useEffect(() => {
    fetch('')
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


  return (
    <center className='body'>
      <div>
            <h2 className='tittle'>Bot Battlr
              <h6> add  your Army</h6>
            </h2>
          
              
              
{
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
                
            ))}
              
            
        </div>
        </center>
  );
}

export default BotCollection;