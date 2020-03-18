/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType Suitelet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799600.html
 */
define([],
  
  /**
   * @returns {{
   *   onRequest: function(OnRequestContext)
   * }}
   */
  function () {
    
    /**
     * @param {OnRequestContext} context
     * @returns {void}
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