import React, { Component } from 'react';
import './regformst.css';
class RegistrationForm extends Component {
 constructor() {
 super();
 this.state = {
 name: '',
 email: '',
 gender: 'male',
 country: 'india',
 bio: '',
 agreement: false,
 };
 }
 handleInputChange = (event) => {
 const { name, value, type, checked } = event.target;
 // Handle checkbox input differently
 if (type === 'checkbox') {
 this.setState({ [name]: checked });
 } else {
 this.setState({ [name]: value });
 }
 };
 handleSubmit = (event) => {
 event.preventDefault();
 // You can perform form submission logic here
 if(this.state.name=== "" || this.state.email=== "" || this.state.bio=== "")
 {
 alert('please enter the data first');
 }
 else
 {
 alert('Form submitted with data:\nName: ' + this.state.name + '\nEmail id: ' +
this.state.email + '\nGender: ' + this.state.gender + '\nCountry: ' +
this.state.country + '\nBio: ' + this.state.bio + '\n');

 }
 };
 handleReset = () => {
 this.setState({
 name: '',
 email: '',
 gender: 'male',
 country: 'india',
 bio: '',
 agreement: false,
 });
 };
 handleKeyDown = (event) => {
 if (event.key === 'Enter') {
 this.handleSubmit(event);
 }
 };
 render() {
 return (
 <form onSubmit={this.handleSubmit} className="registration-form">
 <div className="form-group">
 <label>Name:</label>
 <input
 type="text"
 name="name"
 value={this.state.name}
 onChange={this.handleInputChange}
 onKeyDown={this.handleKeyDown}
 required
 />
 </div>
 <div className="form-group">
 <label>Email:</label>
 <input
 type="email"
 name="email"
 value={this.state.email}
 onChange={this.handleInputChange}
 onKeyDown={this.handleKeyDown}
 required
 />
 </div>
 <div className="form-group">
 <label>Gender:</label>
 <div>
 <label>
 <input
 type="radio"
 name="gender"
 value="male"
 checked={this.state.gender === 'male'}
 onChange={this.handleInputChange}
 />{' '}
 Male
 </label>
 <label>
 <input
 type="radio"
 name="gender"
 value="female"
 checked={this.state.gender === 'female'}
 onChange={this.handleInputChange}
 />{' '}
 Female
 </label>
 <label>
 <input
 type="radio"
 name="gender"
 value="other"
 checked={this.state.gender === 'other'}
 onChange={this.handleInputChange}
 />{' '}
 Other
 </label>
 </div>
 </div>
 <div className="form-group">
 <label>Country:</label>
 <select
 name="country"
 value={this.state.country}
 onChange={this.handleInputChange}
 >
 <option value="india">India</option>
 <option value="usa">United States</option>
 <option value="canada">Canada</option>
 <option value="uk">United Kingdom</option>
 <option value="australia">Australia</option>
 </select>
 </div>
 <div className="form-group">
 <label>Bio:</label>
 <textarea
 name="bio"
 value={this.state.bio}
 onChange={this.handleInputChange}
 onKeyDown={this.handleKeyDown}
 />
 </div>
 <div className="form-group">
 <label>
 <input
 type="checkbox"
 name="agreement"
 checked={this.state.agreement}
 onChange={this.handleInputChange}
 />{' '}
 I agree to the terms and conditions
 </label>
 </div>
 <div className="form-group">
 <button type="submit" onClick={this.handleSubmit}>
 Submit
 </button>
 <button type="button" onClick={this.handleReset}>
 Reset
 </button>
 </div>
 </form>
 );
 }
}
export default RegistrationForm;