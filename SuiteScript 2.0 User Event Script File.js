/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType UserEventScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html
 */
define([],
  
  /**
   * @returns {{
      beforeLoad?: function(BeforeLoadContext),
      beforeSubmit?: function(BeforeSubmitContext),
      afterSubmit?: function(AfterSubmitContext)
     }}
   */
  function () {
    
    /**
     * @param {BeforeLoadContext} context
     * @returns {void}
     */
    function beforeLoad(context) {
      try {
        log.audit('${PROJECT_NAME}', 'beforeLoad');
      } catch (e) {
        log.error('beforeLoad', JSON.stringify(e));
      }
    }
    
    /**
     * @param {BeforeSubmitContext} context
     * @returns {void}
     */
    function beforeSubmit(context) {
      try {
        log.audit('${PROJECT_NAME}', 'beforeSubmit');
      } catch (e) {
        log.error('beforeSubmit', JSON.stringify(e));
      }
    }
    
    /**
     * @param {AfterSubmitContext} context
     * @returns {void}
     */
    function afterSubmit(context) {
      try {
        log.audit('${PROJECT_NAME}', 'afterSubmit');
      } catch (e) {
        log.error('afterSubmit', JSON.stringify(e));
      }
    }
    
    return {
      // beforeLoad: beforeLoad,
      // beforeSubmit: beforeSubmit,
      // afterSubmit: afterSubmit,
    };
    
  }
);
