import React from 'react';
import './CSS/errorpage.scss';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Error 404! :/</h1>
      <p>Either the resource you are trying to access does not exist or you do not have sufficient privileges to access the resource.</p>
    </div>
  );
};

export default ErrorPage;