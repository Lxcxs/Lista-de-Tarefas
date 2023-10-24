import styled from "styled-components";

type Props = {
  stts: boolean;
};

export const Container = styled.section`
  width: 100%;
  color: #fff;
`;
export const Header = styled.nav`
  width: 100%;
  height: auto;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-transform: uppercase;
  }
`;
export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease-in-out;

  @media (max-width: 700px) {
    padding: 0.5em;
  }
`;

export const Table = styled.div`
  width: 30em;
  padding: 0 .2em;
  max-width: 30em;
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  gap: 1em;
  overflow: hidden;
  transition: all 1s ease-in-out;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ContainerUsers = styled.div<Props>`
  width: 100%;
  max-height: 25em;
  display: flex;
  flex-direction: column-reverse;
  padding: 10px 0;
  gap: 1em;
  overflow: auto;
  transition: all 1s ease-in-out;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #1b1b1b;
    border-radius: 2em;
    border: 3px solid #252525;
  }

  div.columns {
    display: flex;
    text-align: center;
    padding: 0.5em;
    font-size: 0.9em;
    h2 {
      flex: 1;
      font-weight: normal;
      color: #323232;
      font-size: 1.2em;
    }
  }
`;
export const TaskContainer = styled.div<Props>`
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em;
  background: ${(props) => (props.stts ? "#3199ee" : "#424242")};
  transform: all 1s ease;
  animation: openSmooth 0.7s ease-in-out;
  border-radius: 0.3em;
  transition: all 0.3s ease;

  div.removeButton,
  div.checkButton {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 50%;
  }
  div.checkButton {
    flex: 1;
    margin-right: 0.5em;
    gap: 0.5em;
  }

  @keyframes openSmooth {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const Item = styled.p<Props>`
  max-width: 100%;
  color: #fff;
  text-decoration: ${(props) => (props.stts ? "line-through" : "none")};
  font-style: ${(props) => (props.stts ? "italic" : "none")};
`;
export const TaskStatus = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;

  p {
    color: #ddd;
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 30em;
  display: flex;
  flex-direction: row;
  align-items: center;

  div.col01 {
    width: 100%;
    display: flex;

    input.input {
      width: 100%;
      padding: 0.5em;
      color: #fff;
      font-size: 1.1em;
      border: none;
      border-bottom-left-radius: 0.3em;
      border-top-left-radius: 0.3em;
      background-color: #424242;

      &:focus {
        transition: .2s;
        outline: none;
        box-shadow: inset 0 0 0px 1px #3199ee;
      }
    }
    div.colMail {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 0.1em;
    }
    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: #b4b4b4;
    }
    span#notice {
      font-style: italic;
      color: #ff0000ff;
      font-weight: 300;
      font-size: 0.8em;
      text-transform: lowercase;
    }
  }

  div.row01 {
    display: flex;
    justify-content: space-around;
    gap: 1em;
    div.col01 {
      flex: 1;
      gap: 0.1em;
      display: flex;
      flex-direction: column;
    }
  }
  button {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.2em;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2em;
  height: 2em;
  background: #3199ee;
  color: black;
  border-bottom-right-radius: 0.3em;
  border-top-right-radius: 0.3em;
  border: none;
`;
