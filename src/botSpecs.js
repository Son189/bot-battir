import React from 'react';

function BotSpecs(props) {
  const { bot, handleEnlist, handleBack } = props;


  return (
   
    <div className='bot-card'>
      <img className='bot-img' src={bot.avatar_url} alt={bot.name} />
      <div className='bot-info'>
        <h5 className='bot-name'>
          {bot.name}
        
        </h5>
           <h6 className='bot-catchphrace'>{bot.catchphrase}</h6>
            <p className='bot-armor'>{bot.armor}</p>
            <p className='bot-damage'>{bot.damage}</p>
            <p className='bot-health'>{bot.health}</p>
      </div>
      <center>
      <div className='bot-actions'>
        <button className='enlist-bot' onClick={() => handleEnlist(bot)}>
          Add to Army
        </button>
        <button className='back-button' onClick={handleBack}>
          Back
        </button>
      </div>
      </center>
    </div>
  
  );
}

export default BotSpecs;