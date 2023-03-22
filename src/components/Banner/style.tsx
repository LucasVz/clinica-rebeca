import styled from "styled-components";
import background from "../../assets/backgroundsol.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  background-image: url(${background});
  background-size: cover;
  background-position-x: 85%;
  padding: 8% 10%;
  h1 {
    color: #ffffff;
    font-size: 60px;
    font-weight: bold;
    line-height: 64px;
    margin-bottom: 50px;
    text-shadow: 0.1em 0.1em 0.1em #242121;
    @media (max-width: 800px) {
      line-height: 28px;
      font-size: 28px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
  h2 {
    text-shadow: 0.1em 0.1em 0.1em #242121;
    color: #ffffff;
    margin-bottom: 30px;
    font-size: 30px;
    @media (max-width: 800px) {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 800px) {
    margin-top: 222px;
    height: 360px;
    align-items: center;
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
  font-size: 16px;
  @media (max-width: 800px) {
    width: 90%;
    padding: 12px 0px;
  }
  display: flex;
  justify-content: center;
  background: rgba(22, 156, 22, 0.996);
  padding: 12px 40px;
  border-radius: 40px;
  a {
    color: #ffffff;
  }
  &&:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export { Container, Button };
