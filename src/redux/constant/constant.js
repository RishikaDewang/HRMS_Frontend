// theme constant
export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;

//Login Constants
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_USER_DATA = 'SET_USER_DATA';
// fetch roles
export const FETCH_ROLES = 'FETCH_ROLE';
export const SET_ROLE = 'SET_ROLE';

//create roles actions
export const CREATE_ROLE_WITH_PERMISSIONS_REQUEST = 'CREATE_ROLE_WITH_PERMISSIONS_REQUEST';
export const CREATE_ROLE_WITH_PERMISSIONS_SUCCESS = 'CREATE_ROLE_WITH_PERMISSIONS_SUCCESS';
export const CREATE_ROLE_WITH_PERMISSIONS_FAILURE = 'CREATE_ROLE_WITH_PERMISSIONS_FAILURE';

//fetch permission by role
export const FETCH_PERMISSIONS_BY_ROLE = 'FETCH_PERMISSIONS_BY_ROLE'
export const SET_PERMISSIONS_BY_ROLE = 'SET_PERMISSIONS_BY_ROLE'

//edit permission by role
export const EDIT_PERMISSIONS_REQUEST = 'EDIT_PERMISSIONS_REQUEST';

//fetch my profile
export const FECTCH_MY_PROFILE = 'FECTCH_MY_PROFILE'
export const SET_MY_PROFILE = 'SET_MY_PROFILE'

//fetch my address
export const FECTCH_MY_ADDRESS = 'FECTCH_MY_ADDRESS'
export const SET_MY_ADDRESS = 'SET_MY_ADDRESS'

//update profile info
export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST'

//update address info
export const UPDATE_ADDRESS_REQUEST = 'UPDATE_ADDRESS_REQUEST'

//fetch emergency contact
export const FECTCH_EMERGENCY_CONTACT = 'FECTCH_EMERGENCY_CONTACT'
export const SET_EMERGENCY_CONTACT = 'SET_EMERGENCY_CONTACT'

//update Emergency contact
export const UPDATE_EMERGENCY_REQUEST = 'UPDATE_EMERGENCY_REQUEST'

//fetch Bank Information
export const FECTCH_BANK_INFORMATION = 'FECTCH_BANK_INFORMATION '
export const SET_BANK_INFORMATION = 'SET_BANK_INFORMATION'

//update Bank Information
export const UPDATE_BANK_REQUEST = 'UPDATE_BANK_REQUEST'

//fetch companys employee
export const FECTCH_EMPLOYEE = 'FECTCH_EMPLOYEE'
export const SET_EMPLOYEE = 'SET_EMPLOYEE'

//create empoloyee
export const CREATE_EMPLOYEE_REQUEST = 'CREATE_EMPLOYEE_REQUEST'
export const CREATE_EMPLOYEE_SUCCESS = 'CREATE_EMPLOYEE_SUCCESS'
export const CREATE_EMPLOYEE_FAILURE = 'CREATE_EMPLOYEE_FAILURE'
export const CREATE_EMPLOYEE_RESET = 'CREATE_EMPLOYEE_RESET'

//delete employee
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'

//fetch companys employee
export const FECTCH_EMPLOYEE_TIMEOFF = 'FECTCH_EMPLOYEE_TIMEOFF'
export const SET_EMPLOYEE_TIMOFF = 'SET_EMPLOYE_TIMOFF'

//request time off
export const CREATE_TIMEOFF_REQUEST = "CREATE_TIMEOFF_REQUEST"

//fecth all employees timeoff
export const FECTCH_ALL_EMPLOYESS_TIMEOFF = 'FECTCH_ALL_EMPLOYESS_TIMEOFF'
export const SET_ALL_EMPLOYEES_TIMOFF = 'SET_ALL_EMPLOYEES_TIMOFF'

//signup 
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_RESET = 'SIGNUP_RESET';

//my attedance fetch
export const FETCH_MY_ATTENDANCE = 'FETCH_MY_ATTENDANCE'
export const SET_MY_ATTENDANCE = 'SET_MY_ATTENDANCE'

//clock in and clockout
export const CLOCK_IN_REQUEST = 'CLOCK_IN_REQUEST';
export const CLOCK_OUT_REQUEST = 'CLOCK_OUT_REQUEST';

//attendace summary
export const FETCH_ATTENDANCE_SUMMARY = 'FETCH_ATTENDANCE_SUMMARY'
export const SET_ATTENDANCE_SUMMARY = 'SET_ATTENDANCE_SUMMARY'

//employee attendance
export const FETCH_EMPLOYE_ATTENDANCE = 'FETCH_EMPLOYE_ATTENDANCE'
export const SET_EMPLOYE_ATTENDANCE = 'SET_EMPLOYE_ATTENDANCE'

//reset redux state
export const RESET_STATE = 'RESET_STATE';

//GET PROFILE PICTURE
export const FETCH_PROFILEPIC= 'FETCH_PROFILEPIC'
export const SET_PROFILEPIC = 'SET_PROFILEPIC'

//upload image
export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

//create qr code
export const QR_CODE_CREATE = 'QR_CODE_CREATE'

//fetch qr code
export const FETCH_QRCODE= 'FETCH_QRCODE'
export const SET_QRCODE = 'SET_QRCODE'

//featuers update
export const FEATURES_UPDATE = 'FEATURES_UPDATE'
export const FETCH_FEATURES= 'FETCH_FEATURES'
export const SET_FEATURES = 'SET_FEATURES'

//fetch news
export const FETCH_NEWS = 'FETCH_NEWS'
export const SET_NEWS = 'SET_NEWS'
export const NEWS_REQUEST = 'NEWS_REQUEST'
export const DELETE_NEWS = 'DELETE_NEWS'

//fetch documents
export const FETCH_DOCUMENTS = 'FETCH_DOCUMENTS'
export const SET_DOCUMENTS = 'SET_DOCUMENTS'
export const DOCUMENT_REQUEST = 'DOCUMENT_REQUEST'
export const FETCH_DOCUMENTS_DETAILS = 'FETCH_DOCUMENTS_DETAILS'
export const SET_DOCUMENTS_DETAILS = 'SET_DOCUMENTS_DETAILS'
export const FETCH_DOCUMENT_DATA = 'FETCH_DOCUMENT_DATA'
export const SET_DOCUMENT_DATA = 'SET_DOCUMENT_DATA'

//upload file 
export const UPLOAD_FILES_REQUEST = 'UPLOAD_FILES_REQUEST';
export const UPLOAD_FILES_SUCCESS = 'UPLOAD_FILES_SUCCESS';
export const UPLOAD_FILES_FAILURE = 'UPLOAD_FILES_FAILURE'
export const DELETE_FOLDER = 'DELETE_FOLDER'
export const DELETE_FOLDER_FILE = 'DELETE_FOLDER_FILE'

//jobs
export const FETCH_JOBS = 'FETCH_JOBS'
export const SET_JOBS= 'SET_JOBS'

//create job
export const CREATE_JOBS = 'CREATE_JOBS'
export const DELETE_JOBS = 'DELETE_JOBS'

//fetch candidate 
export const FETCH_CANDIDATE = 'FETCH_CANDIDATE'
export const SET_CANDIDATE= 'SET_CANDIDATE'
export const DELETE_CANDIDATE= 'DELETE_CANDIDATE'

//create candidate
export const ADD_CANDIDATE_REQUEST= 'ADD_CANDIDATE_REQUEST'

//jobs
export const FETCH_STAGES = 'FETCH_STAGES'
export const SET_STAGES= 'SET_STAGES'

//create stages
export const CREATE_STAGES= 'CREATE_STAGES'
export const DELETE_STAGES= 'DELETE_STAGES'
export const UPDATE_STAGES = 'UPDATE_STAGES'

//fetch job details 
export const FETCH_JOBDETAIL = 'FETCH_JOBDETAIL'
export const SET_JOBDETAIL= 'SET_JOBDETAIL'

//fetch template
export const FETCH_TEMPLATE = 'FETCH_TEMPLATE'
export const SET_TEMPLATE= 'SET_TEMPLATE'
export const ADD_TEMPLATE_REQUEST = 'ADD_TEMPLATE_REQUEST';
export const DELETE_TEMPLATE= 'DELETE_TEMPLATE'
//fetch template detais
export const FETCH_TEMPLATEDETAIL = 'FETCH_TEMPLATEDETAIL'
export const SET_TEMPLATEDETAIL= 'SET_TEMPLATEDETAIL'
export const UPDATE_TEMPLATE_REQUEST   = 'UPDATE_TEMPLATE_REQUEST'

//fetch candidate profile
export const FETCH_CANDIDATE_PROFILE = 'FETCH_CANDIDATE_PROFILE'
export const SET_CANDIDATE_PROFILE= 'SET_CANDIDATE_PROFILE'

//fetch template body based on stages
export const FETCH_TEMPLATE_BODY = 'FETCH_TEMPLATE_BODY'
export const SET_TEMPLATE_BODY = 'SET_TEMPLATE_BODY'

//fetch comments
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const SET_COMMENTS= 'SET_COMMENTS'
export const POST_COMMENT = 'POST_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

//Fetch holiday
export const FETCH_HOLIDAY = 'FETCH_HOLIDAY'
export const SET_HOLIDAY= 'SET_HOLIDAY'
export const ADD_HOLIDAY= 'ADD_HOLIDAY'
export const DELETE_HOLIDAY= 'DELETE_HOLIDAY'

//send mail to candidate
export const SEND_EMAIL_REQUEST = 'SEND_EMAIL_REQUEST';

//update candidate profile
export const SAVE_CANDIDATE_PROFILE_REQUEST = 'SAVE_CANDIDATE_PROFILE_REQUEST';
 
//Add as employee
export const  ADD_AS_EMPLOYEE  = 'ADD_AS_EMPLOYEE'

// get department and designation details
export const  FETCH_ALL_DETAILS  = 'FETCH_ALL_DETAILS'
export const  SET_ALL_DETAILS  = 'SET_ALL_DETAILS'

//filter attendance'
export const ATTENDANCE_FILTER='ATTENDANCE_FILTER'
export const SET_ATTENDANCE_FILTER = 'SET_ATTENDANCE_FILTER'

//update timeoff status'
export const UPDDATE_TIMEOFF_STATUS='UPDDATE_TIMEOFF_STATUS'

//logout
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

//import candidate
export const IMPORT_CANDIDATE = 'IMPORT_CANDIDATE'

//import employee
export const IMPORT_EMPLOYEE = 'IMPORT_EMPLOYEE'

//bulk cd
export const UPLOAD_BULK_CV = 'UPLOAD_BULK_CV'

//bulk cd
export const UPLOAD_ATTENDANCE = 'UPLOAD_ATTENDANCE'

//update employee
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE'

//update employee
export const ASSIGN_JOB = 'ASSIGN_JOB'

//forgot password 
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'

//reset password 
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE'

// get country
export const  FETCH_COUNTRY  = 'FETCH_COUNTRY'
export const  SET_COUNTRY  = 'SET_COUNTRY'

// get state
export const  FETCH_STATE  = 'FETCH_STATE'
export const  SET_STATE  = 'SET_STATE'

// get city
export const  FETCH_CITY  = 'FETCH_CITY'
export const  SET_CITY  = 'SET_CITY'

// get nationality
export const  FETCH_NATIONALITY  = 'FETCH_NATIONALITY'
export const  SET_NATIONALITY  = 'SET_NATIONALITY'

// get sections
export const  FETCH_SECTIONS  = 'FETCH_SECTIONS'
export const  SET_SECTIONS  = 'SET_SECTIONS'

// get sections
export const  FETCH_MODULE  = 'FETCH_MODULE'
export const  SET_MODULE  = 'SET_MODULE'