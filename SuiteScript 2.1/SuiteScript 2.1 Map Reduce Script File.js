/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType MapReduceScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799161}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799161.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 */
define([],
  
  /**
   * @return {{
   *   getInputData: Function,
   *   map?: Function,
   *   reduce?: Function,
   *   summarize?: Function,
   * }}
   */
  () => {
    
    /**
     * @param {GetInputContext} context
     * @return {GetInputReturn}
     */
    const getInputData = context => {
      try {
        log.audit('getInputData', context);
      } catch (e) {
        log.error('getInputData', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {MapContext} context - Data collection containing raw key/value pairs
     * @return {void}
     */
    const map = context => {
      try {
        log.audit('map', context);
        const {key, value} = context;
      } catch (e) {
        log.error('map', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {ReduceContext} context - Data collection containing grouped key/value pairs
     * @return {void}
     */
    const reduce = context => {
      try {
        log.audit('reduce', context);
        const {key, values} = context;
      } catch (e) {
        log.error('reduce', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    /**
     * @param {SummarizeContext} context - Holds statistics regarding the execution of a map/reduce script
     * @return {void}
     */
    const summarize = context => {
      try {
        log.audit('summarize', context);
        const {dateCreated, seconds, usage, concurrency, yields} = context;
      } catch (e) {
        log.error('summarize', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
      }
    };
    
    return {
      getInputData,
      map,
      reduce,
      summarize,
    };
  },
);