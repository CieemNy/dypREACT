
import './App.css';

function App() {
  const przywitanie='siema';
  const displayemo=event=>alert(event.target.id);
  const dupa=false;
  const emojis=[
      {
        emoji:'😀',
        name: "emoji1"
      },
      {
        emoji:'😄',
        name: "emoji2"
      },
      {
        emoji:'🤐',
        name: "emoji3"
      },
      {
        emoji:'😍',
        name: "emoji4"
      },
      {
        emoji:'😗',
        name: "emoji5"
      }


  ]
  return (
  <div className='container'>
          <h1 id={przywitanie}>Simma</h1>
          <h2>dupa</h2>

    <ul>
           <ul>
      {
          emojis.map(emoji => (
          <li key={emoji.name}>
          <button onClick={displayemo}>
          <span role="img" id={emoji.name}>{emoji.emoji}</span>
          </button>
          </li>
          ))
      }
</ul>

     </ul>
  {dupa&&<p>widac mnie?</p>}
  </div>
  );
}

export default App;
