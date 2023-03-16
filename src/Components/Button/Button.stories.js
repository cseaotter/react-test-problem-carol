import React from 'react';
import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story } from '@storybook/addon-docs';

// Meta data about the story and
// its respective component
export default {
    title:"Button",
    component:Button,
    argTypes: {
        handleClick: {action: "HandleClick"},
    },
};

const Template = args => <Button {...args} />
export const Small = Template.bind({})
Small.args = {
    backgroundColor: "red",
    label: "First Task",
    size: "small",
}

export const Medium = Template.bind({})
Medium.args = {
    backgroundColor: "green",
    label: "Second Task",
    size: "medium",
}

export const Large = Template.bind({})
Large.args = {
    backgroundColor: "blue",
    label: "Third Task",
    size: "large",
}

//export const Login = () => <Button variant='Login'>Login</Button>
//export const SignIn = () => <Button variant='sign-in'>Sign In</Button>

//export const Primary = () => <Button primary>Button</Button>;
