import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

export default function CompositeTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <Tooltip title="A stock symbol is a unique series of letters assigned to a security for trading purposes. New York Stock Exchange (NYSE) and American Stock Exchange (AMEX) listed stocks have three characters or less. Nasdaq-listed securities have four or five characters.">
              <StyledTableCell>Symbol</StyledTableCell>
            </Tooltip>
            <Tooltip title="The total shares you posess of a security.">
              <StyledTableCell align="right">Shares Total</StyledTableCell>
            </Tooltip>
            <Tooltip title="All of the money you have invested in a secific security.">
              <StyledTableCell align="right">Total Purchase Price</StyledTableCell>
            </Tooltip>
            <Tooltip title="What the total investment in the security is currently worth.">
              <StyledTableCell align="right">Total Current Price</StyledTableCell>
            </Tooltip>
            <Tooltip title="The total unrealized gain or loss for a specific security.">
              <StyledTableCell align="right">Gain/Loss</StyledTableCell>
            </Tooltip>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.purchases.map((row) => (
            <StyledTableRow key={row.stockSymbol}>
              <StyledTableCell component="th" scope="row">
                {row.stockSymbol}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sharesTotal}</StyledTableCell>
              <StyledTableCell align="right">{row.purchasePriceTotal.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{row.currentPriceTotal.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(row.currentPriceTotal - row.purchasePriceTotal).toFixed(2)}</StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
