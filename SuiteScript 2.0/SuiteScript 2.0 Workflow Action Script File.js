/**
 * @NApiVersion 2.x
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
  function () {
    
    /**
     * @param {OnActionContext} context
     * @return {void}
     */
    function onAction(context) {
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
        log.error('onAction', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      onAction: onAction,
    };
    
  }
);