import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import getCatBreed from './getCatBreed';

export default function CatBreedDropdown() {
  let catArray = getCatBreed();

  console.log(catArray)

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={catArray}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cat Breed" />}
    />
  );
}