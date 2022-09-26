import React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Button from './button';


function MovieList() {
  const types = ["Title", "Release Date", "Vote Count", "Vote Average"];
  const [active, setActive] = useState(types[0]);
  const [postsArray, setPosts] = useState([
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
      },
     {
      id: 6,
         moviename: "6th movie",
         datetime: "01/01/1999",
        body: "description 6"
      },
      {
        id: 7,
           moviename: "7th movie",
           datetime: "01/01/1999",
          body: "description 7"
        },
        {
          id: 8,
             moviename: "8th movie",
             datetime: "01/01/1999",
            body: "description 8"
          },
          {
            id: 9,
               moviename: "9th movie",
               datetime: "01/01/1999",
              body: "description 9"
            },
            {
              id: 10,
                 moviename: "10th movie",
                 datetime: "01/01/1999",
                body: "description 10"
              },        
    ])
    
      const result = postsArray
      .filter((a,i,b) => b.findIndex((t) => t.moviename === a.moviename) === i)
      .reduce((agg, item, index) => {
        item.id = index + 1;
        agg.push(item);
        return agg;
      }, []);
      console.log(result);


 
      return (
        <div>
         <Button active={active} setActive={setActive} types={types}/>
          {postsArray.map(postsArray => <div>{postsArray.moviename}</div>)
          }
         
        </div>

      )
        }

export default MovieList;