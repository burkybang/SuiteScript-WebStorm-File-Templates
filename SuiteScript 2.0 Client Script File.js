/**
 #if ($Description != '')
 * $Description
 #else
 * Write a description
 #end
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType ClientScript
 * @see [NetSuite Help: Client Script Type]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387798404.html}
 */
define([],
  
  function () {
    
    /**
     * pageInit event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.mode - The access mode of the current record (copy/created/edit)
     * @return {void}
     */
    function pageInit(context) {
      try {
        console.log('${PROJECT_NAME}:', 'pageInit');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * validateField event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.sublistId - The internal ID of the sublist
     * @param {string} context.fieldId - The internal ID of the field being validated
     * @param {string} [context.lineNum=undefined] - The index of the line if the field is in a sublist or matrix
     * @param {string} [context.columnNum=undefined] - The index of the column if the field is in a matrix
     * @return {Boolean} - Return true if the field is valid or false to prevent the field value from changing
     */
    function validateField(context) {
      try {
        console.log('${PROJECT_NAME}:', 'validateField');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    /**
     * fieldChanged event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.sublistId - The internal ID of the sublist
     * @param {string} context.fieldId - The internal ID of the field that was changed
     * @param {string} [context.lineNum=undefined] - The index of the line if the field is in a sublist or matrix
     * @param {string} [context.columnNum=undefined] - The index of the column if the field is in a matrix
     * @return {void}
     */
    function fieldChanged(context) {
      try {
        console.log('${PROJECT_NAME}:', 'fieldChanged');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * postSourcing event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.sublistId - The internal ID of the sublist
     * @param {string} context.fieldId - The internal ID of the field that triggered postSourcing
     * @return {void}
     */
    function postSourcing(context) {
      try {
        console.log('${PROJECT_NAME}:', 'postSourcing');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * lineInit event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.sublistId - The internal ID of the sublist
     * @return {void}
     */
    function lineInit(context) {
      try {
        console.log('${PROJECT_NAME}:', 'lineInit');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * validateLine event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.sublistId - The internal ID of the sublist
     * @return {Boolean} - Return true if the sublist line is valid or false to reject the operation
     */
    function validateLine(context) {
      try {
        console.log('${PROJECT_NAME}:', 'validateLine');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    /**
     * validateInsert event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.sublistId - The internal ID of the sublist
     * @return {Boolean} - Return true if the sublist line is valid or false to block the insert
     */
    function validateInsert(context) {
      try {
        console.log('${PROJECT_NAME}:', 'validateInsert');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    /**
     * validateDelete event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.sublistId - The internal ID of the sublist
     * @return {Boolean} - Return true if the sublist line is valid or false to block the removal
     */
    function validateDelete(context) {
      try {
        console.log('${PROJECT_NAME}:', 'validateDelete');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    /**
     * sublistChanged event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @param {string} context.sublistId - The internal ID of the sublist
     * @return {void}
     */
    function sublistChanged(context) {
      try {
        console.log('${PROJECT_NAME}:', 'sublistChanged');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
    }
    
    /**
     * saveRecord event handler
     * @param {Object} context
     * @param {Record} context.currentRecord - The current record the user is manipulating in the UI
     * @return {Boolean} - Return true if the record is valid or false to suppress form submission
     */
    function saveRecord(context) {
      try {
        console.log('${PROJECT_NAME}:', 'saveRecord');
      } catch (e) {
        console.error('${PROJECT_NAME}', e);
      }
      return true;
    }
    
    return {
      // pageInit: pageInit,
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
