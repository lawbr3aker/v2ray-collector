import express = require("express")

export const app = express()
export const env = {
  PORT: process.env.PORT || 3000
}