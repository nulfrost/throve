/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { isObj, hasProp } from '../../../util'
import { lexicons } from '../../../lexicons'
import { CID } from 'multiformats/cid'
import * as ComAtprotoRepoStrongRef from '../../com/atproto/repo/strongRef'

export interface Record {
  /** The URL for the feed */
  url: string
  /** The name for the feed */
  position: number
  /** Client-declared timestamp when this link was originally created. */
  createdAt: string
  parent?: ComAtprotoRepoStrongRef.Main
  feed?: ComAtprotoRepoStrongRef.Main
  [k: string]: unknown
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    (v.$type === 'site.throve.link#main' || v.$type === 'site.throve.link')
  )
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate('site.throve.link#main', v)
}
