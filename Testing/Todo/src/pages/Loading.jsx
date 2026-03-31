import React from "react";
import SmartLoader from "cb-react-smart-loader";

const Loading=()=> {
  return (
    <div>
      {/* Default size and color */}
      {/* <SmartLoader /> */}

      {/* Large size, red color */}
      {/* <SmartLoader size="lg" color="red" /> */}

      {/* Small size, custom color */}
      <SmartLoader size="sm" color="green" />
    </div>
  );
}

export default Loading;
