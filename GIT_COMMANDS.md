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
3. Change to a different branch with:
    - `git checkout branch_name`       
    - `git switch branch_name`
4. Create and switch to branch in one line:
    - `git checkout -b branch_name`           
    - `git switch -c branch_name` 
5. In case yop want to delete a branch use this:
    - `git branch -d branch_name` -> if there are some changes in that branch it wont allow you to delete it
    - `git branch -D branch_name` - in that case you can run with -D flag to force delete it.
6. Finally when youy commited all the changes to local new branch you want  to push it to remore repo. 
    - `git push origin branch_name`    

