/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType Portlet
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799288.html
 */
define([],
  
  /**
   * @return {{
   *   render: function(PortletParams),
   * }}
   */
  function () {
    
    /**
     * @param {PortletParams} params
     * @return {void}
     */
    function render(params) {
      try {
        // Log audit after validations
        log.audit('${PROJECT_NAME}', 'render');
      } catch (e) {
        log.error('render', JSON.stringify(e));
      }
    }
    
    return {
      render: render,
    };
    
  }
);