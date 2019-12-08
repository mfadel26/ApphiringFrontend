import { Redirect } from 'react-router-dom'
import React from 'react'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
class Logout extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          islogout: '0'
      }
      this.sendLogout = this.sendLogout.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async sendLogout() {
      try{
        const response = await axios({
          method: 'get',
          url: 'http://54.161.87.89:7000/myhire/logout',
        });
          console.log(response.data.result);
          localStorage.removeItem("Authorization");
        }catch(error) {
          console.log(error);
        }
    }
    
    handleSubmit(event) {
        console.log('submit!');
        this.sendLogout() 
        this.setState({
            islogout: '1'
        })
        localStorage.setItem("Login", '0');
        event.preventDefault();
    }
  
    render(){
      return (
        <div className='container mt-5'>
        <div className='row'>
           
            </div>
        </div>
        
        )
    }  
  }
  
  export default Logout;