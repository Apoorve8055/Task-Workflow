import { configureStore } from '@reduxjs/toolkit'
import taskSlice from '../features/task/taskSlice'; 

export default configureStore({
  reducer: {
    task:taskSlice,
  },
})