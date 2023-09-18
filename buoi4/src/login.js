

import axios from'axios'
export function loginGoogle() {

      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          // on success do something
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
    axios.post('http://localhost:4000/login', { username, password })
      .then(response => {
        console.log( "data", response.request?.response);

      })
      .catch(error => {
           console.log("er",error.request?.response);
         
      });
}