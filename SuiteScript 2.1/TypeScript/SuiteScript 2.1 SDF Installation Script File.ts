/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType SDFInstallationScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_1544719586}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1544719586.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

const run: EntryPoints.SDFInstallation.run = params => {
  try {
    const {fromVersion, toVersion} = params;
    
    log.debug('run', {fromVersion, toVersion});
    
    if (fromVersion) {
      if (fromVersion === toVersion) {
        onDeploy(params);
      } else {
        onUpdate(params);
      }
    } else {
      onInstall(params);
    }
    
  } catch (e) {
    log.error('run', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const onInstall = (params: EntryPoints.SDFInstallation.runContext) => {
  log.debug('Type', 'Install');
  const {toVersion} = params;
  
};

const onUpdate = (params: EntryPoints.SDFInstallation.runContext) => {
  log.debug('Type', 'Update');
  const {fromVersion, toVersion} = params;
  
};

const onDeploy = (params: EntryPoints.SDFInstallation.runContext) => {
  log.debug('Type', 'Deploy');
  const {toVersion} = params;
  
};

export {run};