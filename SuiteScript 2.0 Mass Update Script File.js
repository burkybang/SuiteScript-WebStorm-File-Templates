/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType MassUpdateScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452911.html
 */
define([],
  
  /**
   * @return {{
   *   each: Function,
   * }}
   */
  function () {
    
    /**
     * @param {EachParams} params
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