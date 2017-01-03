#!/bin/bash

env='development'
api_region='local'
enable_dev_server=false

VALID_ENV=('production' 'development')
VALID_API_REGION=('local' 'remote')

function check_env {
    error=0
    for i in "${VALID_ENV[@]}"
    do
        if [[ $i = $1 ]]; then
            error=1
        fi
    done
    if [[ $error = 0 ]]; then
        error_exit "`date "+%Y-%m-%d% %H:%M:%S"` Error: Not valid env, Got $1"
    fi
}

function check_api_region {
    error=0
    for i in "${VALID_API_REGION[@]}"
    do
        if [[ $i = $1 ]]; then
            error=1
        fi
    done
    if [[ $error = 0 ]]; then
        error_exit "Error: Not valid api region, Got $1"
    fi
}

function error_exit {
    echo $1 1>&2
    exit 1
}

function echo_with_date {
    echo "`date "+%Y-%m-%d% %H:%M:%S"` Info: $1"
}

param_index=0
while [ $param_index -le $# ];do
    case ${!param_index} in
        -env)
            shift
            env=${!param_index}
            check_env $env
            env=${env:-development}
    ;;
        -api_region)
            shift
            api_region=${!param_index}
            check_api_region $api_region
            api_region=${api_region:-local}
    ;;
        --enable_server)
            enable_dev_server=true
	;;
    esac
    param_index=$(expr $param_index + 1)
done

echo_with_date "Grunt.js task && NPM build task running..."
if [ $env = 'development' ]; then
    grunt build:dev:$api_region
    npm run build:dev
else
    grunt build:prod:$api_region
    npm run build:prod
fi

echo_with_date "Express server running..."
if $enable_dev_server ; then
    npm run dev
fi

echo_with_date 'End task with success status'
exit
