/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType UserEventScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html
 */
define([],
  
  function () {
    
    /**
     * beforeLoad event handler.
     * @param {Object} context
     * @param {Record} context.newRecord - The new record being loaded
     * @param {string} context.type - The action type that triggered this event
     * @param {Form} context.form - The current UI form
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
     * beforeSubmit event handler.
     * @param {Object} context
     * @param {Record} context.newRecord - The new record being submitted
     * @param {Record} context.oldRecord - The old record before it was modified
     * @param {string} context.type - The action type that triggered this event
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
     * afterSubmit event handler.
     * @param {Object} context
     * @param {Record} context.newRecord - The new record being submitted
     * @param {Record} context.oldRecord - The old record before it was modified
     * @param {string} context.type - The action type that triggered this event
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
