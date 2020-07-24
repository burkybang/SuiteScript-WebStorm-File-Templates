/**
 * @NApiVersion 2.1
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
  () => {
    
    /**
     * @param {OnRequestContext} context
     * @return {void}
     */
    const onRequest = context => {
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
    };
    
    return {
      onRequest,
    };
    
  }
);