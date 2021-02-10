"use strict"
function proArch(X) { return process.arch }
function proPlatform(D) { return process.platform }
function proShell(C) { return process.env.SHELL }
module.exports = { Arch : proArch, Platform : proPlatform, Shell: proShell}