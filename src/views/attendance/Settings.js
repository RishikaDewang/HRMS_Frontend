// Settings.jsx
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import Header from 'ui-component/subheader';
import { createqrcode } from 'redux/action/actions';
import {  useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchQrcode } from 'redux/action/actions';
import { useEffect } from 'react';
import { ImageListItem } from '@mui/material';
import BasicButtons from 'ui-component/button';
const QRCodeContent = () => {
    // const employeeid = useSelector((state) => state.userReducer.id);
    const dispatch = useDispatch();
    const qrimage =  useSelector((state)=>state.qrcodereducer.qrimage)
    const companyid =  useSelector((state)=>state.userReducer.companyid)
    console.log("company id", companyid)
    const defaultProfilepic = { imageUrl: 'default_image_url' };
    const profilePicObject = qrimage || defaultProfilepic;
    console.log("qr image", qrimage)
    const [locationDetails, setLocationDetails] = useState({});

    useEffect(()=>{
    dispatch(fetchQrcode(companyid))
    },[dispatch])

  
    const getUserLocation = () => {
      if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              console.log('Latitude:', latitude);
              console.log('Longitude:', longitude);
  
              setLocationDetails({
                locationDetails,
                latitude,
                longitude,
              });
  
              resolve({
                latitude,
                longitude,
              });
            },
            (error) => {
              console.error('Error getting user location:', error);
              reject(error);
            }
          );
        });
      } else {
        console.error('Geolocation is not supported by this browser.');
        return Promise.reject('Geolocation not supported');
      }
    };
    
    const handleCreateQR = async () => {
      try {
        const locationDetails = await getUserLocation();

        // Assuming static place name for now
        const staticPlaceName = 'Static Place Name';
  
        // Now, you can dispatch the API call with the updated location details
        dispatch(createqrcode(companyid, { ...locationDetails, location: staticPlaceName }));
      } catch (error) {
        console.error('Error creating QR code:', error);
      }
    };
    return (
      <>

<ImageListItem >
      <img
       style={{ width: '30%' }} 
        src={profilePicObject.imageUrl}
        alt='qrcode'
        loading="lazy"
      />
    </ImageListItem>
        <BasicButtons name='Create QR' handleSaveClick={async () => {
          await getUserLocation();
          handleCreateQR();
        }}>Create QR</BasicButtons>

      </>
    );
  };
  

export default function Settings() {
  const generalTabs = [
    { label: 'QR code', value: '1', component: <QRCodeContent/> },
    { label: 'General Tab 2', value: '2', content: 'Content for General Tab 2' },
    // Add more tabs as needed
  ];

  return (
    <MainCard>
      <Header tabs={generalTabs} />
      {/* Use Header component with different tabs as needed */}
    </MainCard>
  );
}
