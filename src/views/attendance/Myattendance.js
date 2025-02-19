import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
// import CollapsibleTable from 'ui-component/grid'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMyAttendance, filterattendance, fetchAttendanceSummary } from 'redux/action/actions';
import BasicButtons from 'ui-component/button';
import { useState } from 'react';
import { clockInRequest, clockOutRequest } from 'redux/action/actions';
import Calculation from 'ui-component/section/index';
import './style.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { DatePicker } from 'antd';
import moment from 'moment';
import CollapsibleTable from 'ui-component/tab';
export default function Myattendance() {
  const dispatch = useDispatch();
  const employeeid = useSelector((state) => state.userReducer.id);
  // const myattendance = useSelector((state) => state.fetchMyAttendanceReducer.myattendance);
  const attsummary = useSelector((state) => state.fetchAttendanceSummaryReducer.calculation);
  const filterattendace = useSelector((state) => state.filterattendace.filterattendance);
  console.log('attsummary', attsummary);
  console.log('fileratttendace', filterattendace);
  const storedClockedIn = localStorage.getItem('clockedIn');
  const [clockedIn, setClockedIn] = useState(storedClockedIn === 'true');
  const [buttonName, setButtonName] = useState(clockedIn ? 'Clock Out' : 'Clock In');
  const [page, setPage] = useState(1); // Current page state
  const rowsPerPage = 10; // Number of rows to display per page
  const [selectedDates, setSelectedDates] = useState([]);
  const [isManualDateChange, setIsManualDateChange] = useState(false);
  useEffect(() => {
    // Get current month's start and end dates
    const startDate = moment().startOf('month').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    console.log('enddate', endDate);
    if (!isManualDateChange) {
      dispatch(filterattendance(employeeid, startDate, endDate));
      dispatch(fetchAttendanceSummary(employeeid, startDate, endDate));
    }
    // Dispatch API call with default dates
    // dispatch(filterattendance(employeeid, startDate, endDate));
  }, [employeeid, isManualDateChange,clockedIn]);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);

    console.log('manully call', dates);
    if (dates && dates[0] && dates[1]) {
      setIsManualDateChange(true);
      console.log('dates && dates[0] && dates[1]', dates, dates[0], dates[1]);
      const startDate = dates[0].format('YYYY-MM-DD');
      const endDate = dates[1].format('YYYY-MM-DD');
      console.log('start dtae and end date ', startDate, endDate);

      dispatch(filterattendance(employeeid, startDate, endDate));
      dispatch(fetchAttendanceSummary(employeeid, startDate, endDate));
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    const storedClockedIn = localStorage.getItem('clockedIn');
    if (storedClockedIn) {
      setClockedIn(storedClockedIn === 'true');
    }
    dispatch(fetchMyAttendance(employeeid));
  }, [dispatch, employeeid]);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filterattendace ? filterattendace.slice(startIndex, endIndex) : [];

  const handleClockButtonClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          let startDate, endDate;

          if (selectedDates && selectedDates.length === 2) {
            // If manual dates are selected, use them
            startDate = selectedDates[0].format('YYYY-MM-DD');
            endDate = selectedDates[1].format('YYYY-MM-DD');
          } else {
            // If no manual dates selected, use the current date
            startDate = moment().startOf('month').format('YYYY-MM-DD');
            endDate = moment().endOf('month').format('YYYY-MM-DD');
          }
          if (clockedIn) {
            dispatch(clockOutRequest(employeeid, latitude, longitude, startDate, endDate));
            setClockedIn(false);
            localStorage.setItem('clockedIn', 'false');
            setButtonName('Clock In');
          } else {
            dispatch(clockInRequest(employeeid, latitude, longitude, startDate, endDate));
            setClockedIn(true);
            localStorage.setItem('clockedIn', 'true');
            setButtonName('Clock Out');
          }
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  };

  useEffect(() => {
    setButtonName(clockedIn ? 'Clock Out' : 'Clock In');
  }, [clockedIn]);
  return (
    <MainCard title="My Attendance">
      <div className="emp-conatiner">
        <div className="attn-container">{attsummary && <Calculation attsummary={attsummary} />}</div>
        <div className="button-conatiner">
          <BasicButtons name={buttonName} handleSaveClick={handleClockButtonClick} />
        </div>
      </div>
      <div style={{ marginTop: '8px' }}>
        <DatePicker.RangePicker
          style={{ zIndex: 999 }}
          getPopupContainer={(trigger) => trigger.parentNode}
          placement="bottomLeft"
          value={selectedDates}
          onChange={handleDateChange}
        />
      </div>
      <CollapsibleTable data={paginatedData} />
      {/* <CollapsibleTable data={paginatedData} columns={columns} myattendance={true}  groupByDate={true}/> */}
      <div className="pagination-container">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil((filterattendace?.length || 0) / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="secondary"
          />
        </Stack>
      </div>
      {attsummary && (
        <div className="FlexContainer">
          <div className="GridItem">
            <span className="Label">Work Schedule</span>
            <span className="Value">{attsummary.workSchedule}</span>
          </div>
          <div className="GridItem">
            <span className="Label">Logged Time</span>
            <span className="Value">{attsummary.loggedTime}</span>
          </div>
          <div className="GridItem">
            <span className="Label">Paid Time</span>
            <span className="Value">{attsummary.paidTime}</span>
          </div>
          <div className="GridItem">
            <span className="Label">Deficit</span>
            <span className="Value">{attsummary.deficit}</span>
          </div>
          <div className="GridItem">
            <span className="Label">Overtime</span>
            <span className="Value">{attsummary.overtime}</span>
          </div>
        </div>
      )}
    </MainCard>
  );
}
