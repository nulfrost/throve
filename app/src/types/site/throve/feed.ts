/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { isObj, hasProp } from '../../../util'
import { lexicons } from '../../../lexicons'
import { CID } from 'multiformats/cid'

export interface Record {
  /** The URL for the feed */
  url: string
  /** The name for the feed */
  name: string
  /** The description for the feed */
  description: string
  /** Client-declared timestamp when this feed was originally created. */
  createdAt: string
  [k: string]: unknown
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    (v.$type === 'site.throve.feed#main' || v.$type === 'site.throve.feed')
  )
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate('site.throve.feed#main', v)
}
