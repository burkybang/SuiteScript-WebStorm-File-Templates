/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType Portlet
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799288}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799288.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 */
define([],
  
  /**
   * @return {{
   *   render: Function,
   * }}
   */
  () => {
    
    /**
     * @param {PortletParams} params
     * @return {void}
     */
    const render = ({portlet, column, entity}) => {
      try {
        log.audit('render', {column, entity});
      } catch (e) {
        log.error('render', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {render};
  },
);