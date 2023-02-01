import React from 'react'
import './header.css'
function header() {
  return (
    <div className="app-header">
      <span className="header-title">sample page</span>
      <span>Home</span>
      <span>Usage</span>
      <span>Settings</span>
      <span>Logout</span>
    </div>
  );
}

export default header