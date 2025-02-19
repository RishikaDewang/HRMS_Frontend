// sagas.js
// Import necessary Redux Saga effects and action creators.
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setRole, setUserData, createRoleWithPermissionsSuccess, createRoleWithPermissionsFailure, setPermissionByRole, fetchRole as fetchcompanyrole, loginsuccess, setMyProfile, setMyAddress, setEmergencyContact, setBankInfo, setEmployee, setEmployeetimeoff, setAllEmployeestimeoff, signupSuccess, signupFailure, setMyAttendance, setAttendanceSummary, setEmployeeAttendance, fetchEmployeetimeoff, fetchEmployee, fetchAttendanceSummary,loginFailure, setProfilepic ,uploadImageFailure, fetchProfilepic, setQrcode, fetchQrcode, setFeatures, setNews,fetchNews, setDocuments, fetchDocuments, setDocumentsDetails, setDocumentsData, fetchDocumentsDetails,fetchJobs,setJobs, setCandidate, setStages, fetchStages, setjobdetail,fetchjobdetail, settemplate, fetchtemplate, settemplatedetail, setcandidateprofile, settemplatebody, setcomments, fetchcomments, setholiday, fetchholiday, setalldetails, setfilterattendance, filterattendance, fetchCandidate, fetchAllEmployeestimeoff, ForgotPasswordFailure, ForgotPasswordSuccess, ResetPasswordSuccess, ResetPasswordFailure, setCountry, setState, setCity, setNationality, createEmployeeSuccess, createEmployeeFailure, setSections, setModule} from "../action/actions"
import { FETCH_ROLES, LOGIN_REQUEST, CREATE_ROLE_WITH_PERMISSIONS_REQUEST, FETCH_PERMISSIONS_BY_ROLE, EDIT_PERMISSIONS_REQUEST, FECTCH_MY_PROFILE, FECTCH_MY_ADDRESS, UPDATE_PROFILE_REQUEST, UPDATE_ADDRESS_REQUEST, FECTCH_EMERGENCY_CONTACT, UPDATE_EMERGENCY_REQUEST, FECTCH_BANK_INFORMATION, UPDATE_BANK_REQUEST, FECTCH_EMPLOYEE, CREATE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE, FECTCH_EMPLOYEE_TIMEOFF, CREATE_TIMEOFF_REQUEST, FECTCH_ALL_EMPLOYESS_TIMEOFF, SIGNUP_REQUEST, FETCH_MY_ATTENDANCE, CLOCK_IN_REQUEST, CLOCK_OUT_REQUEST, FETCH_ATTENDANCE_SUMMARY, FETCH_EMPLOYE_ATTENDANCE, FETCH_PROFILEPIC ,UPLOAD_IMAGE_REQUEST, QR_CODE_CREATE, FETCH_QRCODE, FEATURES_UPDATE, FETCH_FEATURES , FETCH_NEWS, NEWS_REQUEST, DELETE_NEWS, FETCH_DOCUMENTS, DOCUMENT_REQUEST, FETCH_DOCUMENTS_DETAILS, FETCH_DOCUMENT_DATA, UPLOAD_FILES_REQUEST, DELETE_FOLDER, DELETE_FOLDER_FILE, FETCH_JOBS,CREATE_JOBS, FETCH_CANDIDATE, ADD_CANDIDATE_REQUEST, FETCH_STAGES, CREATE_STAGES, DELETE_STAGES, FETCH_JOBDETAIL, UPDATE_STAGES, FETCH_TEMPLATE, ADD_TEMPLATE_REQUEST, FETCH_TEMPLATEDETAIL, UPDATE_TEMPLATE_REQUEST, DELETE_TEMPLATE, DELETE_JOBS, DELETE_CANDIDATE, FETCH_CANDIDATE_PROFILE, FETCH_TEMPLATE_BODY, FETCH_COMMENTS, POST_COMMENT, DELETE_COMMENT, FETCH_HOLIDAY, ADD_HOLIDAY, DELETE_HOLIDAY, SEND_EMAIL_REQUEST, SAVE_CANDIDATE_PROFILE_REQUEST, ADD_AS_EMPLOYEE, FETCH_ALL_DETAILS, ATTENDANCE_FILTER, UPDDATE_TIMEOFF_STATUS, LOGOUT_SUCCESS, IMPORT_CANDIDATE, IMPORT_EMPLOYEE, UPLOAD_BULK_CV, UPDATE_EMPLOYEE, ASSIGN_JOB, UPLOAD_ATTENDANCE, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, FETCH_COUNTRY, FETCH_STATE, FETCH_CITY, FETCH_NATIONALITY, FETCH_SECTIONS, FETCH_MODULE} from '../constant/constant';
// Import the  functions for making API calls.
import { fetchrole, login, createrole, fetchPermissionByRole, editpermission, fetchmyprofile, fetchmyaddress, updatemyprofile, updatemyaddress, fetchemergencycontact, updateEmergency, fetchebankinfo, updateBankInfo, fetcheemployee, createEmployee, deleteemployee, fetchemployeetimeoff, requestTimeoff, fetchEmployeesTimeoff, singup, fetchmyattendance, clockin, clockout, fetchattendancesummary, fetchemployeeattendance, profilepicture, uploadpicture, createqrcode, fetchqrcode, featurepermission, fetchfeaturepermission , fetchnews,postnews, deletenews, fetchdocuments, createdocuments, fetchdocumentsdetails, documentsdetails, uploadfiles, deletefolder, deletefolderfiles , fetchejobs,createjobs, fetchecandidate, createcandidate, fetchestages, createstages, deletestages, jobdetail, updatestage, fetchetemplate, createtemplate, fetchetemplatedetail, updatetemplatedetail, deletetemplate, deletejobs, deletecandidate, candidateprofile, templatebody, getcomment, postcomment, deletescomment, getholiday, addholiday, deleteholiday, sendcandidatemail, updatecandidate, addasemployee, titleanddepartment, fileterattendance, statusupdate, logout, importcandidate, importemployee, bulkcv, epmployeeupdate, jobassingn, attendaceimport, forgotpassword, resetpassword, getcountry, getstate, getcity, getnationality, fetchSections, fetchmodule} from 'api/user';
// Define a Saga function 'loginSaga' responsible for handling login requests
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function* loginSaga(action) {
  try {
    // Extract 'email' and 'password' from the action's payload.

    const { email, password } = action.payload;
    // Make an API call using the 'call' effect to the 'login' function with the provided credentials.
    const response = yield call(login, email, password);
    const { token, roleId, roleName, permissions, id ,companyId ,modulePermissions,isPasswordGenerated} = response;
    console.log("response login ", response)
    // Dispatch the action to store user data in Redux
    yield put(setUserData({ token, roleId, roleName, permissions, id,companyId,modulePermissions ,isPasswordGenerated}));
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('roleName', JSON.stringify(roleName));
    yield put(loginsuccess())
  } catch (error) {
    toast.error(error.response.data );
    // alert("your Email and password is incorrect")
    yield put(loginFailure(error));
   
    return error
  }
}
function* fetchRole() {
  try {
    const response = yield call(fetchrole)
    yield put(setRole(response));
  }
  catch (error) {
    return error
  }
}

function* createRoleWithPermissions(action) {
  try {
    // Perform the API request here using the provided roleData
    // Example:
    const response = yield call(createrole, action.payload);
    if (response.status === 200) {
      // Handle a successful response
      yield put(createRoleWithPermissionsSuccess());
      
      console.log("role", response.data);
    } else {
      // Handle error status
      console.log("role error status", response.status);
      // Dispatch an action for failure
      yield put(createRoleWithPermissionsFailure(response.data));
    }
    // Handle a successful response
yield put(fetchcompanyrole())
  } catch (error) {
    toast.error(error.response.data );
    yield put(createRoleWithPermissionsFailure(error));
    
    console.log("role", error.response.data  )
   
  }
}

function* fetchPermission(action) {
  const id = action.payload
  try {

    const response = yield call(fetchPermissionByRole, id)
    yield put(setPermissionByRole(response))
  }
  catch (error) {
    return error
  }
}

function* edipermission(action) {

  try {
    yield call(editpermission, action.payload);
    // yield put(createRoleWithPermissionsSuccess());
  } catch (error) {
    return error
  }
}


function* fetchMyProfilesaga(action) {
  const id = action.payload
  try {

    const response = yield call(fetchmyprofile, id)

    yield put(setMyProfile(response))
  }
  catch (error) {
    return error
  }
}
function* fetchMyAddresssaga(action) {
  const id = action.payload
  try {

    const response = yield call(fetchmyaddress, id)

    yield put(setMyAddress(response))
  }
  catch (error) {
    return error
  }
}

function* updateProfileSaga(action) {
  try {
   const response =  yield call(updatemyprofile, action.payload.employeeId, action.payload.updatedProfile);
    toast.success(response);
  } catch (error) {
    toast.error(error.response.data);
  }
}
function* updateAddressSaga(action) {
  try {
    const response = yield call(updatemyaddress, action.payload.employeeId, action.payload.updatedProfile);
    toast.success(response);
  } catch (error) {
    toast.error(error.response.data);
  }
}
function* fetchEmergencyContactsaga(action) {
  const id = action.payload
  try {

    const response = yield call(fetchemergencycontact, id)
    yield put(setEmergencyContact(response))
  }
  catch (error) {
    return error
  }
}

function* updateEmergencySaga(action) {
  try {
   const response = yield call(updateEmergency, action.payload.employeeId, action.payload.updatedProfile);
   toast.success(response);
  } catch (error) {
    toast.error(error.response.data);
  }
}
function* fetchBankInfosaga(action) {
  const id = action.payload
  try {

    const response = yield call(fetchebankinfo, id)
    yield put(setBankInfo(response))
  }
  catch (error) {
    return error
  }
}

function* updateBankInfoSaga(action) {
  try {
   const response =  yield call(updateBankInfo, action.payload.employeeId, action.payload.updatedProfile);
    toast.success(response);
  } catch (error) {
    toast.error(error.response.data);
  }
}
function* fetchEmployeesaga(action) {
  const id = action.payload
  try {

    const response = yield call(fetcheemployee, id)
    yield put(setEmployee(response))
  }
  catch (error) {
    return error
  }
}

function* createEmployeeSaga(action) {
  try {
    yield call(createEmployee, action.payload);
    yield put(fetchEmployee())
    yield put(createEmployeeSuccess())
  } catch (error) {
    yield put(createEmployeeFailure(error.response.data))
    toast.error(error.response.data );
    
  }
}

function* deleteEmployeesaga(action) {
  const id = action.payload
  try {
    yield call(deleteemployee, id)
    yield put(fetchEmployee())

  }
  
  catch (error) {
    toast.error(error.response.data );
  }
}

function* fetchEmployeeTimeoffsaga(action) {
  const id = action.payload
  try {

    const response = yield call(fetchemployeetimeoff, id)
    yield put(setEmployeetimeoff(response))
  }
  catch (error) {
    return error
  }
}

function* createTimeoffSaga(action) {


  try {
    yield call(requestTimeoff, action.payload.employeedata, action.payload.id);
    yield call(requestTimeoff, action.payload.employeedata, action.payload.id);
    yield put(fetchEmployeetimeoff(action.payload.id))
  
  } catch (error) {
    return error
  }
}
function* signupSaga(action) {

  try {
    const response = yield call(singup, action.payload);
  
    console.log("response", response)
    if (response ) {
     
      yield put(signupSuccess());
      toast.success(response);
    } 
  } catch (error) {
    toast.error(error.response.data );
    yield put(signupFailure(error.message));
  }
}

function* fetchAllEmployeeTimeoffsaga() {
  try {

    const response = yield call(fetchEmployeesTimeoff)
    yield put(setAllEmployeestimeoff(response))
  }
  catch (error) {
    return error
  }
}

function* fetchMyAttendancesaga(action) {
  try {

    const response = yield call(fetchmyattendance, action.payload)
    yield put(setMyAttendance(response))
  }
  catch (error) {
    return error
  }
}
function* clockIn(action) {
  console.log("clockin",action)
  try {
    const { latitude, longitude, id , startDate, endDate} = action.payload;
    yield call(clockin, id, latitude, longitude);
    yield put(filterattendance(id , startDate, endDate ))
    yield put(fetchAttendanceSummary(id , startDate, endDate))

  } catch (error) {
    return error
  }
}
function* clockOut(action) {
  try {
    const { latitude, longitude, id , startDate, endDate } = action.payload;
    yield call(clockout, id, latitude, longitude);
    yield put(filterattendance(id , startDate, endDate ))
    yield put(fetchAttendanceSummary(id , startDate, endDate ))
  } catch (error) {
    return error
  }
}

function* fetchAttendancesummary(action) {
  console.log("summary", action)
  const {employeeid, startDate, endDate} = action.payload
  try {

    const response = yield call(fetchattendancesummary, employeeid, startDate, endDate)
    console.log("summary", response)
    yield put(setAttendanceSummary(response))
  }
  catch (error) {
    return error
  }
}
function* fetchEmpAttendance(action) {
  const { startDate, endDate} = action.payload
  try {

    const response = yield call(fetchemployeeattendance, startDate, endDate)
    yield put(setEmployeeAttendance(response))
  }
  catch (error) {
    return error
  }
}

function* fetchProfilePicsaga(action) {
  const id = action.data
  try {

    const response = yield call(profilepicture, id)
    yield put(setProfilepic(response))
  }
  catch (error) {
    return error
  }
}

function* uploadImageSaga(action) {
  try {
   yield call(uploadpicture, action.payload.id , action.payload.formData);
    yield put (fetchProfilepic(action.payload.id))
    // yield put(uploadImageSuccess(response.data.imageUrl));
  
  } catch (error) {
    yield put(uploadImageFailure(error.message));
  }
}

function* createqrcodesaga(action) {
  try {
   const response = yield call(createqrcode, action.payload.id , action.payload.formData);
   yield put(fetchQrcode(action.payload.id ))
   console.log(response) 
  } catch (error) {
   return error
  }
}
function* fetchqrcodesaga(action) {

  try {
   const response = yield call(fetchqrcode, action.data);

 yield put(setQrcode(response))
  } catch (error) {
   return error
  }
}

function* feautresUpdateSaga(action) {

  try {
const response =   yield call(featurepermission, action.payload);
console.log(response)

  } catch (error) {
   return error
  }
}

function* fetchfeaturesaga(action) {

  try {
   const response = yield call(fetchfeaturepermission, action.data);
 yield put(setFeatures(response))
  } catch (error) {
   return error
  }
}

function* fetchNewsSaga() {
  try {
 
 const response = yield call(fetchnews)
    yield put(setNews(response))
  }
  catch (error) {
    return error
  }
 }
 function* NewsSaga(action) {
  try {
  
   yield call(postnews, action.payload);

     yield put(fetchNews())
  } catch (error) {
     return error 
  }
}
function* DeleteNewsSaga(action) {
  try {
  
  yield call(deletenews, action.payload);
     yield put(fetchNews())
  } catch (error) {
     return error 
  }
}

function* fetchDocumentSaga() {
  try {
 
    const response = yield call(fetchdocuments)
    yield put(setDocuments(response))
  }
  catch (error) {
    return error
  }
 }
 function* creatDocumentSaga(action) {
  try {
  
     yield call(createdocuments, action.payload);
     yield put(fetchDocuments())
  } catch (error) {
     return error 
  }
}

function* fetchDocumentdetailsSaga(action) {
  try {
 
    const response = yield call(fetchdocumentsdetails,action.payload)
    yield put(setDocumentsDetails(response))
  }
  catch (error) {
   console.log(error)
  }
 }

 function* fetchDocumentdataSaga(action) {
  try {
 
    const response = yield call(documentsdetails,action.payload)
    yield put(setDocumentsData(response))
  }
  catch (error) {
   console.log(error)
  }
 }
 function* uploadFilesSaga(action) {
  try {
    yield call(uploadfiles, action.payload.id , action.payload.Files);
    yield put (fetchDocumentsDetails(action.payload.id))
    // yield put(uploadImageSuccess(response.data.imageUrl));
  
  } catch (error) {
    return error
    // yield put(uploadImageFailure(error.message));
  }
}

function* DeleteFolderSaga(action) {
  try {
  
  yield call(deletefolder, action.payload);
     yield put(fetchDocuments())
  } catch (error) {
     return error 
  }
}

function* DeleteFolderfilesSaga(action) {
  try {
  
  yield call(deletefolderfiles, action.payload);
     yield put(fetchDocumentsDetails(action.payload))
  } catch (error) {
     return error 
  }
}
function* fetchJobsaga() {
  try {

    const response = yield call(fetchejobs)
    yield put(setJobs(response))
  }
  catch (error) {
    return error
  }
}

function* createJobsSaga(action) {
  try {
   yield call(createjobs, action.payload);
    yield put(fetchJobs())  
  } catch (error) {
    return error
  }
}

function* fetchCandidatesaga() {
  try {

    const response = yield call(fetchecandidate)
    yield put(setCandidate(response))
  }
  catch (error) {
    return error
  }
}

function* createCandidateSaga(action) {
  try {
     yield call(createcandidate, action.payload.formData);

    yield put(fetchCandidate())
    yield put(fetchjobdetail(action.payload.jobId))
    // yield put(uploadImageSuccess(response.data.imageUrl));
  
  } catch (error) {
  console.log(error)
    // yield put(uploadImageFailure(error.message));
  }
}

function* fetchStagesaga() {
  try {

    const response = yield call(fetchestages)
    yield put(setStages(response))
  }
  catch (error) {
    return error
  }
}
function* createStageSaga(action) {
  try {
yield call(createstages, action.payload);
  yield put(fetchStages())
  
  } catch (error) {
  console.log(error);
  }
}
function* DeleteStageSaga(action) {
  try {
  
  yield call(deletestages, action.payload);
  yield put(fetchStages())
  } catch (error) {
     return error 
  }
}
function* fetchJobDetailsaga(action) {
  try {

    const response = yield call(jobdetail, action.payload)
    console.log(response)
    yield put(setjobdetail(response))
  }
  catch (error) {
    return error
  }
}
function* updateStageSaga(action) {
  try {
  yield call(updatestage, action.payload.candateid.candidateId, action.payload.stagename);
  yield put(fetchjobdetail(action.payload.candateid.jobId))

  
  } catch (error) {
  return error
  }
}
function* fetchTemplatesaga() {
  try {

    const response = yield call(fetchetemplate)
    console.log(response)
    yield put(settemplate(response))
  }
  catch (error) {
    return error
  }
}
function* addTemplate(action) {
  try {

  yield call(createtemplate, action.payload);
  yield put(fetchtemplate())
  } catch (error) {
return error

  }
}
function* fetchTemplateDetailsaga(action) {
  try {

    const response = yield call(fetchetemplatedetail, action.payload)
    console.log(response)
    yield put(settemplatedetail(response))
  }
  catch (error) {
    return error
  }
}
function* updateTemplateDetailsaga(action) {
  const {id, ...templateData } = action.payload;
console.log("id and templateData", id , templateData)
  try {

    const response = yield call(updatetemplatedetail, id,templateData)
    console.log("update api resposnse",response)
    yield put(fetchtemplate())
  }
  catch (error) {
    return error
  }
}
function* DeleteTemplate(action) {
  console.log(action)
  try {
  
  yield call(deletetemplate, action.payload);
  yield put(fetchtemplate())
  } catch (error) {
     return error 
  }
}

function* DeleteJobs(action) {
  console.log(action)
  try {
  
 const response= yield call(deletejobs, action.payload);
 console.log(response)
 yield put(fetchJobs()) 
  } catch (error) {
     return error 
  }
}

function* DeleteCandidateSaga(action) {
  console.log(action)
  try {
  
 const response= yield call(deletecandidate, action.payload);
 console.log(response)
 yield put(fetchCandidate())
  } catch (error) {
     return error 
  }
}

function* fetchCandidateProfile(action) {
  console.log(action)
  try {

    const response = yield call(candidateprofile, action.payload.candidateId)
    console.log(response)
    yield put(setcandidateprofile(response))
  }
  catch (error) {
    return error
  }
}
function* fetchTemplateBody(action) {
  console.log(action)
  try {

    const response = yield call(templatebody, action.payload)
    console.log(response)
    yield put(settemplatebody(response))
  }
  catch (error) {
    return error
  }
}

function* fetchCommentsSaga(action) {
  console.log(action)
  try {

    const response = yield call(getcomment, action.payload)
    console.log(response)
    yield put(setcomments(response))
  }
  catch (error) {
    return error
  }
}
function* postCommetSaga(action) {
  try {

 yield call(postcomment, action.payload.data);
 yield put(fetchcomments(action.payload.candidateId))
  } catch (error) {
return error

  }
}
function* deleteCommetSaga(action) {
  try {

  yield call(deletescomment, action.payload.commentId);
  yield put(fetchcomments(action.payload.candateid))

  } catch (error) {
return error

  }
}
function* fetchholidaysaga() {
  try {

  const response = yield call(getholiday);
  console.log(response)
  yield put(setholiday(response))

  } catch (error) {
return error

  }
}
function* addholidaysaga(action) {
  console.log(action)
  try {

  const response = yield call(addholiday, action.payload);
  console.log(response)
  yield put(fetchholiday())

  } catch (error) {
return error

  }
}
function* deleteHolidaySaga(action) {
  try {

 const response = yield call(deleteholiday, action.payload);
yield put(fetchholiday())
 console.log(response)
  } catch (error) {
return error

  }
}
function* sendMailSaga(action) {
  try {

 const response = yield call(sendcandidatemail, action.payload);
 toast.success('Profile Updated!');
 console.log(response)
  } catch (error) {
return error

  }
}

function* saveCandidateProfile(action) {
  console.log(action)
  try {
   const response =  yield call(updatecandidate, action.payload.data, action.payload.candidateId.candidateId);
   toast.success('Profile Updated!');
   console.log(response)


  } catch (error) {
    return error
  }
}

function* addasEmployeSaga(action) {
  console.log(action)
  try {
   const response =  yield call(addasemployee, action.payload);
   toast.success('Profile Updated!');
   console.log(response)


  } catch (error) {
    return error
  }
}

function* fetchAlldetailssaga() {
  try {

    const response = yield call(titleanddepartment)
    console.log(response)
    yield put(setalldetails(response))
  }
  catch (error) {
    return error
  }
}
function* fetchfilterattendace(action) {
  console.log(action)
  const {employeeid, startDate, endDate} = action.payload
  try {

    const response = yield call(fileterattendance, employeeid,startDate,endDate)
    console.log(response)
    yield put(setfilterattendance(response))
  }
  catch (error) {
    return error
  }
}

function* logoutsaga() {
  try {

    const response = yield call(logout)
    console.log(response)
  }
  catch (error) {
    return error
  }
}
function* updatestatussaga(action) {
  console.log(action)
  const {leaveId,statusId} = action.payload
  try {

    const response = yield call(statusupdate, leaveId,statusId)
    console.log(response)
    yield put(fetchAllEmployeestimeoff())
  }
  catch (error) {
    return error
  }
}
function* importCandidateSaga(action) {
  console.log("import action", action)
  try {
  const response =   yield call(importcandidate,  action.payload);
  console.log("response", response)
  yield put(fetchCandidate())
  
  } catch (error) {
    return error
    // yield put(uploadImageFailure(error.message));
  }
}
function* importEmpoyeeSaga(action) {
  console.log("import action", action)
  try {
  const response =   yield call(importemployee,  action.payload);
  console.log("response", response)
  yield put(fetchEmployee())
  
  } catch (error) {
    return error
    // yield put(uploadImageFailure(error.message));
  }
}
function* forgotpasswordsaga(action) {
  try {
   yield call(forgotpassword,  action.payload);
  toast.success("Reset link sent to your Email");
  yield put(ForgotPasswordSuccess())
  } catch (error) {
    yield put(ForgotPasswordFailure(error.response.data))
    toast.error(error.response.data);
    // yield put(uploadImageFailure(error.message));
  }
}
function* bulkCvSaga(action) {
  console.log("import action", action.payload)
  try {
  const response =   yield call(bulkcv,  action.payload);
  console.log("response", response)
  yield put(fetchCandidate())
  
  } catch (error) {
    return error
    // yield put(uploadImageFailure(error.message));
  }
}

function* updateEmployeeSaga(action) {
  const {employeeData, employeeId}= action.payload
  try {
  const response = yield call(epmployeeupdate, employeeData, employeeId);
  console.log("response", response)
  toast.success(response);
  yield put(fetchEmployee())

  
  } catch (error) {
    toast.error(error.response.data);
  }
}

function* assignJobSaga(action) {
  const {candidateId, jobId}= action.payload
  try {
  const response = yield call(jobassingn, candidateId, jobId);
  console.log("response", response)

  
  } catch (error) {
  return error
  }
}

function* importAttendanceSaga(action) {
  console.log("import action", action.payload)
  try {
  const response =   yield call(attendaceimport,  action.payload);
  console.log("response", response)
  // yield put(fetchCandidate())
  
  } catch (error) {
    return error
    // yield put(uploadImageFailure(error.message));
  }
}
function* resetpasswordsaga(action) {
  try {
  const response =   yield call(resetpassword,  action.payload);
  console.log("response", response)
   yield put(ResetPasswordSuccess())
  } catch (error) {
    toast.error(error.response.data);
    yield put(ResetPasswordFailure(error.response.data))
    // yield put(uploadImageFailure(error.message));
  }
}

function* fetchCountrySaga() {
  try {

    const response = yield call(getcountry)
    console.log("country", response)
    yield put(setCountry(response))
  }
  catch (error) {
    return error
  }
}

function* fetchStageSaga(action) {

  try {

    const response = yield call(getstate, action.payload.id)
    console.log("country", response)
    yield put(setState(response))
  }
  catch (error) {
    return error
  }
}

function* fetchCitySaga(action) {

  try {

    const response = yield call(getcity, action.payload)
    console.log("city", response)
    yield put(setCity(response))
  }
  catch (error) {
    return error
  }
}

function* fetchNationalitySaga() {

  try {

    const response = yield call(getnationality)
    console.log("nationality", response)
    yield put(setNationality(response))
  }
  catch (error) {
    return error
  }
}
function* fetchSectionsSaga() {

  try {

    const response = yield call(fetchSections)
    console.log("Sections", response)
    yield put(setSections(response))
  }
  catch (error) {
    return error
  }
}
function* fetchModuleSaga() {

  try {

    const response = yield call(fetchmodule)
    console.log("module", response)
    yield put(setModule(response))
  }
  catch (error) {
    return error
  }
}
// Define a Saga function 'watchLoginSaga' responsible for watching login requests.
export function* watchModule() {
  yield takeLatest(FETCH_MODULE, fetchModuleSaga);
}
export function* watchSections() {
  yield takeLatest(FETCH_SECTIONS, fetchSectionsSaga);
}
export function* watchNationality() {
  yield takeLatest(FETCH_NATIONALITY, fetchNationalitySaga);
}
export function* watchCity() {
  yield takeLatest(FETCH_CITY, fetchCitySaga);
}
export function* watchState() {
  yield takeLatest(FETCH_STATE, fetchStageSaga);
}
export function* watchCountry() {
  yield takeLatest(FETCH_COUNTRY, fetchCountrySaga);
}
export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD_REQUEST, resetpasswordsaga);
}
export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotpasswordsaga);
}
export function* watchImportAttendance() {
  yield takeLatest(UPLOAD_ATTENDANCE, importAttendanceSaga);
}
export function* watchJobAssing() {
  yield takeLatest(ASSIGN_JOB, assignJobSaga);
}
export function* watchEmployeupdate() {
  yield takeLatest(UPDATE_EMPLOYEE, updateEmployeeSaga);
}
export function* watchBulkCv() {
  yield takeLatest(UPLOAD_BULK_CV, bulkCvSaga);
}
export function* watchEmployeCandidate() {
  yield takeLatest(IMPORT_EMPLOYEE, importEmpoyeeSaga);
}
export function* watchImportCandidate() {
  yield takeLatest(IMPORT_CANDIDATE, importCandidateSaga);
}
export function* watchLogout() {
  yield takeLatest(LOGOUT_SUCCESS, logoutsaga);
}
export function* watchUpdatestatus() {
  yield takeLatest(UPDDATE_TIMEOFF_STATUS, updatestatussaga);
}
export function* watchFilterattendance() {
  yield takeLatest(ATTENDANCE_FILTER, fetchfilterattendace);
}
export function* watchAlldetails() {
  yield takeLatest(FETCH_ALL_DETAILS, fetchAlldetailssaga);
}
export function* watchAddasEmploye() {
  yield takeLatest(ADD_AS_EMPLOYEE, addasEmployeSaga);
}
export function* watchSaveCandidateProfile() {
  yield takeLatest(SAVE_CANDIDATE_PROFILE_REQUEST, saveCandidateProfile);
}
export function* watchSendMail() {
  yield takeLatest(SEND_EMAIL_REQUEST, sendMailSaga);
}
export function* watchDeleteHoliday() {
  yield takeLatest(DELETE_HOLIDAY, deleteHolidaySaga);
}
export function* watchAddHoliday() {
  yield takeLatest(ADD_HOLIDAY, addholidaysaga);
}
export function* watchHoliday() {
  yield takeLatest(FETCH_HOLIDAY, fetchholidaysaga);
}
export function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT, deleteCommetSaga);
}
export function* watchPostComment() {
  yield takeLatest(POST_COMMENT, postCommetSaga);
}
export function* watchComments() {
  yield takeLatest(FETCH_COMMENTS, fetchCommentsSaga);
}
export function* watchTemplateBody() {
  yield takeLatest(FETCH_TEMPLATE_BODY, fetchTemplateBody);
}
export function* watchCandidateProfile() {
  yield takeLatest(FETCH_CANDIDATE_PROFILE, fetchCandidateProfile);
}
export function* watchDeleteCandidate() {
  yield takeLatest(DELETE_CANDIDATE, DeleteCandidateSaga);
}
export function* watchDeleteJob() {
  yield takeLatest(DELETE_JOBS, DeleteJobs);
}
export function* watchDeleteTemplate() {
  yield takeLatest(DELETE_TEMPLATE, DeleteTemplate);
}
export function* watchUpdateTemplateDetail() {
  yield takeLatest(UPDATE_TEMPLATE_REQUEST, updateTemplateDetailsaga);
}
export function* watchAddTemplateDetail() {
  yield takeLatest(FETCH_TEMPLATEDETAIL, fetchTemplateDetailsaga);
}
export function* watchAddTemplate() {
  yield takeLatest(ADD_TEMPLATE_REQUEST, addTemplate);
}
export function* watchtemplate() {
  yield takeLatest(FETCH_TEMPLATE, fetchTemplatesaga);
}
export function* watchupdatestage() {
  yield takeLatest(UPDATE_STAGES, updateStageSaga);
}
export function* watchJobDetails() {
  yield takeLatest(FETCH_JOBDETAIL, fetchJobDetailsaga);
}
export function* watchDeleteStages() {
  yield takeLatest(DELETE_STAGES, DeleteStageSaga);
}
export function* watchCreateStages() {
  yield takeLatest(CREATE_STAGES, createStageSaga);
}
export function* watchStages() {
  yield takeLatest(FETCH_STAGES, fetchStagesaga);
}
export function* watchAddCandidate() {
  yield takeLatest(ADD_CANDIDATE_REQUEST, createCandidateSaga);
}
export function* watchCandidate() {
  yield takeLatest(FETCH_CANDIDATE, fetchCandidatesaga);
}
export function* watchCreateJobs() {
  yield takeLatest(CREATE_JOBS, createJobsSaga);
}
export function* watchJobs() {
  yield takeLatest(FETCH_JOBS, fetchJobsaga);
}
export function* watchDeleteFolderFiles() {
  yield takeLatest(DELETE_FOLDER_FILE, DeleteFolderfilesSaga);
}
export function* watchDeleteFolder() {
  yield takeLatest(DELETE_FOLDER, DeleteFolderSaga);
}
export function* watchFilesSaga() {
  yield takeLatest(UPLOAD_FILES_REQUEST, uploadFilesSaga);
}
export function* watchDocumentsData() {
  yield takeLatest(FETCH_DOCUMENT_DATA, fetchDocumentdataSaga);
}
export function* watchDocumentsDetail() {
  yield takeLatest(FETCH_DOCUMENTS_DETAILS, fetchDocumentdetailsSaga);
}
export function* watchCreateDocuments() {
  yield takeLatest(DOCUMENT_REQUEST, creatDocumentSaga);
}
export function* watchDocuments() {
  yield takeLatest(FETCH_DOCUMENTS, fetchDocumentSaga);
}
function* watchDeleteNews() {
  yield takeLatest(DELETE_NEWS, DeleteNewsSaga);
}
function* watchSaveNews() {
  yield takeLatest(NEWS_REQUEST, NewsSaga);
}
export function* watchNews() {
  yield takeLatest(FETCH_NEWS, fetchNewsSaga);
}
export function* watchFetchFeatures() {
  yield takeLatest(FETCH_FEATURES, fetchfeaturesaga);
}
export function* watchFeaturesUpdate() {
  yield takeLatest(FEATURES_UPDATE, feautresUpdateSaga);
}
export function* watchFetchQr() {
  yield takeLatest(FETCH_QRCODE, fetchqrcodesaga);
}
export function* watchCreateQr() {
  yield takeLatest(QR_CODE_CREATE, createqrcodesaga);
}
export function* watchUploadImage() {
  yield takeLatest(UPLOAD_IMAGE_REQUEST, uploadImageSaga);
}
export function* watchProfilepic() {
  yield takeLatest(FETCH_PROFILEPIC, fetchProfilePicsaga);
}
export function* watchEmployeAttendance() {
  yield takeLatest(FETCH_EMPLOYE_ATTENDANCE, fetchEmpAttendance);
}
export function* watchAttendanceSummary() {
  yield takeLatest(FETCH_ATTENDANCE_SUMMARY, fetchAttendancesummary);
}
export function* watchclockOut() {
  yield takeLatest(CLOCK_OUT_REQUEST, clockOut);
}
export function* watchclockin() {
  yield takeLatest(CLOCK_IN_REQUEST, clockIn);
}
export function* watchmyattendance() {
  yield takeLatest(FETCH_MY_ATTENDANCE, fetchMyAttendancesaga);
}
export function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
}
export function* watchEmpoyessTimeOff() {
  yield takeLatest(FECTCH_ALL_EMPLOYESS_TIMEOFF, fetchAllEmployeeTimeoffsaga);
}
export function* watchRequestTimeoff() {
  yield takeLatest(CREATE_TIMEOFF_REQUEST, createTimeoffSaga);
}
function* watchEmployeeTimeoffSaga() {
  yield takeLatest(FECTCH_EMPLOYEE_TIMEOFF, fetchEmployeeTimeoffsaga);
}
function* watchEmployeeDeleteSaga() {
  yield takeLatest(DELETE_EMPLOYEE, deleteEmployeesaga);
}
export function* watchCreateEmployee() {
  yield takeLatest(CREATE_EMPLOYEE_REQUEST, createEmployeeSaga);
}
function* watchEmployeeSaga() {
  yield takeLatest(FECTCH_EMPLOYEE, fetchEmployeesaga);
}
export function* watchUpdateBank() {
  yield takeLatest(UPDATE_BANK_REQUEST, updateBankInfoSaga);
}
function* watchBankInfoSaga() {
  yield takeLatest(FECTCH_BANK_INFORMATION, fetchBankInfosaga);
}
export function* watchUpdateEmergency() {
  yield takeLatest(UPDATE_EMERGENCY_REQUEST, updateEmergencySaga);
}
function* watchEmergencyContactSaga() {
  yield takeLatest(FECTCH_EMERGENCY_CONTACT, fetchEmergencyContactsaga);
}
export function* watchUpdateAddress() {
  yield takeLatest(UPDATE_ADDRESS_REQUEST, updateAddressSaga);
}
export function* watchUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfileSaga);
}
function* watchMyAddressaSaga() {
  yield takeLatest(FECTCH_MY_ADDRESS, fetchMyAddresssaga);
}
function* watchMyProfileSaga() {
  yield takeLatest(FECTCH_MY_PROFILE, fetchMyProfilesaga);
}
function* watchLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
function* watchFetchRoleSaga() {
  yield takeLatest(FETCH_ROLES, fetchRole)
}
function* watchPermissionByRoleSaga() {
  yield takeLatest(FETCH_PERMISSIONS_BY_ROLE, fetchPermission);
}

function* watchEditPermissionByRole() {
  yield takeLatest(EDIT_PERMISSIONS_REQUEST, edipermission);
}
export function* watchCreateRoleWithPermissions() {
  yield takeLatest(CREATE_ROLE_WITH_PERMISSIONS_REQUEST, createRoleWithPermissions);
}
// Define the root Saga that combines all other Sagas.
export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchFetchRoleSaga(),
    watchCreateRoleWithPermissions(),
    watchPermissionByRoleSaga(),
    watchEditPermissionByRole(),
    watchMyProfileSaga(),
    watchMyAddressaSaga(),
    watchUpdateProfile(),
    watchUpdateAddress(),
    watchEmergencyContactSaga(),
    watchUpdateEmergency(),
    watchBankInfoSaga(),
    watchUpdateBank(),
    watchEmployeeSaga(),
    watchCreateEmployee(),
    watchEmployeeDeleteSaga(),
    watchEmployeeTimeoffSaga(),
    watchRequestTimeoff(),
    watchEmpoyessTimeOff(),
    watchSignup(),
    watchmyattendance(),
    watchclockin(),
    watchclockOut(),
    watchAttendanceSummary(),
    watchEmployeAttendance(),
    watchProfilepic(),
    watchUploadImage(),
    watchCreateQr(),
    watchFetchQr(),
    watchFeaturesUpdate(),
    watchFetchFeatures(),
    watchNews(),
    watchSaveNews(),
    watchDeleteNews(),
    watchDocuments(),
    watchCreateDocuments(),
    watchDocumentsDetail(),
    watchDocumentsData(),
    watchFilesSaga(),
    watchDeleteFolder(),
    watchDeleteFolderFiles(),
    watchJobs(),
    watchCreateJobs(),
    watchCandidate(),
    watchAddCandidate(),
    watchStages(),
    watchCreateStages(),
    watchDeleteStages(),
    watchJobDetails(),
    watchupdatestage(),
    watchtemplate(),
    watchAddTemplate(),
    watchAddTemplateDetail(),        
    watchUpdateTemplateDetail(),
    watchDeleteTemplate(),
    watchDeleteJob(),
    watchDeleteCandidate(),
    watchCandidateProfile(),
    watchTemplateBody(),
    watchComments(),
    watchPostComment(),
    watchDeleteComment(),
    watchHoliday(),
    watchAddHoliday(),
    watchDeleteHoliday(),
    watchSendMail(),
    watchSaveCandidateProfile(),
    watchAddasEmploye(),
    watchAlldetails(),
    watchFilterattendance(),
    watchUpdatestatus(),
    watchLogout(),
    watchImportCandidate(),
    watchEmployeCandidate(),
    watchBulkCv(),
    watchEmployeupdate(),
    watchJobAssing(),
    watchImportAttendance(),
    watchForgotPassword(),
    watchResetPassword(),
    watchCountry(),
    watchState(),
    watchCity(),
    watchNationality(),
    watchSections(),
    watchModule()     
  ]);
}