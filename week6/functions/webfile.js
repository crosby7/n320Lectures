const path = require("path");

class WebFile {
  filename = "";

  static mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
  };

  constructor(filename) {
    this.filename = filename;
  }

  getExtension() {
    return path.extname(this.filename);
  }

  getMimeType() {
    const fileExt = this.getExtension();
    return WebFile.mimeTypes[fileExt] || "text/plain";
  }
}

module.exports = WebFile;
