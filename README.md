[![Build Status](https://travis-ci.org/MrJohz/appdirectory.png?branch=master)](https://travis-ci.org/MrJohz/appdirectory)

# AppDirectory

### Usage
TODO!

### Todo
- Usage
- user-config
- site-config
- user-cache
- user-log
- npm

### Known Limitations
- On Windows Vista, the site-config and site-data directories are hidden system directories, which may cause issues.  I don't have a copy of Vista to hand to play around with how well this works, though, so YMMV.
- On unix-likes (including those with XDG-compliance), requesting the site-config and site-data directories will return just one directory, even in cases where the XDG* variables contain more than one individual path.  (Specifically, it will be the first path AppDirectory finds.)