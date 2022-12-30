import styled from "styled-components";

const Container = styled.div`
  height: 110px;
  width: 100%;
  background: linear-gradient(to right, #f6f6f6, #c95078f9);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  font-size: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const Logo = styled.div`
  height: 130px;
  img {
    height: 100%;
  }
`;

const Options = styled.ul`
  display: flex;
  gap: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  li {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  a {
    font-size: 20px;
    color: #f6f6f6f6;
    font-weight: bold;
    cursor: pointer;
    text-shadow: 0.1em 0.1em 0.3em purple;
  }
  a:hover {
    text-shadow: 0.1em 0.1em 0.3em black;
  }
`;

const Button = styled.ul`
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;
export { Container, Logo, Options, Button };
