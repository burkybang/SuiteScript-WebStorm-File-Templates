/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType MassUpdateScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452911}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460452911.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
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
        log.audit('each', params);
      } catch (e) {
        log.error('each', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      each: each,
    };
  },
);