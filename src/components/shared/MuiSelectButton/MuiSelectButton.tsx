import * as React from 'react';
import { Box, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [role, setRole] = React.useState('Как рекрутер');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <Box sx={{ width: 392 }}>
      <FormControl fullWidth>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={role}
          aria-label='Роль'
          onChange={handleChange}
        >
          <MenuItem value='employer'>Как рекрутер</MenuItem>
          <MenuItem value='employee'>Как соискатель</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
