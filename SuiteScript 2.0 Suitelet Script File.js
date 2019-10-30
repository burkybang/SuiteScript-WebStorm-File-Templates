/**
 #if ($Description != '')
 * $Description
 #else
 * Write a description
 #end
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType Suitelet
 * @see [NetSuite Help: Suitelet Script Type]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799600.html}
 */
define([],
  
  function () {
    
    /**
     * onRequest event handler
     * @param {Object} context
     * @param {ServerRequest} context.request - The incoming request object
     * @param {ServerResponse} context.response - The outgoing response object
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