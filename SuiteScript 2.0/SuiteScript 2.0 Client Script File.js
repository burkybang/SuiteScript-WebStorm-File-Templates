/**
 * @NApiVersion 2.x
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
     * @param {PostSourcingContext} context
     * @return {void}
     */
    function postSourcing(context) {
      try {
        console.log(SCRIPT_FILENAME + ': postSourcing:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': postSourcing:', e);
        log.error('postSourcing', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {LineInitContext} context
     * @return {void}
     */
    function lineInit(context) {
      try {
        console.log(SCRIPT_FILENAME + ': lineInit:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': lineInit:', e);
        log.error('lineInit', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {ValidateLineContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to reject the operation
     */
    function validateLine(context) {
      try {
        console.log(SCRIPT_FILENAME + ': validateLine:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': validateLine:', e);
        log.error('validateLine', JSON.parse(JSON.stringify(e)));
      }
      return true;
    }
    
    /**
     * @param {ValidateInsertContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to block the insert
     */
    function validateInsert(context) {
      try {
        console.log(SCRIPT_FILENAME + ': validateInsert:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': validateInsert:', e);
        log.error('validateInsert', JSON.parse(JSON.stringify(e)));
      }
      return true;
    }
    
    /**
     * @param {ValidateDeleteContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to block the removal
     */
    function validateDelete(context) {
      try {
        console.log(SCRIPT_FILENAME + ': validateDelete:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': validateDelete:', e);
        log.error('validateDelete', JSON.parse(JSON.stringify(e)));
      }
      return true;
    }
    
    /**
     * @param {SublistChangedContext} context
     * @return {void}
     */
    function sublistChanged(context) {
      try {
        console.log(SCRIPT_FILENAME + ': sublistChanged:', context);
      } catch (e) {
        console.error(SCRIPT_FILENAME + ': sublistChanged:', e);
        log.error('sublistChanged', JSON.parse(JSON.stringify(e)));
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
      // postSourcing: postSourcing,
      // lineInit: lineInit,
      // validateLine: validateLine,
      // validateInsert: validateInsert,
      // validateDelete: validateDelete,
      // sublistChanged: sublistChanged,
      // saveRecord: saveRecord,
    };
    
  }
);
