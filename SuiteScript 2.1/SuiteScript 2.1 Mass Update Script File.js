/**
 * @NApiVersion 2.1
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
  () => {
    
    /**
     * @param {EachParams} params
     * @return {void}
     */
    const each = params => {
      try {
        log.audit('each', params);
      } catch (e) {
        log.error('each', e.toJSON ? e : e.toString());
      }
    };
    
    return {
      each,
    };
    
  }
);