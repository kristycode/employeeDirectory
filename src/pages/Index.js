import React, { Component } from "react";
import Wrapper from "../components/Wrapper"
import EmployeesTable from "../components/EmployeesTable"
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";

class Index extends Component {
  render() {
    return (
    <div>
      <Hero backgroundImage="heroimage.png">
        <h1>nicktoon employees</h1>
        <h2>all of your favorite nicktoons-- now in a sortable table!!</h2>
        </Hero>
        <Wrapper>
        <Container style={{ marginTop: 20 }}>
        <Row>
      <EmployeesTable
        employees={[
          { id: 1, name: 'Spongebob', occupation: "Fry Cook", location: "A Pineapple Under the Sea" },
          { id: 2, name: 'Squidward', occupation: "Cashier", location: "An Easter Island Head" },
          { id: 3, name: 'Mr.Krabs', occupation: "Restaurant Owner", location: "A Giant Anchor" },
          { id: 4, name: 'Dexter', occupation: "Boy Genius", location: "A Secret Laboratory" },
          { id: 5, name: 'Courage', occupation: "A Cowardly Dog", location: "Nowhere, Kansas" },
          { id: 6, name: 'Doug Funnie', occupation: "Student", location: "Bluffington" },
          { id: 7, name: 'Bugs Bunny', occupation: "Looney Toon", location: "A Rabbit Burrow" },
        ]}
      />
      </Row>
      </Container>
      </Wrapper>
    </div>
    );
  }
}



export default Index;
