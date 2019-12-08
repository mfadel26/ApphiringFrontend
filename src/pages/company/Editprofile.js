import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
import Navbar from '../../components/Navbar';
class Editprofile extends Component {
  state = {
    form: {
      'name': '',
      'logo': '',
      'location': '',
      'description': ''
    }
  }
  handlerChange = (event) => {
    let data = { ...this.state.form };
    data[event.target.name] = event.target.value;
    this.setState({
      form: data
    }, () => {
      console.log(this.state.form)
    })
  }
  handlerSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state)
    await axios.post('http://54.161.87.89:7000/company/', this.state.form)
    this.props.history.push('/card')
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-lg-12 col-xl-4 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">My Profile</h3>
                <div className="card-options">
                  <a href="/profile" className="btn btn-primary btn-sm"><i className="si si-eye mr-1" />View Profile</a>
                </div>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <div className="userprofile ">
                    <div className="userpic  brround">
                      <h3 className="username mb-2">Alison</h3> <img src="https://cdn.idntimes.com/content-images/community/2019/11/photo-1553798194-cc0213ae7f99-0e650decbbcb649fa6af99ff27236302_600x400.jpg" width={350} height={250} alt="Profile" className="avatar-xxl rounded-circle" /> </div>
                    <p className="mb-1">Web Designer, Uk</p>

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
            <form onSubmit={this.handlerSubmit}>
              <form className="edit">
                <hr />
                <div className="form-group">
                <label className="form-group">Company Name</label>
                  <input type="text" name="name" onChange={this.handlerChange} className="form-control" placeholder="company name" required="required" />
                </div>

                <div className="form-group">
                <label className="form-group">Logo</label>
                  <input type="text" name="logo" onChange={this.handlerChange} className="form-control" placeholder="logo" required="required" />
                </div>

                <div className="form-group">
                <label className="form-group">location</label>
                  <input type="text" name="location" onChange={this.handlerChange} className="form-control" placeholder="location" required="required" />
                </div>
                <div className="form-group">
                <label className="form-group">Description</label>
                  <input type="description" name="description" onChange={this.handlerChange} className="form-control" placeholder="description" required="required" />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-success mt-1">Save</button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Editprofile;