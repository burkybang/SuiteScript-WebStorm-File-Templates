/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType Suitelet
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799600}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799600.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
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
  },
);