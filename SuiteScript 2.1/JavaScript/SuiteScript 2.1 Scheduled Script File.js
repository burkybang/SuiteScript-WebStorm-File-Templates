/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType ScheduledScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799491}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799491.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
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
    const execute = context => {
      try {
        log.audit('Started', 'Started');
        const {type} = context;
        
        log.debug('execute', `Type: ${type}`);
        
      } catch (e) {
        log.error('execute', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      } finally {
        log.audit('Finished', 'Finished');
      }
    };
    
    return {execute};
  },
);