import React,{useState} from 'react';
import "./Chatbox.css";
import  styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots} from '@fortawesome/free-solid-svg-icons'
import { Segment } from 'semantic-ui-react';
import ChatBot from "react-simple-chatbot";
import { Tooltip } from '@mui/material';

const Chatbox = () => {
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
   /*  const closePopup=()=>{
        setPop(false)
    } */

    const steps=[
        {

            id: "Greet",
      
            message: "Hello, Welcome to our shop",
      
            trigger: "Done",
      
          },
      
          {
      
            id: "Done",
      
            message: "Please enter your name!",
      
            trigger: "waiting1",
      
          },
      
          {
      
            id: "waiting1",
      
            user: true,
      
            trigger: "Name",
      
          },
      
          {
      
            id: "Name",
      
            message: "Hi {previousValue}, Please select your issue",
      
            trigger: "issues",
      
          },
      
          {
      
            id: "issues",
      
            options: [
      
              {
      
                value: "React",
      
                label: "React",
      
                trigger: "React",
      
              },
      
              { value: "Angular", label: "Angular", trigger: "Angular" },
      
            ],
      
          },
      
          {
      
            id: "React",
      
            message:
      
              "Thanks for letting your React issue, Our team will resolve your issue ASAP",
      
            end: true,
      
          },
      
          {
      
            id: "Angular",
      
            message:
      
              "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
      
            end: true,
      
          },
    ];

    
  return (
    <React.Fragment>
    <div>
    <Wrapper><button className='chatbutton' onClick={handleClickOpen}><Tooltip title="Chat with us" placement="top"><FontAwesomeIcon icon={faCommentDots} /></Tooltip></button></Wrapper>
    <div>
        {
            popup?
            <div className="main">
                        <Segment floated='center'>
                        <ChatBot steps={steps} />
                        </Segment>
            </div>:""
        }
    </div>
</div>
    </React.Fragment>
  )
}

const Wrapper = styled.section`
display: flex;
justify-content:center;
align-items:center;

.chatbutton{
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    color: white;
    background-color: rgb(155, 101, 31);
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right:3rem;
    z-index: 99;
    display:flex;
    justify-content: center;
    cursor: pointer;


.icon{
    animation: gototop 1.3s linear infinite alternate-reverse;
    width:30px;
    height:30px;
    padding-top:5px;
    

}


@media (max-width:550px) {
    .chatbutton {
        display: none;
        margin: 0 auto;
        width:10px;
    height:10px;
    }
}

}
`;

export default Chatbox