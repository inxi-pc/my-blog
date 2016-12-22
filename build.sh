#!/bin/bash

cur_dir=`pwd`
conf_dir=$cur_dir/src/main/resources
env='development'
enable_dev_server=false

i=0
while [ $i -le $# ];do
    case ${!i} in
        -env)
            i=$(expr $i + 1)
            env=${!i}
            env=${env:-development}
    ;;
        --enable-server)
            enable_dev_server=true
	;;
    esac
    i=$(expr $i + 1)
done

if [ $env = 'development' ]; then
    echo 'Begin set development config......'
    grunt build:dev
else
    echo 'Begin set production config......'
    grunt build:prod

fi

if $enable_dev_server ; then
    npm run dev
else
    npm run build
fi

echo 'Build Successful'
exit
