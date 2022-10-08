import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

const items = [
    {
        title: 'What is react?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        title: 'Why use react?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        title: 'How do you use react?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
]

export default () => {
    return <div><Dropdown options={options}/></div>

}