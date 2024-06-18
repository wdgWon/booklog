"use client";

import { Comment } from "@/api/generated/models";

import { clientInstance } from "../client-instance";

export type CommentPayload = Pick<Comment, "content" | "parent_comment">;

export const addComment = async (
  articleId: string,
  comment: CommentPayload,
) => {
  const res = await clientInstance<Comment>({
    endPoint: `/comments/article/${articleId}`,
    method: "POST",
    body: JSON.stringify(comment),
  });

  return res;
};
