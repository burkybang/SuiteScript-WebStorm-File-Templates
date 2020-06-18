/**
 * @param {string<'create'|'edit'|'view'|'copy'|'print'|'email'|'quickview'>} eventType - The action type that triggered this event
 * @param {nlobjForm} form - The current UI form
 * @param {nlobjRequest} request
 * @returns {void}
 */
function beforeLoad(eventType, form, request) {
  
}

/**
 * @param {string<'create'|'edit'|'delete'|'xedit'|'approve'|'reject'|'cancel'|'pack'|'ship'|'markcomplete'|'reassign'|'editforecast'>} eventType - The action type that triggered this event
 * @returns {void}
 */
function beforeSubmit(eventType) {
  
}

/**
 * @param {string<'create'|'edit'|'delete'|'xedit'|'approve'|'reject'|'cancel'|'pack'|'ship'|'dropship'|'specialorder'|'orderitems'|'paybills'>} eventType - The action type that triggered this event
 * @returns {void}
 */
function afterSubmit(eventType) {
  
}