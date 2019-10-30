/**
 #if ($Description != '')
 * $Description
 #else
 * Write a description
 #end
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType MassUpdateScript
 * @see [NetSuite Help: Mass Update Script Type]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452911.html}
 */
define([],
  
  function () {
    
    /**
     * each event handler
     * @param {Object} params
     * @param {number} params.id - The internal ID of the record being processed.
     * @param {string} params.type - The record type of the record being processed.
     * @return {void}
     */
    function each(params) {
      try {
        log.audit('${PROJECT_NAME}:', 'each');
      } catch (e) {
        log.error('each', JSON.stringify(e));
      }
    }
    
    return {
      each: each,
    };
    
  }
);