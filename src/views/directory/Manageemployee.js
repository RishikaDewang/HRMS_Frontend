import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import CollapsibleTable from 'ui-component/grid';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  fetchEmployee, deleteEmployee, importEmployee, updateEmployee, createEmployeeReset
} from 'redux/action/actions';
import BasicButtons from 'ui-component/button';
import Modal from '@mui/material/Modal';
import ExcelJS from 'exceljs';

import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
// import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { createEmployee, fetchRole } from 'redux/action/actions';
import { useNavigate } from 'react-router';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'
import "./style.css"
import { ToastContainer } from 'react-toastify';
import DeleteConfirmationDialog from 'ui-component/calendar';
export default function ManageEmployee() {
  const employee = useSelector((state) => state.fetchEmployeeReducer.data);
  console.log(employee)
  const roleName = useSelector((state) => state.userReducer.roleName)
  console.log("roleName",roleName)
  const userData = useSelector(state => state.userReducer.token)
  const create = useSelector((state) => state.createEmployeeReducer)
  const role = useSelector(state => state.setRole.data)
  const [isModalOpen, setModalOpen] = useState(false);
  console.log("employe", role)
  const [first, setFirst] = useState('');
  // const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLineManagerId, setSelectedLineManagerId] = useState('');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  const [fullNameHelperText, setFullNameHelperText] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  // const [passwordHelperText, setPasswordHelperText] = useState('');
  const [page, setPage] = useState(1); // Current page state
  const rowsPerPage = 10; // Number of rows to display per page
  const [roleError, setRoleError] = useState('');
  const [roleHelperText, setRoleHelperText] = useState('');
  const [lineManagerError, setLineManagerError] = useState('');
  const [lineManagerHelperText, setLineManagerHelperText] = useState('');
  const modulePermissions = useSelector((state) => state.userReducer.modulepermission)
  const isEditAllowedForSection = (sectionId) => {
    // Check if there is any permission for the given sectionId and permissionId 2
    return modulePermissions.some(
        (item) => item.moduleId  === sectionId && item.permissionId  === 1
    );
};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchEmployee());
    dispatch(fetchRole(userData));
  }, [dispatch]);
  useEffect(() => {
    if (create.success === true) {
      setLoading(false)
    }

  }, [create.success])
  useEffect(() => {
    if (create.success === false) {
      setLoading(false)
    }
    dispatch(createEmployeeReset())

  }, [create.error])
  const columns = [
    { id: 'id', label: 'Employee Name' },
    { id: 'name', label: 'Job Title' },
    { id: 'calories', label: 'Line Manager' },
    { id: 'calories', label: 'Office' },
    { id: '', label: '' },
    { id: '', label: '' },
  ];

  const openModal = () => {
    setModalOpen(true);
    setEmail("")


  };

  const closeModal = () => {
    setModalOpen(false);
    closeEditModal()
    setFullNameError('');
    setEmailError('');
    setFullNameHelperText('');
    setEmailHelperText('');
    setLineManagerError("");
    setRoleError('')
    setLineManagerHelperText("")
    setRoleHelperText("")
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
  const handleLineManagerChange = (event) => {
    setSelectedLineManagerId(event.target.value);
  };
  const handleRoleChange = (event) => {
    console.log(event)
    setSelectedRole(event.target.value);
  };
  const handleSubmit = () => {
    setFullNameError('');
    setEmailError('');
    // setPasswordError('');
    setFullNameHelperText('');
    setEmailHelperText('');
    // setPasswordHelperText('');

    // Perform validation
    let isValid = true;

    if (!first) {
      setFullNameError('Please enter your full name');
      setFullNameHelperText('Full Name is required');
      isValid = false;
    }

    // Add email validation logic here

    let isEmailValid = true;

    if (!email) {
      setEmailError('Please enter your email');
      setEmailHelperText('Email is required');
      isEmailValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailError('Invalid email');
      setEmailHelperText('Please enter a valid email address');
      isEmailValid = false;
    }

    // If email validation fails, return without submitting
    if (!isEmailValid) {
      return;
    }
    // let isPasswordValid = true;
    // if (!password) {
    //   setPasswordError('Please enter your password');
    //   setPasswordHelperText('Password is required');
    //   isPasswordValid = false;
    // } else if (
    //   !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password)
    // ) {
    //   setPasswordError('Invalid password');
    //   setPasswordHelperText(
    //     'Password must be at least 8 characters long and include at least 1 uppercase letter, 1 number, and 1 special character'
    //   );
    //   isPasswordValid = false;
    // }

    // If password validation fails, return without submitting
    // if (!isPasswordValid) {
    //   return;
    // }
    if (!isEditModalOpen) {
      if (!selectedRole) {
        setRoleError('Role is required ');
        setRoleHelperText('');
      } else {
        setRoleError('');
        setRoleHelperText('');
      }

      if (!selectedLineManagerId) {
        setLineManagerError('Line Manager is required ');
        setLineManagerHelperText('');
      } else {
        setLineManagerError('');
        setLineManagerHelperText('');
      }

      if (!selectedRole || !selectedLineManagerId) {
        return;
      }
    }
    // If validation fails, return without submitting
    if (!isValid) {
      return;
    }
    const employeeData = {
      fk_role_id: selectedRole,
      lineManagerId: selectedLineManagerId,
      fullName: first,
      email: email,
      password: password,
    }
    // if (isEditModalOpen && selectedEmployeeId) {
    //  dispatch(updateEmployee(editEmployeeDetails,selectedEmployeeId ))
    //  closeModal();
    // } else {
    //   // Make API call for adding a new employee
    //   dispatch(createEmployee(employeeData));
    //   closeModal();
    // }
    dispatch(createEmployee(employeeData))
    setLoading(true)
    setFirst("")
    setEmail("")
    setPassword("")
    setSelectedLineManagerId("")
    setSelectedRole("")
    closeModal();
  }
  function handleSaveClick(row) {
    navigate("/myprofile", { state: { row } })
  }
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModal] = useState(false)
  const openDeleteModal = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedEmployeeId(null);
    setDeleteModalOpen(false);
  };
  const openEditModal = (employeeId, roleName) => {
    console.log("roleName",roleName)
    setSelectedEmployeeId(employeeId);
    setModalOpen(true);
    setEditModal(true);
  };
  const closeEditModal = () => {
    setSelectedEmployeeId(null);
    setEditModal(false);
  };
  // handleEditConfirmed = () =>{
  //   closeEditModal()
  // }
  const handleDeleteConfirmed = () => {
    if (selectedEmployeeId) {
      dispatch(deleteEmployee(selectedEmployeeId))
    }
    closeDeleteModal()
    closeEditModal()
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = employee ? employee.slice(startIndex, endIndex) : [];
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Check if the selected file is of type XLSX
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        // Process the file, e.g., upload it or perform other actions
        const formData = new FormData();
        formData.append('file', file);
        dispatch(importEmployee(formData))
        console.log('File uploaded:', file);
      } else {
        // Display an error message for invalid file type
        toast.error("Invalid file type. Please select a valid XLSX file.");
        console.error('Invalid file type. Please select a valid XLSX file.');
      }
    }
  };
  const [editEmployeeDetails, setEditEmployeeDetails] = useState(null);

  // ... existing code

  useEffect(() => {
    // Additional logic to set the initial state when editing is initiated
    if (isEditModalOpen && selectedEmployeeId) {
      const selectedEmployee = employee.find(emp => emp.employeeId === selectedEmployeeId);
      if (selectedEmployee) {
        setEditEmployeeDetails({
          name: selectedEmployee.fullName,
          email: selectedEmployee.email,
          password: selectedEmployee.password,
          fkRoleId: selectedEmployee.selectedRole ||roleName,
          lineManagerId: selectedEmployee.selectedLineManagerId,
        });
        setFullNameError('');
        setEmailError('');
        // setPasswordError('');
        setFullNameHelperText('');
        setEmailHelperText('');
        // setPasswordHelperText('');
      }
    }
  }, [isEditModalOpen, selectedEmployeeId, employee]);
  const handleEditFieldChange = (field, value) => {
    console.log("field, value",field, value)
    setEditEmployeeDetails(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleEditSubmit = () => {
    setFullNameError('');
    setEmailError('');
    setFullNameHelperText('');
    setEmailHelperText('');

    // Perform validation
    let isValid = true;

    if (!editEmployeeDetails.name) {
      setFullNameError('Please enter your full name');
      setFullNameHelperText('Full Name is required');
      isValid = false;
    }

    // Add email validation logic here

    let isEmailValid = true;

    if (!editEmployeeDetails.email) {
      setEmailError('Please enter your email');
      setEmailHelperText('Email is required');
      isEmailValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(editEmployeeDetails.email)
    ) {
      setEmailError('Invalid email');
      setEmailHelperText('Please enter a valid email address');
      isEmailValid = false;
    }

    // If email validation fails, return without submitting
    if (!isEmailValid) {
      return;
    }


    // If validation fails, return without submitting
    if (!isValid) {
      return;
    }
    dispatch(updateEmployee(editEmployeeDetails, selectedEmployeeId))
    closeModal();
  }

  const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Employee Data');

    // Your logic to add data to the worksheet
    worksheet.addRow(['Employee Name', 'Job Title', 'Line Manager', 'Office']);
    // Add your employee data here

    // Create a Blob from the workbook
    const blob = await workbook.xlsx.writeBuffer();

    // Create a link element and trigger a download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    link.download = 'employee_data.xlsx';

    // Append the link to the body and trigger a click
    document.body.appendChild(link);
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };



  return (
    <>
      <MainCard title="Manage Employee">
        <ToastContainer />

        <div className='manage-buttons'>
        {  isEditAllowedForSection(2)  &&    <div>
          <Input
            accept=".xlsx"
            id="file-input"
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="file-input">
            <Button variant="outlined" component="span" style={{ marginRight: '5px' }}>
              Import Employee
            </Button>  </label></div>}

          <BasicButtons width="110px" name="New Profile" handleSaveClick={openModal} loading={loading}></BasicButtons>
        </div>
        <div style={{ display: 'flex', flexDirection: "row-reverse" }}>
          <div style={{ marginRight: '130px' }}>
            <button

              style={{
                fontSize: '13px',
                // Change the color to your preferred link color
                cursor: 'pointer',
                border: 'none',
                background: 'none',
                textDecoration: 'underline',
                padding: 0,
                margin: 0,
              }}
              onClick={handleDownloadExcel}
            >
              Accepted file types: .xlsx
            </button></div></div>
        <CollapsibleTable data={paginatedData} columns={columns} displayCount={false} handleSaveClick={handleSaveClick} openDeleteModal={openDeleteModal} openEditModal={openEditModal} />
        <div className="pagination-container">
          <Stack spacing={2}>
            <Pagination count={Math.ceil((employee?.length || 0) / rowsPerPage)} page={page} onChange={handleChangePage} color="secondary" />
          </Stack>
        </div>
      </MainCard>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box sx={modalStyle}>
          <Typography variant="h3" component="div">
            {isEditModalOpen ? "Edit Profile" : "Add Profile"}
          </Typography>
          <TextField
            label="Full Name"
            value={isEditModalOpen ? editEmployeeDetails?.name || '' : first}
            onChange={(e) => {
              isEditModalOpen
                ? handleEditFieldChange('name', e.target.value)
                : setFirst(e.target.value);
            }}
            fullWidth
            margin="normal"
            error={Boolean(fullNameError)}
            helperText={fullNameHelperText}
          />
          <TextField
            label="Email"
            value={isEditModalOpen ? editEmployeeDetails?.email || '' : email}

            type='email'

            onChange={(e) => {
              isEditModalOpen
                ? handleEditFieldChange('email', e.target.value)
                : setEmail(e.target.value);
            }}
            fullWidth
            margin="normal"
            error={Boolean(emailError)}
            helperText={emailHelperText}
            InputProps={{
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            }}
          />
          {/* {!isEditModalOpen && <TextField
            label="Password"
            type='password'
            // value={password}
            value={isEditModalOpen ? editEmployeeDetails?.password || '' : password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => {
              isEditModalOpen
                ? handleEditFieldChange('password', e.target.value)
                : setPassword(e.target.value);
            }}
            margin="normal"
            fullWidth
            error={Boolean(passwordError)}
            helperText={passwordHelperText}
          />} */}
          <FormControl fullWidth margin="normal">
       <InputLabel id="role-label">Role</InputLabel>
<Select
  labelId="role-label"
  id="role"
  disabled={isEditModalOpen && selectedEmployeeId && selectedEmployeeId === employee[0]?.employeeId}
  value={
    isEditModalOpen && selectedEmployeeId === employee[0]?.employeeId
      ? 'Superadmin' // Set to 'Superadmin' when isEditModalOpen is true and the selected employee is the first one
      : selectedRole // Use the selectedRole otherwise
  }
  error={Boolean(roleError)}
  helperText={roleHelperText}
  onChange={(e) => {
    isEditModalOpen
      ? handleEditFieldChange('fkRoleId', e.target.value)
      : handleRoleChange(e);
  }}
  label="Role"
>
  {role &&
    role.map((roles) => (
      <MenuItem key={roles.roleId} value={isEditModalOpen?roles.roleName:roles.roleId}>
        {roles.roleName}
      </MenuItem>
    ))}
</Select>

          </FormControl>
          {!isEditModalOpen && roleError && (
            <Typography variant="caption" color="error">
              {roleError}
            </Typography>
          )}

          <FormControl fullWidth margin="normal">
            <InputLabel id="role-label">Line Manager</InputLabel>
            <Select
              labelId="role-label"
              disabled={isEditModalOpen && selectedEmployeeId && selectedEmployeeId === employee[0]?.employeeId}
              id="role"
              // value={selectedLineManagerId}
              value={isEditModalOpen ? editEmployeeDetails?.lineManagerId || '' : selectedLineManagerId}
              // onChange={handleLineManagerChange}
              error={Boolean(lineManagerError)}
              helperText={lineManagerHelperText}
              onChange={(e) => {
                isEditModalOpen
                  ? handleEditFieldChange('lineManagerId', e.target.value)
                  : handleLineManagerChange(e); // Call handleRoleChange with the event object
              }}
              label="Line Manager"
            >
              {employee && employee.map((employee) => (
                <MenuItem key={employee.employeeId
                } value={employee.employeeId
                }>
                  {employee.fullName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {!isEditModalOpen && lineManagerError && (
            <Typography variant="caption" color="error">
              {lineManagerError}
            </Typography>
          )}
          <Box sx={{ mt: 2 }}>
            <Button color="primary" variant="contained" onClick={isEditModalOpen ? handleEditSubmit : handleSubmit}>
              Submit
            </Button>{' '}
            <Button color="secondary" onClick={closeModal} variant="contained">
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>

      <DeleteConfirmationDialog
        open={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteConfirmed}
        title="Delete Employee"
        content="Are you sure you want to delete this Employee?"
      />
    </>
  );
}
