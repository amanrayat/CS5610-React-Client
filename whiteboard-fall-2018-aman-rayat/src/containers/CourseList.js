import React from 'react';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import CourseTableHeading from "../components/CourseTableHeading";

export default class CourseList extends React.Component{
    constructor(){
        super();
        this.state = {
            view : 0,
            courses : [
                {
                    "id": "123",
                    "title": "Course 1",
                    "OwnedBy" : "Aman",
                    "modules": [
                        {
                            "id": "123",
                            "title": "Module 1 1",
                            "lessons": [
                                {
                                    "id": "123",
                                    "title": "Lesson 1 1 1",
                                    "topics": [
                                        {"title": "Topic 1 1 1 1"}
                                    ]
                                },
                                {
                                    "id": "234",
                                    "title": "Lesson 1 1 2",
                                    "topics": [
                                        {"title": "Topic 1 1 2 1"}
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "234",
                            "title": "Module 1 2",
                            "lessons": [
                                {
                                    "id": "345",
                                    "title": "Lesson 1 2 1",
                                    "topics": [
                                        {"title": "Topic 1 2 1 1"}
                                    ]
                                },
                                {
                                    "id": "456",
                                    "title": "Lesson 1 2 2",
                                    "topics": [
                                        {"title": "Topic 1 2 2 1"}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "234",
                    "title": "Course 2",
                    "OwnedBy" : "Jose Annunziato",
                    "modules": [
                        {
                            "id": "345",
                            "title": "Module 2 1",
                            "lessons": [
                                {
                                    "id": "567",
                                    "title": "Lesson 1 3 1"
                                },
                                {
                                    "id": "678",
                                    "title": "Lesson 1 3 2"
                                }
                            ]
                        },
                        {
                            "id": "456",
                            "title": "Module 2 2"
                        }
                    ]
                },
                {
                    "id": "345",
                    "title": "Course 3",
                    "OwnedBy" : "Rajmohan Rajaraman",
                    "modules": [
                        {
                            "id": "567",
                            "title": "Module 3 1"
                        },
                        {
                            "id": "678",
                            "title": "Module 3 2"
                        }
                    ]
                },
                {
                    "id": "456",
                    "title": "Course 4",
                    "OwnedBy" : "Mike ",

                }
            ]
        }
    }

    render(){
        return (
            <div>
            <CourseTableHeading/>
            {this.state.view?<CourseTable courses={this.state.courses}/>:<CourseGrid courses={this.state.courses}/>}
            </div>
        )
    }
}