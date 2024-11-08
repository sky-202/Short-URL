const express = require("express");
const { handleGenerateNewShortUrl, handleShortIdAnalytics, handleRedirectUrl } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get('/:shortId', handleRedirectUrl)

router.get('/analytics/:shortId', handleShortIdAnalytics)

module.exports = router;
