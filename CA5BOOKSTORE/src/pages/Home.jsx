import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://reactnd-books-api.udacity.com/books', { headers: { 'Authorization': 'whatever-you-want' }})
      .then(res => {
        setData(res.data.books);
      })
      .catch(err => {
        console.log('Status Code: ' + err.response.status);
        if (err.response.status === 404) {
          console.log('Website not found');
        } else {
          console.log(err);
        }
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  // Filter the data based on search query
  const filteredBooks = data.filter(item => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    
    <div className="home-container">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search books..." 
          value={searchQuery} 
          onChange={handleSearch} 
          className="search-box" 
        />
      </div>
      
      <div className="books-wrapper">
        <div className="books-container">
          {filteredBooks.map(item => (
            <div className="book" key={item.id}>
              <img src={item.imageLinks.smallThumbnail} alt="" />
              <p className="title">{item.title}</p>
              <p className="author">Author: {item.author}</p>
              <p className="ratings">Ratings: {item.averageRating}</p>
              <p className="price">Price: FREE! {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
