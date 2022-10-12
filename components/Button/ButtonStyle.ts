import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: black;
  font-weight: bold;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background-color: #1abc9c;
    border-color: #1abc9c;
    color: white;
  }
`;
