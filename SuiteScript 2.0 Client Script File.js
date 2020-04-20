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
     * @param {PageInitContext} context
     * @return {void}
     */
    function pageInit(context) {
      try {
        console.log('${NAME}: pageInit:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
    }
    
    /**
     * @param {ValidateFieldContext} context
     * @return {boolean} - Return true if the field is valid or false to prevent the field value from changing
     */
    function validateField(context) {
      try {
        console.log('${NAME}: validateField:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
      return true;
    }
    
    /**
     * @param {FieldChangedContext} context
     * @return {void}
     */
    function fieldChanged(context) {
      try {
        console.log('${NAME}: fieldChanged:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
    }
    
    /**
     * @param {PostSourcingContext} context
     * @return {void}
     */
    function postSourcing(context) {
      try {
        console.log('${NAME}: postSourcing:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
    }
    
    /**
     * @param {LineInitContext} context
     * @return {void}
     */
    function lineInit(context) {
      try {
        console.log('${NAME}: lineInit:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
    }
    
    /**
     * @param {ValidateLineContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to reject the operation
     */
    function validateLine(context) {
      try {
        console.log('${NAME}: validateLine:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
      return true;
    }
    
    /**
     * @param {ValidateInsertContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to block the insert
     */
    function validateInsert(context) {
      try {
        console.log('${NAME}: validateInsert:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
      return true;
    }
    
    /**
     * @param {ValidateDeleteContext} context
     * @return {boolean} - Return true if the sublist line is valid or false to block the removal
     */
    function validateDelete(context) {
      try {
        console.log('${NAME}: validateDelete:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
      return true;
    }
    
    /**
     * @param {SublistChangedContext} context
     * @return {void}
     */
    function sublistChanged(context) {
      try {
        console.log('${NAME}: sublistChanged:', context);
      } catch (e) {
        console.error('${NAME}:', e);
      }
    }
    
    /**
     * @param {SaveRecordContext} context
     * @return {boolean} - Return true if the record is valid or false to suppress form submission
     */
    function saveRecord(context) {
      try {
        console.log('${NAME}: saveRecord:', context);
      } catch (e) {
        console.error('${NAME}:', e);
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
