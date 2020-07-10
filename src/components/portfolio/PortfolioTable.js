import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditStockModal from './StockEditModal';
import Tooltip from '@material-ui/core/Tooltip';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <Tooltip title="Click the pencil icon to edit the stock purchase.  Click the garbage can icon to delete the stock purchase.">
              <StyledTableCell>Edit/Delete</StyledTableCell>
            </Tooltip>
            <Tooltip title="A stock symbol is a unique series of letters assigned to a security for trading purposes. New York Stock Exchange (NYSE) and American Stock Exchange (AMEX) listed stocks have three characters or less. Nasdaq-listed securities have four or five characters. ">
              <StyledTableCell align="center">Stock Symbol</StyledTableCell>
            </Tooltip>
            <Tooltip title="The date the purchase was made.">
              <StyledTableCell align="center">Purchase Date</StyledTableCell>
            </Tooltip>
            <Tooltip title="The price at which the security was purchased.">
              <StyledTableCell align="center">Purchase Price</StyledTableCell>
            </Tooltip>
            <Tooltip title="The most recent price of the security.">
              <StyledTableCell align="center">Current Price</StyledTableCell>
            </Tooltip>
            <Tooltip title="The current unrealized gain or loss based on a single share.">
              <StyledTableCell align="center">Gain/Loss</StyledTableCell>
            </Tooltip>


          </TableRow>
        </TableHead>
        <TableBody>
          {props.purchases.sort((a, b) => {
            return new Date(a.date) - new Date(b.date)
          }).map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <EditStockModal symbol={row.stockSymbol} id={row.id} printPortfolio={props.printPortfolio} />
              </StyledTableCell>
              <StyledTableCell align="center">{row.stockSymbol}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.purchasePrice}</StyledTableCell>
              <StyledTableCell align="center">{row.currentPrice}</StyledTableCell>
              <StyledTableCell align="center">{(row.currentPrice - row.purchasePrice).toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}