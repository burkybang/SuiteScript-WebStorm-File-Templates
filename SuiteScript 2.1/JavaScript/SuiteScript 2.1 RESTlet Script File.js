/**
 * @NApiVersion 2.1
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
   * @return {{
   *   get?: Function,
   *   post?: Function,
   *   put?: Function,
   *   delete?: Function,
   * }}
   */
  (restlet) => {
    
    /**
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @return {restlet.Response}
     */
    const get = requestParams => {
      try {
        log.audit('get', requestParams);
        
      } catch (e) {
        log.error('get', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {restlet.Response}
     */
    const post = requestBody => {
      try {
        log.audit('post', requestBody);
        
      } catch (e) {
        log.error('post', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {string|Object} requestBody - Request body is a String when request "Content-Type" is "text/plain"
     * or an Object when request "Content-Type" is "application/json"
     * @return {restlet.Response}
     */
    const put = requestBody => {
      try {
        log.audit('put', requestBody);
        
      } catch (e) {
        log.error('put', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {Object} requestParams - The parameters from the HTTP request URL as key-value pairs
     * @return {restlet.Response}
     */
    const delete_ = requestParams => {
      try {
        log.audit('delete', requestParams);
        
      } catch (e) {
        log.error('delete', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {
      // get,
      // post,
      // put,
      // delete: delete_,
    };
  },
);