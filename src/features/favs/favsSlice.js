import { createSlice } from '@reduxjs/toolkit';

function getFavs(){
  let favsFromStorage = localStorage.getItem(appStorageName);
  if(favsFromStorage === null){
      favsFromStorage = [];
  }else{
      favsFromStorage = JSON.parse(favsFromStorage);
  }
  return favsFromStorage;
}

const initialState = {
  items: getFavs()
}

