import styled from "styled-components";
import background from "../../assets/fundo3.png";

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 110px;
  position: relative;
  padding-left: 20px;
  background-size: cover;
  background-image: url(${background});
  height: 600px;
  padding-left: 20%;
  @media (max-width: 600px) {
    padding-left: 10%;
    height: 300px;
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

const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    align-items: flex-start;
  }
  width: 60%;
`;

const Text = styled.p`
  color: #ffffff;

  font-size: 32px;
  padding-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: auto;
  height: 100%;
  position: absolute;
  right: 0;
`;

const Button = styled.button`
  all: unset;
  background: #60aa1b;
  padding: 20px 40px;
  border-radius: 40px;
`;

export { Container, Img, Text, ContainerContact, Button };
