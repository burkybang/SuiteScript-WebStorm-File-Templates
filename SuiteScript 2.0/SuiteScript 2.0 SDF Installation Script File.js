/**
 * @NApiVersion 2.x
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
   *
   */
  function () {
    
    /**
     * @typedef {Object} RunParams
     * @property {string} fromVersion - The version of the SuiteApp currently installed on the account, null if new installation
     * @property {string} toVersion - The version of the SuiteApp that will be installed on the account
     */
    
    /**
     * @param {RunParams} params
     * @return {void}
     */
    function run(params) {
      try {
        log.debug('run', {
          fromVersion: params.fromVersion,
          toVersion: params.toVersion,
        });
        
        if (params.fromVersion) {
          if (params.fromVersion === params.toVersion) {
            onDeploy(params);
          } else {
            onUpdate(params);
          }
        } else {
          onInstall(params);
        }
        
      } catch (e) {
        log.error('run', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * Runs during an installation only
     * @param {RunParams} params
     * @return {void}
     */
    function onInstall(params) {
      log.debug('Type', 'Install');
      
    }
    
    /**
     * Runs during an update only
     * @param {RunParams} params
     * @return {void}
     */
    function onUpdate(params) {
      log.debug('Type', 'Update');
      
    }
    
    /**
     * Runs if the version number remains the same
     * @param {RunParams} params
     * @return {void}
     */
    function onDeploy(params) {
      log.debug('Type', 'Deploy');
      
    }
    
    return {
      run: run,
    };
  },
);