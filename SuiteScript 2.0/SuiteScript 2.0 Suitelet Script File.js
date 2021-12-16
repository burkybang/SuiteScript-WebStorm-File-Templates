/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType Suitelet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799600
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
        log.audit('onRequest', {
          request: {
            clientIpAddress: context.request.clientIpAddress,
            url: context.request.url,
            method: context.request.method,
            parameters: context.request.parameters,
          },
        });
      } catch (e) {
        log.error('onRequest', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      onRequest: onRequest,
    };
    
  }
);