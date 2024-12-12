/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType MassUpdateScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460452911}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460452911.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

const each: EntryPoints.MassUpdate.each = ({id, type}) => {
  try {
    log.audit('each', {id, type});
    
  } catch (e) {
    log.error('each', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

export {each};