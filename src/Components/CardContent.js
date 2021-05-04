import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import dbJson from '../db.json';
import {setTask,deleteTask,procced} from '../features/task/taskSlice';
import {useDispatch,useSelector} from 'react-redux';
import { CardBody, CardButtons, CardDescription, CardSubject, CardText, Content } from './ComponentStyle/CardContentStyle';

function CardContent({cardtext,status}) {

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.task)
    
    const removeTask = async (id) => {
        try {
            dispatch(deleteTask(id));
        } catch (err) {
          console.log(err)
        }
      };
    
 

    const fetchTask =  () => {
        try {
            dispatch(setTask(dbJson.task))
          } catch (err) {
            console.log(err)
          } 
      };

      const proccedTask = (data,key) => {
        data = { ...data, "key":key};
        dispatch(procced(data))
      };

      useEffect(() => fetchTask(), [dispatch]);

    return (<Content>

        <CardText>
        {cardtext}
        </CardText>


{

    tasks?.length > 0 ? (

        tasks.map((data,key) =>
        
        data.position == status ?  <CardBody key={data.id}>
    
        <CardSubject>
           {data.taskSub}
        </CardSubject>

        <CardDescription>
        {data.taskDes}
        </CardDescription>

        <CardButtons>
            <button onClick={()=>proccedTask(data,key)}>
                Procced
            </button>

            <button onClick={()=>removeTask(data.id)}>
            Delete
             </button>
        </CardButtons>

   </CardBody> :''
      )): <CardBody>
      Empty
      </CardBody>
    }
        

     </Content>);
}

export default CardContent;

