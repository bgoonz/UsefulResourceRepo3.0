'use strict'

module.exports = angular
  .module('plugins.github', ['plugins.github.service', 'plugins.github.modal'])
  .controller(
    'Github',
    function (
      $rootScope,
      $modal,
      githubService,
      documentsService,
      diNotify,
      userService
    ) {
      var vm = this

      vm.importFile = importFile
      vm.saveTo = saveTo
      vm.updateSHAOnDocument = updateSHAOnDocument
      vm.chooseScope = chooseScope

      //////////////////////////////

      function importFile(username) {
        var modalInstance = $modal.open({
          template: require('raw!./github-modal.directive.html'),
          controller: 'GithubModal as modal',
          windowClass: 'modal--dillinger',
          resolve: {
            items: function () {
              githubService.config.user.name = username
              return githubService
                .fetchOrgs()
                .then(githubService.registerUserAsOrg)
            }
          }
        })

        return modalInstance.result.then(function () {
          var file = documentsService.createItem({
            isGithubFile: true,
            body: githubService.config.current.file,
            title: githubService.config.current.fileName,
            github: {
              originalFileName: githubService.config.current.fileName,
              originalFileContent: githubService.config.current.file,
              sha: githubService.config.current.sha,
              branch: githubService.config.current.branch,
              owner: githubService.config.current.owner,
              repo: githubService.config.current.repo,
              url: githubService.config.current.url,
              path: githubService.config.current.path
            }
          })

          documentsService.addItem(file)
          documentsService.setCurrentDocument(file)

          githubService.save()
          $rootScope.$emit('document.refresh')
          return $rootScope.$emit('autosave')
        })
      }

      function updateSHAOnDocument(result) {
        documentsService.setCurrentDocumentSHA(result.data.content.sha)
        $rootScope.$emit('document.refresh')
        return $rootScope.$emit('autosave')
      }

      function saveTo(username) {
        var file = documentsService.getCurrentDocument()

        // Document must be an imported file from Github to work.
        if (file.isGithubFile) {
          prepareGithubCommit(function (githubCommitMessage) {
            var filePath = file.github.path.substr(
              0,
              file.github.path.lastIndexOf('/')
            )
            var postData = {
              body: file.body,
              path: filePath ? filePath + '/' + file.title : file.title,
              sha: file.github.sha,
              branch: file.github.branch,
              repo: file.github.repo,
              owner: file.github.owner,
              uri: file.github.url,
              message: githubCommitMessage
            }

            return githubService.saveToGithub(postData).then(
              function successCallback(result) {
                vm.updateSHAOnDocument(result)
              },
              function errorCallback(err) {
                return diNotify({
                  message: 'An Error occured: ' + err.error,
                  duration: 5000
                })
              }
            )
          }, file) // end prepareGithubCommit
        } else {
          return diNotify({
            message: 'Your Document must be an imported file from Github.'
          })
        } // end else
      } // end saveTo()

      function chooseScope() {
        var modalInstance = $modal.open({
          template: require('raw!./github-modal.scope.html'),
          controller: function ($scope, $modalInstance) {
            $scope.close = function () {
              $modalInstance.dismiss('cancel')
            }
          },
          windowClass: 'modal--dillinger scope'
        })
      }

      function prepareGithubCommit(callback, file) {
        var modalInstance = $modal.open({
          template: require('raw!./github-commit-message-modal.html'),
          controller: function ($scope, $modalInstance) {
            $scope.close = function () {
              $modalInstance.dismiss('cancel')
            }
            $scope.commit = function () {
              var commitMessage =
                $scope.commitMessage ||
                'Saved ' + file.title + ' with Dillinger.io'
              if ($scope.skipCI) commitMessage = commitMessage + ' [skip ci]'
              callback(commitMessage)
              $scope.close()
            }
            if (!userService.profile.enableGitHubComment) $scope.commit()
          },
          windowClass: 'modal--dillinger scope'
        })

        if (!userService.profile.enableGitHubComment)
          modalInstance.opened.then(function () {
            modalInstance.close()
          })
      }
    }
  )
