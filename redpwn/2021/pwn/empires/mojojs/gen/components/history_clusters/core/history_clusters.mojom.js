// components/history_clusters/core/history_clusters.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/history_clusters/core/history_clusters.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('historyClusters.mojom');
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }


  var Annotation = {};
  Annotation.kBookmarked = 0;
  Annotation.kTabGrouped = 1;
  Annotation.kSearchResultsPage = 2;
  Annotation.MIN_VALUE = 0;
  Annotation.MAX_VALUE = 2;

  Annotation.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  Annotation.toKnownEnumValue = function(value) {
    return value;
  };

  Annotation.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SearchQuery(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SearchQuery.prototype.initDefaults_ = function() {
    this.query = null;
    this.url = null;
  };
  SearchQuery.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SearchQuery.validate = function(messageValidator, offset) {
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


    // validate SearchQuery.query
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SearchQuery.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SearchQuery.encodedSize = codec.kStructHeaderSize + 16;

  SearchQuery.decode = function(decoder) {
    var packed;
    var val = new SearchQuery();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.query =
        decoder.decodeStruct(codec.String);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  SearchQuery.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SearchQuery.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.query);
    encoder.encodeStructPointer(url$.Url, val.url);
  };
  function URLVisit(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLVisit.prototype.initDefaults_ = function() {
    this.normalizedUrl = null;
    this.pageTitle = null;
    this.lastVisitTime = null;
    this.firstVisitTime = null;
    this.rawUrls = null;
    this.relativeDate = null;
    this.timeOfDay = null;
    this.annotations = null;
    this.relatedSearches = null;
    this.relatedVisits = null;
    this.belowTheFold = false;
    this.score = 0;
  };
  URLVisit.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLVisit.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 104}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.normalizedUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.pageTitle
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.lastVisitTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.firstVisitTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.rawUrls
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(url$.Url), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.relativeDate
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.timeOfDay
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.annotations
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 56, 4, new codec.Enum(Annotation), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.relatedSearches
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 64, 8, new codec.PointerTo(SearchQuery), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLVisit.relatedVisits
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 72, 8, new codec.PointerTo(URLVisit), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  URLVisit.encodedSize = codec.kStructHeaderSize + 96;

  URLVisit.decode = function(decoder) {
    var packed;
    var val = new URLVisit();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.normalizedUrl =
        decoder.decodeStructPointer(url$.Url);
    val.pageTitle =
        decoder.decodeStruct(codec.String);
    val.lastVisitTime =
        decoder.decodeStructPointer(time$.Time);
    val.firstVisitTime =
        decoder.decodeStructPointer(time$.Time);
    val.rawUrls =
        decoder.decodeArrayPointer(new codec.PointerTo(url$.Url));
    val.relativeDate =
        decoder.decodeStruct(codec.String);
    val.timeOfDay =
        decoder.decodeStruct(codec.String);
    val.annotations =
        decoder.decodeArrayPointer(new codec.Enum(Annotation));
    val.relatedSearches =
        decoder.decodeArrayPointer(new codec.PointerTo(SearchQuery));
    val.relatedVisits =
        decoder.decodeArrayPointer(new codec.PointerTo(URLVisit));
    packed = decoder.readUint8();
    val.belowTheFold = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.score =
        decoder.decodeStruct(codec.Double);
    return val;
  };

  URLVisit.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLVisit.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.normalizedUrl);
    encoder.encodeStruct(codec.String, val.pageTitle);
    encoder.encodeStructPointer(time$.Time, val.lastVisitTime);
    encoder.encodeStructPointer(time$.Time, val.firstVisitTime);
    encoder.encodeArrayPointer(new codec.PointerTo(url$.Url), val.rawUrls);
    encoder.encodeStruct(codec.String, val.relativeDate);
    encoder.encodeStruct(codec.String, val.timeOfDay);
    encoder.encodeArrayPointer(new codec.Enum(Annotation), val.annotations);
    encoder.encodeArrayPointer(new codec.PointerTo(SearchQuery), val.relatedSearches);
    encoder.encodeArrayPointer(new codec.PointerTo(URLVisit), val.relatedVisits);
    packed = 0;
    packed |= (val.belowTheFold & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Double, val.score);
  };
  function Cluster(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Cluster.prototype.initDefaults_ = function() {
    this.id = 0;
    this.visits = null;
    this.lastVisitTime = null;
    this.keywords = null;
  };
  Cluster.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Cluster.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate Cluster.visits
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(URLVisit), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Cluster.lastVisitTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Cluster.keywords
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(string16$.String16), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Cluster.encodedSize = codec.kStructHeaderSize + 32;

  Cluster.decode = function(decoder) {
    var packed;
    var val = new Cluster();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.Int64);
    val.visits =
        decoder.decodeArrayPointer(new codec.PointerTo(URLVisit));
    val.lastVisitTime =
        decoder.decodeStructPointer(time$.Time);
    val.keywords =
        decoder.decodeArrayPointer(new codec.PointerTo(string16$.String16));
    return val;
  };

  Cluster.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Cluster.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.id);
    encoder.encodeArrayPointer(new codec.PointerTo(URLVisit), val.visits);
    encoder.encodeStructPointer(time$.Time, val.lastVisitTime);
    encoder.encodeArrayPointer(new codec.PointerTo(string16$.String16), val.keywords);
  };
  function QueryParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QueryParams.prototype.initDefaults_ = function() {
    this.query = null;
    this.recencyThreshold = null;
    this.maxCount = 0;
  };
  QueryParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QueryParams.validate = function(messageValidator, offset) {
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


    // validate QueryParams.query
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate QueryParams.recencyThreshold
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  QueryParams.encodedSize = codec.kStructHeaderSize + 24;

  QueryParams.decode = function(decoder) {
    var packed;
    var val = new QueryParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.query =
        decoder.decodeStruct(codec.String);
    val.recencyThreshold =
        decoder.decodeStructPointer(time$.Time);
    val.maxCount =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  QueryParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QueryParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.query);
    encoder.encodeStructPointer(time$.Time, val.recencyThreshold);
    encoder.encodeStruct(codec.Uint32, val.maxCount);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.Annotation = Annotation;
  exports.SearchQuery = SearchQuery;
  exports.URLVisit = URLVisit;
  exports.Cluster = Cluster;
  exports.QueryParams = QueryParams;
})();