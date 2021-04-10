import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
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
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
const ContentTable = (props)=>{

    const rows = [ 
        createData(
        <input  type="button" value="+" className="btn-add-form"/>,
      
         <input type="time" id="appt" name="appt"
         min="09:00" max="18:00" required className="input-time"  onChange={props.onChangeHandler}/>,
      
         <input type="time" id="appt" name="appt"
         min="09:00" max="18:00" required className="input-time" />,
      
         <input type="time" id="appt" name="appt"
         min="09:00" max="18:00" required className="input-time"/>,
      
         <input type="time" id="appt" name="appt"
         min="09:00" max="18:00" required className="input-time"/>
         ),
      
      ];
    return(
<>
{rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell onClick={()=> props.addBtnClick ()} component="th" scope="row">
                      {row.name} 
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    
                  </StyledTableRow>
                ))}
</>
    )
}
export default ContentTable;