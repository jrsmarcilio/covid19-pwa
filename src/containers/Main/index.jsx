import React, { memo, useCallback, useEffect, useState } from "react";
import api from "../../service/api";
import Board from "./components/Board";
import Panel from "./components/Panel";
import * as S from "./style";

const Main = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");
  const updateAt = new Date().toLocaleDateString();

  const getCovidData = useCallback((country) => {
    api.get(country).then((result) => setData(result.data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };

  return (
    <S.Container>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </S.Container>
  );
};

export default memo(Main);
