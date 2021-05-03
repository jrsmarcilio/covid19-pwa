import styled from "styled-components";
import { Typography, CardContent as CardContentComp } from "../../../components";

export const Label = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const Value = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`;

export const CardContent = styled(CardContentComp)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`;

export const CardPanelContent = styled(CardContentComp)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;
export const Display = styled.div`
  display: grid;
`;