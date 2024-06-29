import { Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import { get } from "../../utils/api";
import { useStyles } from "./styles";
export const Search = () => {
  const classes = useStyles();

  const [search, setSearch] = useState([]);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await get(`company`);
    setSearch(res);
  };

  const autoComplete = (text) => {
    debouncedSearch(text);
  };

  const debouncedSearch = debounce(async function (query) {
    const res = await get(`company/${query.target.value}`);
    if (res) {
      setSearch(res);
    }
  }, 1000);

  return (
    <>
      <div className={classes.container}>
        <Input
          onChange={autoComplete}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder="Flight Company"
        />
        <div style={classes.result}>
          {focused
            ? search.map((company) => (
                <div key={company.id}>{company.name}</div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
