import { useState } from "react";
import { Quest } from "./Quest";

import mobileImages from "./images/illustration-woman-online-mobile.svg";
import desktopImages from "./images/illustration-woman-online-desktop.svg";
import SingleQuest from "./SingleQuest";

function App() {
  const [quest] = useState(Quest)

  return (
    <div className="container">
      <article>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopImages}></source>
          <img src={mobileImages}></img>
        </picture>
      </article>

      <article>
        <h1>FAQ</h1>

        {quest.map((quest, index) => (
          <SingleQuest 
          key={index} 
          question={quest.question} 
          answer={quest.answer}/>
        ))}
      </article>
    </div>
  );
}

export default App;
