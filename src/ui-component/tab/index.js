import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function Row(props) {
    const rows = props.row;
    const [openRows, setOpenRows] = React.useState([]);
  
    // Function to toggle the open state for a specific row
    const toggleRow = (index) => {
      const newOpenRows = [...openRows];
      newOpenRows[index] = !newOpenRows[index];
      setOpenRows(newOpenRows);
    };
  
    return (
      <React.Fragment>
        {rows &&
          rows.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => toggleRow(index)}
                  >
                    {openRows[index] ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell >{row.clockInTime}</TableCell>
                <TableCell >{row.clockinlocation}</TableCell>
                <TableCell >{row.clockOutTime}</TableCell>
                <TableCell >{row.clockoutlocation}</TableCell>
                <TableCell >{row.workschedule}</TableCell>
                <TableCell >{row.loggedTime}</TableCell>
                <TableCell >{row.paidTime}</TableCell>
                <TableCell >{row.deficit}</TableCell>
                <TableCell >{row.overTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                  <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                    <Box>
                      {/* <Typography variant="h6" gutterBottom component="div">
                        History
                      </Typography> */}
                      <Table size="large" aria-label="purchases">
                      <TableHead>
                  <TableRow>
                    <TableCell>Clock In </TableCell>
                    <TableCell>Clock In Location</TableCell>
                    <TableCell >Clock Out</TableCell>
                    <TableCell >Clock Out Location</TableCell>
                  </TableRow>
                </TableHead>
                        <TableBody>
                        {row.attendanceSessions &&
                          row.attendanceSessions.map((session, sessionIndex) => (
                            <TableRow key={sessionIndex}>
                     
                              <TableCell>{session.clockInTime}</TableCell>
                              <TableCell>{session.clockinlocation}</TableCell>
                              <TableCell>{session.clockOutTime}</TableCell>
                              <TableCell>{session.clockoutlocation}</TableCell>
                             
                                
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  }
  
  // ... (rest of the component remains unchanged)
  

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function CollapsibleTable({data}) {
  return (
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell >CLock In</TableCell>
            <TableCell >Clock In Location</TableCell>
            <TableCell >Clock Out</TableCell>
            <TableCell >Clock Out Location</TableCell>
            <TableCell >Work Schedule</TableCell>
            <TableCell >Logged Time</TableCell>
            <TableCell >Paid Time</TableCell>
            <TableCell >Deficit</TableCell>
            <TableCell >Over Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      
            <Row  row={data} />
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}
