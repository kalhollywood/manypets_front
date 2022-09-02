import './App.css';
import { FormControl, TextField, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import getCatBreed from './getCatBreed';
import CatBreedDropdown from './CatBreedDropdown.js'


function App() {
  let catBreedList = getCatBreed()
  console.log(catBreedList);

  return (
    <div className="App">
      <h1>Get your quote!</h1>
      <p>Please enter your pet's details below:</p>
      <FormControl fullWidth>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="dog"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Dog" control={<Radio />} label="Dog" />
          <FormControlLabel value="Cat" control={<Radio />} label="Cat" />

        </RadioGroup>
        <p>Your pet's age</p>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" required />
        <p>Breed</p>
        <CatBreedDropdown />
        <p>Address</p>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" required />
      </FormControl>
    </div>
  );
}

export default App;
