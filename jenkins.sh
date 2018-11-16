#!/usr/bin/env bash

node_version=v8.2.1
package=mobile-insurance

set -e  # 出错后退出 shell

# 切换node版本
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
nvm use ${node_version}

set -x  # 打开调试 shell 命令

# install
npm install --registry=https://registry.npm.taobao.org/

npm run build

cd dist
npm install --production --registry=https://registry.npm.taobao.org/
rm -rf mobile-insurance.war
zip -r mobile-insurance.war *

# deploy
cd ..

dest=/env/mobile-insurance;

ansible-playbook \
  -e "host=${host} dest=${dest}" \
  -i jenkins-ansible-hosts \
  jenkins-deploy-mt.yml -v
