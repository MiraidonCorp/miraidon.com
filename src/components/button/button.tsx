import React, { AnchorHTMLAttributes, Component } from "react"
import "./button.scss"

type Buttons = "button" | "reset" | "submit" | undefined;

interface ButtonProps{
    entryTitle: string,
    id?: string,
    label: string,
    mimeType: string,
    type: Buttons,
    name: string
}


const Button = (props: ButtonProps) => {
    return(<button type={props.type} name={props.name}>{props.label}</button>);
}

export default Button;