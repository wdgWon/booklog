/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Storead
 * 서적을 읽고 정리 하는 공간
 * OpenAPI spec version: 1.0.0
 */

/**
 * "title": "title",
 "tags": ["tags1", "tags2"],
 "description": "description",
 "body": "body context",
"book": "026ae117-2e41-4658-9fde-850f1462bee5"
 */
export type RequestArticleList = {
  body: string;
  book: string;
  description: string;
  tags: string[];
  title: string;
};
