/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType WorkflowActionScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429314.html
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
      } catch (e) {
        log.error('onAction', e.toJSON ? e : e.toString());
      }
    };
    
    return {onAction};
    
  }
);