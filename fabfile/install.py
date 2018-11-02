from fabric.decorators import task
from fabric.operations import run, sudo
from fabric.state import env


@task
def apt_get_update():
    """
    """
    sudo('apt-get update')


@task
def apt_get(*packages):
    """
    Runs apt-get install command for all provided packages
    """
    sudo('apt-get -y -f install %s' % ' '.join(packages), shell=False)


@task
def install():
    """
    IF ephem fails RUN: sudo apt-get install python3-dev
    """
    apt_get_update()
    run("curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash")
    run("export NVM_DIR=\"$HOME/.nvm\"")
    run("[ -s \"$NVM_DIR/nvm.sh\" ] && . \"$NVM_DIR/nvm.sh\"")
    run("source ~/.bashrc")
    run("nvm install 8.10.0")
    run("sudo ln -sf /home/onefit/.nvm/versions/node/v8.10.0/bin/node /usr/bin/node")
    run("cd ~/{}/ && npm install".format(env.repo_name))
    apt_get("npm")

