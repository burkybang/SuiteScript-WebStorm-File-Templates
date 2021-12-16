/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType BundleInstallationScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460460309
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
  () => {
    
    /**
     * @param {number} version - The version of the bundle that is being installed
     * @return {void}
     */
    const beforeInstall = ({version}) => {
      try {
        log.audit('beforeInstall', {version});
      } catch (e) {
        log.error('beforeInstall', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {number} version - The version of the bundle that was just installed
     * @return {void}
     */
    const afterInstall = ({version}) => {
      try {
        log.audit('afterInstall', {version});
      } catch (e) {
        log.error('afterInstall', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {number} fromVersion - The version of the bundle that is currently installed
     * @param {number} toVersion - The version of the bundle that is being installed
     * @return {void}
     */
    const beforeUpdate = ({toVersion, fromVersion}) => {
      try {
        log.audit('beforeUpdate', {toVersion, fromVersion});
      } catch (e) {
        log.error('beforeUpdate', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {number} fromVersion - The version of the bundle that was previously installed
     * @param {number} toVersion - The version of the bundle that was just installed
     * @return {void}
     */
    const afterUpdate = ({toVersion, fromVersion}) => {
      try {
        log.audit('afterUpdate', {toVersion, fromVersion});
      } catch (e) {
        log.error('afterUpdate', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {number} version - The version of the bundle that is being uninstalled
     * @return {void}
     */
    const beforeUninstall = ({version}) => {
      try {
        log.audit('beforeUninstall', {version});
      } catch (e) {
        log.error('beforeUninstall', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {
      // beforeInstall,
      // afterInstall,
      // beforeUpdate,
      // afterUpdate,
      // beforeUninstall,
    };
    
  }
);
