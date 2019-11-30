import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import gambar from'../components/img/12.png'
import Navbar from '../components/Navbar';
class Editprofile extends Component{
    render() {
        return(
            
        <div>
           <Navbar/>
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
                      <h3 className="username mb-2">Alison</h3> <img src="https://cdn.idntimes.com/content-images/community/2019/11/photo-1553798194-cc0213ae7f99-0e650decbbcb649fa6af99ff27236302_600x400.jpg" width={350} height={250} alt="Profile" className="avatar-xxl rounded-circle"  /> </div>
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
                <div className="card-body pt-3 pb-3">
                  <div className="memberblock mb-0">
                    <div className="row ">
                      <div className="col-lg-4 col-md-4 col-sm-4 pl-1 pr-1 m-t-5 m-b-5">
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 pl-1 pr-1 m-t-5 m-b-5">
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-4 col-md-4 col-sm-4 pl-1 pr-1 mb-0 m-t-5 m-b-5">
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 pl-1 pr-1 mb-0 m-t-5 m-b-5"> 
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 pl-1 pr-1 mb-0 m-t-5 m-b-5">
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-8 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Edit Profile</h3>
                </div>
                <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputname">Name</label>
                        <input type="text" className="form-control" id="exampleInputname1" placeholder="enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="descrption">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="description" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="skill">Skill</label>
                    <input type="text" className="form-control" id="skill" placeholder="skill" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="location" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">DateOfBirth</label>
                    <div className="row">
                      <div className="col-md-4">
                        <select className="form-control">
                          <option value={0}>Date</option>
                          <option value={1}>01</option>
                          <option value={2}>02</option>
                          <option value={3}>03</option>
                          <option value={4}>04</option>
                          <option value={5}>05</option>
                          <option value={6}>06</option>
                          <option value={7}>07</option>
                          <option value={8}>08</option>
                          <option value={9}>09</option>
                          <option value={10}>10</option>
                          <option value={11}>11</option>
                          <option value={12}>12</option>
                          <option value={13}>13</option>
                          <option value={14}>14</option>
                          <option value={15}>15</option>
                          <option value={16}>16</option>
                          <option value={17}>17</option>
                          <option value={18}>18</option>
                          <option value={19}>19</option>
                          <option value={20}>20</option>
                          <option value={21}>21</option>
                          <option value={22}>22</option>
                          <option value={23}>23</option>
                          <option value={24}>24</option>
                          <option value={25}>25</option>
                          <option value={26}>26</option>
                          <option value={27}>27</option>
                          <option value={28}>28</option>
                          <option value={29}>29</option>
                          <option value={30}>30</option>
                          <option value={31}>31</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <select className="form-control">
                          <option value={0}>Mon</option>
                          <option value={1}>Jan</option>
                          <option value={2}>Feb</option>
                          <option value={3}>Mar</option>
                          <option value={4}>Apr</option>
                          <option value={5}>May</option>
                          <option value={6}>June</option>
                          <option value={7}>July</option>
                          <option value={8}>Aug</option>
                          <option value={9}>Sep</option>
                          <option value={10}>Oct</option>
                          <option value={11}>Nov</option>
                          <option value={12}>Dec</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <select className="form-control">
                          <option value={0}>Year</option>
                          <option value={1}>2018</option>
                          <option value={2}>2017</option>
                          <option value={3}>2016</option>
                          <option value={4}>2015</option>
                          <option value={5}>2014</option>
                          <option value={6}>2013</option>
                          <option value={7}>2102</option>
                          <option value={8}>2012</option>
                          <option value={9}>2011</option>
                          <option value={10}>2010</option>
                          <option value={11}>2009</option>
                          <option value={12}>2008</option>
                          <option value={13}>2007</option>
                          <option value={14}>2006</option>
                          <option value={15}>2005</option>
                          <option value={16}>2004</option>
                          <option value={17}>2003</option>
                          <option value={18}>2002</option>
                          <option value={19}>2001</option>
                          <option value={20}>1999</option>
                          <option value={21}>1998</option>
                          <option value={22}>1997</option>
                          <option value={23}>1996</option>
                          <option value={24}>1995</option>
                          <option value={25}>1994</option>
                          <option value={26}>1993</option>
                          <option value={27}>1992</option>
                          <option value={28}>1991</option>
                          <option value={29}>1990</option>
                          <option value={30}>1989</option>
                          <option value={31}>1988</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-group">Showcase</label>
                    <input type="text" className="form-control" id="showcase"placeholder="http://google.com" />
                  </div>
                  
                  <div className="form-group mb-0 mt-5">
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-12 userprofile">
                        <div className="userpic mb-2">
                          <img src="https://cdn.idntimes.com/content-images/community/2019/11/photo-1553798194-cc0213ae7f99-0e650decbbcb649fa6af99ff27236302_600x400.jpg" width={300} height={200} alt="Profile" className="avatar-xxl rounded-circle"  /> />
                        </div>
                        <div className="text-center">
                          <input type="file" className="btn btn-primary mt-1" />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right">
                  <a href="#" className="btn btn-success mt-1">Save</a>
                  <a href="#" className="btn btn-warning mt-1">Cancel</a>
                </div>
              </div>
            </div>
          </div>
         
          
          <a href="#top" id="back-to-top"><i className="fa fa-angle-up" /></a>
          
        </div>
      );
    }
  }
  export default Editprofile;