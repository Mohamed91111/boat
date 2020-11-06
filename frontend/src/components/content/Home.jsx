import React, { useEffect, useState } from 'react';
import axios from 'axios';


import AddBoat from './addBoat';
import Table from 'react-bootstrap/Table'
import './Home.css';


export default function Home() {
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

  const boatsToShow = boats.map((e) => {
    return (
      <tr key={e._id}>
        <td>{e.boatModel}</td>
        <td>{e.yearModel}</td>
        <td>{e.price} SEK</td>
        <td>{e.sailboat ? 'yes' : 'no'}</td>
        <td>{e.engine ? 'yes' : 'no'}</td>
      </tr>
    );
  });

  
  return (
    <div className="homeContainer">
      <div>
        <AddBoat />
      </div>
      <Table striped bordered hover variant="dark">
        <tr>
          <th>Model Name</th>
          <th>Year</th>
          <th>Price</th>
          <th>Sail</th>
          <th>Engine</th>
        </tr>
        {boatsToShow}
      </Table>
    </div>
  );
}
