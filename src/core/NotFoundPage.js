import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(31, 33, 45, 0.9);
  border-radius: 10px;
  color: #cacaca;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding-top: 30px;
  padding-bottom: 50px;
  border: 10px rgba(54, 56, 82, 0.9) solid;
`;
const SadImage = styled.img`
  display: inline-block;
  width: 15%;
  position: relative;
  top: -30px;
`;

const NotFoundText = styled.div`
  font-size: 3.5rem;
  margin-top: 30px;
  font-weight: 500;
`;

const BackHomeBtn = styled.div`
  font-size: 1.5rem;
  background-color: #4f5277;
  display: inline-block;
  padding: 0.46875rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  position: relative;
  border-color: #ccc;
  text-align: center;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: #8b8fc1;
  }
`;

class NotFoundPage extends React.Component {
  render() {
    return (
      <NotFoundContainer className="fade-in">
        <NotFoundText className="text-center">
          Oops... this page doesn't exist.
          <SadImage src="https://media1.giphy.com/media/55eL3Rlqxs1LCcd6ea/source.gif" />
          <Link to="/">
            <BackHomeBtn>Back to Home</BackHomeBtn>
          </Link>
        </NotFoundText>
      </NotFoundContainer>
    );
  }
}
export default NotFoundPage;
