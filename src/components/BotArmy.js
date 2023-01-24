import React, { useState } from "react";
import BotCollection from "./botCollection";


function BotArmy({props}){
    const [bots, setBots] =useState([]);
    //const yourArmy = props.yourArmy;
    const [selectedBot, setSelectedBot] = useState(null);
    const handleRemove = (bot) => {
      props.removeBot(bot);
    }
    const handleDelete = (bot) => {
      fetch(`https://api.npoint.io/52e04eaa96c92025acfa/bots/${bot.id}`, {
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
    const selectBot = (bot) => {
        setSelectedBot(bot);
      };
    const handleEnlist = bot => {
        props.addBot(bot);
        setSelectedBot(null);
      }
    
      const handleBack = () => {
        setSelectedBot(null);
      }
    
    return(
<div>


<button className='delete-bot' onClick={() => handleDelete(props.bot)}>x</button>

    <button className="enlist" onClick={()=>handleEnlist(props.bot)}>add to army</button>
    <button className="back" onClick={()=>handleBack(props.bot)}>back</button>


</div>
)}
export default BotArmy