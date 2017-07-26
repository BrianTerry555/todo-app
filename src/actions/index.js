import axios from "axios";

export function addInfo(info) {
  return (dispatch) => {
    return axios.post("https://api.vschool.io/brian/todo", info).then((response)=> {
      dispatch(loadInfo());
    }).catch((error) => {
      throw error;
    })
  }
}

export function removeInfo(id) {
  return(dispatch) => {
    return axios.delete("https://api.vschool.io/brian/todo" + id).then((response)=>{
    dispatch(loadInfo());
    }).catch((error) =>{
      throw error;
    })
  }
}

export function updateInfo(id, info) {
  return (dispatch) => {
    return axios.put("https://api.vschool.io/brian/todo" + id, info).then((response)=>{
    dispatch(loadInfo());
    }).catch((error) =>{
      throw error;
    })
  }
}

export function loadInfo() {
  return (dispatch) => {
    return axios.get("https://api.vschool.io/brian/todo").then((response)=>{
    dispatch(addItem(response.data));
    }).catch((error) =>{
      throw error;
    })
  }
}

export function addItem(items) {
  return {
    type: "ADD_ITEM",
    items
  }
}
