// third_party/blink/public/mojom/fetch/fetch_api_response.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/fetch/fetch_api_response.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var fetch_api$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/fetch_api.mojom', '../../../../../services/network/public/mojom/fetch_api.mojom.js');
  }
  var parsed_headers$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/parsed_headers.mojom', '../../../../../services/network/public/mojom/parsed_headers.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', '../../../../../services/network/public/mojom/network_param.mojom.js');
  }
  var network_types$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_types.mojom', '../../../../../services/network/public/mojom/network_types.mojom.js');
  }
  var serialized_blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/serialized_blob.mojom', '../blob/serialized_blob.mojom.js');
  }
  var service_worker_error_type$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/service_worker/service_worker_error_type.mojom', '../service_worker/service_worker_error_type.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function FetchAPIResponse(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FetchAPIResponse.prototype.initDefaults_ = function() {
    this.urlList = null;
    this.statusCode = 0;
    this.wasFetchedViaSpdy = false;
    this.hasRangeRequested = false;
    this.requestIncludeCredentials = true;
    this.responseType = fetch_api$.FetchResponseType.kDefault;
    this.statusText = null;
    this.padding = 0;
    this.responseSource = fetch_api$.FetchResponseSource.kUnspecified;
    this.error = service_worker_error_type$.ServiceWorkerResponseError.kUnknown;
    this.headers = null;
    this.mimeType = null;
    this.requestMethod = null;
    this.blob = null;
    this.responseTime = null;
    this.cacheStorageCacheName = null;
    this.corsExposedHeaderNames = null;
    this.sideDataBlob = null;
    this.sideDataBlobForCachePut = null;
    this.parsedHeaders = null;
    this.connectionInfo = 0;
    this.alpnNegotiatedProtocol = "unknown";
    this.authChallengeInfo = null;
  };
  FetchAPIResponse.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FetchAPIResponse.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 152}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.urlList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(url$.Url), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FetchAPIResponse.statusText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.responseType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, fetch_api$.FetchResponseType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FetchAPIResponse.responseSource
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 32, fetch_api$.FetchResponseSource);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.headers
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 40, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.mimeType
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.requestMethod
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.blob
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, serialized_blob$.SerializedBlob, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 36, service_worker_error_type$.ServiceWorkerResponseError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.responseTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.cacheStorageCacheName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 80, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.corsExposedHeaderNames
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 88, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.sideDataBlob
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 96, serialized_blob$.SerializedBlob, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.sideDataBlobForCachePut
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 104, serialized_blob$.SerializedBlob, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.parsedHeaders
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 112, parsed_headers$.ParsedHeaders, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.connectionInfo
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 120, network_types$.ConnectionInfo);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIResponse.alpnNegotiatedProtocol
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 128, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate FetchAPIResponse.authChallengeInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 136, network_param$.AuthChallengeInfo, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FetchAPIResponse.encodedSize = codec.kStructHeaderSize + 144;

  FetchAPIResponse.decode = function(decoder) {
    var packed;
    var val = new FetchAPIResponse();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlList =
        decoder.decodeArrayPointer(new codec.PointerTo(url$.Url));
    val.statusCode =
        decoder.decodeStruct(codec.Uint16);
    packed = decoder.readUint8();
    val.wasFetchedViaSpdy = (packed >> 0) & 1 ? true : false;
    val.hasRangeRequested = (packed >> 1) & 1 ? true : false;
    val.requestIncludeCredentials = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    val.responseType =
        decoder.decodeStruct(new codec.Enum(fetch_api$.FetchResponseType));
    val.statusText =
        decoder.decodeStruct(codec.String);
    val.padding =
        decoder.decodeStruct(codec.Int64);
    val.responseSource =
        decoder.decodeStruct(new codec.Enum(fetch_api$.FetchResponseSource));
    val.error =
        decoder.decodeStruct(new codec.Enum(service_worker_error_type$.ServiceWorkerResponseError));
    val.headers =
        decoder.decodeMapPointer(codec.String, codec.String);
    val.mimeType =
        decoder.decodeStruct(codec.NullableString);
    val.requestMethod =
        decoder.decodeStruct(codec.NullableString);
    val.blob =
        decoder.decodeStructPointer(serialized_blob$.SerializedBlob);
    val.responseTime =
        decoder.decodeStructPointer(time$.Time);
    val.cacheStorageCacheName =
        decoder.decodeStruct(codec.NullableString);
    val.corsExposedHeaderNames =
        decoder.decodeArrayPointer(codec.String);
    val.sideDataBlob =
        decoder.decodeStructPointer(serialized_blob$.SerializedBlob);
    val.sideDataBlobForCachePut =
        decoder.decodeStructPointer(serialized_blob$.SerializedBlob);
    val.parsedHeaders =
        decoder.decodeStructPointer(parsed_headers$.ParsedHeaders);
    val.connectionInfo =
        decoder.decodeStruct(new codec.Enum(network_types$.ConnectionInfo));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.alpnNegotiatedProtocol =
        decoder.decodeStruct(codec.String);
    val.authChallengeInfo =
        decoder.decodeStructPointer(network_param$.AuthChallengeInfo);
    return val;
  };

  FetchAPIResponse.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FetchAPIResponse.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(url$.Url), val.urlList);
    encoder.encodeStruct(codec.Uint16, val.statusCode);
    packed = 0;
    packed |= (val.wasFetchedViaSpdy & 1) << 0
    packed |= (val.hasRangeRequested & 1) << 1
    packed |= (val.requestIncludeCredentials & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.responseType);
    encoder.encodeStruct(codec.String, val.statusText);
    encoder.encodeStruct(codec.Int64, val.padding);
    encoder.encodeStruct(codec.Int32, val.responseSource);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.encodeMapPointer(codec.String, codec.String, val.headers);
    encoder.encodeStruct(codec.NullableString, val.mimeType);
    encoder.encodeStruct(codec.NullableString, val.requestMethod);
    encoder.encodeStructPointer(serialized_blob$.SerializedBlob, val.blob);
    encoder.encodeStructPointer(time$.Time, val.responseTime);
    encoder.encodeStruct(codec.NullableString, val.cacheStorageCacheName);
    encoder.encodeArrayPointer(codec.String, val.corsExposedHeaderNames);
    encoder.encodeStructPointer(serialized_blob$.SerializedBlob, val.sideDataBlob);
    encoder.encodeStructPointer(serialized_blob$.SerializedBlob, val.sideDataBlobForCachePut);
    encoder.encodeStructPointer(parsed_headers$.ParsedHeaders, val.parsedHeaders);
    encoder.encodeStruct(codec.Int32, val.connectionInfo);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.alpnNegotiatedProtocol);
    encoder.encodeStructPointer(network_param$.AuthChallengeInfo, val.authChallengeInfo);
  };
  exports.FetchAPIResponse = FetchAPIResponse;
})();