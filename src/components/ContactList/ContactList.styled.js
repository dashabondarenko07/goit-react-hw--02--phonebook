import styled from 'styled-components';

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

export const Item = styled.li`
  &:not(:first-child) {
    margin-top: 5px;
  }
`;
