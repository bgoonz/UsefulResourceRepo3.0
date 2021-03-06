'use strict'

module.exports = angular
  .module('plugins.github.service', [])
  .factory('githubService', function ($http, diNotify) {
    var defaults = {
        orgs: {},
        repos: {},
        branches: {},
        files: {},
        user: {
          name: '',
          uri: ''
        },
        current: {
          tree: [],
          url: '',
          name: '',
          sha: '',
          path: '',
          branch: '',
          owner: '',
          repo: '',
          file: '',
          fileName: ''
        }
      },
      service = {
        config: {},

        /**
         *    Add the User to the Organizations Array, as we want to let him
         *    search through his own Repos.
         */
        registerUserAsOrg: function () {
          if (!Array.isArray(service.config.orgs)) service.config.orgs = []
          return service.config.orgs.push({
            name: service.config.user.name
          })
        },

        /**
         *    Fetch the File from Github.
         *
         *    @param    {String}    url    URL to the File
         */
        fetchFile: function (url, path) {
          service.config.current.url = url
          return $http.post('import/github/file', { url: url }).then(
            function successCallback(result) {
              service.config.current.file = result.data.data.content
              service.config.current.url = result.data.data.url
              service.config.current.sha = result.data.data.sha
              return false
            },
            function errorCallback(err) {
              return diNotify({
                message: 'An Error occured: ' + err
              })
            }
          )
        },

        /**
         *    Fetches the File Tree of the current Branch.
         *
         *    @param    {String}    sha         SHA of the File
         *    @param    {String}    branch      Selected Branch
         *    @param    {String}    repo        Selected Repo
         *    @param    {String}    owner       Owner of the Repo
         *    @param    {String}    fileExts    File Extensions (.md,.markdown etc.)
         */
        fetchTreeFiles: function (sha, branch, repo, owner, fileExts) {
          var di
          di = diNotify('Fetching Files...')
          return $http
            .post('import/github/tree_files', {
              owner: owner ? owner : service.config.current.owner,
              repo: repo ? repo : service.config.current.repo,
              branch: branch ? branch : service.config.current.branch,
              sha: sha ? sha : service.config.current.sha,
              fileExts: fileExts ? fileExts : 'md'
            })
            .then(
              function successCallback(response) {
                if (di != null) {
                  di.$scope.$close()
                }
                service.config.current.owner = owner
                  ? owner
                  : service.config.user.name
                service.config.current.repo = repo
                  ? repo
                  : service.config.current.repo
                service.config.current.branch = branch
                  ? branch
                  : service.config.current.branch
                service.config.current.sha = sha
                  ? sha
                  : service.config.current.sha
                service.config.current.tree = response.data.tree
                return service.config.current
              },
              function errorCallback(err) {
                return diNotify({
                  message: 'An Error occured: ' + err
                })
              }
            )
        },

        /**
         *    Fetch the selected Branch.
         *
         *    @param    {String}    repo     Repo Name
         *    @param    {String}    owner    Owner of the Repo
         */
        fetchBranches: function (repo, owner) {
          var di
          di = diNotify('Fetching Branches...')
          return $http
            .post('import/github/branches', {
              owner: owner ? owner : service.config.current.owner,
              repo: repo ? repo : service.config.current.repo
            })
            .then(
              function successCallback(response) {
                if (di != null) {
                  di.$scope.$close()
                }
                service.config.current.repo = repo
                service.config.branches = response.data

                return service.config.branches
              },
              function errorCallback(err) {
                return diNotify({
                  message: 'An Error occured: ' + err
                })
              }
            )
        },

        /**
         *    Fetch Repos of the selected Organization.
         *
         *    @param    {String}    owner    Owner Name
         */
        fetchRepos: function (owner, page, per_page) {
          var di
          di = diNotify('Fetching Repos...')
          return $http
            .post('import/github/repos', {
              owner: owner,
              page: page,
              per_page: per_page
            })
            .then(
              function successCallback(response) {
                if (di != null) {
                  di.$scope.$close()
                }
                service.config.current.owner = owner
                service.config.repos = response.data.items
                service.config.pagination = response.data.pagination

                return service.config.repos
              },
              function errorCallback(err) {
                return diNotify({
                  message: 'An Error occured: ' + err
                })
              }
            )
        },

        /**
         *    Fetch all known Organizations from the User.
         */
        fetchOrgs: function () {
          var di
          di = diNotify('Fetching Organizations...')
          return $http.post('import/github/orgs').then(
            function successCallback(data) {
              if (di != null) {
                di.$scope.$close()
              }
              service.config.orgs = data.data

              return service.config.orgs
            },
            function errorCallback(err) {
              return diNotify({
                message: 'An Error occured: ' + err
              })
            }
          )
        },

        /**
         *    Update Document on Github.
         *
         *    @param  {Object}  data  Object for POST Request.
         *
         *    @examples
         *    {
         *    	uri: 'https://api.github.com/repos/pengwynn/octokit/contents/subdir/README.md',
         *    	data: btoa('DOCUMENT_BODY'),
         *    	path: 'subdir/README.md',
         *    	sha: '3d21ec53a331a6f037a91c368710b99387d012c1',
         *    	branch: 'master',
         *    	repo: 'pengwynn',
         *    	message: 'Commit message.',
         *    	owner: 'octokit'
         *    }
         */
        saveToGithub: function (data) {
          var di
          di = diNotify('Saving Document on Github...')
          return $http
            .post('save/github', {
              uri: data.uri,
              data: data.body,
              path: data.path,
              sha: data.sha,
              branch: data.branch,
              repo: data.repo,
              message: data.message,
              owner: data.owner
            })
            .then(
              function successCallback(result) {
                if (di.$scope != null) {
                  di.$scope.$close()
                }
                diNotify({
                  message:
                    'Successfully saved to ' + result.data.content.path + '!',
                  duration: 5000
                })
                if (window.ga) {
                  ga('send', 'event', 'click', 'Save To GitHub', 'Save To...')
                }
                return result
              },
              function errorCallback(err) {
                return diNotify({
                  message: 'An Error occured: ' + err.data.error,
                  duration: 5000
                })
              }
            )
        },

        save: function () {
          localStorage.setItem('github', angular.toJson(service.config))
        },

        restore: function () {
          service.config =
            angular.fromJson(localStorage.getItem('github')) || defaults
          return service.config
        }
      }
    service.restore()
    return service
  })
