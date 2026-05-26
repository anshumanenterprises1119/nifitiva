# Nifitiva Automated Git Watcher & Auto-Push Script
# --------------------------------------------------
# This script monitors your folder for changes and automatically
# runs 'git add', 'git commit', and 'git push' to GitHub on save.

$path = Get-Location
$filter = "*.*"

Write-Host "--------------------------------------------------------" -ForegroundColor Gold
Write-Host "  NIFITIVA GIT AUTO-WATCHER IS ACTIVE" -ForegroundColor Green
Write-Host "  Watching folder: $path" -ForegroundColor White
Write-Host "  Any file edits will be automatically pushed to GitHub." -ForegroundColor White
Write-Host "  Press [Ctrl+C] to stop this watcher." -ForegroundColor Red
Write-Host "--------------------------------------------------------" -ForegroundColor Gold

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $path
$watcher.Filter = $filter
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# Action to perform when any file is modified
$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    
    # Ignore git internal metadata directory and log files
    if ($path -like "*\.git\*" -or $path -like "*.log" -or $path -like "*.ps1") {
        return
    }
    
    Write-Host ""
    Write-Host "[Change Detected] File: $path ($changeType)" -ForegroundColor Yellow
    Write-Host "Syncing with GitHub..." -ForegroundColor Cyan
    
    try {
        git add .
        git commit -m "auto: updates to files"
        git push origin main
        Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Push failed. Please check your internet connection or git status." -ForegroundColor Red
    }
}

# Bind events to the watcher
$handlers = @()
$handlers += Register-ObjectEvent $watcher "Changed" -Action $action
$handlers += Register-ObjectEvent $watcher "Created" -Action $action
$handlers += Register-ObjectEvent $watcher "Deleted" -Action $action

# Keeping the PowerShell session alive to monitor
try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
}
finally {
    # Clean up handlers on exit
    foreach ($handler in $handlers) {
        Unregister-Event -SourceIdentifier $handler.Name
    }
    $watcher.Dispose()
    Write-Host "Watcher stopped successfully." -ForegroundColor Gray
}
