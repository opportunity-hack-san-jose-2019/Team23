import React, { useState } from 'react';
import { Fade, Col, Row, Label, Container, FormGroup, Input, Form, CustomInput } from 'reactstrap';
import Graphs4 from './graphs4'
import Graphs3 from './graphs3'
import Graphs2 from './graphs2'
import Graphs1 from './graphs1'
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

            },
            {
                id: 12312,
                myClassName: "the second class mane",
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
    const [fadeIn1, setFadeIn1] = useState(false);
    const [fadeIn2, setFadeIn2] = useState(false);
    const [fadeIn3, setFadeIn3] = useState(false);
    const [fadeIn4, setFadeIn4] = useState(false);

    const toggle1 = () => setFadeIn1(!fadeIn1);
    const toggle2 = () => setFadeIn2(!fadeIn2);
    const toggle3 = () => setFadeIn3(!fadeIn3);
    const toggle4 = () => setFadeIn4(!fadeIn4);


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
                            <p> Use control + left click to select multiple classes and those will be the classes whose graphs are displayed. </p>
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
                <p> Select which graphs you want by checking the checkboxes! </p>
                <FormGroup className="form-button">
                    <Col>
                        <Row sm={6}>
                            <CustomInput type="checkbox" id="1" label="grade vs assignments (per student)" onClick={toggle1} />
                        </Row>
                        <Row sm={6}>
                            <CustomInput type="checkbox" id="2" label="average grade vs assignment (classrooms)" onClick={toggle2} />
                        </Row>
                    </Col>
                    <Col>
                        <Row sm={6}>
                            <CustomInput type="checkbox" id="3" label="average grades vs classes (classrooms)" onClick={toggle3} />
                        </Row>
                        <Row sm={6}>
                            <CustomInput type="checkbox" id="4" label="average grades of all classes" onClick={toggle4} />
                        </Row>
                    </Col>
                </FormGroup>
            </Form>
            <Fade in={fadeIn1} >
                <Graphs1 />
            </Fade>
            <Fade in={fadeIn2}>
                <Graphs2 />
            </Fade>
            <Fade in={fadeIn3}>
                <Graphs3 />
            </Fade>
            <Fade in={fadeIn4}>
                <Graphs4 />
            </Fade>

        </div>
    );

}

export default MyForm;

