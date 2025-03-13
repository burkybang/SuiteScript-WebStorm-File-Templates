/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType RESTlet
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799403}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799403.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */
define(['N/scriptTypes/restlet'],
  
  /**
   * @param {restlet} restlet
   */
  function (restlet) {
    
    /**
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @return {restlet.Response}
     */
    function get(requestParams) {
      try {
        log.debug('get', requestParams);
        
      } catch (e) {
        log.error('get', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {restlet.Response}
     */
    function post(requestBody) {
      try {
        log.debug('post', requestBody);
        
      } catch (e) {
        log.error('post', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {restlet.Response}
     */
    function put(requestBody) {
      try {
        log.debug('put', requestBody);
        
      } catch (e) {
        log.error('put', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @return {restlet.Response}
     */
    function delete_(requestParams) {
      try {
        log.debug('delete', requestParams);
        
      } catch (e) {
        log.error('delete', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      // get: get,
      // post: post,
      // put: put,
      // delete: delete_,
    };
  },
);