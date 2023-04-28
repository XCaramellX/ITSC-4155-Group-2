/*import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Background from '../components/Background';
import Header from '../components/Sign-In-Header';
import Button from '../components/Button';

import { Container, Row, Col, Card, Typography, Tab, Tabs } from 'react-bootstrap';

import ProfileImageAccount from '../components/ProfileImageAccount';
import BsTabs from '../components/Tabs'

//import 'bootstrap/dist/css/bootstrap.min.css';


import BackButton from '../components/BackButton';
import { theme } from '../themes/sign-in-theme';
import { AuthContext } from '../../context/auth';

{<div className="vh-100" style={{ backgroundColor: '#eee' }}>
  <MDBContainer className="container py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol md="12" xl="4">
        <MDBCard style={{ borderRadius: '15px' }}>
          <MDBCardBody className="text-center">
            <div className="mt-3 mb-4">
              <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                className="rounded-circle" fluid style={{ width: '100px' }} />
            </div>
            <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
            <MDBCardText className="text-muted mb-4">
              @Programmer <span className="mx-2">|</span> <a href="#!">mdbootstrap.com</a>
            </MDBCardText>
            <div className="mb-4 pb-2">
              <MDBBtn outline floating>
                <MDBIcon fab icon="facebook" size="lg" />
              </MDBBtn>
              <MDBBtn outline floating className="mx-1">
                <MDBIcon fab icon="twitter" size="lg" />
              </MDBBtn>
              <MDBBtn outline floating>
                <MDBIcon fab icon="skype" size="lg" />
              </MDBBtn>
            </div>
            <MDBBtn rounded size="lg">
              Message now
            </MDBBtn>
            <div className="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <MDBCardText className="mb-1 h5">8471</MDBCardText>
                <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
              </div>
              <div className="px-3">
                <MDBCardText className="mb-1 h5">8512</MDBCardText>
                <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
              </div>
              <div>
                <MDBCardText className="mb-1 h5">4751</MDBCardText>
                <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div> 




export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState([
    { name: "John Doe", email: "jDoe34@uncc.edu", category: "Music", experience: "Beginner", prompt: "Hello from the back end, We are connected", key: 1 },
  ]);

  const [prompts, setPrompts] = useState([
    { category: "Writing", experience: "Beginner", content: "Write a story about a character late to a special event.", key: 1 },
  ]);

  const [data, setData] = useState([
    { data: "Dummy Data 1", key: 1 },
    { data: "Dummy Data 2", key: 2 },
    { data: "Dummy Data 3", key: 3 },
    { data: "Dummy Data 4", key: 4 },
    { data: "Dummy Data 5", key: 5 },
    { data: "Dummy Data 6", key: 6 },
    { data: "Dummy Data 7", key: 7 },
    { data: "Dummy Data 8", key: 8 },
    { data: "Dummy Data 9", key: 9 },
    { data: "Dummy Data 10", key: 10 },
  ]);


  const onSignUpPressed = async () => {
    if (email == "" || password == "" || name == "") {
      alert("All fields must be filled out")
      return
    }


    const resp = await axios.post("http://172.16.9.28:8000/api/signup", { name, email, password, category, experience });
    if (resp.data.error) {
      alert(resp.data.error);
    } else {
      setState(resp.data);
      await AsyncStorage.setItem('auth-rn', JSON.stringify(resp.data));
      alert("Sign up Successful");
      navigation.navigate('Prompt');
    }

    console.log(resp.data);
  };


  return (

    <section style={{ backgroundColor: '#eee' }}>
      <Container style={styles.header}>
        <BackButton goBack={navigation.goBack} />
        { <Header style={{ color: 'black' }}>Create Account</Header> }
      </Container>
      <Container className="py-5">
        <Row>
          <Col lg="4">
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Card.Img
                  src={require('../assets/default_profile_picture.svg')}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
      <Container className="py-4">
        <Row className='justify-content-center'>
          <Tabs defaultActiveKey="1" id="fill-tab-example"
            className="mb-3"
            fill>
            <Tab eventKey="1" title="Posts">
              <View style={styles.scrollContainer}>
                <ScrollView>
                  {data.map((item) => {
                    return (
                      <Container >
                        <Row key={item.key} style={styles.container}>
                          <Col md="12" xl="4">
                            <Card style={styles.card}>
                              <Card.Body className="text-center">
                                <Text style={styles.item}>{item.data}</Text>
                                <Card.Text className="text-muted mb-4">
                                  @Programmer <span className="mx-2">|</span>{' '}
                                  <a href="#!">mdbootstrap.com</a>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    );
                  })}
                  <View >
                  </View>
                </ScrollView>
              </View>
            </Tab>

            { Comments }
            <Tab eventKey="2" title="Comments">
              <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                  <Col xl="10">
                    <Card className="mb-5" style={{ borderRadius: '15px' }}>
                      <Card.Body className="p-4">
                        <Card.Header tag='h3'>Program Title</Card.Header>
                        <Card.Text className="small">
                          <span className="mx-2">|</span> Created by <strong>MDBootstrap</strong> on 11 April , 2021
                        </Card.Text>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-start align-items-center">
                          <Card.Text className="text-uppercase mb-0">
                          </Card.Text>
                          <Card.Text className="text-uppercase mb-0">
                          </Card.Text>
                          <Card.Text className="text-uppercase mb-0">
                          </Card.Text>


                           Click on user img to go to prifile
                            
                            <a href="#!">
                              <Card.Img
                                width="35"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                                alt="avatar"
                                className="rounded-circle me-3"
                                fluid />
                            </a> 

                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="3" title="About">
              <Col lg="8">
                <Card className="mb-4">
                  <Card.Body>
                    <Row>
                      <Col sm="3">
                        <Card.Text>Full Name</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">user.name</Card.Text>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm="3">
                        <Card.Text>Email</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">example@example.com</Card.Text>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm="3">
                        <Card.Text>Phone</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">(097) 234-5678</Card.Text>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm="3">
                        <Card.Text>Mobile</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">(098) 765-4321</Card.Text>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm="3">
                        <Card.Text>Address</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">Bay Area, San Francisco, CA</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </section>

  )
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: theme.colors.primary,
    color: theme.colors.background,
    flexGrow: 1,

    justifyContent: 'center',
    textAlign: 'center',
  },
  background: {
    backgroundColor: theme.colors.background,
    flexGrow: 1,


    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    borderRadius: '50px',
    marginTop: 24,
    padding: 30,
  },

  item: {
    fontSize: 24,
  },

  scrollContainer: {
    flexGrow: 1,
    padding: 10,
    justifyContent: 'center',
  },





}) */
