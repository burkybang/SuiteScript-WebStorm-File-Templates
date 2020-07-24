/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType RESTlet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799403.html
 */
define([],
  
  /**
   * @return {{
   *   get?: Function,
   *   post?: Function,
   *   put?: Function,
   *   delete?: Function,
   * }}
   */
  () => {
    
    /**
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @return {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    const get = requestParams => {
      try {
        log.audit('get', requestParams);
      } catch (e) {
        log.error('get', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    const post = requestBody => {
      try {
        log.audit('post', requestBody);
      } catch (e) {
        log.error('post', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    const put = requestBody => {
      try {
        log.audit('put', requestBody);
      } catch (e) {
        log.error('put', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @return {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    const delete_ = requestParams => {
      try {
        log.audit('delete', requestParams);
      } catch (e) {
        log.error('delete', JSON.parse(JSON.stringify(e)));
      }
    };
    
    return {
      // get,
      // post,
      // put,
      // delete: delete_,
    };
    
  }
);
