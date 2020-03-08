/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType Suitelet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799600.html
 */
define([],
  
  function () {
    
    /**
     * onRequest event handler
     * @param {Object} context
     * @param {ServerRequest} context.request - The incoming request object
     * @param {ServerResponse} context.response - The outgoing response object
     * @returns {void}
     */
    function onRequest(context) {
      try {
        log.audit('${PROJECT_NAME}', 'onRequest');
      } catch (e) {
        log.error('onRequest', e);
      }
    }
    
    return {
      onRequest: onRequest
    };
    
  }
);