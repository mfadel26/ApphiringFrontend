import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbaren from '../../components/Navbaren';
import { Redirect } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
class Editen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      date_of_birth: '',
      email: '',
      phone_number: '',
      location: '',
      skill: '',
      showcase: '',
      description: '',
      photo: null,
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
    this.editForm();
    this.setState({
      isSubmit: '1'
    })
    event.preventDefault();
  }

  async editForm() {
    try {
      let formData = new FormData();
      formData.append('name', this.state.name)
      formData.append('date_of_birth', this.state.date_of_birth)
      formData.append('email', this.state.email)
      formData.append('phone_number', this.state.phone_number)
      formData.append('skill', this.state.skill)
      formData.append('location', this.state.location)
      formData.append('showcase', this.state.showcase)
      formData.append('description', this.state.description)
      formData.append('profession', this.state.profession)
      formData.append('photo', this.state.photo, this.state.photo.name);
      const response = await axios({
        method: 'put',
        url: 'http://54.161.87.89:7000/myhire/edit',
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
    } catch (error) {
      console.log(error);
    }
  }

  async sendForm() {
    try {
      let formData = new FormData();
      formData.append('name', this.state.name)
      formData.append('date_of_birth', this.state.date_of_birth)
      formData.append('email', this.state.email)
      formData.append('phone_number', this.state.phone_number)
      formData.append('skill', this.state.skill)
      formData.append('location', this.state.location)
      formData.append('showcase', this.state.showcase)
      formData.append('description', this.state.description)
      formData.append('profession', this.state.profession)
      formData.append('photo', this.state.photo, this.state.photo.name);

      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/myhire/form',
        data: formData

      });
      console.log(response.data.result.token);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Navbaren />
        <div className="row">
          <div className="col-lg-12 col-xl-4 col-md-12 col-sm-12">
            <div className="carda">
              <div className="card-header">
                <h3 className="card-titlessa">My Profile</h3>
                <div className="card-options">
                 {/* <a href="/profile" className="btn btn-primary btn-sm"><i className="si si-eye mr-1" />View Profile</a> */}
                </div>
              </div>
              <div className="card-bodys">
                <div className="text-center">
                  <div className="userprofile ">
                    <div className="userpic  brround">
                      <h3 className="username mb-2"></h3><img src={"data:image/png;base64,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"} width={350} height={250} className="avatar-xxl rounded-circle" alt="profile" /> </div>
                    <p className="mb-1"></p>

                    <div className="socials text-center mt-3">
                      <a href className="btn btn-circle btn-primary ">
                        <i className="fa fa-facebook" /></a> <a href className="btn btn-circle btn-danger ">
                        <i className="fa fa-google-plus" /></a> <a href className="btn btn-circle btn-info ">
                        <i className="fa fa-twitter" /></a> <a href className="btn btn-circle btn-warning "><i className="fa fa-envelope" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <ul className="row text-center clearfix mb-0">
                </ul>
              </div>
            </div>
          </div>
          {/* form edit*/}
          <div className="col-md-6 col-md-offset-1">
            <form onSubmit={this.handleSubmit}>
              <form className="editen">
                <div className="row">

                  <div className="col-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" value={this.state.name}
                      onChange={this.handleChange} />.
                    </div>
                  <div className="col-6">
                    <input type="text" name="email" className="form-control" placeholder="Email" value={this.state.email}
                      onChange={this.handleChange} />
                  </div>
                  <div className="col-6">
                    <input type="date" name="date_of_birth" className="form-control" placeholder="Date Of Birth" value={this.state.date_of_birth}
                      onChange={this.handleChange} />. Date Of Birth .
                    </div>
                  <div className="col-6">
                    <input type="text" name="phone_number" className="form-control" placeholder="Phone Number" value={this.state.phone_number}
                      onChange={this.handleChange} />
                  </div>
                  <div className="col-6">
                    <input type="text" name="location" className="form-control" placeholder="Location" value={this.state.location}
                      onChange={this.handleChange} />.
                    </div>
                  <div className="col-6">
                    <input type="text" name="skill" className="form-control" placeholder="Skill" value={this.state.skill}
                      onChange={this.handleChange} />
                  </div>
                  <div className="col-6">
                    <input type="text" name="showcase" className="form-control" placeholder="Showcase" value={this.state.showcase}
                      onChange={this.handleChange} />.
                    </div>
                  <div className="col-6">
                    <input type="text" name="description" className="form-control" placeholder="Description" value={this.state.description}
                      onChange={this.handleChange} />
                  </div>
                  <div className="col">
                    <input type="text" name="profession" className="form-control" placeholder="Profession" value={this.state.profession}
                      onChange={this.handleChange} />
                  </div>


                  <div className="col">
                    <input type="file" name="photo" className="form-control-file" placeholder="Foto"
                      onChange={this.fileChange} />Photo
                    </div>
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary mt-2" >Submit</button>
                </div>

              </form>
            </form>
            {(this.state.isSubmit === '1') && <Redirect push to='/cardsen'></Redirect>}
          </div>
        </div>
      </div>
    );
  }
}
export default Editen;