/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType ScheduledScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799491.html
 */
define([],
  
  /**
   * @return {{
   *   execute: Function,
   * }}
   */
  () => {
    
    /**
     * @param {ExecuteContext} context
     * @return {void}
     */
    const execute = ({type}) => {
      try {
        log.audit('execute', `Type: ${type}`);
      } catch (e) {
        log.error('execute', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {execute};
    
  }
);