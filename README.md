# MVP

## Current Focus

- Windows
  - Minimize/Maximize
    - Maximized mobile is not accounting for taskbar
    - Animate minimize scaling into it's taskbar entry
    - Animate maximize as is done on osx
    - Cascade is causing visual glitch during min/max
    - WindowStateCycler needs defining

## System

- Images
  - next-optimized-images (https://web.dev/image-aspect-ratio)
- Windows
  - windowMotionSettings needs DRY'ing
  - Create WindowTitleBar component
  - Title text should truncate at far right of titlebar
  - Disable top resize handle on mobile to improve dragging
- File Manager
  - Change Directory to FileManager
  - Change drag drop logic to Directory and have it write the file
  - Favicon is showing `NaN` after drag/drop demo
  - Complete UI/Toolbar/Breadcrumb Bar
- Icons
  - zIndex on drag should be above windows
  - Switch to `grid` to fix icon landscape issues
  - Truncation breaks at 3 lines
- Side-By-Side Compare
  - Windows
  - Icons
  - Taskbar

## Apps

- ODF Viewer (https://webodf.org/)
  - Convert blog posts into `.odf` files
- PDF Viewer
  - Update Resume
- Winamp
  - Positioning and animation issues on load
  - Seek bar visible when minimized and playing

# Post-MVP

## System

- Start Menu
- Save Session
- URL Routing via opening `.url`

## Apps

- DOS
  - Virtual keyboard on mobile
- Winamp
  - Issue with focus when clicking via taskbar and on mobile
- JS Paint (https://github.com/1j01/jspaint)
- Minesweeper
  - https://github.com/ziebelje/minesweeper
  - https://github.com/ShizukuIchi/minesweeper
- Clippy.JS (https://www.smore.com/clippy-js)
- IRC Client (https://thelounge.chat/)
  - https://github.com/gummipunkt/thelounge_theme_mircalike
- Code Editor (https://codemirror.net/, https://ace.c9.io/)
