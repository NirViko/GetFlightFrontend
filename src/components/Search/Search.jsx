import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
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
      <div className={classes.search}>
        <Autocomplete
          className={classes.inputBase}
          id="free-solo-demo"
          options={search.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              style={{ fontSize: 4 }}
              {...params}
              label="Choose company.."
            />
          )}
          onChange={autoComplete}
        />
      </div>
    </>
  );
};
