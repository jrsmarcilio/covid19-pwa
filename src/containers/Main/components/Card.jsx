/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card as CardUI } from "../../../components";
import * as S from "./styles";

const Card = ({ value, label, color }) => {
  return (
    <CardUI>
      <S.CardContent color={color}>
        <S.Value>{value}</S.Value>
        <S.Label>{label}</S.Label>
      </S.CardContent>
    </CardUI>
  );
};

export default memo(Card);
