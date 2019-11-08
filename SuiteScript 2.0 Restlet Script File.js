/**
 #if ($Description != '')
 * $Description
 #else
 * Write a description
 #end
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType RESTlet
 * @see [NetSuite Help: RESTlet Script Type]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799403.html}
 */
define([],
  
  function () {
    
    /**
     * get event handler
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @return {string|Object} - Returns a String when request "Content-Type" is "text/plain"
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
     * post event handler
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {string|Object} - Returns a String when request "Content-Type" is "text/plain"
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
     * put event handler
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {string|Object} - Returns a String when request "Content-Type" is "text/plain"
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
     * delete event handler
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @return {string|Object} - Returns a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     */
    function _delete(requestParams) {
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
      // delete: _delete,
    };
    
  }
);
