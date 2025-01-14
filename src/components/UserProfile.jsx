import React, { useState } from "react";
import PropTypes from "prop-types";
import CloseButton from "./CloseButton";
import "../assets/UserProfile.css";

function UserProfile({ themeMode }) {
  const [isOpen, setIsOpen] = useState(true);

  

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <>
      {isOpen && (
        <div className={`Userprofile ${themeMode}`}>
          <div className={`Userprofile-header ${themeMode}`}>
            <h3 className="Userprofile-title">Userprofile</h3>
            <CloseButton handleClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}
UserProfile.propTypes = {
  themeMode: PropTypes.bool,
};

export default UserProfile;
