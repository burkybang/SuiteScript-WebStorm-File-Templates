/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType SDFInstallationScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544719586}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544719586.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */
define([],
  
  /**
   * @return {{
   *   run: Function,
   * }}
   */
  () => {
    
    /**
     * @typedef {Object} RunParams
     * @property {string} fromVersion - The version of the SuiteApp currently installed on the account, null if new installation
     * @property {string} toVersion - The version of the SuiteApp that will be installed on the account
     */
    
    /**
     * @param {RunParams} params
     * @return {void}
     */
    const run = params => {
      try {
        const {fromVersion, toVersion} = params;
        log.audit('run', {fromVersion, toVersion});
        
        if (fromVersion) {
          if (fromVersion === toVersion) {
            onDeploy(params);
          } else {
            onUpdate(params);
          }
        } else {
          onInstall(params);
        }
        
      } catch (e) {
        log.error('run', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * Runs during an installation only
     * @param {RunParams} params
     * @return {void}
     */
    const onInstall = params => {
      log.audit('onInstall', 'onInstall');
      const {toVersion} = params;
      
    };
    
    /**
     * Runs during an update only
     * @param {RunParams} params
     * @return {void}
     */
    const onUpdate = params => {
      log.audit('onUpdate', 'onUpdate');
      const {fromVersion, toVersion} = params;
      
    };
    
    /**
     * Runs if the version number remains the same
     * @param {RunParams} params
     * @return {void}
     */
    const onDeploy = params => {
      log.audit('onDeploy', 'onDeploy');
      const {toVersion} = params;
      
    };
    
    return {run};
  },
);