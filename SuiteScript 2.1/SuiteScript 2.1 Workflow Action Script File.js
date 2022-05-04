/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType WorkflowActionScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429314}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460429314.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 */
define([],
  
  /**
   * @return {{
   *   onAction: Function,
   * }}
   */
  () => {
    
    /**
     * @param {OnActionContext} context
     * @return {void}
     */
    const onAction = context => {
      try {
        log.audit('onAction', {
          newRecord: {
            type: context.newRecord.type,
            id: context.newRecord.id,
          },
          oldRecord: {
            type: context.oldRecord.type,
            id: context.oldRecord.id,
          },
        });
        const {newRecord, oldRecord} = context;
      } catch (e) {
        log.error('onAction', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {onAction};
  },
);