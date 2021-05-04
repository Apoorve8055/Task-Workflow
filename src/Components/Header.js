import React, { useState } from 'react';
import Modal from 'react-modal';
import {useDispatch } from 'react-redux';
import {insertTask} from '../features/task/taskSlice';
import { v4 as uuidv4 } from 'uuid';
import { AddItemsButton, Button, Container, Content, customStyles, HeadLine, LOGO, NAV } from './ComponentStyle/HeaderStyle';

const Header = () => {
    
    const dispatch = useDispatch();
    const [subject, setSubject] = useState("");
    const [des, setDes] = useState("");
    const [popUp, setpopUp] = useState(false);


    function openModal() {
      setpopUp(true);
    }

    function closeModal(){
      setpopUp(false);
    }
  

    const entryhandler = (e) => {
        if(e.target.name == "sub"){
            setSubject(e.target.value);
        }
        if(e.target.name == "des"){
            setDes(e.target.value);
        }
    };
    
    
    const addTask = () =>{
       
        const data = {
            "id":uuidv4(),
            "taskSub":subject,
            "taskDes":des,
            "position":0
          };

          try{
            dispatch(insertTask(data));
            closeModal()    
          }catch(err){
              console.log(err);
          }
       };
    

    return (
        <NAV>

            <LOGO>
                TASK WORKFLOW
            </LOGO>

            <AddItemsButton onClick={()=>openModal()}>
            <i class="fa fa-plus" aria-hidden="true">
            </i>
            </AddItemsButton>

            <Modal  
            isOpen={popUp}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add Task"
            parentSelector={() => document.getElementById('main')}
                    >
                    <Container>
                    <HeadLine>Add Task</HeadLine>
                    <Content>
                        <span>Subject: </span>
                        <input 
                            onChange={(e)=>entryhandler(e)}
                            name="sub" 
                        
                        />
                    </Content>
                    
                    <Content>
                    <span>Description: </span>
                    <input 
                    onChange={(e)=>entryhandler(e)}
                    name="des" 
                
                    />
                    </Content>
                    
                    <Content>
                        <Button onClick={()=>addTask()}>Add Task</Button>
                        <Button onClick={()=>closeModal()}>close</Button>
                    </Content>
                    </Container>
                    
                    </Modal>
        </NAV>
    )
}

export default Header;