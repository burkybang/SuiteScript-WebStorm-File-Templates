/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType Portlet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799288
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
    
  }
);