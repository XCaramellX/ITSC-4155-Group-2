import React from 'react';

import { Container, Row, Col, Card, Typography, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function BsTabs(props) {
    return (
        <Container className="py-4">
            <Row className='justify-content-center'>
                <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
                    <Tab eventKey="tab-1" title="Tab 1">
                        Tab 1 contant
                    </Tab>
                    <Tab eventKey="tab-2" title="Tab 2">
                        Tab 1 contant
                    </Tab>
                    <Tab eventKey="tab-3" title="Tab 3">
                        Tab 1 contant
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
}

export default BsTabs;