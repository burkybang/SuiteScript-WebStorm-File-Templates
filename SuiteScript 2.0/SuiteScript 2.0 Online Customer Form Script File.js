/**
 * @NApiVersion 2.x
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
   *
   */
  function () {
    
    /**
     * Used in logs to help identify which client script is doing the logging
     * @type {string}
     */
    const SCRIPT_FILENAME = '${NAME}';
    
    /**
     * @param {PageInitContext} context
     * @return {void}
     */
    function pageInit(context) {
      try {
        console.log(SCRIPT_FILENAME + ': pageInit:', context);
        
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': pageInit:', e);
        log.error('pageInit', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {ValidateFieldContext} context
     * @return {boolean} - Return true if the field is valid or false to prevent the field value from changing
     */
    function validateField(context) {
      try {
        console.log(SCRIPT_FILENAME + ': validateField:', context);
        
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': validateField:', e);
        log.error('validateField', JSON.parse(JSON.stringify(e)));
      }
      return true;
    }
    
    /**
     * @param {FieldChangedContext} context
     * @return {void}
     */
    function fieldChanged(context) {
      try {
        console.log(SCRIPT_FILENAME + ': fieldChanged:', context);
        
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': fieldChanged:', e);
        log.error('fieldChanged', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {SaveRecordContext} context
     * @return {boolean} - Return true if the record is valid or false to suppress form submission
     */
    function saveRecord(context) {
      try {
        console.log(SCRIPT_FILENAME + ': saveRecord:', context);
        
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': saveRecord:', e);
        log.error('saveRecord', JSON.parse(JSON.stringify(e)));
      }
      return true;
    }
    
    return {
      pageInit: pageInit,
      // validateField: validateField,
      // fieldChanged: fieldChanged,
      // saveRecord: saveRecord,
    };
  },
);