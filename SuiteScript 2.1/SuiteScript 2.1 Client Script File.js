/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType ClientScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387798404.html
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
        console.log(SCRIPT_FILENAME + ': pageInit:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': pageInit:', e);
      }
    };
    
    /**
     * @param {ValidateFieldContext} context
     * @return {boolean} - Return true if the field is valid or false to prevent the field value from changing
     */
    const validateField = context => {
      try {
        console.log(SCRIPT_FILENAME + ': validateField:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': validateField:', e);
      }
      return true;
    };
    
    /**
     * @param {FieldChangedContext} context
     * @return {void}
     */
    const fieldChanged = context => {
      try {
        console.log(SCRIPT_FILENAME + ': fieldChanged:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': fieldChanged:', e);
      }
    };
    
    /**
     * @param {PostSourcingContext} context
     * @return {void}
     */
    const postSourcing = context => {
      try {
        console.log(SCRIPT_FILENAME + ': postSourcing:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': postSourcing:', e);
      }
    };
    
    /**
     * @param {LineInitContext} context
     * @return {void}
     */
    const lineInit = context => {
      try {
        console.log(SCRIPT_FILENAME + ': lineInit:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': lineInit:', e);
      }
    };
    
    /**
     * @param {ValidateLineContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to reject the operation
     */
    const validateLine = context => {
      try {
        console.log(SCRIPT_FILENAME + ': validateLine:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': validateLine:', e);
      }
      return true;
    };
    
    /**
     * @param {ValidateInsertContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to block the insert
     */
    const validateInsert = context => {
      try {
        console.log(SCRIPT_FILENAME + ': validateInsert:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': validateInsert:', e);
      }
      return true;
    };
    
    /**
     * @param {ValidateDeleteContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to block the removal
     */
    const validateDelete = context => {
      try {
        console.log(SCRIPT_FILENAME + ': validateDelete:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': validateDelete:', e);
      }
      return true;
    };
    
    /**
     * @param {SublistChangedContext} context
     * @return {void}
     */
    const sublistChanged = context => {
      try {
        console.log(SCRIPT_FILENAME + ': sublistChanged:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': sublistChanged:', e);
      }
    };
    
    /**
     * @param {SaveRecordContext} context
     * @return {boolean} - Return true if the record is valid or false to suppress form submission
     */
    const saveRecord = context => {
      try {
        console.log(SCRIPT_FILENAME + ': saveRecord:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': saveRecord:', e);
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
    
  }
);
