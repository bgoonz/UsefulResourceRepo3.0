"""Utilities to manipulate JSON objects."""
# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.
import re
import warnings
from binascii import b2a_base64
from datetime import datetime
from typing import Optional
from typing import Union

from dateutil.parser import parse as _dateutil_parse  # type: ignore
from dateutil.tz import tzlocal  # type: ignore

next_attr_name = (
    "__next__"
)  # Not sure what downstream library uses this, but left it to be safe

# -----------------------------------------------------------------------------
# Globals and constants
# -----------------------------------------------------------------------------

# timestamp formats
ISO8601 = "%Y-%m-%dT%H:%M:%S.%f"
ISO8601_PAT = re.compile(
    r"^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(\.\d{1,6})?(Z|([\+\-]\d{2}:?\d{2}))?$"
)

# holy crap, strptime is not threadsafe.
# Calling it once at import seems to help.
datetime.strptime("1", "%d")

# -----------------------------------------------------------------------------
# Classes and functions
# -----------------------------------------------------------------------------


def _ensure_tzinfo(dt: datetime) -> datetime:
    """Ensure a datetime object has tzinfo

    If no tzinfo is present, add tzlocal
    """
    if not dt.tzinfo:
        # No more naïve datetime objects!
        warnings.warn(
            "Interpreting naive datetime as local %s. Please add timezone info to timestamps."
            % dt,
            DeprecationWarning,
            stacklevel=4,
        )
        dt = dt.replace(tzinfo=tzlocal())
    return dt


def parse_date(s: Optional[str]) -> Optional[Union[str, datetime]]:
    """parse an ISO8601 date string

    If it is None or not a valid ISO8601 timestamp,
    it will be returned unmodified.
    Otherwise, it will return a datetime object.
    """
    if s is None:
        return s
    m = ISO8601_PAT.match(s)
    if m:
        dt = _dateutil_parse(s)
        return _ensure_tzinfo(dt)
    return s


def extract_dates(obj):
    """extract ISO8601 dates from unpacked JSON"""
    if isinstance(obj, dict):
        new_obj = {}  # don't clobber
        for k, v in obj.items():
            new_obj[k] = extract_dates(v)
        obj = new_obj
    elif isinstance(obj, (list, tuple)):
        obj = [extract_dates(o) for o in obj]
    elif isinstance(obj, str):
        obj = parse_date(obj)
    return obj


def squash_dates(obj):
    """squash datetime objects into ISO8601 strings"""
    if isinstance(obj, dict):
        obj = dict(obj)  # don't clobber
        for k, v in obj.items():
            obj[k] = squash_dates(v)
    elif isinstance(obj, (list, tuple)):
        obj = [squash_dates(o) for o in obj]
    elif isinstance(obj, datetime):
        obj = obj.isoformat()
    return obj


def date_default(obj):
    """DEPRECATED: Use jupyter_client.jsonutil.json_default"""
    warnings.warn(
        "date_default is deprecated since jupyter_client 7.0.0."
        " Use jupyter_client.jsonutil.json_default.",
        stacklevel=2,
    )
    return json_default(obj)


def json_default(obj):
    """default function for packing objects in JSON."""
    if isinstance(obj, datetime):
        obj = _ensure_tzinfo(obj)
        return obj.isoformat().replace("+00:00", "Z")
    elif isinstance(obj, bytes):
        return b2a_base64(obj).decode("ascii")
    else:
        raise TypeError("%r is not JSON serializable" % obj)
