// ui/latency/mojom/latency_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/latency/mojom/latency_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }


  var LatencyComponentType = {};
  LatencyComponentType.INPUT_EVENT_LATENCY_BEGIN_RWH_COMPONENT = 0;
  LatencyComponentType.INPUT_EVENT_LATENCY_SCROLL_UPDATE_ORIGINAL_COMPONENT = 1;
  LatencyComponentType.INPUT_EVENT_LATENCY_FIRST_SCROLL_UPDATE_ORIGINAL_COMPONENT = 2;
  LatencyComponentType.INPUT_EVENT_LATENCY_ORIGINAL_COMPONENT = 3;
  LatencyComponentType.INPUT_EVENT_LATENCY_UI_COMPONENT = 4;
  LatencyComponentType.INPUT_EVENT_LATENCY_RENDERER_MAIN_COMPONENT = 5;
  LatencyComponentType.INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_MAIN_COMPONENT = 6;
  LatencyComponentType.INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_IMPL_COMPONENT = 7;
  LatencyComponentType.INPUT_EVENT_LATENCY_SCROLL_UPDATE_LAST_EVENT_COMPONENT = 8;
  LatencyComponentType.INPUT_EVENT_LATENCY_RENDERER_SWAP_COMPONENT = 9;
  LatencyComponentType.DISPLAY_COMPOSITOR_RECEIVED_FRAME_COMPONENT = 10;
  LatencyComponentType.INPUT_EVENT_GPU_SWAP_BUFFER_COMPONENT = 11;
  LatencyComponentType.INPUT_EVENT_LATENCY_FRAME_SWAP_COMPONENT = 12;
  LatencyComponentType.MIN_VALUE = 0;
  LatencyComponentType.MAX_VALUE = 12;

  LatencyComponentType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      return true;
    }
    return false;
  };

  LatencyComponentType.toKnownEnumValue = function(value) {
    return value;
  };

  LatencyComponentType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SourceEventType = {};
  SourceEventType.UNKNOWN = 0;
  SourceEventType.WHEEL = 1;
  SourceEventType.MOUSE = 2;
  SourceEventType.TOUCH = 3;
  SourceEventType.INERTIAL = 4;
  SourceEventType.KEY_PRESS = 5;
  SourceEventType.TOUCHPAD = 6;
  SourceEventType.SCROLLBAR = 7;
  SourceEventType.OTHER = 8;
  SourceEventType.MIN_VALUE = 0;
  SourceEventType.MAX_VALUE = 8;

  SourceEventType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return true;
    }
    return false;
  };

  SourceEventType.toKnownEnumValue = function(value) {
    return value;
  };

  SourceEventType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function LatencyInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LatencyInfo.prototype.initDefaults_ = function() {
    this.latencyComponents = null;
    this.traceId = 0;
    this.ukmSourceId = 0;
    this.coalesced = false;
    this.began = false;
    this.terminated = false;
    this.sourceEventType = 0;
    this.scrollUpdateDelta = 0;
    this.predictedScrollUpdateDelta = 0;
    this.gestureScrollId = 0;
  };
  LatencyInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LatencyInfo.validate = function(messageValidator, offset) {
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


    // validate LatencyInfo.latencyComponents
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, new codec.Enum(LatencyComponentType), new codec.PointerTo(time$.TimeTicks), false);
    if (err !== validator.validationError.NONE)
        return err;







    // validate LatencyInfo.sourceEventType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, SourceEventType);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  LatencyInfo.encodedSize = codec.kStructHeaderSize + 48;

  LatencyInfo.decode = function(decoder) {
    var packed;
    var val = new LatencyInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.latencyComponents =
        decoder.decodeMapPointer(new codec.Enum(LatencyComponentType), new codec.PointerTo(time$.TimeTicks));
    val.traceId =
        decoder.decodeStruct(codec.Int64);
    val.ukmSourceId =
        decoder.decodeStruct(codec.Int64);
    packed = decoder.readUint8();
    val.coalesced = (packed >> 0) & 1 ? true : false;
    val.began = (packed >> 1) & 1 ? true : false;
    val.terminated = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sourceEventType =
        decoder.decodeStruct(new codec.Enum(SourceEventType));
    val.scrollUpdateDelta =
        decoder.decodeStruct(codec.Float);
    val.predictedScrollUpdateDelta =
        decoder.decodeStruct(codec.Float);
    val.gestureScrollId =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  LatencyInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LatencyInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(new codec.Enum(LatencyComponentType), new codec.PointerTo(time$.TimeTicks), val.latencyComponents);
    encoder.encodeStruct(codec.Int64, val.traceId);
    encoder.encodeStruct(codec.Int64, val.ukmSourceId);
    packed = 0;
    packed |= (val.coalesced & 1) << 0
    packed |= (val.began & 1) << 1
    packed |= (val.terminated & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.sourceEventType);
    encoder.encodeStruct(codec.Float, val.scrollUpdateDelta);
    encoder.encodeStruct(codec.Float, val.predictedScrollUpdateDelta);
    encoder.encodeStruct(codec.Int64, val.gestureScrollId);
  };
  exports.LatencyComponentType = LatencyComponentType;
  exports.SourceEventType = SourceEventType;
  exports.LatencyInfo = LatencyInfo;
})();