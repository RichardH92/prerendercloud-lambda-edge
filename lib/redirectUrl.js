module.exports = (event, baseUrl) => {
  
  // const baseUrl = 'niskanencenter.org';
  const request = event.Records[0].cf.request;
  let redirectUrl = '';
  
  console.log(request);
  
  if (request.uri === '/blog/policies/climate/') {
      redirectUrl = `https://${baseUrl}/#/policy/climate`;
  }
  
  else if (request.uri === '/blog/policies/opensociety/') {
      redirectUrl = `https://${baseUrl}/#/policy/open-society`;
  }

  else if (request.uri.includes('/blog/news')) {
      let slug = request.uri.split('/blog/news/')[1];
      
      if (slug.charAt(slug.length - 1) == '/') {
          slug = slug.substr(0, slug.length - 1);
      }
      
      redirectUrl = `https://${baseUrl}/#/content/${slug}`;
  } 
  
  else if (request.uri.includes('/blog/')) {
      let slug = request.uri.split('/blog/')[1];
      
      if (slug.charAt(slug.length - 1) == '/') {
          slug = slug.substr(0, slug.length - 1);
      }
      
      redirectUrl = `https://${baseUrl}/#/content/${slug}`;
  } 
  
  else if (request.uri === '/about/') {
      redirectUrl = `https://${baseUrl}/#/about`        
  }
  
  else if (request.uri === '/notes/') {
      redirectUrl = `https://${baseUrl}/#/blog`
  }
  
  return redirectUrl;
  // if (redirectUrl != '') {

  //     console.log('Returning redirect response', redirectUrl);

  //     const response = {
  //         status: '302',
  //         statusDescription: 'Found',
  //         headers: {
  //             location: [{
  //                 key: 'Location',
  //                 value: redirectUrl,
  //             }],
  //         },
  //     };
      
  //     callback(null, response);
  // } else {
  //     console.log('Returning normal response');
      
  //     callback(null,request);
  // }
};