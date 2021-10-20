#!/bin/bash

rm -f /cache/package*.*
cp -pa /cache/* /app
npm run dev
