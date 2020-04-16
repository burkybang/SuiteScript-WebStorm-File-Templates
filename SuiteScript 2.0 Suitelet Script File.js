/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType Suitelet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799600.html
 */
define([],
  
  /**
   * @return {{
   *   onRequest: Function,
   * }}
   */
  function () {
    
    /**
     * @param {OnRequestContext} context
     * @return {void}
     */
    function onRequest(context) {
      try {
        log.audit('${PROJECT_NAME}', 'onRequest');
      } catch (e) {
        log.error('onRequest', JSON.stringify(e));
      }
    }
    
    return {
      onRequest: onRequest
    };
    
  }
);