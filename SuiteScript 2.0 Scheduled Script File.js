/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType ScheduledScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799491.html
 */
define([],
  
  /**
   * @return {{
   *   execute: function(ExecuteContext)
   * }}
   */
  function () {
    
    /**
     * @param {ExecuteContext} context
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