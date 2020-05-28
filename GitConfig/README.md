###Git Alias Overview
>It is important to note that there is no direct git alias command. Aliases are created through the use of the git config command and the Git configuration files. As with other configuration values, aliases can be created in a local or global scope.

To better understand Git aliases let us create some examples.



```javascript
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
$ git config --global alias.lgb "log --graph --oneline --all" 
```
