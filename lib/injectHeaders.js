module.exports = (response) => {

    const headers = response.headers;
    
    const cspPolicy = "default-src 'self' * ;"
    + "connect-src 'self' https://niskanencenter.us9.list-manage.com/subscribe/ https://apis.oldrivertrail.com/ https://admin.oldrivertrail.com/stripe/charge;"
    + "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com/ https://js.stripe.com https://oldrivertrail.us9.list-manage.com;"
    + "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/ https://fonts.googleapis.com/;"
    + "object-src 'self'";
    

    //Set new headers 
    headers['strict-transport-security'] = [{key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubdomains; preload'}]; 
    headers['content-security-policy'] = [{key: 'Content-Security-Policy', value: cspPolicy}]; 
    headers['x-content-type-options'] = [{key: 'X-Content-Type-Options', value: 'nosniff'}]; 
    headers['x-frame-options'] = [{key: 'X-Frame-Options', value: 'allow-from https://niskanencenter.org https://niskanencenter.com'}]; 
    headers['x-xss-protection'] = [{key: 'X-XSS-Protection', value: '1; mode=block'}]; 
    headers['referrer-policy'] = [{key: 'Referrer-Policy', value: 'same-origin'}];
    headers['access-control-allow-origin'] = [{key: 'Access-Control-Allow-Origin', value: '*'}];
    
    //Return modified response
    return response;
};
