/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType SDFInstallationScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544719586
 */
define([],
  
  /**
   * @return {{
   *   run: Function,
   * }}
   */
  function () {
    
    /**
     * @param {Object} params
     * @param {string} params.fromVersion - The version of the SuiteApp currently installed on the account, null if new installation
     * @param {string} params.toVersion - The version of the SuiteApp that will be installed on the account
     * @return {void}
     */
    function run(params) {
      try {
        log.audit('run', params);
      } catch (e) {
        log.error('run', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      run: run,
    };
    
  }
);
