// // import React, { useReducer } from 'react';

// // const initialState = {
// //   theme: "light",
// // };

// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case "TOGGLE_THEME":
// //       return {
// //         ...state,
// //         theme: state.theme === "light" ? "dark" : "light",
// //       };

// //     default:
// //       return state;
// //   }
// // };

// // const App = () => {
// //   const [state, dispatch] = useReducer(reducer, initialState);

// //   return (
// //     <div
// //       style={{
// //         height: "100vh",
// //         background: state.theme === "light" ? "#ffffff" : "#111111",
// //         color: state.theme === "light" ? "#000000" : "#ffffff",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         flexDirection: "column",
// //       }}
// //     >
// //       <h1>{state.theme.toUpperCase()} MODE</h1>

// //       <button
// //         onClick={() => dispatch({ type: "TOGGLE_THEME" })}
// //         style={{
// //           padding: "10px 20px",
// //           borderRadius: "8px",
// //           border: "none",
// //           cursor: "pointer",
// //           background: "#4f46e5",
// //           color: "#fff",
// //           fontSize: "16px",
// //           marginTop: "20px",
// //         }}
// //       >
// //         Switch Theme
// //       </button>
// //     </div>
// //   );
// // };

// // export default App;



// // import React, { useReducer } from 'react'

// // const initial={
// //   theme:"light"
// // }

// // const reduce=(state,action)=>{
// //   switch(action.type){
// //     case "Toggle":
// //       return{
// //         ...state,
// //         theme:state.theme==="light"?"dark":"light"
// //       }
// //   }
// // }

// // const App = () => {
// //   const [state,dispatch]=useReducer(reduce,initial);
// //   return (
// //     <div
// //     style={{
// //       background:state.theme==="light"?"#ffffff":"#111111",
// //      color: state.theme === "light" ? "#000000" : "#ffffff",
// //     }}
// //     >
// //       <h1>Toggle</h1>
// //       <button onClick={()=>dispatch({type:"Toggle"})}>Theme</button>
// //     </div>
// //   )
// // }

// // export default App




// import React, { useReducer } from 'react'
// const initial={
//   theme:"light"
// }

// const reduce=(state,action)=>{
//   switch(action.type){
//     case "Toggle":
//       return{
//         ...state,
//         theme:state.theme==="light"?"dark":"light"
//       }

//   }
// }

// const App = () => {
//   const [state,dispatch]=useReducer(reduce,initial);

//   return (
//     <div
//     style={{
//       background:state.theme==="light"?"#ffffff":"#111111",
//       color:state.theme==="light"?"#000000":"#11111",
//       height:"100vh"
      
//     }}
//     >
//       <button onClick={()=>dispatch({type:"Toggle"})}>Theme Changer</button>
//       <h1>{state.theme.toUpperCase()}Mode</h1>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Box from './component/Box'

const App = () => {
  return (
    <div>
      <Box />
    </div>
  )
}

export default App
