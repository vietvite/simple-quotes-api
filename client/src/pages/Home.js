import React, {useState, useEffect} from 'react';

function App() {
  const [ quote, setQuote ] = useState('')
  
  useEffect(() => {
    // fetch('https://simple-quotes.herokuapp.com/quote')
    fetch('/api/quote')
      .then(res => {
        return res.json()
      })
      .then(json => {
        if(json.error) {
          return setQuote(json.errorMessage)
        }
        let { quote, author } = json
        author = author ? ` - ${author}` : ''
        setQuote(quote + author)
      })
  }, [])
  return (
    <div className="text-center quote">
      <p>{quote}</p>
    </div>
  );
}

export default App;
