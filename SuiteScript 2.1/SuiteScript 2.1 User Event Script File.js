/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType UserEventScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html
 */
define([],
  
  /**
   * @return {{
   *  beforeLoad?: Function,
   *  beforeSubmit?: Function,
   *  afterSubmit?: Function,
   * }}
   */
  () => {
    
    /**
     * @param {BeforeLoadContext} context
     * @return {void}
     */
    const beforeLoad = context => {
      try {
        log.audit('beforeLoad', {
          type: context.type,
          form: context.form,
          newRecord: {
            type: context.newRecord.type,
            id: context.newRecord.id,
          },
          request: {
            url: context.request.url,
            parameters: context.request.parameters,
          },
        });
      } catch (e) {
        log.error('beforeLoad', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {BeforeSubmitContext} context
     * @return {void}
     */
    const beforeSubmit = context => {
      try {
        log.audit('beforeSubmit', {
          type: context.type,
          newRecord: {
            type: context.newRecord.type,
            id: context.newRecord.id,
          },
          oldRecord: {
            type: context.oldRecord.type,
            id: context.oldRecord.id,
          },
        });
      } catch (e) {
        log.error('beforeSubmit', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {AfterSubmitContext} context
     * @return {void}
     */
    const afterSubmit = context => {
      try {
        log.audit('afterSubmit', {
          type: context.type,
          newRecord: {
            type: context.newRecord.type,
            id: context.newRecord.id,
          },
          oldRecord: {
            type: context.oldRecord.type,
            id: context.oldRecord.id,
          },
        });
      } catch (e) {
        log.error('afterSubmit', JSON.parse(JSON.stringify(e)));
      }
    };
    
    return {
      // beforeLoad: beforeLoad,
      // beforeSubmit: beforeSubmit,
      // afterSubmit: afterSubmit,
    };
    
  }
);
