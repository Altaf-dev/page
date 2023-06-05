import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const url = 'https://portfolio-7c2f7-default-rtdb.firebaseio.com/data.json'
//     fetch(url)
//     .then(response => response.json())
//     .then(function (data){
//         console.log(data[3])
//     });
//



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <App />
  </div>
);

reportWebVitals();
