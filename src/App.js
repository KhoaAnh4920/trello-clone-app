import './App.scss';

function App() {
  return (
    <div className="trello-master">
      <nav className='navbar app'>App Bar</nav>
      <nav className='navbar board'>Board Bar</nav>
      <div className='board-columns'>
        <div className='column'>
        <header>Brainstorm</header>
        <ul>
          <li>
            <img src='https://www.w3schools.com/howto/img_avatar.png'></img>
            Title: KHOAANH
          </li>
          <li>Add what you'd like to work on below</li>
          <li>Add what you'd like to work on below</li>
          <li>Add what you'd like to work on below</li>
          <li>Add what you'd like to work on below</li>
          <li>Add what you'd like to work on below</li>
        </ul>
        <footer>Add another card</footer>
        </div>
        <div className='column'>
        <header>Brainstorm</header>
        <ul>
          <li>
            <img src='https://www.w3schools.com/howto/img_avatar.png'></img>
            Title: KHOAANH
          </li>
          <li>Add what you'd like to work on below</li>
          <li>Add what you'd like to work on below</li>
          <li>Add what you'd like to work on below</li>
          <li>Add what you'd like to work on below</li>
          <li>Add what you'd like to work on below</li>
        </ul>
        <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
