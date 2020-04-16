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
        // Log audit after validations
        log.audit('${PROJECT_NAME}', 'onAction');
      } catch (e) {
        log.error('onAction', JSON.stringify(e));
      }
    }
    
    return {
      onAction: onAction,
    };
    
  }
);