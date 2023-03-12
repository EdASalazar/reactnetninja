import './App.css';

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  // const person = {name: 'Ed', age: '46'};
  const link = "http://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        {/* <p>{ person }</p> */}
        <p>{ 10 }</p>
        <p>{ "hello ninjas" }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Google Site</a>

      </div>
  
    </div>
  );
}

export default App;
