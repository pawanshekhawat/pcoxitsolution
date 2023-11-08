// GoogleTagManager.js
import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleTagManager = () => {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-V8LXT6QGQD"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-V8LXT6QGQD');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTagManager;
