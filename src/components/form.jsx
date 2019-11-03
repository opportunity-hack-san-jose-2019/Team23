import React, { useState } from 'react';
import { Col, Row, Label, Container, FormGroup, Input, Form, CustomInput } from 'reactstrap';



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
                
            },
            {   
                id: 124121,
                myClassName: "yo class haha",
                mentor: "The Good Mentor",
                students: [ 
                    {
                        student: "Sick memes bruh",
                        averageGrade: "20",
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
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const disabled = true;
    return (
        <Form>
        
            <FormGroup>
                <Container>
                    <Row>
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
            <FormGroup>
                <Row> 
                    <Col sm={6}>
                        <CustomInput type ="checkbox" id="1" label="grade vs assignments (per student)" disabled= {disabled & toggle}/>
                        
                    </Col>
                    <Col sm={6}>
                        <CustomInput type ="checkbox" id="2" label="average grade vs assignment (classrooms)" disabled= {disabled & toggle}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <CustomInput type ="checkbox" id="3" label="average grades vs classes (classrooms)" />
                    </Col>
                    <Col sm={6}>
                        <CustomInput type ="checkbox" id="4" label="average grades of all classes"  />
                    </Col>              
                </Row>
                <Row>
                    <Col>
                            <CustomInput type ="checkbox" id="5" label="All" onClick={( )=>{toggle()}}/>   
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    );
}

export default MyForm;

