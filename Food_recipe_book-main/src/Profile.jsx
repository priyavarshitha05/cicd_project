import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    language: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    email: '',
    phone: '',
    address: '',
    nation: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    google: '',
    slogan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile saved successfully!');
    console.log(profile);
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2 className="profile-header">Edit Profile</h2>
        <div className="columns">
          <div className="left-column">
            <label>First Name</label>
            <input name="firstName" value={profile.firstName} onChange={handleChange} />

            <label>Last Name</label>
            <input name="lastName" value={profile.lastName} onChange={handleChange} />

            <label>Email</label>
            <input name="email" value={profile.email} onChange={handleChange} />

            <label>Phone</label>
            <input name="phone" value={profile.phone} onChange={handleChange} />

            <label>Address</label>
            <input name="address" value={profile.address} onChange={handleChange} />

            <label>Nation</label>
            <input name="nation" value={profile.nation} onChange={handleChange} />
          </div>

          <div className="right-column">
            <label>Gender</label>
            <select name="gender" value={profile.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <label>Language</label>
            <select name="language" value={profile.language} onChange={handleChange}>
              <option value="">Select</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>

            <label>Date of Birth</label>
            <div className="dob-group">
              <select name="dobMonth" value={profile.dobMonth} onChange={handleChange}>
                <option value="">Month</option>
                {[
                  'January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December',
                ].map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <select name="dobDay" value={profile.dobDay} onChange={handleChange}>
                <option value="">Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select name="dobYear" value={profile.dobYear} onChange={handleChange}>
                <option value="">Year</option>
                {[...Array(60)].map((_, i) => (
                  <option key={1965 + i}>{1965 + i}</option>
                ))}
              </select>
            </div>

            <label>Twitter</label>
            <input name="twitter" value={profile.twitter} onChange={handleChange} />

            <label>Facebook</label>
            <input name="facebook" value={profile.facebook} onChange={handleChange} />

            <label>LinkedIn</label>
            <input name="linkedin" value={profile.linkedin} onChange={handleChange} />

            <label>Google</label>
            <input name="google" value={profile.google} onChange={handleChange} />

            <label>Slogan</label>
            <input name="slogan" value={profile.slogan} onChange={handleChange} />
          </div>
        </div>

        <button className="save-btn" type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
