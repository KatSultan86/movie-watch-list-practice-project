# GIT CLI

## Common Commands: 
1. Show all branches local: `git branch`
    - once you want to exit the terminal editor from that command use `q` on your keyboard
2. Create new branch locally: `git branch branch_name` 
    - beefore switching to new branch make sure you commit all the changes!
    - how do we commit in command line?
        - `git status` - to check what changes we have that we need to add to git tracking system `git stage`
        - `git add .` or `git add -A` - to add all files to the git stage
        - `git commit -m"your message"` - this command will commit the changes locally (kind of saves the new changes to master locally)
        - `git push origin master` - this will push the changes to the remote repo
        