import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  flex-direction: column;
`;

const WeatherContent = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
`;

const CurrentWeatherData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding-top: 20px;

  h3 {
    font-size: 25px;
    font-weight: normal;
    text-transform: capitalize;
  }

  h4 {
    font-size: 24px;
    font-weight: normal;
  }

  div {
    width: 200px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const WrapperDataHourly = styled.div`
  width: 40%;
  padding-top: 20px;
`;

const WeatherHourly = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
`;

const WeatherDataDaily = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 159px;
`;

const DailyWeather = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 15%;
  min-width: 100px;
  height: 100px;
  margin: 0 10px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active
      ? "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"
      : null};

  :hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
  }
`;

const LoaderDiv = styled.div`
  text-align: center;
  margin-top: 20%;

  img {
    min-width: 100px;
  }
`;

export const Styled = {
  Container,
  WeatherContent,
  CurrentWeatherData,
  WrapperDataHourly,
  WeatherHourly,
  WeatherDataDaily,
  DailyWeather,
  LoaderDiv,
};
