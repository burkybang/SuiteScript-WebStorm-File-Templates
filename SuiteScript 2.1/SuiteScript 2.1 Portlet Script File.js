/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType Portlet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799288.html
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