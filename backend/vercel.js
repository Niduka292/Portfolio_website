import app from "../api/app.js";

export default function handler(req, res) {
  return app(req, res);
}
