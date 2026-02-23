/**
 * @NApiVersion 2.0
 * @NModuleScope SameAccount
 * @NScriptType CustomGLPlugin
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_8102434206}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8102434206.html}
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
     * @param {CustomizeGlImpactContext} context
     * @return {void}
     */
    function customizeGlImpact(context) {
      try {
        
      } catch (e) {
        log.error('customizeGlImpact', JSON.parse(JSON.stringify(e)));
      }
      
    }
    
    return {
      customizeGlImpact: customizeGlImpact,
    };
  },
);