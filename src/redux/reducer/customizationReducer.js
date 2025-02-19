// project imports
import config from 'config';
// action - state management
import * as actionTypes from '../action/actions';
import {
  LOGIN_REQUEST, SET_USER_DATA, SET_ROLE, FETCH_ROLES, CREATE_ROLE_WITH_PERMISSIONS_REQUEST,
  CREATE_ROLE_WITH_PERMISSIONS_SUCCESS,
  CREATE_ROLE_WITH_PERMISSIONS_FAILURE, FETCH_PERMISSIONS_BY_ROLE, SET_PERMISSIONS_BY_ROLE, EDIT_PERMISSIONS_REQUEST, LOGIN_SUCCESS, SET_MY_PROFILE, FECTCH_MY_PROFILE, SET_MY_ADDRESS, FECTCH_MY_ADDRESS, UPDATE_PROFILE_REQUEST, UPDATE_ADDRESS_REQUEST, SET_EMERGENCY_CONTACT, FECTCH_EMERGENCY_CONTACT, UPDATE_EMERGENCY_REQUEST, FECTCH_BANK_INFORMATION, SET_BANK_INFORMATION, UPDATE_BANK_REQUEST, SET_EMPLOYEE, FECTCH_EMPLOYEE, CREATE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE, FECTCH_EMPLOYEE_TIMEOFF, SET_EMPLOYEE_TIMOFF, CREATE_TIMEOFF_REQUEST, FECTCH_ALL_EMPLOYESS_TIMEOFF, SET_ALL_EMPLOYEES_TIMOFF, SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_REQUEST, FETCH_MY_ATTENDANCE, SET_MY_ATTENDANCE, CLOCK_IN_REQUEST, CLOCK_OUT_REQUEST, FETCH_ATTENDANCE_SUMMARY, SET_ATTENDANCE_SUMMARY, FETCH_EMPLOYE_ATTENDANCE, SET_EMPLOYE_ATTENDANCE,RESET_STATE,LOGIN_FAILURE, SIGNUP_RESET, FETCH_PROFILEPIC, SET_PROFILEPIC ,UPLOAD_IMAGE_SUCCESS,UPLOAD_IMAGE_FAILURE, QR_CODE_CREATE, FETCH_QRCODE, SET_QRCODE, FEATURES_UPDATE, FETCH_FEATURES, SET_FEATURES , FETCH_NEWS , SET_NEWS, NEWS_REQUEST, DELETE_NEWS, FETCH_DOCUMENTS, SET_DOCUMENTS, DOCUMENT_REQUEST, FETCH_DOCUMENTS_DETAILS, SET_DOCUMENTS_DETAILS, FETCH_DOCUMENT_DATA, SET_DOCUMENT_DATA, UPLOAD_FILES_SUCCESS, UPLOAD_FILES_FAILURE, DELETE_FOLDER, DELETE_FOLDER_FILE, FETCH_JOBS, SET_JOBS, FETCH_CANDIDATE, SET_CANDIDATE, FETCH_STAGES, SET_STAGES, CREATE_STAGES, DELETE_STAGES, FETCH_JOBDETAIL, SET_JOBDETAIL, UPDATE_STAGES, FETCH_TEMPLATE, SET_TEMPLATE, FETCH_TEMPLATEDETAIL, SET_TEMPLATEDETAIL, DELETE_TEMPLATE,DELETE_JOBS, DELETE_CANDIDATE, FETCH_CANDIDATE_PROFILE, SET_CANDIDATE_PROFILE, FETCH_TEMPLATE_BODY, SET_TEMPLATE_BODY, FETCH_COMMENTS, SET_COMMENTS, POST_COMMENT, DELETE_COMMENT, FETCH_HOLIDAY, SET_HOLIDAY, DELETE_HOLIDAY, FETCH_ALL_DETAILS, SET_ALL_DETAILS, ATTENDANCE_FILTER, SET_ATTENDANCE_FILTER, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, FETCH_COUNTRY, SET_COUNTRY, FETCH_STATE, SET_STATE, FETCH_CITY, SET_CITY, FETCH_NATIONALITY, SET_NATIONALITY, CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_FAILURE, CREATE_EMPLOYEE_RESET, SET_SECTIONS, SET_MODULE
} from '../constant/constant';
export const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
  user: null,
  loading: false,
  fetchPermission: {},
  myattendance:[], 
  clockedIn:false,
  calculation:{},
  empattendance : [],
  error: null,
  profilepic :{},
  imageUrl: null,
  qrcode : {},
  qrimage : {},
  features : {},
  featurefectch : {},
  isAuthenticated: false,
  news : [],
  createnews : [],
  document : [],
  createdocument:[],
  documentdetail : [],
  documentdata : null,
  files : null,
  jobs:[],
  createjobs : [],
  candidate : [],
  stages : [],
  createstage : [],
  jobdetail : [],
  updatestage:{},
  template:[],
  templatedetail:{},
  candidateprofile :{},
  templatebody :{},
  Comment :[],
  postComment : {},
  holiday:[],
  job_designation :[],
  filterattendance:[],
  forgoterror: null,
  forgotsuccess:false,
  Authenticate: false,
  country : [],
  state : [],
  city :[],
  nationality :[],
  sections : [],
  module:[]
};
const feature = {
  featurefectch : {}
}

// Initialize the user data for response of login
const userData = {
  id: null,
  token: null,
  roleId: null,
  role: null,
  roleName: null,
  permissions: []
};
const getRole = {
  role: {},
  setrole: null
}
const set_role = {
  data: []
}
const createnewrole = {
  loading: false,
}
const setpermissionrole = {
  permissionbyrole: []
}
const editrolepermission = {
  loading: false,
  error: null,
};
const myprofile = {
  data: null
}
const updateprofile = {
  data: null
}
const updateaddress = {
  data: null
}
const updatemergency = {
  data: null
}
const updatebank = {
  data: null,
  success:false,
  error:null
}
const employee = {
  data: []
}
const employeetimeoff = {
  data: []
}

// const myattendance = {
//   data: []
// }
const signup = {
  loading: false,
  error: null,
  success: false,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //
// Define the customizationReducer function, which manages state related to customization.
export default function customizationReducer(state = initialState, action) {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state;
  }
}
// Define the authReducer function to manage Login-related state.
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAuthenticated: true
      };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload, // Set the error on login failure
        };
    default:
      return state;
  }
}
// Define the userReducer function to manage login response like token , roleID, role.
export const userReducer = (state = userData, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        token: action.payload.token,
        roleId: action.payload.roleId,
        roleName: action.payload.roleName,
        permissions: action.payload.permissions,
        id: action.payload.id,
        companyid :action.payload.companyId,
        modulepermission :action.payload.modulePermissions,
        isPasswordGenerated:action.payload.isPasswordGenerated

      };
    default:
      return state;
  }
};
export const fetchRole = (state = getRole, action) => {

  switch (action.type) {
    case FETCH_ROLES:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export const setRole = (state = set_role, action) => {

  switch (action.type) {
    case SET_ROLE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
export const createRoleWithPermissionsReducer = (state = createnewrole, action) => {

  switch (action.type) {
    case CREATE_ROLE_WITH_PERMISSIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case CREATE_ROLE_WITH_PERMISSIONS_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case CREATE_ROLE_WITH_PERMISSIONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    default:
      return state;
  }
};
export const fetchPermissionByRole = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_PERMISSIONS_BY_ROLE:
      return {
        ...state,
        fetchPermission: action.payload
      };


    default:
      return state;
  }
}
export const setRoleByPermission = (state = setpermissionrole, action) => {

  switch (action.type) {
    case SET_PERMISSIONS_BY_ROLE:
      return {
        ...state,
        permissionbyrole: action.payload
      }

    default:
      return state;
  }
};
export const editpermissionsReducer = (state = editrolepermission, action) => {
  switch (action.type) {
    case EDIT_PERMISSIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export const fetchMyProfileReducer = (state = initialState, action) => {

  switch (action.type) {
    case FECTCH_MY_PROFILE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export const setMyProfileReducer = (state = myprofile, action) => {

  switch (action.type) {
    case SET_MY_PROFILE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
export const fetchMyAddressReducer = (state = initialState, action) => {

  switch (action.type) {
    case FECTCH_MY_ADDRESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export const setMyAddressReducer = (state = myprofile, action) => {

  switch (action.type) {
    case SET_MY_ADDRESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export const updatePersonalInfoReducer = (state = updateprofile, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;

  }
}
export const updateAddressInfoReducer = (state = updateaddress, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_REQUEST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;

  }
}
export const fetchEmergencyContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTCH_EMERGENCY_CONTACT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export const setEmergencyContactReducer = (state = myprofile, action) => {
  switch (action.type) {
    case SET_EMERGENCY_CONTACT:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
export const updateEmergecnyReducer = (state = updatemergency, action) => {
  switch (action.type) {
    case UPDATE_EMERGENCY_REQUEST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;

  }
}

export const fetchBankInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTCH_BANK_INFORMATION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export const setBankInfoReducer = (state = myprofile, action) => {

  switch (action.type) {
    case SET_BANK_INFORMATION:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export const updateBankReducer = (state = updatebank, action) => {
  switch (action.type) {
    case UPDATE_BANK_REQUEST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;

  }
}
export const fetchEmployeeReducer = (state = employee, action) => {
  switch (action.type) {
    case FECTCH_EMPLOYEE:
      return {
        ...state,
        data: null
      };
    case SET_EMPLOYEE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
export const createEmployeeReducer = (state = updatebank, action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        data: action.payload,
        success:false
      };
      case CREATE_EMPLOYEE_SUCCESS:
        return {
          ...state,
          data: action.payload,
          success:true
        };
        case CREATE_EMPLOYEE_FAILURE:
          return {
            ...state,
            error: action.payload,
            success:false
          };
          case CREATE_EMPLOYEE_RESET:
            return {
              ...state,
              error: null,
              success:false
            };
    default:
      return state;

  }
}
export const deleteEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_EMPLOYEE:
      return {
        ...state,
      };
    default:
      return state;

  }
}
export const fetchEmployeetimeoffReducer = (state = employeetimeoff, action) => {
  switch (action.type) {
    case FECTCH_EMPLOYEE_TIMEOFF:
      return {
        ...state,
        data: null
      };
    case SET_EMPLOYEE_TIMOFF:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export const createTimeoffReducer = (state = updatebank, action) => {
  switch (action.type) {
    case CREATE_TIMEOFF_REQUEST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;

  }
}

export const fetchAllEmployeetimeoffReducer = (state = employeetimeoff, action) => {
  switch (action.type) {
    case FECTCH_ALL_EMPLOYESS_TIMEOFF:
      return {
        ...state,
        data: null
      };
    case SET_ALL_EMPLOYEES_TIMOFF:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
export  const signupReducer = (state = signup, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Set the error message from the API response
        success: false,
      };
      case SIGNUP_RESET:
      return {
        ...state,
        success: false,
        error:null
      };
    default:
      return state;
  }
};
export const fetchMyAttendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_ATTENDANCE:
      return {
        ...state,
        myattendance: null
      };
    case SET_MY_ATTENDANCE:
      return {
        ...state,
        myattendance: action.payload
      };
    default:
      return state;
  }
}

export const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOCK_IN_REQUEST:
      return {
        ...state,
        clockedIn: true,
      };

    case CLOCK_OUT_REQUEST:
      return {
        ...state,
        clockedIn: false,
      };

    default:
      return state;
  }
};

export const fetchAttendanceSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ATTENDANCE_SUMMARY:
      return {
        ...state,
        calculation: null
      };
    case SET_ATTENDANCE_SUMMARY:
      return {
        ...state,
        calculation: action.payload
      };
    default:
      return state;
  }
}
export const fetchEmpAttendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYE_ATTENDANCE:
      return {
        ...state,
        empattendance: null
      };
    case SET_EMPLOYE_ATTENDANCE:
      return {
        ...state,
        empattendance: action.payload
      };
    default:
      return state;
  }
}

export const resetState = (state = initialState , action) =>{
   switch(action.type){
    case RESET_STATE :
      return {
        isAuthenticated: false,
      };


      default:
        return state;
   }
    

} 

export const fetchProfilePicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILEPIC:
      return {
        ...state,
        profilepic: null
      };
    case SET_PROFILEPIC:
      return {
        ...state,
        profilepic: action.payload
      };
    default:
      return state;
  }
}

export const profilereducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        imageUrl: action.payload,
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        imageUrl: null,
      };
    default:
      return state;
  }
};

export const qrcodereducer = (state = initialState, action) => {
  switch (action.type) {
    case QR_CODE_CREATE:
      return {
        ...state,
        qrcode: action.payload,
      };
      case FETCH_QRCODE:
        return {
          ...state,
         qrimage: null,
        };
        case SET_QRCODE:
          return {
            ...state,
          qrimage: action.payload,
          };
    default:
      return state;
  }
};

export const featuresUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATURES_UPDATE:
      return {
        ...state,
        features: action.payload
      };
    default:
      return state;

  }
}
export const featuresfetchReducer = (state = feature, action) => {
  switch (action.type) {
      case FETCH_FEATURES:
      return {
        ...state,
        featurefectch: null
      };
      case SET_FEATURES:
      return {
        ...state,
        featurefectch: action.payload
      };
    default:
      return state;

  }
}

export const fetchNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: null
      };
    case SET_NEWS:
      return {
        ...state,
        news: action.payload
      };
      case DELETE_NEWS:
        return {
          ...state,
        };
    default:
      return state;
  }
}

export const createnewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case  NEWS_REQUEST:
      return {
        ...state,
        createnews: action.payload
      };

    default:
      return state;
  }
};

export const fetchDocumentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS:
      return {
        ...state,
        document: null
      };
    case SET_DOCUMENTS:
      return {
        ...state,
        document: action.payload
      };

    default:
      return state;
  }
}
export const createDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case  DOCUMENT_REQUEST:
      return {
        ...state,
        createdocument: action.payload
      };

    default:
      return state;
  }
};
export const fetchDocumentDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS_DETAILS:
      return {
        ...state,
        documentdetail: null
      };
    case SET_DOCUMENTS_DETAILS:
      return {
        ...state,
        documentdetail: action.payload
      };
      case DELETE_FOLDER_FILE:
        return {
          ...state,
        };

    default:
      return state;
  }
}
export const fetchDocumentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCUMENT_DATA:
      return {
        ...state,
        documentdata: null
      };
    case SET_DOCUMENT_DATA:
      return {
        ...state,
        documentdata: action.payload
      };
      case DELETE_FOLDER:
        return {
          ...state,
        };
    default:
      return state;
  }
}

export const filesreducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILES_SUCCESS:
      return {
        ...state,
        files: action.payload,
      };
    case UPLOAD_FILES_FAILURE:
      return {
        ...state,
        files: null,
      };
    default:
      return state;
  }
};

export const fetchJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: null
      };
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload
      };
      case DELETE_STAGES:
        return {
          ...state,
        };
        case DELETE_JOBS:
        return {
          ...state,
        };
    default:
      return state;
  }
}
export const createJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_JOBS:
      return {
        ...state,
        createjobs: action.payload
      };
    default:
      return state;
  }
}

export const fetchCandidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CANDIDATE:
      return {
        ...state,
        candidate: null
      };
    case SET_CANDIDATE:
      return {
        ...state,
        candidate: action.payload
      };
      case DELETE_CANDIDATE:
        return {
          ...state,
        };
    default:
      return state;
  }
}

export const fetchStagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STAGES:
      return {
        ...state,
        stages: null
      };
    case SET_STAGES:
      return {
        ...state,
        stages: action.payload
      };
    default:
      return state;
  }
}
export const createStageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STAGES:
      return {
        ...state,
        createstage: action.payload
      };
    default:
      return state;
  }
}

export const fetchJobDetails = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBDETAIL:
      return {
        ...state,
        jobdetail: null
      };
    case SET_JOBDETAIL:
      return {
        ...state,
        jobdetail: action.payload
      };
    default:
      return state;
  }
}

export const updateStageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STAGES:
      return {
        ...state,
        updatestage: action.payload
      };
    default:
      return state;
  }
}

export const fetchTemplate = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPLATE:
      return {
        ...state,
        template: null
      };
    case SET_TEMPLATE:
      return {
        ...state,
        template: action.payload
      };
      case DELETE_TEMPLATE:
        return {
          ...state,
        };
    default:
      return state;
  }
}

export const fetchTemplateDetail = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPLATEDETAIL:
      return {
        ...state,
        templatedetail: null
      };
    case SET_TEMPLATEDETAIL:
      return {
        ...state,
        templatedetail: action.payload
      };
    default:
      return state;
  }
}

export const fetchCandidateProfile= (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CANDIDATE_PROFILE:
      return {
        ...state,
        candidateprofile: null
      };
    case SET_CANDIDATE_PROFILE:
      return {
        ...state,
        candidateprofile: action.payload
      };
    default:
      return state;
  }
}

export const fetchTemplatebody= (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPLATE_BODY:
      return {
        ...state,
        templatebody: null
      };
    case SET_TEMPLATE_BODY:
      return {
        ...state,
        templatebody: action.payload
      };
    default:
      return state;
  }
}
export const fetchComments= (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        Comment: null
      };
    case SET_COMMENTS:
      return {
        ...state,
        Comment: action.payload
      };
      case DELETE_COMMENT:
        return {
          ...state,
        };
    default:
      return state;
  }
}
export const postComments= (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT:
      return {
        ...state,
        postComment: action.payload
      };
     
    default:
      return state;
  }
}
export const fetchHoliday= (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_HOLIDAY:
      return {
        ...state,
        holiday: null
      };
    case SET_HOLIDAY:
      return {
        ...state,
        holiday: action.payload
      };
      case DELETE_HOLIDAY:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const fetchalldetail = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DETAILS:
      return {
        ...state,
        job_designation: null
      };
    case SET_ALL_DETAILS:
      return {
        ...state,
        job_designation: action.payload
      };
    default:
      return state;
  }
}

export const filterattendace = (state = initialState, action) => {
  switch (action.type) {
    case ATTENDANCE_FILTER:
      return {
        ...state,
        filterattendance: null
      };
    case SET_ATTENDANCE_FILTER:
      return {
        ...state,
        filterattendance: action.payload
      };
    default:
      return state;
  }
}
export const forgotpassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotsuccess: true,
        forgoterror:null
      };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          forgotsuccess: false,
          forgoterror:null
        };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgoterror: action.payload
      };
    default:
      return state;
  }
}

export const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        Authenticate:false
      };
      case RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          Authenticate:true
        };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        Authenticate: false
      };
    default:
      return state;
  }
}

export const fetchCountry = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY:
      return {
        ...state,
        country:null
      };
      case SET_COUNTRY:
        return {
          ...state,
          country:action.payload
        };

    default:
      return state;
  }
}

export const fetchState = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATE:
      return {
        ...state,
        state:null
      };
      case SET_STATE:
        return {
          ...state,
          state:action.payload
        };

    default:
      return state;
  }
}

export const fetchCity = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY:
      return {
        ...state,
        city:null
      };
      case SET_CITY:
        return {
          ...state,
          city:action.payload
        };

    default:
      return state;
  }
}

export const fetchNationatliy = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NATIONALITY:
      return {
        ...state,
        nationality:null
      };
      case SET_NATIONALITY:
        return {
          ...state,
          nationality:action.payload
        };

    default:
      return state;
  }
}

export const setSections = (state = initialState, action) => {

  switch (action.type) {
    case SET_SECTIONS:
      return {
        ...state,
        sections: action.payload
      };
    default:
      return state;
  }
};

export const setModule = (state = initialState, action) => {

  switch (action.type) {
    case SET_MODULE:
      return {
        ...state,
        module: action.payload
      };
    default:
      return state;
  }
};