import React from 'react';
import { TextField, InputAdornment, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const SearchBar = () => {
  return (
    <Grid  container alignItems="center" justifyContent="center" ml="4rem">
      <Grid item xs={10} sm={10} md={8} lg={7 }>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#6973FE"
          p={1}
          borderRadius={45}
          mx={2}
        >
          <TextField
            variant="standard"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon className='search' />
                </InputAdornment>
              ),
            }}
            style={{ color: 'white', width: '100%' }}
          />
          {/* New box for the icons */}
          
        </Box>
        
      </Grid>

      <Box display="flex" flexDirection="row" >
        
                <Box display="flex"  alignItems="ends" justifyContent="end" ml={2}>
                <ArrowDropDownIcon style={{ color: '#6973FE', marginRight: '10px'  }} />
                <EditIcon style={{ color: '#6973FE', marginRight: '10px' }} />
                <DeleteIcon style={{ color: '#6973FE', marginRight: '10px' }} />
                <InfoIcon style={{ color: '#6973FE', marginRight: '10px' }} />
                </Box>
            </Box>
    </Grid>


  );
};

export default SearchBar;

