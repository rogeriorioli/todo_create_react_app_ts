import axios from "axios"

export const api = 
  axios.create({
    baseURL :  'https://todo-kdf4.onrender.com'
  })
