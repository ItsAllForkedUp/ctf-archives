// services/network/public/mojom/isolation_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/isolation_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var site_for_cookies$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/site_for_cookies.mojom', 'site_for_cookies.mojom.js');
  }
  var schemeful_site$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/schemeful_site.mojom', 'schemeful_site.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }


  var IsolationInfoRequestType = {};
  IsolationInfoRequestType.kMainFrame = 0;
  IsolationInfoRequestType.kSubFrame = 1;
  IsolationInfoRequestType.kOther = 2;
  IsolationInfoRequestType.MIN_VALUE = 0,
  IsolationInfoRequestType.MAX_VALUE = 2,

  IsolationInfoRequestType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  IsolationInfoRequestType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function IsolationInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IsolationInfo.prototype.initDefaults_ = function() {
    this.requestType = 0;
    this.opaqueAndNonTransient = false;
    this.topFrameOrigin = null;
    this.frameOrigin = null;
    this.siteForCookies = null;
    this.partyContext = null;
  };
  IsolationInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IsolationInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IsolationInfo.requestType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, IsolationInfoRequestType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IsolationInfo.topFrameOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IsolationInfo.frameOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate IsolationInfo.siteForCookies
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, site_for_cookies$.SiteForCookies, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IsolationInfo.partyContext
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(schemeful_site$.SchemefulSite), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IsolationInfo.encodedSize = codec.kStructHeaderSize + 40;

  IsolationInfo.decode = function(decoder) {
    var packed;
    var val = new IsolationInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestType =
        decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.opaqueAndNonTransient = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.topFrameOrigin =
        decoder.decodeStructPointer(origin$.Origin);
    val.frameOrigin =
        decoder.decodeStructPointer(origin$.Origin);
    val.siteForCookies =
        decoder.decodeStructPointer(site_for_cookies$.SiteForCookies);
    val.partyContext =
        decoder.decodeArrayPointer(new codec.PointerTo(schemeful_site$.SchemefulSite));
    return val;
  };

  IsolationInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IsolationInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.requestType);
    packed = 0;
    packed |= (val.opaqueAndNonTransient & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(origin$.Origin, val.topFrameOrigin);
    encoder.encodeStructPointer(origin$.Origin, val.frameOrigin);
    encoder.encodeStructPointer(site_for_cookies$.SiteForCookies, val.siteForCookies);
    encoder.encodeArrayPointer(new codec.PointerTo(schemeful_site$.SchemefulSite), val.partyContext);
  };
  exports.IsolationInfoRequestType = IsolationInfoRequestType;
  exports.IsolationInfo = IsolationInfo;
})();