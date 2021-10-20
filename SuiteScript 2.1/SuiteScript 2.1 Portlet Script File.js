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
    const render = ({portlet, column, entity}) => {
      try {
        log.audit('render', {column, entity});
      } catch (e) {
        log.error('render', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {render};
    
  }
);