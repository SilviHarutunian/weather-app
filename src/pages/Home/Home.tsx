import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { homeActions } from "../../store/Home/action";
import { getLocation, getCityWeather } from "../../store/Home/thunks";
import { RootStateType } from "../../store/store";
import spinner from "../../assets/images/spinner.gif";

import { Styled } from "./styled";

function Home() {
  const dispatch = useDispatch();
  const { selectedCity } = useParams();

  const {
    reducerHome: { locationCity, cityWeather, selectedScale, selectedDate },
  } = useSelector((state: RootStateType) => state);

  const handleChangeWeatherDate = (day: Date) => {
    dispatch(homeActions.setSelectedDate(day));
  };

  useEffect(() => {
    if (locationCity == null) {
      dispatch(getLocation());
    }
  }, []);

  useEffect(() => {
    if (locationCity == null) {
      return;
    }
    dispatch(getCityWeather(selectedCity || locationCity));
  }, [locationCity, selectedCity]);

  const toWeather = (temp: number) => {
    if (selectedScale === "fahrenheit") {
      return `${Math.round(temp * 1.8 + 32)}°F`;
    } else {
      return `${Math.round(temp)}°C`;
    }
  };

  const isSameDay = (date1: Date, date2: Date) => {
    if (
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
      return true;
  };

  if (locationCity == undefined || cityWeather == null) {
    return (
      <Styled.LoaderDiv>
        <img src={spinner} alt="Loading..." />
      </Styled.LoaderDiv>
    );
  }

  const selectedDateData = cityWeather.list.filter((day) =>
    isSameDay(new Date(day.dt * 1000), selectedDate)
  );

  const days = [];

  for (let i = 0; i < 5; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    days.push(date);
  }

  return (
    <Styled.Container>
      <Styled.WeatherContent>
        <Styled.CurrentWeatherData>
          <h3>{selectedCity || locationCity}</h3>
          <h4>{toWeather(cityWeather.list[0].main.temp)}</h4>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${cityWeather.list[0].weather[0].icon}@4x.png`}
              alt="weather icon"
            ></img>
          </div>
          <h4>{cityWeather.list[0].weather[0].main}</h4>
        </Styled.CurrentWeatherData>
        <Styled.WrapperDataHourly>
          {selectedDateData.map((hourlyData) => {
            const date = new Date(hourlyData.dt * 1000);
            return (
              <Styled.WeatherHourly key={hourlyData.dt.toString()}>
                {`0${date.getHours()}`.slice(-2)}:
                {`0${date.getMinutes()}`.slice(-2)}:00{" "}
                {toWeather(hourlyData.main.temp)}
                <img
                  src={`http://openweathermap.org/img/wn/${hourlyData.weather[0].icon}.png`}
                  alt="weather icon"
                />
              </Styled.WeatherHourly>
            );
          })}
        </Styled.WrapperDataHourly>
      </Styled.WeatherContent>
      <Styled.WeatherDataDaily>
        {days.map((day) => {
          selectedDateData.filter((dateData) => {
            dateData.dt_txt.slice(5, 10);
          });

          const currentDayIcon = cityWeather.list.filter((dateData) =>
            isSameDay(new Date(dateData.dt * 1000), day)
          )[0].weather[0].icon;

          return (
            <Styled.DailyWeather
              key={day.toString()}
              active={selectedDate.getDate() === day.getDate()}
              onClick={() => handleChangeWeatherDate(day)}
            >
              <div>
                {`0${day.getMonth() + 1}`.slice(-2)}-
                {`0${day.getDate()}`.slice(-2)}
              </div>
              <div>
                {cityWeather.list
                  .filter((dateData) =>
                    isSameDay(new Date(dateData.dt * 1000), day)
                  )
                  .reduce((acc, curVal, index, array) => {
                    if (index === array.length - 1) {
                      return toWeather((acc + curVal.main.temp) / array.length);
                    }
                    return acc + curVal.main.temp;
                  }, 0)}

                <img
                  src={`http://openweathermap.org/img/wn/${currentDayIcon}.png`}
                  alt="weather icon"
                />
              </div>
            </Styled.DailyWeather>
          );
        })}
      </Styled.WeatherDataDaily>
    </Styled.Container>
  );
}

export default Home;
