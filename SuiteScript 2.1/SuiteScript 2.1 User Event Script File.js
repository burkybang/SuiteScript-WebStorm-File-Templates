/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType UserEventScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721.html
 */
define([],
  
  /**
   * @return {{
   *   beforeLoad?: Function,
   *   beforeSubmit?: Function,
   *   afterSubmit?: Function,
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
          request: !context.request ? null : {
            url: context.request.url,
            parameters: context.request.parameters,
          },
        });
      } catch (e) {
        log.error('beforeLoad', e.toJSON ? e : e.toString());
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
          oldRecord: context.oldRecord ? {
            type: context.oldRecord.type,
            id: context.oldRecord.id,
          } : null,
        });
      } catch (e) {
        log.error('beforeSubmit', e.toJSON ? e : e.toString());
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
          oldRecord: context.oldRecord ? {
            type: context.oldRecord.type,
            id: context.oldRecord.id,
          } : null,
        });
      } catch (e) {
        log.error('afterSubmit', e.toJSON ? e : e.toString());
      }
    };
    
    return {
      // beforeLoad,
      // beforeSubmit,
      // afterSubmit,
    };
    
  }
);
