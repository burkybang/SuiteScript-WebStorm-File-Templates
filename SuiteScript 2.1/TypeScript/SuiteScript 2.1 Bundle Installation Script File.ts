/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType BundleInstallationScript
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460460309}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4460460309.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

const beforeInstall: EntryPoints.BundleInstallation.beforeInstall = ({version}) => {
  try {
    log.audit('beforeInstall', {version});
  } catch (e) {
    log.error('beforeInstall', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const afterInstall: EntryPoints.BundleInstallation.afterInstall = ({version}) => {
  try {
    log.audit('afterInstall', {version});
  } catch (e) {
    log.error('afterInstall', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const beforeUpdate: EntryPoints.BundleInstallation.beforeUpdate = ({toVersion, fromVersion}) => {
  try {
    log.audit('beforeUpdate', {toVersion, fromVersion});
  } catch (e) {
    log.error('beforeUpdate', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const afterUpdate: EntryPoints.BundleInstallation.afterUpdate = ({toVersion, fromVersion}) => {
  try {
    log.audit('afterUpdate', {toVersion, fromVersion});
  } catch (e) {
    log.error('afterUpdate', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

const beforeUninstall: EntryPoints.BundleInstallation.beforeUninstall = ({version}) => {
  try {
    log.audit('beforeUninstall', {version});
  } catch (e) {
    log.error('beforeUninstall', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
};

export {
  // beforeInstall,
  // afterInstall,
  // beforeUpdate,
  // afterUpdate,
  // beforeUninstall,
};