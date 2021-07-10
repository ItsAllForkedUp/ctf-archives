// chrome/browser/ui/webui/internals/web_app/web_app_internals.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/internals/web_app/web_app_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojom.webAppInternals');



  function WebApp(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebApp.prototype.initDefaults_ = function() {
    this.id = null;
    this.name = null;
    this.debugInfo = null;
  };
  WebApp.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebApp.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebApp.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebApp.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebApp.debugInfo
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebApp.encodedSize = codec.kStructHeaderSize + 24;

  WebApp.decode = function(decoder) {
    var packed;
    var val = new WebApp();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.String);
    val.name =
        decoder.decodeStruct(codec.String);
    val.debugInfo =
        decoder.decodeStruct(codec.String);
    return val;
  };

  WebApp.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebApp.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.debugInfo);
  };
  function DisabledConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisabledConfig.prototype.initDefaults_ = function() {
    this.config = null;
    this.reason = null;
  };
  DisabledConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisabledConfig.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisabledConfig.config
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisabledConfig.reason
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DisabledConfig.encodedSize = codec.kStructHeaderSize + 16;

  DisabledConfig.decode = function(decoder) {
    var packed;
    var val = new DisabledConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config =
        decoder.decodeStruct(codec.String);
    val.reason =
        decoder.decodeStruct(codec.String);
    return val;
  };

  DisabledConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisabledConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.config);
    encoder.encodeStruct(codec.String, val.reason);
  };
  function InstallResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InstallResult.prototype.initDefaults_ = function() {
    this.installUrl = null;
    this.installResultCode = null;
    this.didUninstallAndReplace = false;
  };
  InstallResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InstallResult.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate InstallResult.installUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate InstallResult.installResultCode
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  InstallResult.encodedSize = codec.kStructHeaderSize + 24;

  InstallResult.decode = function(decoder) {
    var packed;
    var val = new InstallResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.installUrl =
        decoder.decodeStruct(codec.String);
    val.installResultCode =
        decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.didUninstallAndReplace = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  InstallResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InstallResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.installUrl);
    encoder.encodeStruct(codec.String, val.installResultCode);
    packed = 0;
    packed |= (val.didUninstallAndReplace & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function UninstallResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UninstallResult.prototype.initDefaults_ = function() {
    this.installUrl = null;
    this.isSuccess = false;
  };
  UninstallResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UninstallResult.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UninstallResult.installUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  UninstallResult.encodedSize = codec.kStructHeaderSize + 16;

  UninstallResult.decode = function(decoder) {
    var packed;
    var val = new UninstallResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.installUrl =
        decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.isSuccess = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UninstallResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UninstallResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.installUrl);
    packed = 0;
    packed |= (val.isSuccess & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PreinstalledWebAppDebugInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PreinstalledWebAppDebugInfo.prototype.initDefaults_ = function() {
    this.isStartUpTaskComplete = false;
    this.parseErrors = null;
    this.enabledConfigs = null;
    this.disabledConfigs = null;
    this.installResults = null;
    this.uninstallResults = null;
  };
  PreinstalledWebAppDebugInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PreinstalledWebAppDebugInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate PreinstalledWebAppDebugInfo.parseErrors
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PreinstalledWebAppDebugInfo.enabledConfigs
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PreinstalledWebAppDebugInfo.disabledConfigs
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(DisabledConfig), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PreinstalledWebAppDebugInfo.installResults
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(InstallResult), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PreinstalledWebAppDebugInfo.uninstallResults
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(UninstallResult), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PreinstalledWebAppDebugInfo.encodedSize = codec.kStructHeaderSize + 48;

  PreinstalledWebAppDebugInfo.decode = function(decoder) {
    var packed;
    var val = new PreinstalledWebAppDebugInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isStartUpTaskComplete = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.parseErrors =
        decoder.decodeArrayPointer(codec.String);
    val.enabledConfigs =
        decoder.decodeArrayPointer(codec.String);
    val.disabledConfigs =
        decoder.decodeArrayPointer(new codec.PointerTo(DisabledConfig));
    val.installResults =
        decoder.decodeArrayPointer(new codec.PointerTo(InstallResult));
    val.uninstallResults =
        decoder.decodeArrayPointer(new codec.PointerTo(UninstallResult));
    return val;
  };

  PreinstalledWebAppDebugInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PreinstalledWebAppDebugInfo.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isStartUpTaskComplete & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.String, val.parseErrors);
    encoder.encodeArrayPointer(codec.String, val.enabledConfigs);
    encoder.encodeArrayPointer(new codec.PointerTo(DisabledConfig), val.disabledConfigs);
    encoder.encodeArrayPointer(new codec.PointerTo(InstallResult), val.installResults);
    encoder.encodeArrayPointer(new codec.PointerTo(UninstallResult), val.uninstallResults);
  };
  function WebAppInternalsPageHandler_GetWebApps_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetWebApps_Params.prototype.initDefaults_ = function() {
  };
  WebAppInternalsPageHandler_GetWebApps_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetWebApps_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_GetWebApps_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebAppInternalsPageHandler_GetWebApps_Params.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetWebApps_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebAppInternalsPageHandler_GetWebApps_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetWebApps_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebAppInternalsPageHandler_GetWebApps_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetWebApps_ResponseParams.prototype.initDefaults_ = function() {
    this.webAppList = null;
  };
  WebAppInternalsPageHandler_GetWebApps_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetWebApps_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebAppInternalsPageHandler_GetWebApps_ResponseParams.webAppList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(WebApp), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_GetWebApps_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebAppInternalsPageHandler_GetWebApps_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetWebApps_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.webAppList =
        decoder.decodeArrayPointer(new codec.PointerTo(WebApp));
    return val;
  };

  WebAppInternalsPageHandler_GetWebApps_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetWebApps_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(WebApp), val.webAppList);
  };
  function WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params.prototype.initDefaults_ = function() {
  };
  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.status = null;
  };
  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PreinstalledWebAppDebugInfo, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStructPointer(PreinstalledWebAppDebugInfo);
    return val;
  };

  WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PreinstalledWebAppDebugInfo, val.status);
  };
  function WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.prototype.initDefaults_ = function() {
  };
  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.prototype.initDefaults_ = function() {
    this.externallyInstalledWebAppPrefs = null;
  };
  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.externallyInstalledWebAppPrefs
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.externallyInstalledWebAppPrefs =
        decoder.decodeStruct(codec.String);
    return val;
  };

  WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.externallyInstalledWebAppPrefs);
  };
  var kWebAppInternalsPageHandler_GetWebApps_Name = 1409168985;
  var kWebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Name = 131207932;
  var kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name = 426728759;

  function WebAppInternalsPageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebAppInternalsPageHandler,
                                                   handleOrPtrInfo);
  }

  function WebAppInternalsPageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebAppInternalsPageHandler, associatedInterfacePtrInfo);
  }

  WebAppInternalsPageHandlerAssociatedPtr.prototype =
      Object.create(WebAppInternalsPageHandlerPtr.prototype);
  WebAppInternalsPageHandlerAssociatedPtr.prototype.constructor =
      WebAppInternalsPageHandlerAssociatedPtr;

  function WebAppInternalsPageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebAppInternalsPageHandlerPtr.prototype.getWebApps = function() {
    return WebAppInternalsPageHandlerProxy.prototype.getWebApps
        .apply(this.ptr.getProxy(), arguments);
  };

  WebAppInternalsPageHandlerProxy.prototype.getWebApps = function() {
    var params_ = new WebAppInternalsPageHandler_GetWebApps_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebAppInternalsPageHandler_GetWebApps_Name,
          codec.align(WebAppInternalsPageHandler_GetWebApps_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebAppInternalsPageHandler_GetWebApps_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebAppInternalsPageHandler_GetWebApps_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WebAppInternalsPageHandlerPtr.prototype.getPreinstalledWebAppDebugInfo = function() {
    return WebAppInternalsPageHandlerProxy.prototype.getPreinstalledWebAppDebugInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  WebAppInternalsPageHandlerProxy.prototype.getPreinstalledWebAppDebugInfo = function() {
    var params_ = new WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Name,
          codec.align(WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WebAppInternalsPageHandlerPtr.prototype.getExternallyInstalledWebAppPrefs = function() {
    return WebAppInternalsPageHandlerProxy.prototype.getExternallyInstalledWebAppPrefs
        .apply(this.ptr.getProxy(), arguments);
  };

  WebAppInternalsPageHandlerProxy.prototype.getExternallyInstalledWebAppPrefs = function() {
    var params_ = new WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name,
          codec.align(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function WebAppInternalsPageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  WebAppInternalsPageHandlerStub.prototype.getWebApps = function() {
    return this.delegate_ && this.delegate_.getWebApps && this.delegate_.getWebApps();
  }
  WebAppInternalsPageHandlerStub.prototype.getPreinstalledWebAppDebugInfo = function() {
    return this.delegate_ && this.delegate_.getPreinstalledWebAppDebugInfo && this.delegate_.getPreinstalledWebAppDebugInfo();
  }
  WebAppInternalsPageHandlerStub.prototype.getExternallyInstalledWebAppPrefs = function() {
    return this.delegate_ && this.delegate_.getExternallyInstalledWebAppPrefs && this.delegate_.getExternallyInstalledWebAppPrefs();
  }

  WebAppInternalsPageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  WebAppInternalsPageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebAppInternalsPageHandler_GetWebApps_Name:
      var params = reader.decodeStruct(WebAppInternalsPageHandler_GetWebApps_Params);
      this.getWebApps().then(function(response) {
        var responseParams =
            new WebAppInternalsPageHandler_GetWebApps_ResponseParams();
        responseParams.webAppList = response.webAppList;
        var builder = new codec.MessageV1Builder(
            kWebAppInternalsPageHandler_GetWebApps_Name,
            codec.align(WebAppInternalsPageHandler_GetWebApps_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebAppInternalsPageHandler_GetWebApps_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kWebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Name:
      var params = reader.decodeStruct(WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params);
      this.getPreinstalledWebAppDebugInfo().then(function(response) {
        var responseParams =
            new WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kWebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Name,
            codec.align(WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name:
      var params = reader.decodeStruct(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params);
      this.getExternallyInstalledWebAppPrefs().then(function(response) {
        var responseParams =
            new WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams();
        responseParams.externallyInstalledWebAppPrefs = response.externallyInstalledWebAppPrefs;
        var builder = new codec.MessageV1Builder(
            kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name,
            codec.align(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWebAppInternalsPageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebAppInternalsPageHandler_GetWebApps_Name:
        if (message.expectsResponse())
          paramsClass = WebAppInternalsPageHandler_GetWebApps_Params;
      break;
      case kWebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Name:
        if (message.expectsResponse())
          paramsClass = WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Params;
      break;
      case kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name:
        if (message.expectsResponse())
          paramsClass = WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebAppInternalsPageHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWebAppInternalsPageHandler_GetWebApps_Name:
        if (message.isResponse())
          paramsClass = WebAppInternalsPageHandler_GetWebApps_ResponseParams;
        break;
      case kWebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_Name:
        if (message.isResponse())
          paramsClass = WebAppInternalsPageHandler_GetPreinstalledWebAppDebugInfo_ResponseParams;
        break;
      case kWebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_Name:
        if (message.isResponse())
          paramsClass = WebAppInternalsPageHandler_GetExternallyInstalledWebAppPrefs_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WebAppInternalsPageHandler = {
    name: 'mojom.web_app_internals.WebAppInternalsPageHandler',
    kVersion: 0,
    ptrClass: WebAppInternalsPageHandlerPtr,
    proxyClass: WebAppInternalsPageHandlerProxy,
    stubClass: WebAppInternalsPageHandlerStub,
    validateRequest: validateWebAppInternalsPageHandlerRequest,
    validateResponse: validateWebAppInternalsPageHandlerResponse,
  };
  WebAppInternalsPageHandlerStub.prototype.validator = validateWebAppInternalsPageHandlerRequest;
  WebAppInternalsPageHandlerProxy.prototype.validator = validateWebAppInternalsPageHandlerResponse;
  exports.WebApp = WebApp;
  exports.DisabledConfig = DisabledConfig;
  exports.InstallResult = InstallResult;
  exports.UninstallResult = UninstallResult;
  exports.PreinstalledWebAppDebugInfo = PreinstalledWebAppDebugInfo;
  exports.WebAppInternalsPageHandler = WebAppInternalsPageHandler;
  exports.WebAppInternalsPageHandlerPtr = WebAppInternalsPageHandlerPtr;
  exports.WebAppInternalsPageHandlerAssociatedPtr = WebAppInternalsPageHandlerAssociatedPtr;
})();