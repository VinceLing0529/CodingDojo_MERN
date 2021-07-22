import React from 'react'
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@material-ui/core';
import EditButton from './EditButton';
export default props => {
    const { removeFromDom } = props;
    return (
        <div>
            
                <TableContainer component={Paper}>
        <Table className="a" aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Author</TableCell>
                <TableCell >Acition avaiable</TableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {props.people.sort((a, b) => b.name - a.name).map((person, idx)=>{
                return (
                <TableRow key={person.name}>
                <TableCell component="th" scope="row">
                <Link to = {"/edit/" + person._id}>{person.name}</Link>
                </TableCell>
                <TableCell><DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                <EditButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                </TableCell>
                </TableRow>)
                
            })}
                    </TableBody>
      </Table>
                </TableContainer>
        </div>
    )
}

