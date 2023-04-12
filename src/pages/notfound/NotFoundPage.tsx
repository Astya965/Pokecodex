import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage = () => (
  <div className="errorPage">
    <h2 className="errorNumber">404</h2>
    <h3 className="errorInfo">Page not found</h3>
    <Link className="linkToHome" to="/">
      Go to main page
    </Link>
  </div>
);

export default NotFoundPage;
