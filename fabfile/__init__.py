from . import common
from . import install

from fabric.decorators import task
from fabric.state import env

import os
from dotenv import load_dotenv
load_dotenv()

env.repository = os.getenv('REPOSITORY', None)
env.repository_ssh = os.getenv('REPOSITORY', None)
env.repo_name = os.getenv('REPO_NAME', None)
env.user = os.getenv('USER', None)
env.key_filename = os.getenv('KEY_FILENAME', None)


@task
def dev():
    env.config = os.getenv('DEV_CONFIG_NAME', None)
    env.environ = os.getenv('DEV_ENVIRON_NAME', None)
    env.user = os.getenv('DEV_USER', None)
    env.password = os.getenv('DEV_PASSWORD', None)
    env.hosts = [os.getenv('DEV_IP')]
    env.port = os.getenv('DEV_SSH_PORT', None)
    env.key_filename = os.getenv('DEV_KEY_FILENAME', None)


@task
def prod():
    env.config = os.getenv('PROD_CONFIG_NAME', None)
    env.environ = os.getenv('PROD_ENVIRON_NAME', None)
    env.user = os.getenv('PROD_USER', None)
    env.password = os.getenv('PROD_PASSWORD', None)
    env.hosts = [os.getenv('PROD_IP')]
    env.key_filename = os.getenv('PROD_KEY_FILENAME', None)
