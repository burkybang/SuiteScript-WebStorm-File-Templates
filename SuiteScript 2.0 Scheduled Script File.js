/**
 #if ($Description != '')
 * $Description
 #else
 * Write a description
 #end
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType ScheduledScript
 * @see [NetSuite Help: Scheduled Script Type]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799491.html}
 */
define([],
  
  function () {
    
    /**
     * execute event handler
     * @param {Object} context
     * @param {string} context.type - The context in which the script is executed.
     * Values are reflected in the context.InvocationType enum
     * @return {void}
     */
    function execute(context) {
      try {
        log.audit('${PROJECT_NAME}', 'execute');
      } catch (e) {
        log.error('execute', JSON.stringify(e));
      }
    }
    
    return {
      execute: execute
    };
    
  }
);