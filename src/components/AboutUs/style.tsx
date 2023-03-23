import styled from "styled-components";

const Container = styled.div`
  padding: 6% 10%;
  background: linear-gradient(to bottom, #ffffff, #bb8d0e);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 40px;
    color: #af3864;
    margin-bottom: 30px;
    @media (max-width: 800px) {
      font-size: 28px;
    }
  }
  p {
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 60px;
    @media (max-width: 800px) {
      font-size: 14px;
      line-height: 15px;
    }
  }
  span {
    font-weight: bold;
  }
`;
const Galery = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 42px;
  }
  justify-content: space-between;

  img {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    object-fit: cover;
    width: 22%;
    max-height: 250px;

    @media (max-width: 800px) {
      width: 250px;
      height: 250px;
    }
    vertical-align: middle;

    transition: transform 1s;
  }
  img:hover {
    transform: scale(1.2);
  }
`;

export { Container, Galery };
