import React from "react";
import Heading from './Heading/Heading';
import Entry from './Entry';
import emojipedia from '../emojipedia';

function createEmoji (props) {
  return (
    <Entry emojiIcon = {props.emoji}
      emojiTitle = {props.name}
      emojiDescribe = {props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <div className="container-box">
        {emojipedia.map(createEmoji)}
      </div>
    </div>
  );
}

export default App;
