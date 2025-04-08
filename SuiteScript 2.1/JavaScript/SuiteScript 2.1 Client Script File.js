/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType ClientScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387798404}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387798404.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */
define([],
  
  /**
   *
   */
  () => {
    
    /**
     * Used in logs to help identify which client script is doing the logging
     * @type {string}
     */
    const SCRIPT_FILENAME = '${NAME}';
    
    /**
     * @param {PageInitContext} context
     * @return {void}
     */
    const pageInit = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: pageInit:`, context);
        const {mode, currentRecord} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: pageInit:`, e);
        log.error('pageInit', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {ValidateFieldContext} context
     * @return {boolean} - Return true if the field is valid or false to prevent the field value from changing
     */
    const validateField = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: validateField:`, context);
        const {currentRecord, sublistId, fieldId, line, column} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: validateField:`, e);
        log.error('validateField', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
      return true;
    };
    
    /**
     * @param {FieldChangedContext} context
     * @return {void}
     */
    const fieldChanged = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: fieldChanged:`, context);
        const {currentRecord, sublistId, fieldId, line, column} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: fieldChanged:`, e);
        log.error('fieldChanged', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {PostSourcingContext} context
     * @return {void}
     */
    const postSourcing = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: postSourcing:`, context);
        const {currentRecord, sublistId, fieldId} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: postSourcing:`, e);
        log.error('postSourcing', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {LineInitContext} context
     * @return {void}
     */
    const lineInit = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: lineInit:`, context);
        const {currentRecord, sublistId} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: lineInit:`, e);
        log.error('lineInit', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {ValidateLineContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to reject the operation
     */
    const validateLine = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: validateLine:`, context);
        const {currentRecord, sublistId} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: validateLine:`, e);
        log.error('validateLine', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
      return true;
    };
    
    /**
     * @param {ValidateInsertContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to block the insert
     */
    const validateInsert = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: validateInsert:`, context);
        const {currentRecord, sublistId} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: validateInsert:`, e);
        log.error('validateInsert', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
      return true;
    };
    
    /**
     * @param {ValidateDeleteContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to block the removal
     */
    const validateDelete = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: validateDelete:`, context);
        const {currentRecord, sublistId} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: validateDelete:`, e);
        log.error('validateDelete', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
      return true;
    };
    
    /**
     * @param {SublistChangedContext} context
     * @return {void}
     */
    const sublistChanged = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: sublistChanged:`, context);
        const {currentRecord, sublistId} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: sublistChanged:`, e);
        log.error('sublistChanged', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {SaveRecordContext} context
     * @return {boolean} - Return true if the record is valid or false to suppress form submission
     */
    const saveRecord = context => {
      try {
        console.log(`\${SCRIPT_FILENAME}: saveRecord:`, context);
        const {currentRecord} = context;
        
      } catch (e) {
        console.error(`\${SCRIPT_FILENAME}: saveRecord:`, e);
        log.error('saveRecord', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
      return true;
    };
    
    return {
      pageInit,
      // validateField,
      // fieldChanged,
      // postSourcing,
      // lineInit,
      // validateLine,
      // validateInsert,
      // validateDelete,
      // sublistChanged,
      // saveRecord,
    };
  },
);