const redux = require("redux");                 //import redux
const createStore=redux.createStore;            //create a store

initialState={                                  //create a state
                    numberofBooks:10,
                    loading:true
        }

  

 //------------action creater function which returns action{type,payload}-----------------
function buyBook(){                            
    return {
        type:"Buy_Book",
        payload:"My Book store"
    }
}



//---------Reducer is used to update state-----------------------

const Reducer=(state=initialState,action)=>                                     //create a reducer function that takes 2 parameters(prevState,action)
{                             

   //you can use switch() case inside Reducer function and compare actions with it & on                                                                   on the basis of action you can return state or update your state
    switch(action.type)                                                  
    {
            case "Buy_Book":
                return{
                    ...state,
                    numberofBooks:state.numberofBooks-1
                }

                default:return state;
                
    }
}

const reduxStore=createStore(Reducer);
console.log("Initial value of state",reduxStore.getState());                                 //getState() is used to retrieve state values using reduxStore
reduxStore.subscribe(()=>{console.log("Updated value of state ", reduxStore.getState())});   //subscribe(()=>{}) is used to retrieve update state values 
reduxStore.dispatch(buyBook());   
reduxStore.dispatch(buyBook());  
reduxStore.dispatch(buyBook());                                                             //unless you don't use dispatch(action) state will not get updated
