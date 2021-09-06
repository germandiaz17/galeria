//COMPONENTS
import PageGrid from './components/PageGrid';

//AXIOS
import Axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  //STATES
  const [response, setResponse] = useState()
  const [twoResponse, setTwoResponse] = useState()



  const apiKey = 'OsEEM-Qe1GUt9XyjA3CaRv7QlAPWR0wLwYMXuVznBbk'
  const concept = 'art'



  //USEFFECT
  useEffect(() => {
    Axios
    .get(`https://api.unsplash.com/search/photos?query=${concept}&page=2&client_id=${apiKey}`)
    .then((e) => setResponse(e.data))
  }, [])

  useEffect(() => {
    Axios
    .get(`https://api.unsplash.com/search/photos?query=${concept}&page=3&client_id=${apiKey}`)
    .then((e) => setTwoResponse(e.data))
  }, [])


  
  return (
    <div>
      <PageGrid response={response} twoResponse={twoResponse}/>
    </div>
  );
}

export default App;
