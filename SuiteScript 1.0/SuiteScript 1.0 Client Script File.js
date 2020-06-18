/**
 * @param {string<'create'|'copy'|'edit'>} eventType
 * @returns {void}
 */
function pageInit(eventType) {
  
}

/**
 * @returns {boolean} - Return true if the record is valid or false to suppress form submission
 */
function saveRecord() {
  
}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @param {string} fieldId - The internal ID of the field being validated
 * @param {number} [lineNumber] - The number of the line if the field is in a sublist
 * @returns {boolean} - Return true if the field is valid or false to prevent the field value from changing
 */
function validateField(sublistId, fieldId, lineNumber) {

}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @param {string} fieldId - The internal ID of the field that was changed
 * @param {number} [lineNumber] - The number of the line if the field is in a sublist
 * @returns {void}
 */
function fieldChanged(sublistId, fieldId, lineNumber) {
  
}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @param {string} fieldId - The internal ID of the field that triggered postSourcing
 * @param {number} [lineNumber] - The number of the line if the field is in a sublist (undocumented)
 * @returns {void}
 */
function postSourcing(sublistId, fieldId, lineNumber) {

}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @returns {void}
 */
function lineInit(sublistId) {

}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @returns {boolean} - Return true if the sublist line is valid or false to reject the operation
 */
function validateLine(sublistId) {

}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @returns {void}
 */
function recalc(sublistId) {

}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @returns {boolean} - Return true if the sublist line is valid or false to block the insert
 */
function validateInsert(sublistId) {

}

/**
 * @param {string} sublistId - The internal ID of the sublist
 * @returns {boolean} - Return true if the sublist line is valid or false to block the removal
 */
function validateDelete(sublistId) {

}