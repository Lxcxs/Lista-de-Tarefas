import styled from 'styled-components';

type Props ={
    stts: boolean
}

export const Container = styled.section`
    width: 100%;
    color: #fff;

`
export const Header = styled.nav`
    width: 100%;
    height: auto;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, #7c17ff, #601bbb);

    h1 {
        text-transform: uppercase;
    }
`
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
        padding: .5em;
    }
`


export const Table = styled.div`
    width: 30em;
    max-width: 30em;
    display: flex;
    flex-direction: column;
    border-radius: .5em;
    overflow: hidden;
    box-shadow: 0 1px 3px #00000050;
    transition: all 1s ease-in-out;

    @media (max-width: 700px) {
        width: 100%;
    }
`

export const ContainerUsers = styled.div<Props>`
    width: 100%;
    max-height: 25em;
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
    overflow: auto;
    background-color: #323232;
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
        border: 3px solid #323232;
    }

    div.columns {
        display: flex;
        text-align: center;
        padding: .5em;
        font-size: .9em;
        h2 {
            flex: 1;
            font-weight: normal;
            color: #9b9b9bff;
            font-size: 1.2em;
        }
    }

    div.user {
        
    }


    input {
        color: #000;
    }
    
`
export const TaskContainer = styled.div<Props>`
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: .5em;
    background: ${(props) => (props.stts ? '#495f51' : '#505050')};
    transform: all 1s ease;
    animation: openSmooth .7s ease-in-out;
    border-radius: .3em;
    transition: all .3s ease;

    div.removeButton, div.checkButton {
        cursor: pointer;
        display: flex;
        align-items: center;
        border-radius: 50%;
    }
    div.checkButton {
        flex: 1;
        margin-right: .5em;
        gap: .5em;
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
`



export const Item = styled.p<Props>`
    max-width: 100%;
    color: ${(props) => (props.stts ? '#38ff59' : '#fff')};
    text-decoration: ${(props) => (props.stts ? 'line-through' : 'none')};
    font-style: ${(props) => (props.stts ? 'italic' : 'none')};
`
export const TaskStatus = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #212121;
    text-transform: uppercase;
    padding: .5em 1em;
`
export const Form = styled.form`
    width: 100%;
    max-width: 30em;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #323232;
    gap: .5em;


    div.col01 {
        width: 100%;
        display: flex;


        input.input {
            width: 100%;
            padding: .5em;
            color: #fff;
            font-size: 1.1em;
            border: none;
            border-radius: .3em;
            background-color: #424242;
        }
        div.colMail {
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: .1em;
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
            font-size: .8em;
            text-transform: lowercase;
        }
    }

    div.row01 {
        display: flex;
        justify-content: space-around;
        gap: 1em;
        div.col01 {
            flex: 1;
            gap: .1em;
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
`
export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2em;
    height: 2em;
    background: #7c17ff;
    color: black;
    border-radius: .3em;
    border: none;
    &:hover {
        background-color: #7515f1;
    }
`