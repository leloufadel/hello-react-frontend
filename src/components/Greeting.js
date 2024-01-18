import React, {useState} from 'react';
import axios from 'axios';

function Greetings (){

    const [apiResponse, setApiResponse] = useState('')

axios.get('http://127.0.0.1:3000/hello/index').then((response) => setApiResponse (response.data.content))
    
return(
        <div>
      <h1> {apiResponse} </h1>
        </div>
    )
}
export default Greetings