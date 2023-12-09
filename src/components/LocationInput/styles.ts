import { styled } from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  width: 80%;
  height: 35px;
  box-shadow: 0px 2px 4px #0000000d;
  border-radius: 3px;

  .location__input {
    width: 80%;
    height: 100%;
    outline: none;
    border: none;
    background: none;
    font-family: sans-serif;
    padding: 5px 5px 5px 0px;
    color: #334680;
  }

  &:hover {
    box-shadow: 1px 1px 3px 1px #334680da;
    transition: box-shadow 0.3s;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;
