import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6% 10%;
  background: radial-gradient(#ffffff 10px, #ffffff, #aa349a8b);

  h1 {
    font-weight: bold;
    font-size: 40px;
    color: #000000;
    text-align: center;

    margin-bottom: 40px;
    @media (max-width: 800px) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
  h2 {
    font-size: 25px;
    /* margin-bottom: 60px; */
    color: #af3864;
  }
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 250px;

  padding: 0 20px;

  border-radius: 15px;

  img {
    object-fit: cover;
    width: 180px;
    height: 180px;
    margin-bottom: 15px;

    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  h4 {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    height: 35px;
    align-items: center;
  }
  p {
    font-size: 14px;
  }
`;
const Button = styled.button`
  all: unset;
  width: 180px;
  font-size: 16px;
  margin-top: 4%;
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

export { Container, Services, Service, Button };
