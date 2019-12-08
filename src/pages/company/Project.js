
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
class Project extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: '',
          skill:'',
          description:'',
          payment:'',
          id_engineer:'',
          isSubmit: '0'
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.sendForm = this.sendForm.bind(this);
      this.editForm = this.editForm.bind(this);
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

  async editForm() {
      try{
          let formData = new FormData();
          formData.append('name', this.state.name)
          formData.append('photo', this.state.photo, this.state.photo.name);
          
        const response = await axios({
          method: 'put',
          url: 'http://localhost:3000/myhire/edit',
          data: formData
          // data: {
          //     name: this.state.name,
          //     photo: this.state.photo,
          //     gender: this.state.gender,
          //     date_of_birth: this.state.date_of_birth,
          //     email: this.state.email,
          //     phone_number: this.state.phone_number, 
          //     location: this.state.location,
          //     skill: this.state.skill,
          //     showcase: this.state.showcase,
          //     description: this.state.description
          // }
        });
          console.log(response.data.result.token);
      }catch(error) {
          console.log(error);
      }
  }

  async sendForm() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    var token = localStorage.getItem('Authorization');
      axios.defaults.headers.common['Authorization'] = token; 
      try{
        const response = await axios({
          method: 'POST',
          url: 'http://54.161.87.89:7000/myhire/createproject',
          data: {
                 name: this.state.name,
                 skill: this.state.skill,
                 payment: this.state.payment,
                 description: this.state.description
          }
        })
      }catch(error) {
          console.log(error);
      }
    }
       


  render() {
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="card-pruf">
            <div className="card-header">
              <h3 className="card-title">Add Your Project</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
              <form id="form">
                <div className="list-group">
                  <div className="list-group-item py-3" data-acc-step>
                    <h5 className="mb-0" data-acc-title>Name Project &amp; Require Skill</h5>
                    <div data-acc-content>
                      <div className="my-3">
                        <div className="form-group">
                          <label>Name Project:</label>
                          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Require Skill:</label>
                          <input type="text" name="skill" value={this.skill} onChange={this.handleChange} className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item py-3" data-acc-step>
                    <h5 className="mb-0" data-acc-title>Job description</h5>
                    <div data-acc-content>
                      <div className="my-3">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange}  rows="3" placeholder="Job Description ..."></textarea>
                          <input type="text" name="payment" value={this.state.budget} onChange={this.handleChange}  placeholder="Payment"></input>
                        </div>
                        <button type="submit" class="btn btn-outline-info">Submit</button>
                        {(this.state.isSubmit==='1')&&<Redirect push to='/cardsen'></Redirect> }
                      </div>
                    </div>
    
                  </div>
                </div>
              </form></form>
            </div>
          </div>
        </div>
      </div>


    );
  }
}
export default Project