/**
 * @NApiVersion 2.x
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
  function () {
    
    /**
     * @param {PortletParams} params
     * @return {void}
     */
    function render(params) {
      try {
        log.audit('render', {
          column: params.column,
          entity: params.entity,
        });
      } catch (e) {
        log.error('render', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      render: render,
    };
  },
);