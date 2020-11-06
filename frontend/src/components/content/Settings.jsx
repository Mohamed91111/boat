import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table'

import { Button } from 'react-bootstrap';
import './Settings.css';







export default function Settings() {
  const [boats, setBoats] = useState([]);
  const baseUrl = 'http://localhost:1337/';
  useEffect(() => {
    axios
      .get(`${baseUrl}boat`)
      .then((res) => {
        setBoats(res.data);
      })
      .catch((err) => console.log('ERROR ---> ' + err));
  }, []);
  

  const getList = () => {
    axios.get('http://localhost:1337/boat').then((res) => {
      setBoats(res.data);
    });
  };

  const boatsToShow = boats.map((e) => {
    return (
      <tr key={e._id}>
        <td>{e.boatModel}</td>
        <td>{e.yearModel}</td>
        <td>{e.price} SEK</td>
        <td>{e.sailboat ? 'yes' : 'no'}</td>
        <td>{e.engine ? 'yes' : 'no'}</td>
        <td>
          <Button variant="outline-info" onClick={() => del(e._id)}>Delete</Button>
        </td>
      </tr>
    );
  });
 
  function del(id) {
    axios.delete('http://localhost:1337/boat/' + id).then((res) => {
      console.log('Boat Has been deleted!');
      getList();
    });
  }
  
  return (
    <div className="homeContainer">
      <h4>Delete Boat</h4>
      <div>
      <Table striped bordered hover variant="dark">
          <tr>
            <th>Model Name</th>
            <th>Year</th>
            <th>Price</th>
            <th>Sail</th>
            <th>Engine</th>
            <th>Action</th>
          </tr>
          {boatsToShow}
        </Table>
      </div>
    </div>
  );
}
