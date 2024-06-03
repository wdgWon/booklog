/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Storead
 * 서적을 읽고 정리 하는 공간
 * OpenAPI spec version: 1.0.0
 */

export type BookList = {
  /** @maxLength 255 */
  author: string;
  readonly created_at: string;
  description: string;
  readonly id: string;
  /** @maxLength 255 */
  isbn: string;
  readonly pkid: number;
  published_date: string;
  thumbnail_url?: string;
  /** @maxLength 255 */
  title: string;
  readonly updated_at: string;
};