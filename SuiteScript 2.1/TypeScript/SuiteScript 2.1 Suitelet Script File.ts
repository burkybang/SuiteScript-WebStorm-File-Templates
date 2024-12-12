/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType Suitelet
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799600}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799600.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

const onRequest: EntryPoints.Suitelet.onRequest = context => {
  try {
    log.audit('onRequest', {
      request: {
        clientIpAddress: context.request.clientIpAddress,
        url: context.request.url,
        method: context.request.method,
        parameters: context.request.parameters,
      },
    });
    const {request, response} = context;
    
  } catch (e) {
    log.error('onRequest', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

export {onRequest};