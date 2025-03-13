/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType MapReduceScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799161}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799161.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

const getInputData: EntryPoints.MapReduce.getInputData = context => {
  try {
    log.audit('Started', 'Started');
    log.debug('getInputData', context);
    
  } catch (e) {
    log.error('getInputData', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const map: EntryPoints.MapReduce.map = context => {
  try {
    log.debug('map', context);
    const {key, value} = context;
    
  } catch (e) {
    log.error('map', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const reduce: EntryPoints.MapReduce.reduce = context => {
  try {
    log.debug('reduce', context);
    const {key, values} = context;
    
  } catch (e) {
    log.error('reduce', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const summarize: EntryPoints.MapReduce.summarize = context => {
  try {
    log.debug('summarize', context);
    const {dateCreated, seconds, usage, concurrency, yields} = context;
    
  } catch (e) {
    log.error('summarize', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  } finally {
    log.audit('Finished', 'Finished');
  }
};

export {
  getInputData,
  map,
  reduce,
  summarize,
};