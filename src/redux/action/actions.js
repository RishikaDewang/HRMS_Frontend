// Import constants for action types from the "../constant/constant" file.
import { LOGIN_REQUEST, SET_USER_DATA, FETCH_ROLES, SET_ROLE, CREATE_ROLE_WITH_PERMISSIONS_FAILURE, CREATE_ROLE_WITH_PERMISSIONS_REQUEST, CREATE_ROLE_WITH_PERMISSIONS_SUCCESS, FETCH_PERMISSIONS_BY_ROLE, LOGIN_SUCCESS , SET_PERMISSIONS_BY_ROLE , EDIT_PERMISSIONS_REQUEST, FECTCH_MY_PROFILE,SET_MY_PROFILE, SET_MY_ADDRESS, FECTCH_MY_ADDRESS, UPDATE_PROFILE_REQUEST, UPDATE_ADDRESS_REQUEST, SET_EMERGENCY_CONTACT,FECTCH_EMERGENCY_CONTACT, UPDATE_EMERGENCY_REQUEST,FECTCH_BANK_INFORMATION, SET_BANK_INFORMATION, UPDATE_BANK_REQUEST, FECTCH_EMPLOYEE, SET_EMPLOYEE, CREATE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE, FECTCH_EMPLOYEE_TIMEOFF, SET_EMPLOYEE_TIMOFF, CREATE_TIMEOFF_REQUEST, FECTCH_ALL_EMPLOYESS_TIMEOFF, SET_ALL_EMPLOYEES_TIMOFF,SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS, FETCH_MY_ATTENDANCE, SET_MY_ATTENDANCE, CLOCK_IN_REQUEST, CLOCK_OUT_REQUEST, SET_ATTENDANCE_SUMMARY,FETCH_ATTENDANCE_SUMMARY, FETCH_EMPLOYE_ATTENDANCE, SET_EMPLOYE_ATTENDANCE, RESET_STATE,LOGIN_FAILURE,SIGNUP_RESET, FETCH_PROFILEPIC, SET_PROFILEPIC,UPLOAD_IMAGE_REQUEST,UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE, QR_CODE_CREATE, FETCH_QRCODE, SET_QRCODE, FEATURES_UPDATE, FETCH_FEATURES, SET_FEATURES, FETCH_NEWS, SET_NEWS, NEWS_REQUEST, DELETE_NEWS, FETCH_DOCUMENTS, SET_DOCUMENTS, DOCUMENT_REQUEST, FETCH_DOCUMENTS_DETAILS, SET_DOCUMENTS_DETAILS, FETCH_DOCUMENT_DATA, SET_DOCUMENT_DATA, UPLOAD_FILES_REQUEST, UPLOAD_FILES_SUCCESS, DELETE_FOLDER, DELETE_FOLDER_FILE, FETCH_JOBS, SET_JOBS, CREATE_JOBS, FETCH_CANDIDATE, SET_CANDIDATE, ADD_CANDIDATE_REQUEST, FETCH_STAGES, SET_STAGES, CREATE_STAGES, DELETE_STAGES, FETCH_JOBDETAIL, SET_JOBDETAIL, UPDATE_STAGES, FETCH_TEMPLATE, SET_TEMPLATE, ADD_TEMPLATE_REQUEST, FETCH_TEMPLATEDETAIL, SET_TEMPLATEDETAIL, UPDATE_TEMPLATE_REQUEST, DELETE_TEMPLATE, DELETE_JOBS, DELETE_CANDIDATE, FETCH_CANDIDATE_PROFILE, SET_CANDIDATE_PROFILE, FETCH_TEMPLATE_BODY, SET_TEMPLATE_BODY, FETCH_COMMENTS, SET_COMMENTS, POST_COMMENT, DELETE_COMMENT, FETCH_HOLIDAY, SET_HOLIDAY, ADD_HOLIDAY, DELETE_HOLIDAY, SEND_EMAIL_REQUEST, SAVE_CANDIDATE_PROFILE_REQUEST, ADD_AS_EMPLOYEE, FETCH_ALL_DETAILS, SET_ALL_DETAILS, ATTENDANCE_FILTER, SET_ATTENDANCE_FILTER, UPDDATE_TIMEOFF_STATUS, LOGOUT_SUCCESS, IMPORT_CANDIDATE, IMPORT_EMPLOYEE, UPLOAD_BULK_CV, UPDATE_EMPLOYEE, ASSIGN_JOB, UPLOAD_ATTENDANCE, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_SUCCESS, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, FETCH_COUNTRY, SET_COUNTRY, FETCH_STATE, SET_STATE, FETCH_CITY, SET_CITY, SET_NATIONALITY, FETCH_NATIONALITY, CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_FAILURE, CREATE_EMPLOYEE_RESET, FETCH_SECTIONS, SET_SECTIONS, FETCH_MODULE, SET_MODULE} from "../constant/constant";

// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';

// This function is used to create an action for requesting a login with 'email' and 'password' as parameters.
export const loginRequest = (email, password) => {

 return {
    type: LOGIN_REQUEST,
    payload: { email, password },
  }};
  export const loginsuccess = () => {

    return {
       type: LOGIN_SUCCESS,
      
     }};

     export const loginFailure = (error) => {
      return {
        type: LOGIN_FAILURE,
        payload: error,
      };
    };
// This function is used to create an action for store the response of login like token, role and roleID
export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: userData,
  });
  export const fetchRole = ()=>{
    return{
      type:FETCH_ROLES
    }
  }
  export const setRole = (data)=>{
    return{
      type:SET_ROLE,
      payload:data
    }
  }
  export const createRoleWithPermissionsRequest = (roleData) => {
    
    return{
    type: CREATE_ROLE_WITH_PERMISSIONS_REQUEST,
    payload: roleData,
  }};
  export const createRoleWithPermissionsSuccess = () => {
    return{
    type: CREATE_ROLE_WITH_PERMISSIONS_SUCCESS,
  }};
  export const createRoleWithPermissionsFailure = (error) => {
    return{
    type: CREATE_ROLE_WITH_PERMISSIONS_FAILURE,
    payload: error,
  }};

  export const fetchPermissionByRole = (id)=>{
    return{
      type:FETCH_PERMISSIONS_BY_ROLE,
      payload:id
    }
  }
  export const setPermissionByRole = (data)=>{
    return{
      type:SET_PERMISSIONS_BY_ROLE,
      payload:data
    }
  }

  export const editPermissionsRequest = (roleData) => ({
    type: EDIT_PERMISSIONS_REQUEST,
    payload: roleData,
  });

  export const fetchMyProfile = (id)=>{
    return{
      type:FECTCH_MY_PROFILE,
      payload:id
    }
  }
  export const setMyProfile = (data)=>{
    return{
      type:SET_MY_PROFILE,
      payload:data
    }
  }
  export const fetchMyAddress = (id)=>{
    return{
      type:FECTCH_MY_ADDRESS,
      payload:id
    }
  }
  export const setMyAddress = (data)=>{
    return{
      type:SET_MY_ADDRESS,
      payload:data
    }
  }
  export const updateProfileRequest = (employeeId, updatedProfile) => {
    return {
      type: UPDATE_PROFILE_REQUEST,
      payload: {
        employeeId,
        updatedProfile,
      },
    };
  };
  export const updateAddressRequest = (employeeId, updatedProfile) => {
    return {
      type: UPDATE_ADDRESS_REQUEST,
      payload: {
        employeeId,
        updatedProfile,
      },
    };
  };
  export const fetchEmergencyContact = (id)=>{
    return{
      type:FECTCH_EMERGENCY_CONTACT,
      payload:id
    }
  }
  export const setEmergencyContact = (data)=>{
    return{
      type:SET_EMERGENCY_CONTACT,
      payload:data
    }
  }
  export const updateEmergecnyRequest = (employeeId, updatedProfile) => {
    return {
      type: UPDATE_EMERGENCY_REQUEST,
      payload: {
        employeeId,
        updatedProfile,
      },
    };
  };
  export const fetchBankInfo = (id)=>{
    return{
      type:FECTCH_BANK_INFORMATION,
      payload:id
    }
  }
  export const setBankInfo = (data)=>{
    return{
      type:SET_BANK_INFORMATION,
      payload:data
    }
  }

  export const updateBankRequest = (employeeId, updatedProfile) => {
    return {
      type: UPDATE_BANK_REQUEST,
      payload: {
        employeeId,
        updatedProfile,
      },
    };
  };

  export const fetchEmployee = (id)=>{
    return{
      type:FECTCH_EMPLOYEE,
      payload:id
    }
  }
  export const setEmployee = (data)=>{
    return{
      type:SET_EMPLOYEE,
      payload:data
    }
  }
  export const createEmployee = (employeedata) => {
    return {
      type: CREATE_EMPLOYEE_REQUEST,
      payload: employeedata
    };
  };
  export const createEmployeeSuccess = () => {
    return {
      type: CREATE_EMPLOYEE_SUCCESS,
    };
  };
  export const createEmployeeFailure = (error) => {
    return {
      type: CREATE_EMPLOYEE_FAILURE,
      payload:error
    };
  };
  export const createEmployeeReset = () => {
    return {
      type: CREATE_EMPLOYEE_RESET,
    };
  };
  export const deleteEmployee = (employeeid) => {
    return {
      type: DELETE_EMPLOYEE,
      payload: employeeid
    };
  };

  export const fetchEmployeetimeoff = (id)=>{
    return{
      type:FECTCH_EMPLOYEE_TIMEOFF,
      payload:id
    }
  }
  export const setEmployeetimeoff = (data)=>{
    return{
      type:SET_EMPLOYEE_TIMOFF,
      payload:data
    }
  }
  export const RequestTimeoff = (employeedata, id) => {
    return {
      type: CREATE_TIMEOFF_REQUEST,
      payload: {employeedata, id}
    };
  };

  export const fetchAllEmployeestimeoff = ()=>{
    return{
      type:FECTCH_ALL_EMPLOYESS_TIMEOFF,
    }
  }
  export const setAllEmployeestimeoff = (data)=>{
    return{
      type:SET_ALL_EMPLOYEES_TIMOFF,
      payload:data
    }
  }

  export const signupRequest = (userData) => ({
    type: SIGNUP_REQUEST,
    payload: userData,
  });
  
  export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS,
  });
  
  export const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error,
  });
  export const signupReset = () => ({
    type: SIGNUP_RESET,
  });
  export const fetchMyAttendance = (id)=>{
    return{
      type:FETCH_MY_ATTENDANCE,
      payload:id
    }
  }
  export const setMyAttendance  = (data)=>{
    return{
      type:SET_MY_ATTENDANCE,
      payload:data
    }
  }

  export const clockInRequest = (id ,latitude, longitude ,startDate, endDate) => {
    return{
    type: CLOCK_IN_REQUEST,
    payload: {id, latitude, longitude,startDate, endDate},
  }};
  
  export const clockOutRequest = (id, latitude, longitude,startDate, endDate) => {
    return{
    type: CLOCK_OUT_REQUEST,
    payload: { id, latitude, longitude,startDate, endDate},
  }};

  export const fetchAttendanceSummary = (employeeid, startDate, endDate)=>{
    return{
      type:FETCH_ATTENDANCE_SUMMARY,
      payload:{employeeid, startDate, endDate}
    }
  }
  export const setAttendanceSummary  = (data)=>{
    return{
      type:SET_ATTENDANCE_SUMMARY,
      payload:data
    }
  }
  export const fetchEmployeeAttendance = ( startDate, endDate)=>{
    return{
      type:FETCH_EMPLOYE_ATTENDANCE,
      payload:{ startDate, endDate}

    }
  }
  export const setEmployeeAttendance  = (data)=>{
    return{
      type:SET_EMPLOYE_ATTENDANCE,
      payload:data
    }
  }

  export const resetState = () => ({
    type: RESET_STATE,
  });

  export const fetchProfilepic= (id)=>{
    return{
      type:FETCH_PROFILEPIC,
      data:id

    }
  }
  export const setProfilepic  = (data)=>{
    return{
      type:SET_PROFILEPIC,
      payload:data
    }
  }

  export const uploadImageRequest = (id ,formData) => {
    return{
    type: UPLOAD_IMAGE_REQUEST,
    payload: {id ,formData},
  }};
  export const uploadImageSuccess = (imageUrl) => ({
    type: UPLOAD_IMAGE_SUCCESS,
    payload: imageUrl,
  });
  export const uploadImageFailure = (error) => ({
    type: UPLOAD_IMAGE_FAILURE,
    payload: error,
  });

  export const createqrcode = (id ,formData) => {
    return{
    type: QR_CODE_CREATE,
    payload: {id ,formData},
  }};

  export const fetchQrcode= (id)=>{
    return{
      type:FETCH_QRCODE,
      data:id

    }
  }
  export const setQrcode  = (data)=>{
    return{
      type:SET_QRCODE,
      payload:data
    }
  }

  export const updateFeatures = (formData) => {
    return {
      type: FEATURES_UPDATE,
      payload: formData
    };
  };


  export const fetchFeature= (id)=>{
    return{
      type:FETCH_FEATURES,
      data:id

    }
  }
  export const setFeatures  = (data)=>{
    return{
      type:SET_FEATURES,
      payload:data
    }
  }

  export const fetchNews= ()=>{
    return{
      type:FETCH_NEWS,

    }
  }
  export const setNews = (data)=>{
     return{
      type:SET_NEWS,
      payload:data
    }
  }

  export const createNews = (newsData) => {
    return{
    type: NEWS_REQUEST,
    payload:newsData,
  }};

  export const deleteNews = (id) => {
    return{
    type: DELETE_NEWS,
    payload:id,
  }};

  export const fetchDocuments= ()=>{
    return{
      type:FETCH_DOCUMENTS,

    }
  }
  export const setDocuments = (data)=>{
     return{
      type:SET_DOCUMENTS,
      payload:data
    }
  }

  export const createDocument = (documentdata) => {
    return{
    type: DOCUMENT_REQUEST,
    payload:documentdata,
  }};

  export const fetchDocumentsDetails= (id)=>{
    return{
      type:FETCH_DOCUMENTS_DETAILS,
      payload:id,

    }
  }
  export const setDocumentsDetails = (data)=>{
     return{
      type:SET_DOCUMENTS_DETAILS,
      payload:data
    }
  }
  export const fetchDocumentsData= (name)=>{
    return{
      type:FETCH_DOCUMENT_DATA,
      payload:name,

    }
  }
  export const setDocumentsData = (data)=>{
     return{
      type:SET_DOCUMENT_DATA,
      payload:data
    }
  }

  export const uploadFilesRequest = (id ,Files) => {
    console.log("action", id, Files)
    return{
    type: UPLOAD_FILES_REQUEST,
    payload: {id ,Files},
  }};
  export const uploadFilesSuccess = (imageUrl) => ({
    type: UPLOAD_FILES_SUCCESS,
    payload: imageUrl,
  });
  export const uploadFilesFailure = (error) => ({
    type: UPLOAD_IMAGE_FAILURE,
    payload: error,
  });

  export const deletefolder = (id) => {
    return{
    type: DELETE_FOLDER,
    payload:id,
  }};

  export const deletefolderfiles = (id) => {
    return{
    type: DELETE_FOLDER_FILE,
    payload:id,
  }};

  export const fetchJobs = ()=>{
    return{
      type:FETCH_JOBS,

    }
  }
  export const setJobs = (data)=>{
    return{
      type:SET_JOBS,
      payload:data
    }
  }

  export const createJobs = (data)=>{
    return{
      type:CREATE_JOBS,
      payload:data
    }
  }

  export const fetchCandidate = ()=>{
    return{
      type:FETCH_CANDIDATE,

    }
  }
  export const setCandidate = (data)=>{
    return{
      type:SET_CANDIDATE,
      payload:data
    }
  }
  export const addCandidateRequest = (formData,jobId) => ({
    type: ADD_CANDIDATE_REQUEST,
    payload: {formData, jobId},
  });

  export const fetchStages = ()=>{
    return{
      type:FETCH_STAGES,

    }
  }
  export const setStages = (data)=>{
    return{
      type:SET_STAGES,
      payload:data
    }
  }

  export const createStages = (stage) => ({
    type: CREATE_STAGES,
    payload: stage,
  });

  export const deleteStages = (stageid) => ({
    type: DELETE_STAGES,
    payload: stageid,
  });

  export const fetchjobdetail = (jobid)=>{
    return{
      type:FETCH_JOBDETAIL,
      payload:jobid

    }
  }
  export const setjobdetail = (data)=>{
    return{
      type:SET_JOBDETAIL,
      payload:data
    }
  }


  export const updateStages = (candateid , stagename,jobId) => ({
    type: UPDATE_STAGES,
    payload: {candateid,stagename,jobId},
  });

  export const fetchtemplate = ()=>{
    return{
      type:FETCH_TEMPLATE,
    }
  }
  export const settemplate = (data)=>{
    return{
      type:SET_TEMPLATE,
      payload:data
    }
  }
  export const addTemplateRequest = (templateData) => ({
    type: ADD_TEMPLATE_REQUEST,
    payload: templateData,
  });

  export const fetchtemplatedetail = (templateid)=>{
    return{
      type:FETCH_TEMPLATEDETAIL,
      payload:templateid
    }
  }
  export const settemplatedetail = (data)=>{
    return{
      type:SET_TEMPLATEDETAIL,
      payload:data
    }
  }

  export const updateTemplateRequest = ( templateData) => ({
    type: UPDATE_TEMPLATE_REQUEST,
    payload:  templateData ,
  });

  export const deleteTemplate = (templateId) => ({
    type: DELETE_TEMPLATE,
    payload: templateId,
  });
  export const deleteJob = (jobId) => {
    return{
    type: DELETE_JOBS,
    payload: jobId,
  }};

  export const deleteCandidate = (candidateid) => ({
    type: DELETE_CANDIDATE,
    payload: candidateid,
  });
  
  export const fetchtcandidateprofile = (candateid)=>{
    return{
      type:FETCH_CANDIDATE_PROFILE,
      payload:candateid
    }
  }
  export const setcandidateprofile = (data)=>{
    return{
      type:SET_CANDIDATE_PROFILE,
      payload:data
    }
  }

  export const fetchtemplatebody = (stageName)=>{
    return{
      type:FETCH_TEMPLATE_BODY,
      payload:stageName
    }
  }
  export const settemplatebody = (data)=>{
    return{
      type:SET_TEMPLATE_BODY,
      payload:data
    }
  }

  export const fetchcomments = (candateidId)=>{
    return{
      type:FETCH_COMMENTS,
      payload:candateidId
    }
  }
  export const setcomments = (data)=>{
    return{
      type:SET_COMMENTS,
      payload:data
    }
  }

  export const postComments = (data,candidateId)=>{
    return{
      type:POST_COMMENT,
      payload:{data,candidateId}
    }
  }

  export const deleteComments = (commentId, candateid)=>{
    return{
      type:DELETE_COMMENT,
      payload:{commentId,candateid}
    }
  }

  export const fetchholiday = ()=>{
    return{
      type:FETCH_HOLIDAY
    }
  }
  export const setholiday = (data)=>{
    return{
      type:SET_HOLIDAY,
      payload:data
    }
  }
  export const Addholiday = (holidayData)=>{
    return{
      type:ADD_HOLIDAY,
      payload:holidayData
    }
  }
  export const Deleteholiday = (holidayId)=>{
    return{
      type:DELETE_HOLIDAY,
      payload:holidayId
    }
  }

  export const sendEmailRequest = (emailData) => ({
    type: SEND_EMAIL_REQUEST,
    payload: emailData,
  });

  export const saveCandidateProfileRequest = (data, candidateId) => ({
    type: SAVE_CANDIDATE_PROFILE_REQUEST,
    payload: { data, candidateId },
  });

  export const AddAsEmployee = (userData) => ({
    type: ADD_AS_EMPLOYEE,
    payload:  userData
  });

  export const fetchalldetails = ()=>{
    return{
      type:FETCH_ALL_DETAILS
    }
  }
  export const setalldetails = (data)=>{
    return{
      type:SET_ALL_DETAILS,
      payload:data
    }
  }

  export const filterattendance = (employeeid, startDate, endDate)=>{
    return{
      type:ATTENDANCE_FILTER,
      payload:{employeeid,startDate,endDate}
    }
  }
  export const setfilterattendance = (data)=>{
    return{
      type:SET_ATTENDANCE_FILTER,
      payload:data
    }
  }

  export const updateStatus = (leaveId,statusId)=>{
    return{
      type:UPDDATE_TIMEOFF_STATUS,
      payload:{leaveId,statusId}
    }
  }

  export const logOut = ()=>{
    return{
      type:LOGOUT_SUCCESS,

    }
  }

  export const importCandidate = (formData) => {
    return{
    type: IMPORT_CANDIDATE,
    payload:formData,
  }};

  export const importEmployee = (formData) => {
    return{
    type: IMPORT_EMPLOYEE,
    payload:formData,
  }};

  export const bulkCV = (formData) => {
    return{
    type: UPLOAD_BULK_CV,
    payload:formData,
  }};

  export const updateEmployee = (employeeData,employeeId)=>{
    return{
      type:UPDATE_EMPLOYEE,
      payload:{employeeData,employeeId}
    }
  }

  export const assingJob = (candidateId,jobId)=>{
    return{
      type:ASSIGN_JOB,
      payload:{candidateId,jobId}
    }
  }

  export const importAttendance = (formData) => {
    return{
    type: UPLOAD_ATTENDANCE,
    payload:formData,
  }};

  export const ForgotPassword = (email) => {
    return{
    type: FORGOT_PASSWORD_REQUEST,
    payload:email,
  }};

  export const ForgotPasswordSuccess = () => {
    return{
    type: FORGOT_PASSWORD_SUCCESS,
  }};

  export const ForgotPasswordFailure = (data) => {
    return{
    type: FORGOT_PASSWORD_FAILURE,
    payload:data,
  }};

  export const ResetPassword = (employeeData) => {
    return{
    type: RESET_PASSWORD_REQUEST,
    payload:employeeData,
  }};

  export const ResetPasswordSuccess = () => {
    return{
    type: RESET_PASSWORD_SUCCESS,
  }}

  export const ResetPasswordFailure = (data) => {
    return{
    type: RESET_PASSWORD_FAILURE,
    payload: data
  }}

  export const fetchCountry = ()=>{
    return{
      type:FETCH_COUNTRY,

    }
  }
  export const setCountry = (data)=>{
    return{
      type:SET_COUNTRY,
      payload:data
    }
  }

  export const fetchState = (countryId)=>{
    return{
      type:FETCH_STATE,
      payload:countryId

    }
  }
  export const setState = (data)=>{
    return{
      type:SET_STATE,
      payload:data
    }
  }

  export const fetchCity = (stateId)=>{
    return{
      type:FETCH_CITY,
      payload:stateId

    }
  }
  export const setCity = (data)=>{
    return{
      type:SET_CITY,
      payload:data
    }
  }
  export const getNationality = ()=>{
    return{
      type:FETCH_NATIONALITY,
    }
  }
  export const setNationality = (data)=>{
    return{
      type:SET_NATIONALITY,
      payload:data
    }
  }
  export const fetchSections= ()=>{
    return{
      type:FETCH_SECTIONS,

    }
  }
  export const setSections  = (data)=>{
    return{
      type:SET_SECTIONS,
      payload:data
    }
  }

  export const fetchModule= ()=>{
    return{
      type:FETCH_MODULE,

    }
  }
  export const setModule  = (data)=>{
    return{
      type:SET_MODULE,
      payload:data
    }
  }