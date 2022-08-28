import { configureStore, createSlice } from '@reduxjs/toolkit'

const post = createSlice({
    name : 'post',
    initialState : [   {
      title: "A bor, mint életelixír.",
      date: "2021. 04. 21. 18.00",
      cover: "//unsplash.it/500/250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut, vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.",
    },
    {
      title: "Bor szerdák ajándék borral minden fogáshoz.",
      date: "2021. 04. 21. 18.00",
      cover: "//unsplash.it/1000/500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut, vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.",
    },
    {
      title: "Egy harmadik esemény",
      date: "2021. 05. 01. 14.00",
      cover: "//unsplash.it/800/400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut, vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.",
    }]
})

const loginModal = createSlice({
  name : 'loginModal',
  initialState : false,
  reducers:{
    open(state){
      state=true;
      return state;
    },
    close(state){
      state=false;
      return state;
    },
  }
})

export let { open, close} = loginModal.actions;

const loginCheck = createSlice({
  name : 'login',
  initialState : false,
  reducers:{
    login(state){
      state=true;
      return state;
    },
    logout(state){
      state=false;
      return state;
    }
  }
})

export let {login, logout} = loginCheck.actions;

export default configureStore({
  reducer: { 
      post : post.reducer,
      loginModal : loginModal.reducer,
      loginCheck : loginCheck.reducer,
  }
}) 

