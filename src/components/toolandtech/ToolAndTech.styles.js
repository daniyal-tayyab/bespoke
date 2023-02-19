import styled from "styled-components";

export const Container = styled.div`
  /* align-self: auto; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: auto;

  background-color: ${(props) => props.theme.body};

  padding: 1rem;
  box-shadow: 1px 1px 10px 15px rgba(244, 244, 240, 0.5);
  border-radius: 5px;
  margin: 2rem 0;
`;

export const Title = styled.h2`
  font-weight: 500;
`;

export const IconsContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-wrap: wrap;

  /* background-color: pink; */
`;

export const Icon = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  border-radius: 5px;

  img {
    width: 8rem;
  }

  @media (max-width: 770px) {
    width: 5rem;
  }
`;
