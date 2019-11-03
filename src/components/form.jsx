import React, { useState } from 'react';
import { Fade, Col, Row, Label, Container, FormGroup, Input, Form, CustomInput } from 'reactstrap';
import './form.css';
// import './func/getStructure';


const MyForm = (props) => {
    let state = {
        // classroom: fetch("getStructure.execute(")
        classroom: [
            {
                id: 12312,
                myClassName: "Class mane",
                mentor: "Joe Mentor",
                students: [
                    {
                        student: "Billy Bob",
                        averageGrade: "94",
                        assignments: [
                            {
                                assignmentName: "homework 1",
                                assignmentGrade: 94

                            }
                        ]
                    },
                    {
                        student: "Billy Bob Joe",
                        averageGrade: "50",
                        assignments: [
                            {
                                assignmentName: "homework 1",
                                assignmentGrade: 50

                            }
                        ]
                    },
                    {
                        student: "John Bob Joe",
                        averageGrade: "120",
                        assignments: [
                            {
                                assignmentName: "homework 1",
                                assignmentGrade: 120

                            }
                        ]
                    }
                ]

            }

        ]
    }
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    const disabled = true;
    return (
        <div className="form-bigBoi">
            <Form>
                <FormGroup className="form-header">
                    <div >
                        <Row className="form-text">

                            WELCOME TO GOOGLE CLASSROOM ANALYZER TM

                        </Row>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Container >
                        <Row className="form-text">
                            <Label for="selectMulti">Choose which classes to display!</Label>
                            <Input type="select" name="selectMulti" id="selectMulti" multiple>
                                {
                                    state.classroom.map((mclass, index) => {
                                        return (
                                            <option key={mclass.id}>{mclass.myClassName}</option>

                                        );
                                    })
                                }
                            </Input>
                        </Row>
                    </Container>
                </FormGroup>
                <FormGroup >
                    <Row>
                        <Col sm={6}>
                            <CustomInput type="checkbox" id="1" label="grade vs assignments (per student)" />
                        </Col>
                        <Col sm={6}>
                            <CustomInput type="checkbox" id="2" label="average grade vs assignment (classrooms)" onClick={toggle} />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col sm={6}>
                            <CustomInput type="checkbox" id="3" label="average grades vs classes (classrooms)" />
                        </Col>
                        <Col sm={6}>
                            <CustomInput type="checkbox" id="4" label="average grades of all classes" />
                        </Col>
                    </Row>

                </FormGroup>
            </Form>

        </div>
    );

}

export default MyForm;

