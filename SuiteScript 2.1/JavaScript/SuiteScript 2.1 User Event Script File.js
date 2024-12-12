/**
 * @NApiVersion 2.1
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
        const {type, newRecord, form, request} = context;
        
      } catch (e) {
        log.error('beforeLoad', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
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
          oldRecord: !context.oldRecord ? null : {
            type: context.oldRecord.type,
            id: context.oldRecord.id,
          },
        });
        const {type, newRecord, oldRecord} = context;
        
      } catch (e) {
        log.error('beforeSubmit', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
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
          oldRecord: !context.oldRecord ? null : {
            type: context.oldRecord.type,
            id: context.oldRecord.id,
          },
        });
        const {type, newRecord, oldRecord} = context;
        
      } catch (e) {
        log.error('afterSubmit', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {
      // beforeLoad,
      // beforeSubmit,
      // afterSubmit,
    };
  },
);