/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType ScheduledScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799491}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799491.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 */
define([],
  
  /**
   * @return {{
   *   execute: Function,
   * }}
   */
  function () {
    
    /**
     * @param {ExecuteContext} context
     * @return {void}
     */
    function execute(context) {
      try {
        log.audit('execute', context.type);
      } catch (e) {
        log.error('execute', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      execute: execute,
    };
    
  }
);