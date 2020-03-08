/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType ScheduledScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799491.html
 */
define([],
  
  function () {
    
    /**
     * execute event handler
     * @param {Object} context
     * @param {string} context.type - The context in which the script is executed.
     * Values are reflected in the context.InvocationType enum
     * @returns {void}
     */
    function execute(context) {
      try {
        log.audit('${PROJECT_NAME}', 'execute');
      } catch (e) {
        log.error('execute', e);
      }
    }
    
    return {
      execute: execute
    };
    
  }
);