---
title: rsync
date: 2025-09-09
---

_A summary by Claude 4 after helping me validate a transfer_

# Verifying File Transfers with rsync

**TL;DR**: `rsync -avun` dry run reveals transfer completeness. System files and permissions create false positives. Focus on actual content directories.

## The Problem

Need to verify 8,000+ files transferred completely from external drive to NAS before wiping the source. Simple file counts aren't enough—need to confirm identical content.

## The Command

```bash
# Dry run comparison - shows what would transfer
rsync -avun --delete "/source/" "/destination/"

# If output is empty: perfect match
# If files listed: missing or different content
```

## What We Hit

### Permission Warnings

```
rsync(23451): warning: /Volumes/backup/.DocumentRevisions-V100: unreadable directory: Operation not permitted
rsync(23451): warning: /Volumes/backup/.Spotlight-V100: Operation not permitted
```

**Normal**. macOS system directories have restricted access. Doesn't affect user content.

### False Positives

Initial dry run showed **8,443 files** needing transfer despite backup appearing complete. The differences were:

- **System metadata**: `.DS_Store`, `.fseventsd` files with different timestamps
- **Permission changes**: External drive vs. NAS filesystem differences
- **Timestamp drift**: Files copied but with modified dates

### The Solution

Compare actual content directories, not entire filesystem:

```bash
# Check content directories only

find "/source" -name "MOVIES" -o -name "PICTURES" -o -name "PROJECTS" | \
 xargs -I {} find {} -type f | wc -l

find "/destination" -name "MOVIES" -o -name "PICTURES" -o -name "PROJECTS" | \
 xargs -I {} find {} -type f | wc -l
Result: **8,245 files** on both sides. Perfect match.
```

### Confirming Individual Directories

```bash
# Per-directory verification

rsync -avun --delete "/source/MOVIES/" "/destination/MOVIES/"

# Look for "Skip newer" messages - indicates files exist but differ in metadata only

# Empty output = identical content
```

## Key Insight

rsync dry runs flag **any difference**—content, timestamps, permissions, metadata. For transfer verification, distinguish between missing files and metadata differences.

System file differences are noise. Content file counts are signal.

---

_Trust but verify. Then verify the verification._

### Drag and Drop (Finder on macOS)

• What it does: Typically performs a move operation when dragging between locations on the same filesystem, or a copy operation when dragging between different filesystems
• Pros: Visual, intuitive, handles permissions and metadata reasonably well
• Cons: No progress indication for large transfers, no resumption if interrupted, limited control over the process

### rsync

• What it does: Intelligent file synchronization that only transfers differences
• Key advantages:
• Incremental transfers: Only copies changed parts of files
• Resumable: Can continue interrupted transfers
• Progress reporting: Shows transfer speed and completion percentage
• Verification: Can verify transfers with checksums
• Preservation: Excellent at preserving permissions, timestamps, symlinks, etc.
• Network capable: Works over SSH for remote transfers

## When to use each:

### Stick with drag-and-drop for:

• Small files or folders
• One-time moves within the same system
• When you want the simplicity of a GUI

### Consider rsync for:

• Large files or directory trees
• Syncing directories where you want to keep them in sync over time
• Network transfers
• When you need progress indication
• Critical transfers where you want verification
• Situations where the transfer might be interrupted

#### Example rsync commands:

```bash
# Basic copy with progress
rsync -avh --progress /source/path/ /destination/path/

# Sync directories (delete files in destination that don't exist in source)
rsync -avh --delete /source/path/ /destination/path/
```

For most everyday file management on macOS, drag-and-drop is perfectly fine. But if you're dealing with large datasets, backups, or want more control and reliability, rsync is definitely worth using.

Would you like me to show you some specific rsync examples for your use case?
