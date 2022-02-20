import React, { useContext } from "react";
import StylesContext from "./StylesContext"


function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling} type="submit" value="Submit">
        Submit
      </button>
      
    </div>
  );
}

export default RequestFormButton