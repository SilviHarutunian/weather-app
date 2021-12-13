import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CITIES from "cities.json";

import { RootStateType } from "../../store/store";
import { citiesActions } from "../../store/FavoriteCities/action";

import { Styled } from "./styled";

function FavoriteCities() {
  const dispatch = useDispatch();

  const [newCity, setNewCity] = useState("");
  const [showCityError, setShowCityError] = useState(false);
  const [isDuplicated, setIsDuplicated] = useState(false);

  const {
    reducerCities: { favoriteCities },
  } = useSelector((state: RootStateType) => state);

  const navigate = useNavigate();

  const handleInputChange = (event: { target: HTMLInputElement }) => {
    setNewCity(event.target.value);
  };

  const handleAddNewCity = (newCity: string) => {
    const index = (CITIES as Array<{ name: string }>).findIndex(
      (city) => city.name.toLowerCase() === newCity.toLowerCase()
    );

    const duplicateIndex = favoriteCities.findIndex(
      (city) => city.toLocaleLowerCase() === newCity.toLowerCase()
    );

    if (index === -1) {
      setShowCityError(true);
      return;
    }

    if (duplicateIndex > -1) {
      setIsDuplicated(true);
      return;
    }

    if (newCity) {
      dispatch(citiesActions.addNewLocationCity(newCity));
      setNewCity("");
      localStorage.setItem(
        "favoriteCities",
        JSON.stringify([...favoriteCities, newCity])
      );
    }
  };

  const handleChangeLocationCity = (city: string) => {
    navigate(`/home/${city}`);
  };

  const handleDeleteCity = (event: SyntheticEvent, city: string) => {
    dispatch(citiesActions.deleteCityFromList(city));

    event.stopPropagation();

    localStorage.setItem(
      "favoriteCities",
      JSON.stringify([
        ...favoriteCities.filter((restCities) => restCities !== city),
      ])
    );
  };

  const handleClosePopup = () => {
    setShowCityError(false);
    setIsDuplicated(false);
  };

  return (
    <>
      <Styled.Container>
        <Styled.InputForm>
          <Styled.InputCity
            type="text"
            value={newCity}
            onChange={handleInputChange}
          />
          <Styled.AddCityButton
            onClick={(e) => {
              e.preventDefault();
              handleAddNewCity(newCity);
            }}
            type="submit"
          >
            Add City +
          </Styled.AddCityButton>
        </Styled.InputForm>
        <Styled.CitiesList>
          {favoriteCities?.map((city) => {
            return (
              <Styled.CityDisplay
                onClick={() => handleChangeLocationCity(city)}
              >
                {city}
                <Styled.CloseButton
                  onClick={(event: SyntheticEvent) =>
                    handleDeleteCity(event, city)
                  }
                >
                  x
                </Styled.CloseButton>
              </Styled.CityDisplay>
            );
          })}
        </Styled.CitiesList>
      </Styled.Container>
      {(showCityError || isDuplicated) && (
        <Styled.PopupContainer>
          <Styled.Popup>
            <Styled.PopupHeader>
              <h2>Error</h2>
            </Styled.PopupHeader>
            <Styled.PopupContent>
              <p>
                {showCityError
                  ? "City name is not correct!"
                  : "City name already exists!"}
              </p>
              <Styled.PopupButton onClick={handleClosePopup}>
                Ok
              </Styled.PopupButton>
            </Styled.PopupContent>
          </Styled.Popup>
        </Styled.PopupContainer>
      )}
    </>
  );
}

export default FavoriteCities;
