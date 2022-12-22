import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({user}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">supplierId</TableCell>
            <TableCell align="right">categoryId</TableCell>
            <TableCell align="right">unitsInStock</TableCell>
            <TableCell align="right">unitsOnOrder</TableCell>
            <TableCell align="right">reorderLevel</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">categoryName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.id}</TableCell>
              <TableCell align="right">{user.supplierId}</TableCell>
              <TableCell align="right">{user.categoryId}</TableCell>
              <TableCell align="right">{user.unitsInStock}</TableCell>
              <TableCell align="right">{user.unitsOnOrder}</TableCell>
              <TableCell align="right">{user.reorderLevel}</TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.categoryName}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}