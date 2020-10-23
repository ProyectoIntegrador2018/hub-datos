import jwtDecode from 'jwt-decode';
function isLoggedIn(){
    let token = localStorage.getItem('token');
    
    if(token){
        let tokenExpiration = jwtDecode(token).exp;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                LogOut();
                return false;
            }else{
                return true;
            }
    }
    else{
        
        return false;
    }
}
function isAdmin(){
    let token = localStorage.getItem('token');
    
    if(token){
        let tokenExpiration = jwtDecode(token).exp;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                LogOut();
                return false;
            }else{
                if(jwtDecode(token).role === 'Alumno')
                    return true;
                else
                    return false;
            }
    }
    else{
        
        return false;
    }
}
function LogOut(){
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    window.location.href = "/";

}
function getUserData(){
    let email;
    let id;
    let role;
    let token = localStorage.getItem('token');
    
    if(token){
        email = jwtDecode(token).email;
        id = jwtDecode(token).id;
        role = jwtDecode(token).role;

        let data = {
            email,
            id,
            role
        }

        return data;
    }
    else{
        return false;
    }
}


export {isLoggedIn,LogOut,getUserData,isAdmin}