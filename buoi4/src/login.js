

import axios from'axios'
import { environment } from "@/envioment/env.js";
const apiUrl = environment.apiUrl;
export function loginGoogle() {

      this.$gAuth
        .signIn()
        .then(GoogleUser => {
      
          console.log('GoogleUser', GoogleUser)
          var userInfo = {
            loginType: 'google',
            google: GoogleUser
          }
          this.$store.commit('setLoginUser', userInfo)
          router.push('/home')
        })
        .catch(error => {
          console.log('error', error)
        })
    
  

}
export function loginAcc(username,password) {

    console.log('Người dùng đã nhấn nút "Đăng nhập"');
    axios.post(apiUrl+ '/login', { username, password })
      .then(response => {
        console.log( "data", response.request?.response);

      })
      .catch(error => {
           console.log("er",error.request?.response);
         
      });
}