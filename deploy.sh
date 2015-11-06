npm run generate
rm -rf build

mkdir build
cd build

git clone git@github.com:OpenDevLabs/opendevlabs.github.io.git

cp -R ../out/* opendevlabs.github.io
cd opendevlabs.github.io

git add --all
git commit -m "Deploy."
git push origin master

cd ../

git add --all
git commit -m "Dev."
git push origin master
