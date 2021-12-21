/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType SDFInstallationScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544719586}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544719586.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
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
