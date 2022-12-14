import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov Andrew Clark',
    num_comments: 2,
    points: 5,
    object_Id: 1,
  },
];

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>

    <Search />

    <hr />

    <List />
  </div>
);

const Search = () => {
  // perform a task in between

  const handleChange = (event) => { // After opening your application in a web browser, 
    // open the browser’s developer tools “Console”-tab to see the logging occur after 
    // you type into the input field. What
     // you see is called a synthetic event as a JavaScript object 
     // and the input field’s internal value
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  };
  return (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange}/>
  </div>
  );
};

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

export default App