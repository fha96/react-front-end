import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';
import axios from "axios";
export default class Person extends React.Component {


    constructor(props){
        super(props);
        this.state={
            showData:false,
            data:{}
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const data ={
            name:e.target.formBasicName.value,
            age:e.target.formBasicAge.value,
            gender:e.target.formBasicGender.value
        }
        console.log(data);
        const url = `${process.env.REACT_APP_EXPRESS_SERVER}/person`;
        const newData = await axios.post(url,data);
        console.log(newData.data);
        this.setState({
            showData:true,
            data:newData.data
        });

    }
  render() {
    return (
      <>
        <Form data-testid='form' onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>age</Form.Label>
            <Form.Control type="text" placeholder="age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="gender" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {
            this.state.showData && 
       
                <Table data-testid='table'  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>New Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>{this.state.data.name}</td>
          <td>{this.state.data.age}</td>
          <td>{this.state.data.gender}</td>
        </tr>
      </tbody>
    </Table>
        }
      </>
    );
  }
}
