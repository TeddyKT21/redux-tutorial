import {createSlice,PayloadAction} from '@reduxjs/toolkit'
interface CountSliceState {
    count:number
}


const initialState:CountSliceState = {count:0}

const countSlice = createSlice({
    name:'countSlice',
    initialState:initialState,
    reducers:{
        add(state:CountSliceState){
            state.count++;
            return state
        },
        sub(state:CountSliceState){
            state.count--;
            return state
        },
        addByAmount(state:CountSliceState,action:PayloadAction<number>){
            state.count += action.payload;
            return state
        },
    }
})

export const { add, sub,addByAmount } = countSlice.actions;
export default countSlice.reducer;