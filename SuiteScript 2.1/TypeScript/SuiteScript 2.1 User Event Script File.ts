/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType UserEventScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799721}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799721.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

const beforeLoad: EntryPoints.UserEvent.beforeLoad = context => {
  try {
    const {type, newRecord, form, request} = context;
    
    log.debug('beforeLoad', {type});
    
  } catch (e) {
    log.error('beforeLoad', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const beforeSubmit: EntryPoints.UserEvent.beforeSubmit = context => {
  try {
    const {type, newRecord, oldRecord} = context;
    
    log.debug('beforeSubmit', {type});
    
  } catch (e) {
    log.error('beforeSubmit', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const afterSubmit: EntryPoints.UserEvent.afterSubmit = context => {
  try {
    const {type, newRecord, oldRecord} = context;
    
    log.debug('afterSubmit', {type});
    
  } catch (e) {
    log.error('afterSubmit', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

export {
  // beforeLoad,
  // beforeSubmit,
  // afterSubmit,
};