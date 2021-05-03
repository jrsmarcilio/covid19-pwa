/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import RefreshIcon from "../../../assets/images/refresh.svg";
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from "../../../components";
import COUNTRIES from "../../../commons/constants/countries";
import * as S from "./styles";

const navigatorHasShare = navigator.share;

const Panel = ({ updateAt, onChange, data, country, getCoviddata }) => {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <S.Item>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </S.Item>
    </MenuItem>
  );

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: "https://dio-covid19pwa.netlify.app/",
    });
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <S.CardPanelContent>
        <div>
          <S.Display>
            <Typography variant="h5" component="span" color="primary">
              COVID19
            </Typography>
            <Typography variant="h6" component="span" color="primary">
              Painel Coronavírus
            </Typography>
            <Typography variant="body2" component="span" color="primary">
              Atualizado em: {updateAt}
            </Typography>
          </S.Display>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </S.CardPanelContent>
    </Card>
  );
};

export default memo(Panel);
