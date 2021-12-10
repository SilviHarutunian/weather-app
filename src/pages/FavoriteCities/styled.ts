import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  flex-direction: column;
`;

const InputForm = styled.form`
  display: flex;
  width: 100%;
  height: 55px;
  justify-content: center;
  margin-top: 10px;
`;

const InputCity = styled.input`
  width: 200px;
  height: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-right: 20px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

const AddCityButton = styled.button`
  width: 100px;
  height: 55px;
  padding: 10px;
  background-color: #f4a460;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
`;

const CitiesList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const CityDisplay = styled.div`
  display: flex;
  position: relative;
  width: 30%;
  min-height: 100px;
  min-width: 150px;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  border: 1px solid #ccc;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    box-shadow: 0.2s linear;
  }
`;

const CloseButton = styled.span`
  display: flex;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  right: 10px;
  cursor: pointer;
  font-size: 12px;
  background-color: red;
  justify-content: center;
  color: white;
  align-items: center;
`;

const PopupContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
  top: 0;
  align-items: center;
  justify-content: center;
`;

const Popup = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 200px;
  flex-direction: column;
  background-color: #fff;
`;

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
`;

const PopupContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const PopupButton = styled.div`
  display: flex;
  position: absolute;
  width: 40px;
  height: 30px;
  background-color: #f4a460;
  justify-content: center;
  align-items: center;
  color: #fff;
  right: 10px;
  bottom: 10px;
  border: none;
  cursor: pointer;
`;

export const Styled = {
  Container,
  InputForm,
  InputCity,
  AddCityButton,
  CitiesList,
  CityDisplay,
  CloseButton,
  PopupContainer,
  Popup,
  PopupHeader,
  PopupContent,
  PopupButton,
};
