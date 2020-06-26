import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditStockModal from './StockEditModal'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: 80,
  },
  body: {
    fontSize: 14,
    width: 80,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      width: 80,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
   
    width: 80
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    
    <TableContainer component={Paper} elevation={0} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Stock Symbol</StyledTableCell>
            <StyledTableCell align="right">Purchase Price</StyledTableCell>
            <StyledTableCell align="right">Current Price</StyledTableCell>
            <StyledTableCell align="right">Gain/Loss</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.purchases.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <EditStockModal symbol={row.stockSymbol} id={row.id} printPortfolio={props.printPortfolio}/> 
              </StyledTableCell>
              <StyledTableCell align="right">{row.purchasePrice}</StyledTableCell>
              <StyledTableCell align="right">{row.currentPrice}</StyledTableCell>
          <StyledTableCell align="right">{(row.currentPrice - row.purchasePrice).toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}