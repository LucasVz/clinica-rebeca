import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0% 10%;
  display: none;
  @media (min-width: 1200px) {
    height: calc(100vh - 100px);
  }

  h1 {
    font-weight: bold;
    font-size: 40px;
    color: #000000;
  }
  h2 {
    font-size: 25px;
    /* margin-bottom: 60px; */
    color: #af3864;
  }
`;

export { Container };
