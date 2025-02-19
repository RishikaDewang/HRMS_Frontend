    import React from 'react'
    import MainCard from 'ui-component/cards/MainCard'
    import { useState, useEffect } from 'react';
    import "./style.css"
    import BasicButtons from 'ui-component/button';
    import ProfileField from 'ui-component/myprofile';
    import { useSelector, useDispatch } from 'react-redux';
    import { useLocation } from 'react-router';
    import { fetchMyProfile, fetchMyAddress, updateProfileRequest, updateAddressRequest, fetchEmergencyContact, updateEmergecnyRequest, fetchBankInfo, updateBankRequest , fetchCountry, fetchState, fetchCity, getNationality} from 'redux/action/actions';
    import { ToastContainer } from 'react-toastify';
    // import { BankFilled } from '@ant-design/icons';
    // import { Edit } from '@mui/icons-material';
    export default function Myprofile() {
        const [editable, setEditable] = useState(false);
        const [addresseditable, setAddressEditable] = useState(false);
        const [emegencyeditable, setEmergencyEditable] = useState(false)
        const [bankeditable, setBankEditable] = useState(false)

        const location = useLocation();
        const id = location.state?.row;
        const permission = useSelector((state) => state.userReducer.permissions)
        const Employeeid = useSelector((state) => state.userReducer.id)
        const myprofile = useSelector((state) => state.setMyProfileReducer.data)
        const myaddress = useSelector((state) => state.setMyAddressReducer.data)
        const emergencycontact = useSelector((state) => state.setEmergencyContactReducer.data)
        const bankinfo = useSelector((state) => state.setBankInfoReducer.data)
        const country =  useSelector((state)=>state.fetchCountry.country)
        console.log("country", country)
        const states = useSelector((state)=>state.fetchState.state)
        console.log("states", states)
        const city = useSelector((state)=>state.fetchCity.city)
        console.log("city",city)
        const nationality =  useSelector((state)=>state.fetchNationatliy.nationality)
        console.log("nationality", nationality)
        const [formData, setFormData] = useState({});
        const [addressData, setAddressData] = useState({})
        const [emergencyData, setEmergencyData] = useState({})
        const [bankData, setBankData] = useState({})
        const [formDataErrors, setFormDataErrors] = useState({});
        const dispatch = useDispatch()
        useEffect(() => {
            setFormData(myprofile);
            setAddressData(myaddress);
            setEmergencyData(emergencycontact)
            setBankData(bankinfo)
        }, [myprofile, myaddress, emergencycontact, bankinfo]);
        useEffect(() => {
            dispatch(getNationality())
            dispatch(fetchCountry())
            dispatch(fetchEmergencyContact(id || Employeeid))
            dispatch(fetchMyProfile(id || Employeeid));
            dispatch(fetchMyAddress(id || Employeeid));
            dispatch(fetchBankInfo(id || Employeeid))
        }, [dispatch, Employeeid]);

        const handleEditClick = () => {
            setEditable(true);
        };
        const handleaddresseditClick = () => {
            setAddressEditable(true);
        };
        const handleEmergencyeditClick = () => {
            setEmergencyEditable(true);
        };
        const handleBankeditClick = () => {
            setBankEditable(true);
        };
        const isEditAllowedForSection = (sectionId) => {
            // Check if there is any permission for the given sectionId and permissionId 2
            return permission.some(
                (item) => item.sectionId === sectionId && item.permissionId === 2
            );
        };
        const handleFormChange = (e, fieldName, fieldType) => {
            // const newValue = fieldType === 'phone'||fieldType === 'select' || fieldType === undefined || fieldType === "date"? e.target.value : e.target.value.name;
            const newValue = fieldType === 'nationality' ? e.target.value.name : e.target.value
            console.log("fieldType",fieldType)
            // Update only if the new value is different from the original value
            
            if (newValue !== myprofile[fieldName]) {
                setFormData((prevData) => ({
                    ...prevData,
                    [fieldName]: newValue,
                }));
                setFormDataErrors((prevErrors) => ({
                    ...prevErrors,
                    [fieldName]: '',
                }));
            }
            
        };
        const handleAddressChange = (e, fieldName) => {
            const newValue = e.target.value;
            const {id , name } = newValue
     
          console.log("newValue",newValue)
            // Assuming 'stateProvince' is the name of the field that represents the selected state
            if (fieldName === 'stateProvince') {
              // Update only if the new value is different from the original value
              if (newValue !== addressData[fieldName]) {
                setAddressData((prevData) => ({
                  ...prevData,
                  [fieldName]: name || newValue,
                }));
          
                // Trigger the fetchCity action with the selected stateId
                dispatch(fetchCity(id));
              }
            } else if (fieldName === 'country') {
              // For country, you might want to reset the city data when the country changes
              setAddressData((prevData) => ({
                ...prevData,
                stateProvince: '',
                // other fields you want to reset
              }));
          
              // Continue with the existing logic for country selection
              if (newValue !== addressData[fieldName]) {
                setAddressData((prevData) => ({
                  ...prevData,
                  [fieldName]: name || newValue,
                }));
          
                dispatch(fetchState(newValue));
              }
            } else {
              // For other fields, update the data as usual
              if (newValue !== addressData[fieldName]) {
                setAddressData((prevData) => ({
                  ...prevData,
                  [fieldName]: name || newValue,
                }));
              }
            }
          };
          
        const handleEmergencyChange = (e, fieldName) => {
            const newValue = e.target.value;

            // Update only if the new value is different from the original value
            if (newValue !== emergencycontact[fieldName]) {
                setEmergencyData((prevData) => ({
                    ...prevData,
                    [fieldName]: newValue,
                }));
            }
        };
        const handleBankinfoChange = (e, fieldName) => {
            const newValue = e.target.value;

            // Update only if the new value is different from the original value
            if (newValue !== bankinfo[fieldName]) {
                setBankData((prevData) => ({
                    ...prevData,
                    [fieldName]: newValue,
                }));
                setFormDataErrors((prevErrors) => ({
                    ...prevErrors,
                    [fieldName]: '',
                }));
            }
        };
        const handleSaveClick = () => {
            // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneValidationPattern = /^((\+)?(\d{2}[-]))?(\d{12}){1}?$/;


    // Validate phone number with the pattern
    const isPhoneNumberValid = phoneValidationPattern.test(formData.phoneNumber);

    if (!formData.fullName || !formData.email || !emailRegex.test(formData.email)||
    !isPhoneNumberValid) {
        // Set error messages for mandatory fields and invalid email
        setFormDataErrors({
        fullName: !formData.fullName ? 'Name is required' : '',
        email: !formData.email ? 'Email is required' : !emailRegex.test(formData.email) ? 'Invalid email format' : '',
        phoneNumber: !isPhoneNumberValid ? 'Phone number should  10 digits' : '',
        });
        return; // Do not proceed with save if mandatory fields are not filled or email is invalid
    }

            // Clear any previous error messages
            setFormDataErrors({});
            dispatch(updateProfileRequest(id || Employeeid, formData))
            setEditable(false);
        }
        const handleAddressClick = () => {
            dispatch(updateAddressRequest(id || Employeeid, addressData))
            setAddressEditable(false);
        }
        const handleEmergencyClick = () => {
            const phoneValidationPattern = /^((\+)?(\d{2}[-]))?(\d{12}){1}?$/;
            const isPhoneNumberValid = phoneValidationPattern.test(emergencyData.phoneNumber);
        
            if (!isPhoneNumberValid) {
                // Set error messages for mandatory fields and invalid phone number
                setFormDataErrors({
                    phoneNumber: !isPhoneNumberValid ? 'Phone number should be 10 digits' : '',
                });
                return; // Do not proceed with save if the phone number is not valid
            }
            dispatch(updateEmergecnyRequest(id || Employeeid, emergencyData))
            setEmergencyEditable(false);
        }
        
        const handleBankClick = () => {
            if (!bankData.bankName || !bankData.accountName || !bankData.accountNumber || !bankData.iban) {
                setFormDataErrors({
                    bankName: !bankData.bankName ? 'Bank Name is required' : '',
                    accountName: !bankData.accountName ? 'Account Name is required' : '',
                    accountNumber: !bankData.accountNumber ? 'Account Number is required' : '',
                    iban: !bankData.iban ? 'IFSC code is required' : '',
                });
                return;
            }
        
            // Clear any previous error messages
            setFormDataErrors({});
            dispatch(updateBankRequest(id || Employeeid, bankData))
            setBankEditable(false);

        }

        const handleCancel = ()=>{
            setFormData(myprofile);
            setAddressData(myaddress);
            setEmergencyData(emergencycontact);
            setBankData(bankinfo);
        
            // Clear any previous error messages
            setFormDataErrors({});
            setBankEditable(false);
            setEmergencyEditable(false);
            setAddressEditable(false);
            setEditable(false);
        }
        if (!myprofile || !myaddress) {
            return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indication
        }
        const personalInfoFields = [
            {
                name: 'fullName',
                title: 'Full Name*',
            },
            {
                name: 'gender',
                title: 'Gender',
                type: 'select',
                options: [
                    { value: 'Male', label: 'Male' },
                    { value: 'Female', label: 'Female' },
                    { value: 'Other', label: 'Other' },
                ],
            },
            {
                name: 'dateOfBirth',
                title: 'Date of Birth',
                type: 'date',
            },
            {
                name: 'maritalStatus',
                title: 'Marital Status',
                type: 'select',
                options: [
                    { value: 'Married', label: 'Married' },
                    { value: 'Unmarried', label: 'Unmarried' },
                    { value: 'Single', label: 'Single' },
                ],
            },
            {
                name: 'nationality',
                title: 'Nationality',
                type: 'nationality',
            },
            {
                name: 'personalTaxId',
                title: 'Personal Tax ID',
               
            },
            {
                name: 'email',
                title: 'Email Address*',
            },
            {
                name: 'socialInsurance',
                title: 'Social Insurance',
            },
            {
                name: 'healthInsurance',
                title: 'Health Insurance',
            },
            {
                name: 'phoneNumber',
                title: 'Phone Number*',
                type: 'phone',
            },
        ];

        const emergencyContactFields = [
            {
                name: 'fullName',
                title: 'Full Name',
            },
            {
                name: 'relationship',
                title: 'Relationship',
                type: 'select',
                options: [
                    { value: 'Father', label: 'Father' },
                    { value: 'Mother', label: 'Mother' },
                    { value: 'Sibling', label: 'Sibling' },
                    { value: 'Other', label: 'Other' },
                ],
            },
            {
                name: 'phoneNumber',
                title: 'Phone Number',
                type: 'phone',
            },
        ];
        const addressFields = [
            {
                name: 'primaryAddress',
                title: 'Primary Address',
            },
            {
                name: 'country',
                title: 'Country',
                type: 'country',
            },
            {
                name: 'stateProvince',
                title: 'State/Province',
                type: 'state',
            },
            {
                name: 'city',
                title: 'City',
                type: 'city',
            },
            {
                name: 'postalCode',
                title: 'Postal Code',
            },
        ];
        const bankFields = [
            {
                name: 'bankName',
                title: 'Bank Name*',
                maxLength: 50,
            },
            {
                name: 'accountName',
                title: 'Account Name*',
                maxLength: 50,
            },
            {
                name: 'branch',
                title: 'Branch',
                maxLength: 50,
            },
            {
                name: 'accountNumber',
                title: 'Account Number*',
                maxLength: 20,
            },
            {
                name: 'swiftBic',
                title: 'SWIFT / BIC',
                maxLength: 10,
            },
            {
                name: 'iban',
                title: 'IFSC*',
                maxLength: 20,
            },
        ];

          
        return (
            <>
                <div className='main-container'>
                    <div>  <ToastContainer/>
                        <MainCard title="Personal Info" >

                            <div className="flex-container">
                                {isEditAllowedForSection(1) && (
                                    <div className="button-container">
                                        <BasicButtons handleSaveClick={handleEditClick} name="Edit" />
                                    </div>
                                )}
                                <form method="POST" className="form-view">
                                    <div className="grid-container">
                                        {personalInfoFields.map((field) => (
                                            <ProfileField
                                                key={field.name}
                                                title={field.title}
                                                value={formData?.[field.name]}
                                                editable={editable}
                                                onChange={(e) => handleFormChange(e, field.name, field.type)}
                                                type={field.type}
                                                options={field.options}
                                                error={formDataErrors[field.name]}
                                                nationality={field.type === 'nationality' ? nationality : undefined}
                                            />
                                        ))}
                                    </div>
                                </form>
                                {editable ? (
                                    <div className="Profile-button-container">
                                        <BasicButtons handleSaveClick={handleSaveClick} name="save" cancel="cancel"  handleCancelClick={handleCancel}/>
                                    
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </MainCard>
                    </div>
                    <div>
                        <MainCard title="Address" >

                            <div className="flex-container">
                                {isEditAllowedForSection(2) && (
                                    <div className="button-container">
                                        <BasicButtons handleSaveClick={handleaddresseditClick} name="Edit" />
                                    </div>
                                )}
                                <form method="POST" className="form-view">
                                    <div className="grid-container">
                                        {addressFields && addressFields.map((field) => (
                                            <ProfileField
                                                key={field.name}
                                                title={field.title}
                                                value={addressData?.[field.name]}
                                                editable={addresseditable}
                                                onChange={(e) => handleAddressChange(e, field.name, field.type)}
                                                type={field.type}
                                                options={field.type === 'country' ? country : undefined}
                                                state = { field.type === 'state' ? states : undefined}
                                                city = { field.type === 'city' ? city : undefined}
                                                countryId={addressData?.country?.id}
                                            />
                                        ))}
                                    </div>
                                </form>
                                {addresseditable ? (
                                    <div className="Profile-button-container">
                                        <BasicButtons handleSaveClick={handleAddressClick} name="save"  cancel="cancel"  handleCancelClick={handleCancel}/>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </MainCard>
                    </div>
                    <div>
                        <MainCard title="Emergency Contact" >

                            <div className="flex-container">
                                {isEditAllowedForSection(3) && (
                                    <div className="button-container">
                                        <BasicButtons handleSaveClick={handleEmergencyeditClick} name="Edit" />
                                    </div>
                                )}
                                <form method="POST" className="form-view">
                                    <div className="grid-container">
                                        {emergencyContactFields.map((field) => (
                                            <ProfileField
                                                key={field.name}
                                                title={field.title}
                                                value={emergencyData?.[field.name]}
                                                editable={emegencyeditable}
                                                onChange={(e) => handleEmergencyChange(e, field.name)}
                                                type={field.type}
                                                error={formDataErrors[field.name]}
                                                options={field.options}
                                            />
                                        ))}
                                    </div>
                                </form>
                                {emegencyeditable ? (
                                    <div className="Profile-button-container">
                                        <BasicButtons handleSaveClick={handleEmergencyClick} name="save" cancel="cancel"  handleCancelClick={handleCancel}/>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </MainCard>
                    </div>
                    <div>
                        <MainCard title="Bank Info" >

                            <div className="flex-container">
                                {isEditAllowedForSection(4) && (
                                    <div className="button-container">
                                        <BasicButtons handleSaveClick={handleBankeditClick} name="Edit" />
                                    </div>
                                )}
                                <form method="POST" className="form-view">
                                    <div className="grid-container">
                                        {bankFields.map((field) => (
                                            <ProfileField
                                                key={field.name}
                                                title={field.title}
                                                value={bankData?.[field.name]}
                                                editable={bankeditable}
                                                onChange={(e) => handleBankinfoChange(e, field.name)}
                                                error={formDataErrors[field.name]}
                                                maxLength={field.maxLength}
                                            />
                                        ))}
                                    </div>
                                </form>
                                {bankeditable ? (
                                    <div className="Profile-button-container">
                                        <BasicButtons handleSaveClick={handleBankClick} name="save" cancel="cancel"  handleCancelClick={handleCancel}/>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </MainCard>
                    </div>
                </div>
            </>
        )
    }
