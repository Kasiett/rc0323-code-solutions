import React, { useState } from 'react';
function Accordion({ topics }) {
  const [isClicked, setIsClicked] = useState(0);
  return topics.map((topic, index) => (
    <Topic
      isClicked={isClicked}
      setIsClicked={setIsClicked}
      key={topic.id}
      topic={topic}
    />
  ));
}

function Topic({ topic, isClicked, setIsClicked }) {
  return (
    <div className="accordion">
      <h3 onClick={() => setIsClicked(topic.id)} className="title">
        {topic.title}
      </h3>
      <p className={`${isClicked === topic.id ? 'content' : 'hidden'}`}>
        {topic.content}
      </p>
    </div>
  );
}
export default Accordion;
