import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import CollapsibleTable from 'ui-component/grid';
import { fetchholiday, Addholiday , Deleteholiday} from 'redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DeleteConfirmationDialog from 'ui-component/calendar';
import {
  FormHelperText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,

} from '@mui/material';
import { DatePicker } from 'antd';
import "./style.css"
export default function Setting() {
  const dispatch = useDispatch();
  const [holidayName, setHolidayName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startDateError,setStartDateError ] = useState('');
  const [endDateError, setEndDateError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedHolidayId, setSelectedHolidayId] = useState(null);
  const columns = [
    { id: 'id', label: 'Holiday' },
    { id: 'name', label: 'From Date' },
    { id: 'calories', label: 'To Date' },
    { id: 'calori', label: '' },
  ];

  useEffect(() => {
    dispatch(fetchholiday());
  }, []);

  const holiday = useSelector((state) => state.fetchHoliday.holiday);
  console.log(holiday);

  const handleDateChange = (dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
    setStartDateError(''); // Resetting the error when dates change
    setEndDateError('');
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Resetting the form fields and errors when closing the modal
    setHolidayName('');
    setStartDate(null);
    setEndDate(null);
    setStartDateError('');
    setEndDateError('');
  };

  const handleSaveModal = () => {
    // Validation
    let isValid = true;
    if (!holidayName.trim()) {
      setStartDateError('Holiday Name is required');
      isValid = false;
    }

    // if (!startDate) {
    //   setStartDateError('From Date is required');
    //   isValid = false;
    // }

    if (!endDate) {
      setEndDateError(' Date is required');
      isValid = false;
    }

    if (isValid) {
      const holidayData = {
        holidayName: holidayName,
        fromDate: startDate.toISOString(),
        toDate: endDate.toISOString(),
      };
      dispatch(Addholiday(holidayData));
      handleCloseModal();
    }
  };
  const handleDeleteClick = (holidayId) => {
    setSelectedHolidayId(holidayId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(Deleteholiday(selectedHolidayId));
    setDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
  };
  return (
    <>
      <MainCard>
      <div className='holiday_button'>
        <Button variant="contained" onClick={handleOpenModal}>
          New Holiday
        </Button>
        </div>
        <CollapsibleTable data={holiday} columns={columns} holiday={true} openDeleteModal={handleDeleteClick} />
      </MainCard>

      {/* Modal for the form */}
      <Dialog open={modalOpen} onClose={handleCloseModal}>
    
        <DialogTitle>Add New Holiday</DialogTitle>
    
        <DialogContent>
          <Box mb={2}>
            <TextField
              label="Holiday Name"
              type="text"
              value={holidayName}
              onChange={(e) => setHolidayName(e.target.value)}
              fullWidth
              error={Boolean(startDateError)}
              helperText={startDateError}
            />
          </Box>
          <Box mb={2}>
            <DatePicker.RangePicker
               style={{ zIndex: 5 }}
              getPopupContainer={(trigger) => trigger.parentNode}
              value={[startDate, endDate]}
              onChange={handleDateChange}
            />
            {endDateError && (
              <FormHelperText error>{endDateError}</FormHelperText>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleSaveModal}>Save</Button>
        </DialogActions>
      </Dialog>
      {/* <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Delete Holiday</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this holiday?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog> */}
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Holiday"
        content="Are you sure you want to delete this Holiday?"
      />
    </>
  );
}
