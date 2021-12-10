import styled from "styled-components";

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #4b0081;
  justify-content: center;
  align-items: center;
`;

const HeaderLink = styled.div`
  cursor: pointer;
  margin: 0 10px;

  a {
    text-decoration: none;
    color: #c8c8c8;
    font-size: 16px;

    &:hover {
      color: #fff;
    }

    &.active {
      color: #fff;
    }
  }
`;

const TempScaleWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  right: 25px;
  padding: 10px 0;
`;

const TempRadioButton = styled.input`
  width: 13px;
  height: 13px;
  cursor: pointer;
`;

const TempRadioLabel = styled.label`
  font-size: 14px;

  &:first-child {
    margin-right: 8px;
  }
`;

export const Styled = {
  Header,
  HeaderLink,
  TempScaleWrapper,
  TempRadioButton,
  TempRadioLabel,
};
