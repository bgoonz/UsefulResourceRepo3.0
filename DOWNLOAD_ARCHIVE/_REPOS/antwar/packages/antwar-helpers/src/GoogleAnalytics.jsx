import React from 'react';

const GoogleAnalytics = ({ analyticsId }) => {
  if (__DEV__) {
    return <noscript />;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', ', ${analyticsId}', 'auto');ga('send', 'pageview');` // eslint-disable-line max-len
      }}
    />
  );
};
GoogleAnalytics.propTypes = {
  analyticsId: React.PropTypes.string.isRequired
};

export default GoogleAnalytics;
