#!/bin/bash

cur_dir=`pwd`
conf_dir=$cur_dir/src/main/resources
env='development'
region='local'
enable_dev_server=false

VALID_ENV=('production' 'development')
VALID_REGION=('local' 'remote')

function check_env {
    exist=0
    for i in "${VALID_ENV[@]}"
    do
        if [[ $i = $1 ]]; then
            exist=1
        fi
    done
    if [[ $exist = 0 ]]; then
        error_exit "`date "+%Y-%m-%d% %H:%M:%S"` Error: Not valid region, Got $1"
    fi
}

function check_region {
    exist=0
    for i in "${VALID_REGION[@]}"
    do
        if [[ $i = $1 ]]; then
            exist=1
        fi
    done
    if [[ $exist = 0 ]]; then
        error_exit "Error: Not valid region, Got $1"
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
        -region)
            shift
            region=${!param_index}
            check_region $region
            region=${region:-local}
    ;;
        --enable_server)
            enable_dev_server=true
	;;
    esac
    param_index=$(expr $param_index + 1)
done

echo_with_date "Grunt.js task running..."
if [ $env = 'development' ]; then
    grunt build:dev:$region
else
    grunt build:prod:$region
fi

echo_with_date "Dev server task running..."
if $enable_dev_server ; then
    npm run dev
else
    npm run build
fi

echo_with_date 'End Task with success status'
exit
