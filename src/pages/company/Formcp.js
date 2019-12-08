
import React, { Component } from 'react';
import '../../components/css/Formadd.css';
import { Redirect } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
class Formcp extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: '',
          email:'',
          phone_number:'',
          location:'',
          required_skill:'',
          description:'',
          photo:'',
          isSubmit: '0'
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.sendForm = this.sendForm.bind(this);
      
  }

  fileChange = event => {
      console.log(event.target.files[0]); 
      this.setState({
          photo: event.target.files[0]
      });  
  }

  handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
      [name]: value
      });
  }
  
  handleSubmit(event) {
      console.log('submit!');
  
          console.log('create!');
          this.sendForm();
      this.setState({
          isSubmit: '1'
      })
      event.preventDefault();
  }

  async sendForm() {
      try{
          let formData = new FormData();
          formData.append('name', this.state.name)

          formData.append('email', this.state.email)
          formData.append('phone_number', this.state.phone_number)
          formData.append('required_skill', this.state.required_skill)
          formData.append('photo', this.state.photo , this.state.photo.name)
          formData.append('location', this.state.location)
          formData.append('description', this.state.description)
     
          
        const response = await axios({
          method: 'post',
          url: 'http://localhost:4000/myhire/form',
          data: formData

        });
          console.log(response.data.result.token);
      }catch(error) {
          console.log(error);
      }
  }
  render() { if (this.state.login) {
    return <Redirect to={'/'} />
  }
    return (
      <div>
        <section id="formadd">
          <div className="container"> 
              {/* Sign Up */}
              <div className="col-md-6 col-md-offset-1 center">
              <form onSubmit={this.handleSubmit}>
                  <form className="adduser">
                    <h2>
                      <h2 className="text-center sign">Company Profile
                          <i className="fa fa-user-circle " style={{ fontSize: '25px', color: '#83BEE0' }} /></h2>
                    </h2>
                    <div className="row">

                    <div className="col-6">
                      <input type="text" name="name" className="form-control" placeholder="Company Name" value={this.state.name}
                      onChange={this.handleChange} />.
                    </div>
                    <div className="col-6">
                      <input type="text" name="email"  className="form-control" placeholder="Email" value={this.state.email}
                      onChange={this.handleChange} />
                    </div>
                    
                    <div className="col-6">
                      <input type="text" name="phone_number"  className="form-control" placeholder="Phone Number" value={this.state.phone_number}
                      onChange={this.handleChange}  />
                    </div>
                    <div className="col-6">
                      <input type="text" name="location" className="form-control" placeholder="Location" value={this.state.location}
                     onChange={this.handleChange} />.
                    </div>
                    <div className="col-6">
                      <input type="text" name="required_skill"  className="form-control" placeholder="Require skill"  value={this.state.required_skill}
                     onChange={this.handleChange}  />
                    </div>
                    <div className="col-6">
                      <input type="file" name="photo"  className="form-control" placeholder="" 
                     onChange={this.fileChange}  />
                    </div>
                   
                    <div className="col-6">
                      <input type="text" name="description" className="form-control" placeholder="Description" value={this.state.description}
                      onChange={this.handleChange} />
                    </div> 
                    </div>
                   
                
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-primary mt-2" >Submit</button>
                      <h1 className="desc"></h1>Be the best for better change<br></br>
                    </div>
                  </form>
                  </form>
                  {(this.state.isSubmit==='1')&&<Redirect push to='/'></Redirect> }
              </div>
            
          </div>
        </section>
      </div>


    );
  }
}
export default Formcp