import React from 'react';
import { useState, useEffect } from 'react';


function MovieList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      moviename: "1st movie",
      datetime: "01/01/1999",
      body: "description 1"
    },
    {
      id: 2,
      moviename: "2nd movie",
      datetime: "01/01/1999",
      body: "description 2"
    },
    {
      id: 3,
      moviename: "3rd movie",
      datetime: "01/01/1999",
      body: "description 3"
    },
    {
      id: 4,
      moviename: "4th movie",
      datetime: "01/01/1999",
      body: "description 4"
    },
    {
    id: 5,
        moviename: "5th movie",
        datetime: "01/01/1999",
        body: "description 5"
      }
  ])

      return (
        <div>
          {posts.map(post => <div>{post.moviename}</div>)

          }
        </div>
      )
        }

export default MovieList;