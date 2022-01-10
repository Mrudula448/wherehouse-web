import React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const MBTable = ({data, head, editRow, deleteRow, onRowClick, onEdit, onDelete}) => {

    const MTable = () => {

        return (
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <MHead/>
                    <MBody/>
                </Table>
            </TableContainer>
        )
    }

    const MHead = () => {
        return (
            <TableHead>
                <TableRow>
                    {Object.keys(head).map(i => {
                        return (
                            <StyledTableCell align="right">{head[i]}</StyledTableCell>
                        )
                    })}
                    {editRow ?
                        <StyledTableCell align="right">Edit</StyledTableCell>
                        :
                        null
                    }
                    {deleteRow ?
                        <StyledTableCell align="right">Delete</StyledTableCell>
                        :
                        null
                    }
                </TableRow>
            </TableHead>
        )
    }

    const MBody = () => {
        return (
            <TableBody>
                {data.map((i,j)=>{
                    return MRows(j,i);
                })}
            </TableBody>
        )
    }

    const MRows = (index, row) => {
        return (
            <StyledTableRow key={index} onClick={onRowClick}>
                <MColumns data={row}/>
                {editRow ?
                    <StyledTableCell align="right">
                        <IconButton onClick={onEdit}>
                            <EditIcon/>
                        </IconButton>

                    </StyledTableCell>
                    :
                    null
                }
                {deleteRow ?
                    <StyledTableCell align="right">
                        <IconButton onClick={onDelete}>
                            <DeleteIcon/>
                        </IconButton>
                    </StyledTableCell>
                    :
                    null
                }
            </StyledTableRow>
        )
    }

    const MColumns = ({data}) => {
        return Object.keys(head).map(col => {
            return (
                <StyledTableCell align="right">{data[col]}</StyledTableCell>
            )
        })
    }

    return (
        <MTable/>
    )
}

export default MBTable;
