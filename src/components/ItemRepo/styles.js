import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 2rem;
    color: #fafafa;
  }

  p {
    font-size: 1rem;
    color: #fafafa60;
    margin-bottom: 1.5rem;
  }
  a {
    color: #fafafa;
    background-color: rgb(63,94,251);
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1rem;
    width: fit-content;

    display: flex;
  }

  button.remover {
    color: rgb(63,94,251);
    padding: 5px 10px;
    margin-top: 1rem;
    background-color: #fafafa;
    border: none;
    border-radius: 5px;
  }

  hr {
    color: #fafafa60;
    margin: 1rem 0;
  }
`;
