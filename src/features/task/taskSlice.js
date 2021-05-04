import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({

  name: 'task',
  initialState: {
    task:null,
  },
  reducers: {
    setTask:(state,{payload})=>{
        state.task = payload
    },
    insertTask: (state,{payload}) => {
        state.task.push(payload)
    },
    deleteTask: (state,{payload}) => {
        state.task = state.task.filter((c) => c.id !== payload)
    },
    procced:(state,{payload}) => {
      
        

        if(payload.position == 3){
            
        }else{
            const postion = payload.position + 1;
            const data = {
                "id": payload.id,
                "position": postion,
                "taskDes": payload.taskDes,
                "taskSub": payload.taskSub
            };
    
            state.task[payload.key] = data;
        }},
  },
})

// Action creators are generated for each case reducer function
export const { setTask, insertTask, deleteTask,procced } = taskSlice.actions;
// export const selectTask = ({task}) => task.task;
export default taskSlice.reducer