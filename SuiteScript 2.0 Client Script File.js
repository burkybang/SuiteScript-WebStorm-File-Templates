/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType ClientScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387798404.html
 */
define([],
  
  /**
   * @returns {{
   *   pageInit?: function(PageInitContext),
   *   validateField?: function(ValidateFieldContext),
   *   fieldChanged?: function(FieldChangedContext),
   *   postSourcing?: function(PostSourcingContext),
   *   lineInit?: function(LineInitContext),
   *   validateLine?: function(ValidateLineContext),
   *   validateInsert?: function(ValidateInsertContext),
   *   validateDelete?: function(ValidateDeleteContext),
   *   sublistChanged?: function(SublistChangedContext),
   *   saveRecord?: function(SaveRecordContext),
   * }}
   */
  function () {
    
    /**
     * @param {PageInitContext} context
     * @returns {void}
     */
    function pageInit(context) {
      try {
        console.log('${PROJECT_NAME}:', 'pageInit:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * @param {ValidateFieldContext} context
     * @returns {boolean} - Return true if the field is valid or false to prevent the field value from changing
     */
    function validateField(context) {
      try {
        console.log('${PROJECT_NAME}:', 'validateField:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    /**
     * @param {FieldChangedContext} context
     * @returns {void}
     */
    function fieldChanged(context) {
      try {
        console.log('${PROJECT_NAME}:', 'fieldChanged:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * @param {PostSourcingContext} context
     * @returns {void}
     */
    function postSourcing(context) {
      try {
        console.log('${PROJECT_NAME}:', 'postSourcing:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * @param {LineInitContext} context
     * @returns {void}
     */
    function lineInit(context) {
      try {
        console.log('${PROJECT_NAME}:', 'lineInit:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * @param {ValidateLineContext} context
     * @returns {boolean} - Return true if the sublist line is valid or false to reject the operation
     */
    function validateLine(context) {
      try {
        console.log('${PROJECT_NAME}:', 'validateLine:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    /**
     * @param {ValidateInsertContext} context
     * @returns {boolean} - Return true if the sublist line is valid or false to block the insert
     */
    function validateInsert(context) {
      try {
        console.log('${PROJECT_NAME}:', 'validateInsert:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    /**
     * @param {ValidateDeleteContext} context
     * @returns {boolean} - Return true if the sublist line is valid or false to block the removal
     */
    function validateDelete(context) {
      try {
        console.log('${PROJECT_NAME}:', 'validateDelete:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    /**
     * @param {SublistChangedContext} context
     * @returns {void}
     */
    function sublistChanged(context) {
      try {
        console.log('${PROJECT_NAME}:', 'sublistChanged:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * @param {SaveRecordContext} context
     * @returns {boolean} - Return true if the record is valid or false to suppress form submission
     */
    function saveRecord(context) {
      try {
        console.log('${PROJECT_NAME}:', 'saveRecord:', context);
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
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
