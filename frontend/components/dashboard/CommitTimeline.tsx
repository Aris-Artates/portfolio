"use client";

import { Badge } from "@/components/ui/Badge";
import { COMMIT_TYPE_LABELS } from "@/lib/constants";
import { formatRelativeTime } from "@/lib/utils";
import type { CommitSummary } from "@/lib/types";

interface CommitTimelineProps {
  commits: CommitSummary[];
}

export function CommitTimeline({ commits }: CommitTimelineProps) {
  if (commits.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No commits yet. Push to a tracked repository to see activity here.
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
      {commits.map((commit) => (
        <div
          key={commit.sha}
          className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
        >
          <div className="flex-shrink-0 mt-1">
            <Badge variant="commit-type" commitType={commit.commit_type}>
              {COMMIT_TYPE_LABELS[commit.commit_type] || commit.commit_type}
            </Badge>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-200 truncate">{commit.message}</p>
            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
              <span>{commit.project_name}</span>
              {commit.branch && (
                <>
                  <span>&bull;</span>
                  <span>{commit.branch}</span>
                </>
              )}
              <span>&bull;</span>
              <span>{formatRelativeTime(commit.committed_at)}</span>
            </div>
          </div>
          <code className="text-xs text-gray-600 font-mono flex-shrink-0">
            {commit.sha.slice(0, 7)}
          </code>
        </div>
      ))}
    </div>
  );
}
