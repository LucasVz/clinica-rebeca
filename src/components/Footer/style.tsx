import styled from "styled-components";

const Container = styled.div`
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: #e6e6e6;

  padding: 20px 70px;

  h1 {
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
    }
  }
`;

const Text = styled.p`
  color: #ffffff;
`;

const Contato = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  @media (max-width: 800px) {
    align-items: center;
  }
  flex-direction: column;
  img {
    width: 200px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
  }
  h1 {
    font-size: 20px;
    font-weight: 800;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  div {
    display: flex;
    gap: 10px;
  }
  img {
    width: 40px;
    height: auto;
    margin: 0 10px;
  }
`;

export { Container, Contato, Social, Text };
