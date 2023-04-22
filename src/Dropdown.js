import React from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown() {
  return (
    <div className='container' style={{display:'flex' ,flexDirection:'column'}}>
      <h1>Dropdown</h1>
    <label for="fname">Nature of Query</label>
    {/* <input type="text" id="fname" name="firstname" placeholder="Enter your Query here"></input> */}
    <select id="country" name="country">
      <option value="australia">Select the nature of Query</option>
      <option value="australia">General</option>
      <option value="canada">Workshop Related</option>
      <option value="usa">Order Related</option>
      <option value="usa">Collaboration</option>
      <option value="usa">Volunteer</option>
      <option value="usa">Invite Us</option>
    </select>
    <label for="fname">Nature of Query</label>
    {/* <input type="text" id="fname" name="firstname" placeholder="Enter your Query here"></input> */}
    <select id="country" name="country">
      <option value="australia">Select the nature of Query</option>
      <option value="australia">General</option>
      <option value="canada">Workshop Related</option>
      <option value="usa">Order Related</option>
      <option value="usa">Collaboration</option>
      <option value="usa">Volunteer</option>
      <option value="usa">Invite Us</option>
    </select>
    <label for="fname">Nature of Query</label>
    {/* <input type="text" id="fname" name="firstname" placeholder="Enter your Query here"></input> */}
    <select id="country" name="country">
      <option value="australia">Select the nature of Query</option>
      <option value="australia">General</option>
      <option value="canada">Workshop Related</option>
      <option value="usa">Order Related</option>
      <option value="usa">Collaboration</option>
      <option value="usa">Volunteer</option>
      <option value="usa">Invite Us</option>
    </select>
    <label for="fname">Nature of Query</label>
    {/* <input type="text" id="fname" name="firstname" placeholder="Enter your Query here"></input> */}
    <select id="country" name="country">
      <option value="australia">Select the nature of Query</option>
      <option value="australia">General</option>
      <option value="canada">Workshop Related</option>
      <option value="usa">Order Related</option>
      <option value="usa">Collaboration</option>
      <option value="usa">Volunteer</option>
      <option value="usa">Invite Us</option>
    </select>
    <label for="fname">Nature of Query</label>
    {/* <input type="text" id="fname" name="firstname" placeholder="Enter your Query here"></input> */}
    <select id="country" name="country">
      <option value="australia">Select the nature of Query</option>
      <option value="australia">General</option>
      <option value="canada">Workshop Related</option>
      <option value="usa">Order Related</option>
      <option value="usa">Collaboration</option>
      <option value="usa">Volunteer</option>
      <option value="usa">Invite Us</option>
    </select>
    <label for="fname">Nature of Query</label>
    {/* <input type="text" id="fname" name="firstname" placeholder="Enter your Query here"></input> */}
    <select id="country" name="country">
      <option value="australia">Select the nature of Query</option>
      <option value="australia">General</option>
      <option value="canada">Workshop Related</option>
      <option value="usa">Order Related</option>
      <option value="usa">Collaboration</option>
      <option value="usa">Volunteer</option>
      <option value="usa">Invite Us</option>
    </select>
    <Link to="/"><button type="button" class="btn btn-primary btn my-3">Large button</button></Link>

    </div>
  )
}
