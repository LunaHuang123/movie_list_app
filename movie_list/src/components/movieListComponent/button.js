import React, { useState } from "react";
import styled from "styled-components";


const CardGroup = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
 

 // class PostsList extends Layout { // capital first letter
 //   constructor(props) {
 //     super(props)
 //      this.sortByMovieNameAsc = this.sortByMovieNameAsc.bind(this);
 //      this.sortByMovieNameDesc = this.sortByMovieNameDesc.bind(this);
 //    }
    
//     sortByMovieNameAsc() { 
//       this.setState(prevState => // setState callback function, need return value
//         { return this.state.moviename.sort((a, b) => (a.moviename - b.moviename))} // only applies to numbers not strings
//     );
//     }

//     sortByMovieNameDesc() {
//       this.setState(prevState => {
//         this.state.moviename.sort((a, b) => (b.moviename - a.moviename))
//     });
//     }
// }



export default function CardGroupComponent({active, setActive, types, sortOption, setSortOption}) {
   const handleButtonClick = (buttonType) => {
    setActive(buttonType);
     if(buttonType === sortOption.type) {
      setSortOption({
        type: buttonType,
        isAscending: !sortOption.isAscending
     });
     } else{
      setSortOption({
        type: buttonType,
        isAscending: sortOption.isAscending
      })
     }
   }

  return (
    <>
      <div>
        {types.map((type) => (
          <CardGroup
            key={type}
            active={active === type}
            onClick={() => handleButtonClick(type)}
          >
            {`${type} ${type === sortOption.type? (sortOption.isAscending? '↑':'↓'):' '} `}
            </CardGroup>
        ))}
      </div>
      <p />
      <p> Sorting {sortOption.type}, {sortOption.isAscending? 'Ascending' : 'Descending'} </p>
    </>
  );
}
