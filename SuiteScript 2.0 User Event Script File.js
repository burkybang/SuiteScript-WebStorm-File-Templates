/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType UserEventScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html
 */
define([],
  
  /**
   * @returns {{
      beforeLoad?: function(BeforeLoad),
      beforeSubmit?: function(BeforeSubmit),
      afterSubmit?: function(AfterSubmit)
     }}
   */
  function () {
    
    /**
     * @param {BeforeLoad} context
     * @returns {void}
     */
    function beforeLoad(context) {
      try {
        log.audit('${PROJECT_NAME}', 'beforeLoad');
      } catch (e) {
        log.error('beforeLoad', e);
      }
    }
    
    /**
     * @param {BeforeSubmit} context
     * @returns {void}
     */
    function beforeSubmit(context) {
      try {
        log.audit('${PROJECT_NAME}', 'beforeSubmit');
      } catch (e) {
        log.error('beforeSubmit', e);
      }
    }
    
    /**
     * @param {AfterSubmit} context
     * @returns {void}
     */
    function afterSubmit(context) {
      try {
        log.audit('${PROJECT_NAME}', 'afterSubmit');
      } catch (e) {
        log.error('afterSubmit', e);
      }
    }
    
    return {
      // beforeLoad: beforeLoad,
      // beforeSubmit: beforeSubmit,
      // afterSubmit: afterSubmit,
    };
    
  }
);
