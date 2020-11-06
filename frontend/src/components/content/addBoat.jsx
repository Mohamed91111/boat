import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'; 
import {InputGroup , FormControl} from 'react-bootstrap';
import './addBoat.css'




export default function Addboat() {
  const [addboat, setaddboat] = useState('');
  const [addyear, setaddyear] = useState('');
  const [addprice, setaddprice] = useState('');
  const [addsail, setaddsail] = useState(false);
  const [addengine, setaddengine] = useState(false);
  

  const boat = {};


 const addList = (boat) => {
    axios.post('http://localhost:1337/boat/add', boat).then((res) => {
      console.log(res.data);

      window.location.reload();
    });
  };

  
  function sendBoat() {
    boat.boatModel = addboat;
    boat.yearModel = parseInt(addyear);
    boat.price = parseInt(addprice);
    boat.sailboat = addsail;
    boat.engine = addengine;

    addList(boat);
  }

 

  return (
    <div>
      <h4>New Boat</h4>
       <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Model</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl placeholder="The boat model.." value={addboat}
        onChange={(e) => setaddboat(e.target.value)}
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
      <br />
      <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Manufacturing Year</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    placeholder="Manufacturing year..."
        value={addyear}
        onChange={(e) => setaddyear(e.target.value)}
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
      <br />
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text>Price</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="The price?" value={addprice}
          onChange={(e) => setaddprice(e.target.value)} aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Append>
        <InputGroup.Text>SEK</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <br />
    

      <label htmlFor="Sailboat">Sailing Boat </label>
      <input
        onChange={() => setaddsail(addsail ? false : true)}
        id="sailboat"
        type="checkbox"
      ></input>

      <label htmlFor="engine">Engine Boat </label>
      <input
        onChange={() => setaddengine(addengine ? false : true)}
        id="engine"
        type="checkbox"
      ></input>
      <Button variant="outline-dark" onClick={sendBoat}>Add New Boat</Button>
    </div>
  );
}
