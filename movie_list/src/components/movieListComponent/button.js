import React, { useState } from "react";
import styled from "styled-components";

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
  };

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

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
class postsArray extends layout {

    constructor(props) {
      super(props)
      this.state = { postsArray }
      this.sortByMovieNameAsc = this.sortByMovieNameAsc.bind(this);
      this.sortByMovieNameDesc = this.sortByMovieNameDesc.bind(this);
    }

    sortByMovieNameAsc() {
      this.setState(prevState => {
        this.state.moviename.sort((a, b) => (a.moviename - b.moviename))
    });
    }

    sortByMovieNameDesc() {
      this.setState(prevState => {
        this.state.moviename.sort((a, b) => (b.moviename - a.moviename))
    });
    }
  
export default function CardGroupComponent({active, setActive, types}) {
   
  return (
    <>
      <div>
        {types.map((type) => (
          <CardGroup
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </CardGroup>
        ))}
      </div>
      <p />
      <p> This is the: {active} </p>
    </>
  );
}
