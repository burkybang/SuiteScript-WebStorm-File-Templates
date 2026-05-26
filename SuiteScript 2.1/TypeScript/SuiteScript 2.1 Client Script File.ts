/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType ClientScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387798404}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387798404.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Definitions]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Definitions}
 * @author
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

/** Used in logs to help identify which client script is doing the logging */
const SCRIPT_FILENAME: string = '${NAME}';

const pageInit: EntryPoints.Client.pageInit = context => {
  try {
    const {mode, currentRecord} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: pageInit:`, e);
    log.error('pageInit', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const validateField: EntryPoints.Client.validateField = context => {
  try {
    const {currentRecord, sublistId, fieldId, line, column} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: validateField:`, e);
    log.error('validateField', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return true;
};

const fieldChanged: EntryPoints.Client.fieldChanged = context => {
  try {
    const {currentRecord, sublistId, fieldId, line, column} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: fieldChanged:`, e);
    log.error('fieldChanged', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const postSourcing: EntryPoints.Client.postSourcing = context => {
  try {
    const {currentRecord, sublistId, fieldId} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: postSourcing:`, e);
    log.error('postSourcing', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const lineInit: EntryPoints.Client.lineInit = context => {
  try {
    const {currentRecord, sublistId} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: lineInit:`, e);
    log.error('lineInit', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const validateLine: EntryPoints.Client.validateLine = context => {
  try {
    const {currentRecord, sublistId} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: validateLine:`, e);
    log.error('validateLine', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return true;
};

const validateInsert: EntryPoints.Client.validateInsert = context => {
  try {
    const {currentRecord, sublistId} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: validateInsert:`, e);
    log.error('validateInsert', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return true;
};

const validateDelete: EntryPoints.Client.validateDelete = context => {
  try {
    const {currentRecord, sublistId} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: validateDelete:`, e);
    log.error('validateDelete', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return true;
};

const sublistChanged: EntryPoints.Client.sublistChanged = context => {
  try {
    const {currentRecord, sublistId} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: sublistChanged:`, e);
    log.error('sublistChanged', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const saveRecord: EntryPoints.Client.saveRecord = context => {
  try {
    const {currentRecord} = context;
    
  } catch (e) {
    console.error(`\${SCRIPT_FILENAME}: saveRecord:`, e);
    log.error('saveRecord', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return true;
};

export {
  pageInit,
  // validateField,
  // fieldChanged,
  // postSourcing,
  // lineInit,
  // validateLine,
  // validateInsert,
  // validateDelete,
  // sublistChanged,
  // saveRecord,
};