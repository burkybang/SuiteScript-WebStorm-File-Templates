/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType WorkflowActionScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429314.html
 */
define([],
  
  /**
   * @returns {{
   *   onAction: function(OnActionContext)
   * }}
   */
  function () {
    
    /**
     * @param {OnActionContext} context
     * @returns {void}
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