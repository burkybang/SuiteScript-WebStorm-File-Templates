/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType ClientScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N976686}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N976686.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */
define([],
  
  /**
   * @return {{
   *   pageInit?: Function,
   *   validateField?: Function,
   *   fieldChanged?: Function,
   *   postSourcing?: Function,
   *   lineInit?: Function,
   *   validateLine?: Function,
   *   validateInsert?: Function,
   *   validateDelete?: Function,
   *   sublistChanged?: Function,
   *   saveRecord?: Function,
   * }}
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
      // saveRecord,
    };
  },
);