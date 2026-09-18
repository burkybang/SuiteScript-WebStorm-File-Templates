/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType EventSubscriber
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=article_8125656702}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8125656702.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Definitions]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Definitions}
 * @author
 */

import * as log from 'N/log';

type HandleOptions = {
  context: {
    /** The record type ID of the record that triggered the event */
    recordType: string;
  };
  payload: {
    /** Internal ID of the record that triggered the event */
    recordId: string;
  };
};

const handle = async (options: HandleOptions): Promise<void> => {
  try {
    const {context: {recordType}, payload: {recordId}} = options;
    
  } catch (e) {
    log.error('handle', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

export {handle};