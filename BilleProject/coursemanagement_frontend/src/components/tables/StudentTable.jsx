// This CourseTable component is copied from CSS template from material-UI: “https://material-ui.com/components/tables/”

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function StudentTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> # </TableCell>
            <TableCell align="right"> First Name </TableCell>
            <TableCell align="right"> Last Name </TableCell>
            <TableCell align="right"> Total Registered Credits </TableCell>
            <TableCell align="right"> Department </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {renderStudents()}
        </TableBody>
      </Table>
    </TableContainer>
  );

  function renderStudents() {
    return (
        props.students.map((item, i) => (
            <TableRow key={item.InstructorId}>
              <TableCell component="th" scope="row"> {i + 1} </TableCell>
              <TableCell align="right"> {item.FirstName} </TableCell>
              <TableCell align="right"> {item.LastName} </TableCell>
              <TableCell align="right"> {item.TotalCredit} </TableCell>
              <TableCell align="right"> {item.DepartmentName} </TableCell> 
            </TableRow>
          ))
    );
  }
}