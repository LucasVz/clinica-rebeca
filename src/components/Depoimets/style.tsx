import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 7% 10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;

  h1 {
    font-weight: bold;
    font-size: 40px;
    color: #af3864;
    margin-bottom: 70px;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  flex-wrap: wrap;

  h4 {
    font-weight: bold;
    font-size: 22px;
    color: #f6f6f6;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #f6f6f6;
    text-align: center;
  }
`;

const Card = styled.div`
  display: flex;

  padding: 0 5%;
  margin-bottom: 40px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 275px;

  background-color: #af3864;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 20px;
`;

export { Container, Cards, Card };
