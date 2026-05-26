/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType CustomGLPlugin
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_8102434206}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8102434206.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Definitions]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Definitions}
 * @author
 */
define([],
  
  /**
   *
   */
  () => {
    
    /**
     * @param {CustomizeGlImpactContext} context
     * @return {void}
     */
    const customizeGlImpact = context => {
      try {
        
      } catch (e) {
        log.error('customizeGlImpact', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    
    };
    
    return {customizeGlImpact};
  },
);