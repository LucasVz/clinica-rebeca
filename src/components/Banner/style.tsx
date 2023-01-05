import styled from "styled-components";
import background from "../../assets/background.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  background: linear-gradient(to right, #f6f6f655, #c950785e);
  background-image: url(${background});
  background-size: cover;
  background-position-x: right;
  height: 600px;
  padding: 0 10%;
  h1 {
    color: #ffffff;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 50px;
    @media (max-width: 800px) {
      font-size: 28px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  h2 {
    color: #f0f0f0;
    margin-bottom: 30px;
    @media (max-width: 800px) {
      text-align: center;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 800px) {
    margin-top: 222px;
    height: 300px;
    justify-content: center;
  }

  animation: fadeInAnimation ease 2s;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  all: unset;
  width: 180px;
  @media (max-width: 800px) {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  background: rgba(22, 156, 22, 0.996);
  padding: 10px 10px;
  border-radius: 10px;
  a {
    color: #ffffff;
  }
`;

export { Container, Button };
