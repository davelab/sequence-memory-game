import styled, { css } from "styled-components";

const selectedStyle = ({ selected }) =>
  selected &&
  css`
    background: #b9eb83;
  `;

export const PokemonStyled = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  border-radius: 4px;
  border: 1px solid #ddd;
  text-transform: capitalize;
  transition: background 0.1s ease-in-out;
  cursor: pointer;
  ${selectedStyle}
`;
