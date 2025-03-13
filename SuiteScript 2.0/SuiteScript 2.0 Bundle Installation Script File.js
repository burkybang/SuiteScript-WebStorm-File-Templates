/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType BundleInstallationScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460460309}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460460309.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */
define([],
  
  /**
   * @return {{
   *   beforeInstall?: Function,
   *   afterInstall?: Function,
   *   beforeUpdate?: Function,
   *   afterUpdate?: Function,
   *   beforeUninstall?: Function,
   * }}
   */
  function () {
    
    /**
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that is being installed
     * @return {void}
     */
    function beforeInstall(params) {
      try {
        log.debug('beforeInstall', params);
        
      } catch (e) {
        log.error('beforeInstall', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that was just installed
     * @return {void}
     */
    function afterInstall(params) {
      try {
        log.debug('afterInstall', params);
        
      } catch (e) {
        log.error('afterInstall', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {Object} params
     * @param {number} params.fromVersion - The version of the bundle that is currently installed
     * @param {number} params.toVersion - The version of the bundle that is being installed
     * @return {void}
     */
    function beforeUpdate(params) {
      try {
        log.debug('beforeUpdate', params);
        
      } catch (e) {
        log.error('beforeUpdate', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {Object} params
     * @param {number} params.fromVersion - The version of the bundle that was previously installed
     * @param {number} params.toVersion - The version of the bundle that was just installed
     * @return {void}
     */
    function afterUpdate(params) {
      try {
        log.debug('afterUpdate', params);
        
      } catch (e) {
        log.error('afterUpdate', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that is being uninstalled
     * @return {void}
     */
    function beforeUninstall(params) {
      try {
        log.debug('beforeUninstall', params);
        
      } catch (e) {
        log.error('beforeUninstall', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      // beforeInstall: beforeInstall,
      // afterInstall: afterInstall,
      // beforeUpdate: beforeUpdate,
      // afterUpdate: afterUpdate,
      // beforeUninstall: beforeUninstall,
    };
  },
);