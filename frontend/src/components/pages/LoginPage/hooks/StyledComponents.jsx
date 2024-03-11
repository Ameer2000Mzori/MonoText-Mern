import styled from 'styled-components'

export const StyledFormWrap = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  gap: 1rem;
  color: white;
  background-color: rgb(113 113 122);
`

export const StyledLabel = styled.label`
  width: 90%;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  text-align: center;
`

export const StyledInput = styled.input`
  width: 90%;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: black;
  padding-left: 15px;
  justify-content: space-evenly;
  text-align: start;
`

export const StyledButton = styled.button`
  width: 50%;
  height: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  background-color: rgb(12 74 110);

  &:hover {
    background-color: rgb(7 89 133);
  }

  &:active {
    background-color: rgb(3 105 161);
  }
`
