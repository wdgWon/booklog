/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Storead
 * 서적을 읽고 정리 하는 공간
 * OpenAPI spec version: 1.0.0
 */

export type Comment = {
  readonly article_title: string;
  content: string;
  readonly created_at: string;
  readonly id: string;
  /** @nullable */
  parent_comment?: number | null;
  readonly pkid: number;
  readonly replies: string;
  readonly username: string;
};
