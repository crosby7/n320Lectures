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

  reqDetails = {};
  reqUrl = {};
  reqResource = "";

  constructor(reqUrl) {
    this.reqUrl = reqUrl;
    this.reqDetails = path.parse(reqUrl);

    const reqResourcePath = path.join(__dirname, "../views", reqUrl);
    if (this.reqDetails.ext) {
      this.reqResource = reqResourcePath;
    } else if (this.reqDetails.base) {
      this.reqResource = reqResourcePath + ".html";
    } else {
      this.reqResource = reqResourcePath + "index.html";
    }
  }

  getMimeType() {
    const fileExt = this.reqDetails.ext;
    return WebFile.mimeTypes[fileExt] || "text/html";
  }
}

module.exports = WebFile;
