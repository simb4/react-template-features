from fabric.decorators import task
from fabric.operations import get, run, sudo
from fabric.state import env
from fabric.context_managers import shell_env
from functools import wraps
import datetime

@task
def git_pull():
    """
    """
    run("cd ~/{}/; git pull".format(env.repo_name))

@task
def git_clone():
    """
    """
    run("cd ~; git clone {}".format(env.repository))

@task
def install():
    """
    """
    run("cd ~/{}/ && rm -rf node_modules && npm install".format(env.repo_name))

@task
def add_version(msg):
    now = datetime.datetime.now().strftime('+%Y-%m-%d %H:%M:%S')
    version = "[{}] {}".format(env.environ.upper(), msg)

    run("".format(env.repo_name))
    run("cd ~/{}/; echo \"({}) - {}\" >> ./version".format(env.repo_name, now, version))


@task
def version():
    run("cd ~/{}/ && cat version".format(env.repo_name))


@task
def build(msg):
    """
    """
    git_pull()
    if env.environ == 'dev':
        run("cd ~/{}/ && npm run build && cp -r build/* builds/dev/;".format(env.repo_name))
    else:
        run("cd ~/{}/ && npm run build-prod && cp -r build/* builds/prod/".format(env.repo_name))

    add_version(msg)
