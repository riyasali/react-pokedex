/* eslint-disable array-callback-return */
import React, { useEffect, useState, useRef } from 'react';
import './App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PokeCard from './components/Card';
import Grid from '@mui/material/Grid';
import Footer from './components/Footer';
import Header from './components/Header';
import Sorter from './components/Sorter';
import Details from './components/Details';
import { getPokemon, getPokemonDetails } from './services/RestService';
import { transform } from './utils/Util';
import TablePagination from '@mui/material/TablePagination';
import Divider from '@mui/material/Divider';

function App() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const count = useRef(0);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    const pagination: any = {
      limit: rowsPerPage,
      offset: page*rowsPerPage,
    };
    const fetchDataAsync = async () => {
      await getPokemon(pagination)
        .then(async (data: any) => {
          if (data && data.results) {
            count.current = data.count;
            let detailsBatch: any = [];
            data.results.forEach((item: any) => {
              detailsBatch.push(item.url);
            });
            const requests = detailsBatch.map((url: string) => getPokemonDetails(url));
            const responses: any = await Promise.all(requests);
            const pokeMonList = transform(responses);
            setList(pokeMonList);
            setFilteredList(pokeMonList)
          }
        });
    }
    fetchDataAsync();
  }, [page, rowsPerPage]);

  const search = (val: any) => {
    const searchTerm = val.toLowerCase().trim();
    if (searchTerm) {
      const filtered: any = list.filter((items: any) => {
        return items.name.toLowerCase().indexOf(searchTerm) > -1;
      });
      setFilteredList(filtered);
    } else {
      setFilteredList(list);
    }
  }
  const sortBy = (key: string) => {
    const sortKey: any = key.split('_')[0];
    const order: any = (key.split('_')[1]) === 'asc' ? 1 : -1;
    console.log(key);
    const sorted: any = [...filteredList].sort((a: any, b: any) => {
      if (a[sortKey] < b[sortKey]) {
        return -1 * order;
      }
      else if (a[sortKey] > b[sortKey]) {
        return 1 * order;
      }
      else {
        return 0;
      }
    });
    setFilteredList(sorted);
  }

  const [open, setOpen] = React.useState(false);
  const [selectedPokeMon, setSelectedPokeMon] = React.useState(null);
  const openDetails = (pokemon:any) => {
    setOpen(true);
    setSelectedPokeMon(pokemon);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header search={search}></Header>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            minHeight: '100vh'
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ float: 'right' }}>
              <Sorter sortBy={sortBy}></Sorter>
            </Box>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
              {filteredList.map((item, index) => (
                <Grid item xs={6} sm={4} md={3} lg={3} key={index} >
                  <PokeCard pokemon={item} openDetails={openDetails}></PokeCard>
                </Grid>
              ))}
            </Grid>
            <Divider variant="middle" sx={{marginTop:'20px'}}/>
            <TablePagination sx={{marginTop:'20px'}}
          component="div"
          count={count.current}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
          </Container>
        </Box>
       
      </main>
      <Footer></Footer>
      <Details open={open} onClose={handleClose} selectedPokeMon={selectedPokeMon}></Details>
    </Box>
  );
}

export default App;
