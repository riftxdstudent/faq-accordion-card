import { useState } from "react"
import {FaChevronUp, FaChevronDown} from "react-icons/fa"

export default function SingleQuest({ question, answer }) {
    const [itShow, setItShow] = useState(false)
    
    return(
        <div className="article-quest">
            <article onClick={() => setItShow(!itShow)}>
                <h2 className={'{itShow && "clicked"}'}>
                    {question}</h2>
                {itShow ? (
                <FaChevronUp className="icon"/>
                ) : (
                <FaChevronDown className="icon"/>
                )}
            </article>
            
            {itShow && <p>{answer}</p>}
        </div>
    )
}