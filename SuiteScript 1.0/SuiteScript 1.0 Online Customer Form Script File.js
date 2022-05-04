/**
 * @param {string<'create'|'copy'|'edit'>} eventType
 * @return {void}
 */
function pageInit(eventType) {
  
}

/**
 * @return {boolean} - Return true if the record is valid or false to suppress form submission
 */
function saveRecord() {
  
}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @param {string} fieldId - The internal ID of the field being validated
 * @param {number} [lineNumber] - The number of the line if the field is in a sublist
 * @return {boolean} - Return true if the field is valid or false to prevent the field value from changing
 */
function validateField(sublistId, fieldId, lineNumber) {

}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @param {string} fieldId - The internal ID of the field that was changed
 * @param {number} [lineNumber] - The number of the line if the field is in a sublist
 * @return {void}
 */
function fieldChanged(sublistId, fieldId, lineNumber) {
  
}