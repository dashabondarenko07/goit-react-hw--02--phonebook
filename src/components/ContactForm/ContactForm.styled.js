import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;
export const Button = styled.button`
  border-width: 1px;
  border-radius: 5px;
  border-color: #f0f0f0;
  background-color: #ffffff;

  margin-left: 5px;
  &:active {
    color: #ffffff;
    background-color: #007bff;
  }
`;
