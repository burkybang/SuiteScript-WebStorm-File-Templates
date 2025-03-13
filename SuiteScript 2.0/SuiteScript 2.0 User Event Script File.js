/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType UserEventScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799721.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */
define([],
  
  /**
   * @return {{
   *   beforeLoad?: Function,
   *   beforeSubmit?: Function,
   *   afterSubmit?: Function,
   * }}
   */
  function () {
    
    /**
     * @param {BeforeLoadContext} context
     * @return {void}
     */
    function beforeLoad(context) {
      try {
        log.debug('beforeLoad', {type: context.type});
        
      } catch (e) {
        log.error('beforeLoad', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {BeforeSubmitContext} context
     * @return {void}
     */
    function beforeSubmit(context) {
      try {
        log.debug('beforeSubmit', {type: context.type});
        
      } catch (e) {
        log.error('beforeSubmit', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {AfterSubmitContext} context
     * @return {void}
     */
    function afterSubmit(context) {
      try {
        log.debug('afterSubmit', {type: context.type});
        
      } catch (e) {
        log.error('afterSubmit', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      // beforeLoad: beforeLoad,
      // beforeSubmit: beforeSubmit,
      // afterSubmit: afterSubmit,
    };
  },
);