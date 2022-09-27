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
 
const CardGroupComponent = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false): setToggle(true);
  }
}

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



export default function CardGroupComponent({active, setActive, types, sort}) {
   
  return (
    <>
      <div>
        {types.map((type) => (
          <CardGroup
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
          <CardGroupComponent onClick={Toggler}/>
          {toggle ? <span>Ascdending</span> : <span>Descending</span>}
            {type}
          </CardGroup>
          
        ))}
      </div>
      <p />
      <p> This is the: {active} </p>
    </>
  );
}
