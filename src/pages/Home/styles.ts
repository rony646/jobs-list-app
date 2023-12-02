import { styled } from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template:
    "input input input" 138px
    "aside list list" 100%;
  width: 100%;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  min-width: 60%;
  grid-area: "aside";
`;

export const List = styled.div`
  grid-area: "list";
  margin-top: 10px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SpinContainer = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;
