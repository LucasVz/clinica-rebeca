import styled from "styled-components";

const Container = styled.div`
  height: 112px;
  width: 100%;
  background: linear-gradient(to right, #f6f6f6, #c95078f9);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px;
  font-size: 40px;
  z-index: 1;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const Logo = styled.div`
  height: 100px;
  @media (max-width: 800px) {
    height: 140px;
    margin-bottom: 10px;
  }
  img {
    height: 100%;
  }
`;

const Options = styled.ul`
  gap: 20px;
  display: flex;
  align-items: center;
  height: 0;

  &&.active {
    display: flex;
    opacity: 1;
    height: 200px;
    transition: 0.3s, opacity 0.8s linear;
    pointer-events: visible;
  }
  @media (max-width: 800px) {
    transition: 0.3s, opacity 0s linear;
    opacity: 0;
    pointer-events: none;
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

const Button = styled.div`
  display: none;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    display: flex;
  }
  input {
    display: none;
  }

  label {
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }
  label span {
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    border-radius: 30px;
    background: black;
    transition: 0.25s ease-in-out;
  }
  label span:nth-child(1) {
    top: 0;
  }
  label span:nth-child(2) {
    top: 8px;
  }
  label span:nth-child(3) {
    top: 16px;
  }

  #checkbox-menu:checked + label span:nth-child(1) {
    transform: rotate(-45deg);
    top: 8px;
  }
  #checkbox-menu:checked + label span:nth-child(2) {
    opacity: 0;
  }
  #checkbox-menu:checked + label span:nth-child(3) {
    transform: rotate(45deg);
    top: 8px;
  }
`;
export { Container, Logo, Options, Button };
