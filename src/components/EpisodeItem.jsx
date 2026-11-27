import { useState } from "react";

function EpisodeItem({title, rating, duration}) {
  const [votes, setVotes] = useState(0);//initialize the vote count to 0

  const addVote = () => {// Increment the vote count by 1
    setVotes(votes + 1);
  };

  return (
    <li className="episode">
      <span className="episode__title">{title}</span>
      <span className="episode__info">
        <span className="episode__rating">★ {rating}</span> · {duration} דק'
      </span>
      <button className="episode__vote" onClick={addVote}>
        👍 {votes}
      </button>
    </li>
  );
}

export default EpisodeItem;