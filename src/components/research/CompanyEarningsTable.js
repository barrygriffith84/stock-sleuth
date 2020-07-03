import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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

export default function CompanyEarningsTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="right">Actual EPS</StyledTableCell>
                        <StyledTableCell align="right">Estimated EPS</StyledTableCell>
                  

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.earnings.map((row) => (
                        <StyledTableRow key={row.period}>
                            <StyledTableCell component="th" scope="row">{row.period}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.actual}</StyledTableCell>
                            <StyledTableCell align="right">{row.estimate}</StyledTableCell>
                           

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}