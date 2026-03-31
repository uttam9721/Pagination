// // import React from 'react'
// // import SmartLoader from "cb-react-smart-loader";
// // const App = () => {
// //   return (
// //     <div>

// //       <SmartLoader />
// //       {/* <SmartLoader size="lg" color="red" /> */}

// //       {/* Small loader, custom green color */}
// //       <SmartLoader size="sm" color="#00ff00" speed={3} />
// //     </div>
// //   )
// // }

// // export default App

// import React from "react";
// // import UserList from "./UserList";
// import UserList from "../pages/UserList";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <UserList />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
const PricingToggle = () => {
  const [plan, setPlan] = useState("free");
  return (
    <div style={styles.container}>
      <h1>Upgrade Your Plan</h1>
      {/* Toggle Buttons */}
      <div style={styles.toggle}>
        <button
          style={plan === "free" ? styles.activeBtn : styles.btn}
          onClick={() => setPlan("free")}
        >
          Free
        </button>
        <button
          style={plan === "premium" ? styles.activeBtn : styles.btn}
          onClick={() => setPlan("premium")}
        >
          Premium
        </button>
      </div>
      {/* Plan Card */}
      <div style={styles.card}>
        {plan === "free" ? (
          <>
            <h2>Free Plan</h2>
            <p>Perfect for beginners</p>
            <h3>₹0 / month</h3>
            <ul>
              <li>✔ Basic Features</li>
              <li>✔ Community Support</li>
              <li>✖ No Analytics</li>
            </ul>
          </>
        ) : (
          <>
            <h2>Premium Plan</h2>
            <p>Best for professionals</p>
            <h3>₹999 / month</h3>
            <ul>
              <li>✔ All Features</li>
              <li>✔ Priority Support</li>
              <li>✔ Advanced Analytics</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
export default PricingToggle;
// Simple inline styles
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  toggle: {
    display: "inline-flex",
    background: "#ddd",
    padding: "4px",
    borderRadius: "30px",
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  activeBtn: {
    padding: "10px 20px",
    border: "none",
    background: "#000",
    color: "#fff",
    borderRadius: "30px",
    cursor: "pointer",
  },
  card: {
    width: "300px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
};
