import './App.css';
import {useState} from 'react';
import GenButton from './components/GenButton';
import User from './components/User';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${process.env.REACT_APP_USER_APIKEY}`,
		'X-RapidAPI-Host': `${process.env.REACT_APP_USER_HOST}`
	}
};
const fetchUserData = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_USER_URL}`, options)
          const body = await response.json()
          return body 
      }catch (err) {
          console.log(err)
      }
}

function App() {
    const [user, setUser] = useState(null)
    const handleClick = async () => {
        const body = await fetchUserData()
        setUser(body.results)
    }

    return (
    <div className="App">
       <div className="container">
            <h1>Random User Generator</h1>
            <GenButton onClick={handleClick}/>
            <User user={user}/>
       </div>
    </div>
  );
}

export default App;
