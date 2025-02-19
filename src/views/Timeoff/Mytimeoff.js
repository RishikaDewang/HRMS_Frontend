import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import CollapsibleTable from 'ui-component/grid';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchEmployee } from 'redux/action/actions';
import BasicButtons from 'ui-component/button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from 'antd';
import InputLabel from '@mui/material/InputLabel';
import { fetchEmployeetimeoff, RequestTimeoff } from 'redux/action/actions';
export default function Mytimeoff() {
  const employee = useSelector((state) => state.fetchEmployeeReducer.data);
  const employeeid = useSelector((state) => state.userReducer.id);
  const employeetimeoff = useSelector((state) => state.fetchEmployeetimeoffReducer.data);
  const [isModalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState('');
  const [note, setNote] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();
  const [typeError, setTypeError] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');
  const [selectedMemberError, setSelectedMemberError] = useState('');
  useEffect(() => {
    dispatch(fetchEmployee());
    dispatch(fetchEmployeetimeoff(employeeid))
  }, [dispatch]);

  const columns = [
    { id: 'id', label: 'From' },
    { id: 'name', label: 'TO' },
    { id: 'calories', label: 'Type' },
    { id: 'calories', label: 'Status' },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleRoleChange = (event) => {
    setSelectedMember(event.target.value);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'auto',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    p: 3,
    height: 'auto',
  };
  const handleSubmit = () => {

    setTypeError('');
  setStartDateError('');
  setEndDateError('');
  setSelectedMemberError('');


  // Perform validation
  let isValid = true;

  if (!type) {
    setTypeError('Type of Request is required');
    isValid = false;
  }

  // Add additional validation for other fields
  if (!startDate) {
    setStartDateError(' Date is required');
    isValid = false;
  }
  if (!selectedMember) {
    setSelectedMemberError('Add Member is required');
    isValid = false;
  } 


  // If validation fails, return without submitting
  if (!isValid) {
    return;
  }
    // Create the employee data object using the form inputs
    const employeeData = {
      ReceiverEmail: selectedMember, 
      FromDate: startDate,
      ToDate: endDate,
      Name: type,
      Note: note,
      // You need to map the selected role to the corresponding ID
    }
    dispatch(RequestTimeoff(employeeData, employeeid));

    // Close the modal
    closeModal();
  }
  return (
    <>
      <MainCard title="My Request">
        <div style={{ float: "right" }}>
          <BasicButtons name="New Request" handleSaveClick={openModal}></BasicButtons>
        </div>
        <CollapsibleTable data={employeetimeoff} columns={columns} timeoff={true} />
      </MainCard>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box sx={modalStyle}>
          <Typography variant="h3" component="div">
            New Request
          </Typography>
          <TextField
            label="Type of Request"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            margin="normal"
            error={Boolean(typeError)}
            helperText={typeError}
          />
          <TextField
            label="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            margin="normal"
            fullWidth
          />
          <FormControl fullWidth margin="normal">
            <DatePicker.RangePicker
              style={{ zIndex: 5 }}
              getPopupContainer={(trigger) => trigger.parentNode}
              value={[startDate, endDate]}
              onChange={(dates) => {
                setStartDate(dates[0]);
                setEndDate(dates[1]);
              }}
            
            />  {startDateError && (
              <FormHelperText error>{startDateError}</FormHelperText>
            )}
            {endDateError && (
              <FormHelperText error>{endDateError}</FormHelperText>
            )}  
          </FormControl>
          <FormControl fullWidth margin="normal" >
            <InputLabel id="role-label">Add Member</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={selectedMember}
              onChange={handleRoleChange}
              label="Add Member"
              error={Boolean(selectedMemberError)}
            >
              {employee && employee.map((employee) => (
                <MenuItem key={employee.employeeId
                } value={employee.email
                }>
                  {employee.email}</MenuItem>))}
            </Select>  {selectedMemberError && (
    <FormHelperText error>{selectedMemberError}</FormHelperText>
  )}
          </FormControl>
          <Box sx={{ mt: 2 }}>
            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>{' '}
            <Button color="secondary" onClick={closeModal} variant="contained">
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
