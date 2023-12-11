import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const Content = styled.div`
    background-color: #FFF;
    width: 35%;
    min-height: 400px;
    background-color: blue;
` 

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`