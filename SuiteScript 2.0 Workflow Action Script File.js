/**
 #if ($Description != '')
 * $Description
 #else
 * Write a description
 #end
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType WorkflowActionScript
 * @see [NetSuite Help: Workflow Action Script Type]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460429314.html}
 */
define([],
  
  function () {
    
    /**
     * onAction event handler
     * @param {Object} context
     * @param {Record} context.newRecord - The new record. Saving is not permitted
     * @param {Record} context.oldRecord - The old record. Saving is not permitted
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