import React, { useRef, useState } from "react"
import { graphql } from "gatsby"
import RichText from "../richtext/richtext"
import "./form.scss"

const ContentfulForm = (props) => {

    let [showForm, hideForm] = useState(true);
    
    const getFormChildrens = (itm) =>{
        let input:any;

            if(itm.richText){
                return <RichText raw={itm.richText.raw}></RichText>
            }else if(itm.optionType){

                switch(itm.optionType) {

                    case "Checkbox":
                        return(itm.items.map( (item) => {
                            return (<div className="formgroup">
                                <label>
                                    <input name={itm.name} type="checkbox"/>
                                    <span>{item}</span>
                                </label>
                            </div>)
                        }))
                    break;

                    case "Radio":
                        return null;
                    break;

                    case "Select":
                    return(<div className="formgroup"> 
                            <label htmlFor={itm.formLabelFor}>{itm.label}</label>
                                <select name={itm.name}>
                                {itm.items.map( (item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })}
                            </select>
                            </div>);
                    break;

                }

            }else if(itm.inputType){

                switch(itm.inputType) {
                    case "Text":
                        input = <input type="text" name={itm.name}></input>
                    break;

                    case "Password":
                        input = <input type="password" name={itm.name}></input>
                    break;

                    case "Email":
                        input = <input type="email" name={itm.name}></input>
                    break;

                    case "Number":
                        input = <input type="number" name={itm.name}></input>
                    break;
                }

                return(
                    <div className="formgroup">
                        <label htmlFor={itm.for}>{itm.formLabel}</label>
                        {input}
                    </div>
                )

            }else{
                return <button className="btn btn-primary" type={itm.type}>{itm.label}</button>
            }
    }

    const handleSubmit = (e) => {
        
        debugger;
        showForm = false;
        e.preventDefault();
    }

    return (

         <div className="formcontainer">
            <form onSubmit={handleSubmit}>
                {props.content.formContainerC.map( itm => {
                    return (
                        getFormChildrens(itm)
                    )
                })} </form> 
        </div>
    )
}


export const query = graphql`
  fragment FormContent on ContentfulForm {
        ... on ContentfulForm {
          id
          formContainerC {
            ... on ContentfulButton {
              id
              name
              label
              type
            }
            ... on ContentfulFormGroupOptions {
              id
              name
              for
              items
              optionType
              groupName
              label
            }
            ... on ContentfulFormGroupText {
              id
              name
              for
              formLabel
              inputType
              groupName
            }
            ... on ContentfulText {
              id
              richText {
                raw
              }
            }
          }
          action
        }

  }
`

export default ContentfulForm;