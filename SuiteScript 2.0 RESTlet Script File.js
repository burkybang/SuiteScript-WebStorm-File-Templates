/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType RESTlet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799403.html
 */
define([],
  
  /**
   * @returns {{
   *   get?: Function,
   *   post?: Function,
   *   put?: Function,
   *   delete?: Function,
   * }}
   */
  function () {
    
    /**
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @returns {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function get(requestParams) {
      try {
        log.audit('${PROJECT_NAME}', 'get');
      } catch (e) {
        log.error('get', JSON.stringify(e));
      }
    }
    
    /**
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @returns {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function post(requestBody) {
      try {
        log.audit('${PROJECT_NAME}', 'post');
      } catch (e) {
        log.error('post', JSON.stringify(e));
      }
    }
    
    /**
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @returns {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function put(requestBody) {
      try {
        log.audit('${PROJECT_NAME}', 'put');
      } catch (e) {
        log.error('put', JSON.stringify(e));
      }
    }
    
    /**
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @returns {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function delete_(requestParams) {
      try {
        log.audit('${PROJECT_NAME}', 'delete');
      } catch (e) {
        log.error('delete', JSON.stringify(e));
      }
    }
    
    return {
      // get: get,
      // post: post,
      // put: put,
      // delete: delete_,
    };
    
  }
);
