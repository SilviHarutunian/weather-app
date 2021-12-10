import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { RootStateType } from "../../../store/store";
import { changeTempScale } from "../../../store/Home/action";

import { Styled } from "./styled";

export default function NavBar() {
  const {
    reducerHome: { selectedScale },
  } = useSelector((state: RootStateType) => state);

  const dispatch = useDispatch();

  const handleChangeTempScale = (scale: string) => {
    dispatch(changeTempScale(scale));
  };

  return (
    <Styled.Header>
      <Styled.HeaderLink>
        <NavLink to="/home">Home</NavLink>
      </Styled.HeaderLink>

      <Styled.HeaderLink>
        <NavLink to="/favorite-cities">Favorite Cities</NavLink>
      </Styled.HeaderLink>

      <Styled.TempScaleWrapper>
        <Styled.TempRadioLabel>
          <Styled.TempRadioButton
            checked={selectedScale === "celsius"}
            type="radio"
            onClick={() => handleChangeTempScale("celsius")}
          />
          °C
        </Styled.TempRadioLabel>
        <Styled.TempRadioLabel>
          <Styled.TempRadioButton
            checked={selectedScale === "fahrenheit"}
            type="radio"
            onClick={() => handleChangeTempScale("fahrenheit")}
          />
          °F
        </Styled.TempRadioLabel>
      </Styled.TempScaleWrapper>
    </Styled.Header>
  );
}
