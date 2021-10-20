/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType SDFInstallationScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544719586.html
 */
define([],
  
  /**
   * @return {{
   *   run: Function,
   * }}
   */
  () => {
    
    /**
     * @param {string} fromVersion - The version of the SuiteApp currently installed on the account, null if new installation
     * @param {string} toVersion - The version of the SuiteApp that will be installed on the account
     * @return {void}
     */
    const run = ({fromVersion, toVersion}) => {
      try {
        log.audit('run', {fromVersion, toVersion});
      } catch (e) {
        log.error('run', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {
      run,
    };
    
  }
);
