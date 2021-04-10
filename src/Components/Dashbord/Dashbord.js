import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ContentTable from "./ConstentDashboard";
import { useHistory } from "react-router-dom";
import ModalExit from './ModalExit/ModalExit';
import ChildModal from './ModalExit/ChildModal'
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const Dashboard = () => {
  const [modalExit,setModalExit] = useState(false)
  const history = useHistory();
  const [inputList, setInputList] = useState([]);

  const [changeInput,setChangeInput] = useState('')
  const onChangeHandler = (e)=>{
    setChangeInput(e.target.value)
  }
const test = JSON.parse(localStorage.getItem('user'))
console.log(test,'test')
  const addBtnClick = (e) => {
    setInputList(
      inputList.concat(
        <ContentTable addBtnClick={addBtnClick} key={inputList.length} />
      )
    );
  };
  const exitAccount = () => {

  };
  const openModal = ()=>{
    setModalExit(true)
  }
  const closeModal = ()=>{
    setModalExit(false)
  }


  const classes = useStyles();

  return (
    <div className="col-12 float-right container">
      <TableContainer
        className="col-12 container table-main"
        component={Paper}
        style={{ direction: "rtl", textAlign: "right" }}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>افزودن ساعت</StyledTableCell>
              <StyledTableCell align="left">ساعت ورود </StyledTableCell>
              <StyledTableCell align="left">ساعت خروج </StyledTableCell>
              <StyledTableCell align="left">ساعت ورود </StyledTableCell>
              <StyledTableCell align="left">ساعت خروج </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ContentTable addBtnClick={addBtnClick} onChangeHandler={onChangeHandler}/>
            {inputList}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="btn-group-dashboard">
        <button onClick={exitAccount} className="btn-exit-form" type="button">
          گزارش کار کرد
        </button>
        <button onClick={openModal} className="btn-exit-form" type="button">
          خروج
        </button>
        {modalExit ?  <ModalExit close={closeModal}>
          <ChildModal/> 
        </ModalExit> : null}
      </div>
    </div>
  );
};
export default Dashboard;
