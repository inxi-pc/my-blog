#!/bin/bash

env='dev'
api_region='local'
enable_dev_server=false

VALID_ENV=('prod' 'dev')
VALID_API_REGION=('local' 'remote')

function parse_param {
    param_index=0
    while [ $param_index -le $# ];do
        case ${!param_index} in
            -env)
                shift
                env=${!param_index}
                check_env $env
        ;;
            -api_region)
                shift
                api_region=${!param_index}
                check_api_region $api_region
        ;;
            --enable_server)
                enable_dev_server=true
        ;;
        esac
        param_index=$(expr $param_index + 1)
    done
}

function check_env {
    echo_log 'INFO' 'check env'
    valid=0
    for i in "${VALID_ENV[@]}"
    do
        if [[ $i = $1 ]]; then
            valid=1
        fi
    done

    if [[ $valid = 0 ]]; then
        echo_log 'ERROR' "invalid env '$1'"
        exit
    fi

    echo_log 'INFO' 'PASS'
}

function check_api_region {
    echo_log 'INFO' 'check api region'
    valid=0
    for i in "${VALID_API_REGION[@]}"
    do
        if [[ $i = $1 ]]; then
            valid=1
        fi
    done

    if [[ $valid = 0 ]]; then
        echo_log "Error" "invalid api region, got $1"
    fi

    echo_log 'INFO' 'PASS'
}

function echo_log {
    echo "`date "+%Y-%m-%d %H:%M:%S"` [$1]: $2"
}

echo_log 'INFO' 'begin build task'
parse_param $@
grunt build:$env:$api_region
npm run build:$env

if $enable_dev_server ; then
    echo_log "INFO" "Express server running..."
    npm run dev
fi

echo_log 'INFO' 'end task'
exit
