import React, {useState, useEffect} from 'react';

function App() {
  const [ quote, setQuote ] = useState('')
  const [ author, setAuthor ] = useState('')
  
  useEffect(() => {
    // fetch('https://simple-quotes.herokuapp.com/api/quote')
    fetch('/api/quote')
      .then(res => {
        return res.json()
      })
      .then(json => {
        if(json.error) {
          return setQuote(json.errorMessage)
        }
        let { quote, author } = json
        setQuote(quote)
        setAuthor(author || '')
      })
  }, [])
  return (
    quote ? (
    <div className="text-center quote-container">
      <div className="border shadow">
        <p className="quote">{quote}</p>
        <p className="author">{author}</p>
      </div>
    </div>) : <div></div>
  );
}

export default App;
