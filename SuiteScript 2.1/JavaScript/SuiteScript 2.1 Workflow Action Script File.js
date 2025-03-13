/**
 * @NApiVersion 2.1
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
   *
   */
  () => {
    
    /**
     * @param {OnActionContext} context
     * @return {void}
     */
    const onAction = context => {
      try {
        const {oldRecord, newRecord, type, workflowId} = context;
        
        log.debug('onAction', {type, workflowId});
        
      } catch (e) {
        log.error('onAction', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {onAction};
  },
);