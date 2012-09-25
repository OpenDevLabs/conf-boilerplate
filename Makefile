install:
	@gem install jekyll
	@echo "\nJekyll installed!\n"

run:
	@jekyll --server --auto

build:
	@jekyll
	@echo "\nBuild succeed!\n"

deploy:
	@jekyll && git checkout gh-pages && git rm -rf . && mv _site/* . && rm -rf _site && git add . && git commit -m "update" && git push origin gh-pages && git checkout master
	@echo "\nDeploy succeed!\n"