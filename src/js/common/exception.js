/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

export function IEXJSException(message) {
  const error = new Error(message);
  return error;
}

IEXJSException.prototype = Object.create(Error.prototype);
