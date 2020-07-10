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

export default function CompanyEarningsTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <Tooltip title="The end date of the quarter the financial statements represent.">
                            <StyledTableCell>Date</StyledTableCell>
                        </Tooltip>
                        <Tooltip title="Earnings Per Share (EPS) is the net income of the company divided by the shares oustanding.  Actual EPS is the a real accounting of the company's EPS.">
                            <StyledTableCell align="right">Actual EPS</StyledTableCell>
                        </Tooltip>
                        <Tooltip title="Earnings Per Share (EPS) is the net income of the company divided by the shares oustanding.  Estimated EPS is the an analyst's estimate of a company's EPS in an upcoming quarter.">
                            <StyledTableCell align="right">Estimated EPS</StyledTableCell>
                        </Tooltip>
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