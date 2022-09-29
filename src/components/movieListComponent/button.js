import React from "react";
import styled from "styled-components";

const arrowStyle = {
  position: 'absolute',
  right: '0.3rem',
  top: '50%',
  transform: 'translate(0, -50%)', 
}

const CardGroup = styled.button`
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  margin-bottom: 2em;
  @media (max-width:500px){
    font-size: 70%;
    padding: 7px 14px;
  }
  &:focus {
    border-bottom: 2px solid black;
    box-shadow: 0px 0px 2px black;
  }
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



export default function CardGroupComponent({types, sortOption, setSortOption}) {
   const handleButtonClick = (buttonType) => {
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
            active={sortOption.type === type}
            onClick={() => handleButtonClick(type)}
          >
            {type}
            <span style={arrowStyle}>{type === sortOption.type? (sortOption.isAscending? '↑':'↓'):' '}</span>
          </CardGroup>
        ))}
      </div>
    </>
  );
}
