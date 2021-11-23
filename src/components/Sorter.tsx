import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Sorter(props: any) {
    const [sortBy, setSortBy] = React.useState('id_asc');

    const handleChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value as string);
        console.log(event.target.value)
        props.sortBy(event.target.value);
    };
    return (
        <FormControl sx={{ minWidth: 180 }}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortBy}
                label="Sort By"
                onChange={handleChange}
            >
                <MenuItem value={'name_asc'}>A-Z</MenuItem>
                <MenuItem value={'name_desc'}>Z-A</MenuItem>
                <MenuItem value={'id_asc'}>Lowest Number First</MenuItem>
                <MenuItem value={'id_desc'}>Highest Number First</MenuItem>
            </Select>
        </FormControl>
    );
}