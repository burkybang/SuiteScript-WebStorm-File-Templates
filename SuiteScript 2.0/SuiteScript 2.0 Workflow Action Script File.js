/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType WorkflowActionScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429314}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429314.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */
define([],
  
  /**
   * @return {{
   *   onAction: Function,
   * }}
   */
  function () {
    
    /**
     * @param {OnActionContext} context
     * @return {void}
     */
    function onAction(context) {
      try {
        log.debug('onAction', {
          type: context.type,
          workflowId: context.workflowId,
        });
        
      } catch (e) {
        log.error('onAction', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      onAction: onAction,
    };
  },
);