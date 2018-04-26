#!/bin/bash

ERR_STATUS=1
OK_STATUS=0

TEMPLATE_FILE='./video-js-template.tmp' 
BSN_REPLACE_STRING='REPLACE-ME-BSN'


function print_usage {
    echo "$0 BSN"
}

if [[ $# -ne 1 ]] 
then
    print_usage
    exit $ERR_STATUS
fi

bsn=$1


if [[ ! -e $TEMPLATE_FILE ]]
then
    echo "CANNOT FIND TEMPLATE FILE: $TEMPLATE_FILE"
    exit $ERR_STATUS
fi

cat $TEMPLATE_FILE | sed s/${BSN_REPLACE_STRING}/${bsn}/g | tee ${bsn}_r.js

