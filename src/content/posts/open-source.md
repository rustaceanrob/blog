---
title: "Open Source Contribution Guide"
publishedAt: 2024-01-16
description: "How to contribute to projects you like"
slug: "contribution-guide"
isPublish: true
---

First things fist, fork the repository you are interested in. 

Then, clone from your personal repository: `git clone https://github.com/<me>/<repo>.git`. 

Next, add the original repository to your upstream: `git remote add upstream https://github.com/<owner>/<repo>.git`

Now, pull and merge: 
	1. `git fetch upstream`
	2. `git checkout master`
	3. `git merge upstream/master`

You can run these when the project you are interested updates their code.

Next checkout a new branch that describes your feature: `git checkout -b <feature-branch>`

Make your ground breaking code changes!

Ready? Commit your changes `git add .` and `git commit -S -m "commit message"`

In the commit, use a helpful format to describe your PR. Good syntax for your message is something like `fix: ` or `chore(linter): `.

Push to your repository: `git push origin <feature-branch>`

Make an LLM write the description of your pull request and make your PR!