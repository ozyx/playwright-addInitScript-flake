# Steps to Reproduce

1. `npm install`
2. Launch the docker container matching our testing environment in CI:

  ```sh
  docker run --cpus=2 --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.32.3-focal /bin/bash
  ```

3. `npm test`
4. Observe that the tests run w/ chrome are flaky, and tests with firefox and safari pass
5. Update Playwright version to `1.30.0`, clean, reinstall
6. Launch docker container for `1.30.0`:

  ```sh
  docker run --cpus=2 --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash
  ```

6. `npm test`, observe that all tests pass