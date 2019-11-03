import React, { useState } from 'react';
import { Fade, Col, Row, Label, Container, FormGroup, Input, Form, CustomInput } from 'reactstrap';
import './form.css';


const MyForm = (props) => {
    let state = {
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
                                assignmentGrade: "assignment grade"

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
                            <CustomInput type="checkbox" id="1" label="grade vs assignments (per student)" />
                        </Row>
                        <Row sm={6}>
                            <CustomInput type="checkbox" id="2" label="average grade vs assignment (classrooms)" onClick={toggle} />
                        </Row>
                    </Col>
                    <Col>
                        <Row sm={6}>
                            <CustomInput type="checkbox" id="3" label="average grades vs classes (classrooms)" />
                        </Row>
                        <Row sm={6}>
                            <CustomInput type="checkbox" id="4" label="average grades of all classes" />
                        </Row>
                    </Col>
                </FormGroup>
            </Form>

        </div>
    );

}

export default MyForm;

