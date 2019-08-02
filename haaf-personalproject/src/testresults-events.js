export const events = [
    {
      "id": "10112507985",
      "type": "DeleteEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 138066331,
        "name": "bridge-school/node-starter",
        "url": "https://api.github.com/repos/bridge-school/node-starter"
      },
      "payload": {
        "ref": "cohort-8/update",
        "ref_type": "branch",
        "pusher_type": "user"
      },
      "public": true,
      "created_at": "2019-07-30T14:50:18Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10112507580",
      "type": "PushEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 138066331,
        "name": "bridge-school/node-starter",
        "url": "https://api.github.com/repos/bridge-school/node-starter"
      },
      "payload": {
        "push_id": 3871112639,
        "size": 3,
        "distinct_size": 1,
        "ref": "refs/heads/master",
        "head": "05678ba63632a9d8c68d671401b693e188bb7619",
        "before": "686b0e61dbe785a38f3e0343f24bce9d58765ba8",
        "commits": [
          {
            "sha": "0257b5cbabfd5afac66b5db25abccf82f03e121e",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "added cors support for frontend and error message for missing firebase config",
            "distinct": false,
            "url": "https://api.github.com/repos/bridge-school/node-starter/commits/0257b5cbabfd5afac66b5db25abccf82f03e121e"
          },
          {
            "sha": "fc22b00f90cc12f179920e68d51f986374accf9f",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "addressed PR comments",
            "distinct": false,
            "url": "https://api.github.com/repos/bridge-school/node-starter/commits/fc22b00f90cc12f179920e68d51f986374accf9f"
          },
          {
            "sha": "05678ba63632a9d8c68d671401b693e188bb7619",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "Merge pull request #7 from bridge-school/cohort-8/update\n\n[UPDATE] Cohort 8",
            "distinct": true,
            "url": "https://api.github.com/repos/bridge-school/node-starter/commits/05678ba63632a9d8c68d671401b693e188bb7619"
          }
        ]
      },
      "public": true,
      "created_at": "2019-07-30T14:50:15Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10112507401",
      "type": "PullRequestEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 138066331,
        "name": "bridge-school/node-starter",
        "url": "https://api.github.com/repos/bridge-school/node-starter"
      },
      "payload": {
        "action": "closed",
        "number": 7,
        "pull_request": {
          "url": "https://api.github.com/repos/bridge-school/node-starter/pulls/7",
          "id": 299423825,
          "node_id": "MDExOlB1bGxSZXF1ZXN0Mjk5NDIzODI1",
          "html_url": "https://github.com/bridge-school/node-starter/pull/7",
          "diff_url": "https://github.com/bridge-school/node-starter/pull/7.diff",
          "patch_url": "https://github.com/bridge-school/node-starter/pull/7.patch",
          "issue_url": "https://api.github.com/repos/bridge-school/node-starter/issues/7",
          "number": 7,
          "state": "closed",
          "locked": false,
          "title": "[UPDATE] Cohort 8",
          "user": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "body": "- Added cors support for frontend (NOTE we'll have to change Terraform config to make sure the env variable for the project name is stored)\r\n- Updated error message for no `firebase-credentials` file\r\n- Updated README with more clear instructions",
          "created_at": "2019-07-19T17:44:05Z",
          "updated_at": "2019-07-30T14:50:13Z",
          "closed_at": "2019-07-30T14:50:13Z",
          "merged_at": "2019-07-30T14:50:13Z",
          "merge_commit_sha": "05678ba63632a9d8c68d671401b693e188bb7619",
          "assignee": null,
          "assignees": [
  
          ],
          "requested_reviewers": [
            {
              "login": "NicholasGWK",
              "id": 6642497,
              "node_id": "MDQ6VXNlcjY2NDI0OTc=",
              "avatar_url": "https://avatars1.githubusercontent.com/u/6642497?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/NicholasGWK",
              "html_url": "https://github.com/NicholasGWK",
              "followers_url": "https://api.github.com/users/NicholasGWK/followers",
              "following_url": "https://api.github.com/users/NicholasGWK/following{/other_user}",
              "gists_url": "https://api.github.com/users/NicholasGWK/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/NicholasGWK/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/NicholasGWK/subscriptions",
              "organizations_url": "https://api.github.com/users/NicholasGWK/orgs",
              "repos_url": "https://api.github.com/users/NicholasGWK/repos",
              "events_url": "https://api.github.com/users/NicholasGWK/events{/privacy}",
              "received_events_url": "https://api.github.com/users/NicholasGWK/received_events",
              "type": "User",
              "site_admin": false
            }
          ],
          "requested_teams": [
  
          ],
          "labels": [
  
          ],
          "milestone": null,
          "commits_url": "https://api.github.com/repos/bridge-school/node-starter/pulls/7/commits",
          "review_comments_url": "https://api.github.com/repos/bridge-school/node-starter/pulls/7/comments",
          "review_comment_url": "https://api.github.com/repos/bridge-school/node-starter/pulls/comments{/number}",
          "comments_url": "https://api.github.com/repos/bridge-school/node-starter/issues/7/comments",
          "statuses_url": "https://api.github.com/repos/bridge-school/node-starter/statuses/fc22b00f90cc12f179920e68d51f986374accf9f",
          "head": {
            "label": "bridge-school:cohort-8/update",
            "ref": "cohort-8/update",
            "sha": "fc22b00f90cc12f179920e68d51f986374accf9f",
            "user": {
              "login": "bridge-school",
              "id": 30509997,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
              "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bridge-school",
              "html_url": "https://github.com/bridge-school",
              "followers_url": "https://api.github.com/users/bridge-school/followers",
              "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
              "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
              "organizations_url": "https://api.github.com/users/bridge-school/orgs",
              "repos_url": "https://api.github.com/users/bridge-school/repos",
              "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bridge-school/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "repo": {
              "id": 138066331,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzgwNjYzMzE=",
              "name": "node-starter",
              "full_name": "bridge-school/node-starter",
              "private": false,
              "owner": {
                "login": "bridge-school",
                "id": 30509997,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bridge-school",
                "html_url": "https://github.com/bridge-school",
                "followers_url": "https://api.github.com/users/bridge-school/followers",
                "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
                "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
                "organizations_url": "https://api.github.com/users/bridge-school/orgs",
                "repos_url": "https://api.github.com/users/bridge-school/repos",
                "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bridge-school/received_events",
                "type": "Organization",
                "site_admin": false
              },
              "html_url": "https://github.com/bridge-school/node-starter",
              "description": null,
              "fork": false,
              "url": "https://api.github.com/repos/bridge-school/node-starter",
              "forks_url": "https://api.github.com/repos/bridge-school/node-starter/forks",
              "keys_url": "https://api.github.com/repos/bridge-school/node-starter/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/bridge-school/node-starter/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/bridge-school/node-starter/teams",
              "hooks_url": "https://api.github.com/repos/bridge-school/node-starter/hooks",
              "issue_events_url": "https://api.github.com/repos/bridge-school/node-starter/issues/events{/number}",
              "events_url": "https://api.github.com/repos/bridge-school/node-starter/events",
              "assignees_url": "https://api.github.com/repos/bridge-school/node-starter/assignees{/user}",
              "branches_url": "https://api.github.com/repos/bridge-school/node-starter/branches{/branch}",
              "tags_url": "https://api.github.com/repos/bridge-school/node-starter/tags",
              "blobs_url": "https://api.github.com/repos/bridge-school/node-starter/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/bridge-school/node-starter/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/bridge-school/node-starter/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/bridge-school/node-starter/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/bridge-school/node-starter/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/bridge-school/node-starter/languages",
              "stargazers_url": "https://api.github.com/repos/bridge-school/node-starter/stargazers",
              "contributors_url": "https://api.github.com/repos/bridge-school/node-starter/contributors",
              "subscribers_url": "https://api.github.com/repos/bridge-school/node-starter/subscribers",
              "subscription_url": "https://api.github.com/repos/bridge-school/node-starter/subscription",
              "commits_url": "https://api.github.com/repos/bridge-school/node-starter/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/bridge-school/node-starter/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/bridge-school/node-starter/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/bridge-school/node-starter/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/bridge-school/node-starter/contents/{+path}",
              "compare_url": "https://api.github.com/repos/bridge-school/node-starter/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/bridge-school/node-starter/merges",
              "archive_url": "https://api.github.com/repos/bridge-school/node-starter/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/bridge-school/node-starter/downloads",
              "issues_url": "https://api.github.com/repos/bridge-school/node-starter/issues{/number}",
              "pulls_url": "https://api.github.com/repos/bridge-school/node-starter/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/bridge-school/node-starter/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/bridge-school/node-starter/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/bridge-school/node-starter/labels{/name}",
              "releases_url": "https://api.github.com/repos/bridge-school/node-starter/releases{/id}",
              "deployments_url": "https://api.github.com/repos/bridge-school/node-starter/deployments",
              "created_at": "2018-06-20T17:42:55Z",
              "updated_at": "2019-06-06T15:56:35Z",
              "pushed_at": "2019-07-30T14:50:13Z",
              "git_url": "git://github.com/bridge-school/node-starter.git",
              "ssh_url": "git@github.com:bridge-school/node-starter.git",
              "clone_url": "https://github.com/bridge-school/node-starter.git",
              "svn_url": "https://github.com/bridge-school/node-starter",
              "homepage": null,
              "size": 1004,
              "stargazers_count": 0,
              "watchers_count": 0,
              "language": "JavaScript",
              "has_issues": true,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 3,
              "license": null,
              "forks": 0,
              "open_issues": 3,
              "watchers": 0,
              "default_branch": "master"
            }
          },
          "base": {
            "label": "bridge-school:master",
            "ref": "master",
            "sha": "686b0e61dbe785a38f3e0343f24bce9d58765ba8",
            "user": {
              "login": "bridge-school",
              "id": 30509997,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
              "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bridge-school",
              "html_url": "https://github.com/bridge-school",
              "followers_url": "https://api.github.com/users/bridge-school/followers",
              "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
              "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
              "organizations_url": "https://api.github.com/users/bridge-school/orgs",
              "repos_url": "https://api.github.com/users/bridge-school/repos",
              "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bridge-school/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "repo": {
              "id": 138066331,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzgwNjYzMzE=",
              "name": "node-starter",
              "full_name": "bridge-school/node-starter",
              "private": false,
              "owner": {
                "login": "bridge-school",
                "id": 30509997,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bridge-school",
                "html_url": "https://github.com/bridge-school",
                "followers_url": "https://api.github.com/users/bridge-school/followers",
                "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
                "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
                "organizations_url": "https://api.github.com/users/bridge-school/orgs",
                "repos_url": "https://api.github.com/users/bridge-school/repos",
                "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bridge-school/received_events",
                "type": "Organization",
                "site_admin": false
              },
              "html_url": "https://github.com/bridge-school/node-starter",
              "description": null,
              "fork": false,
              "url": "https://api.github.com/repos/bridge-school/node-starter",
              "forks_url": "https://api.github.com/repos/bridge-school/node-starter/forks",
              "keys_url": "https://api.github.com/repos/bridge-school/node-starter/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/bridge-school/node-starter/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/bridge-school/node-starter/teams",
              "hooks_url": "https://api.github.com/repos/bridge-school/node-starter/hooks",
              "issue_events_url": "https://api.github.com/repos/bridge-school/node-starter/issues/events{/number}",
              "events_url": "https://api.github.com/repos/bridge-school/node-starter/events",
              "assignees_url": "https://api.github.com/repos/bridge-school/node-starter/assignees{/user}",
              "branches_url": "https://api.github.com/repos/bridge-school/node-starter/branches{/branch}",
              "tags_url": "https://api.github.com/repos/bridge-school/node-starter/tags",
              "blobs_url": "https://api.github.com/repos/bridge-school/node-starter/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/bridge-school/node-starter/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/bridge-school/node-starter/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/bridge-school/node-starter/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/bridge-school/node-starter/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/bridge-school/node-starter/languages",
              "stargazers_url": "https://api.github.com/repos/bridge-school/node-starter/stargazers",
              "contributors_url": "https://api.github.com/repos/bridge-school/node-starter/contributors",
              "subscribers_url": "https://api.github.com/repos/bridge-school/node-starter/subscribers",
              "subscription_url": "https://api.github.com/repos/bridge-school/node-starter/subscription",
              "commits_url": "https://api.github.com/repos/bridge-school/node-starter/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/bridge-school/node-starter/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/bridge-school/node-starter/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/bridge-school/node-starter/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/bridge-school/node-starter/contents/{+path}",
              "compare_url": "https://api.github.com/repos/bridge-school/node-starter/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/bridge-school/node-starter/merges",
              "archive_url": "https://api.github.com/repos/bridge-school/node-starter/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/bridge-school/node-starter/downloads",
              "issues_url": "https://api.github.com/repos/bridge-school/node-starter/issues{/number}",
              "pulls_url": "https://api.github.com/repos/bridge-school/node-starter/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/bridge-school/node-starter/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/bridge-school/node-starter/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/bridge-school/node-starter/labels{/name}",
              "releases_url": "https://api.github.com/repos/bridge-school/node-starter/releases{/id}",
              "deployments_url": "https://api.github.com/repos/bridge-school/node-starter/deployments",
              "created_at": "2018-06-20T17:42:55Z",
              "updated_at": "2019-06-06T15:56:35Z",
              "pushed_at": "2019-07-30T14:50:13Z",
              "git_url": "git://github.com/bridge-school/node-starter.git",
              "ssh_url": "git@github.com:bridge-school/node-starter.git",
              "clone_url": "https://github.com/bridge-school/node-starter.git",
              "svn_url": "https://github.com/bridge-school/node-starter",
              "homepage": null,
              "size": 1004,
              "stargazers_count": 0,
              "watchers_count": 0,
              "language": "JavaScript",
              "has_issues": true,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 3,
              "license": null,
              "forks": 0,
              "open_issues": 3,
              "watchers": 0,
              "default_branch": "master"
            }
          },
          "_links": {
            "self": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/pulls/7"
            },
            "html": {
              "href": "https://github.com/bridge-school/node-starter/pull/7"
            },
            "issue": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/issues/7"
            },
            "comments": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/issues/7/comments"
            },
            "review_comments": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/pulls/7/comments"
            },
            "review_comment": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/pulls/comments{/number}"
            },
            "commits": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/pulls/7/commits"
            },
            "statuses": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/statuses/fc22b00f90cc12f179920e68d51f986374accf9f"
            }
          },
          "author_association": "MEMBER",
          "merged": true,
          "mergeable": null,
          "rebaseable": null,
          "mergeable_state": "unknown",
          "merged_by": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "comments": 2,
          "review_comments": 0,
          "maintainer_can_modify": false,
          "commits": 2,
          "additions": 70,
          "deletions": 24,
          "changed_files": 6
        }
      },
      "public": true,
      "created_at": "2019-07-30T14:50:14Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10106556405",
      "type": "DeleteEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 133185017,
        "name": "bridge-school/frontend-starter",
        "url": "https://api.github.com/repos/bridge-school/frontend-starter"
      },
      "payload": {
        "ref": "cohort-8/update",
        "ref_type": "branch",
        "pusher_type": "user"
      },
      "public": true,
      "created_at": "2019-07-29T20:54:23Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10106556224",
      "type": "PushEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 133185017,
        "name": "bridge-school/frontend-starter",
        "url": "https://api.github.com/repos/bridge-school/frontend-starter"
      },
      "payload": {
        "push_id": 3867991586,
        "size": 4,
        "distinct_size": 1,
        "ref": "refs/heads/master",
        "head": "0c16a16ae64fc55b07a96b386a11c47f4c3f777d",
        "before": "4305f9dc385961fa0d6165c9266ebdfdf9126360",
        "commits": [
          {
            "sha": "09080366343d43d9d0c4790a15b3579286c9e874",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "update react scripts",
            "distinct": false,
            "url": "https://api.github.com/repos/bridge-school/frontend-starter/commits/09080366343d43d9d0c4790a15b3579286c9e874"
          },
          {
            "sha": "cd1c1f75619d664a4ec763bb230aa1c61c7e7ecb",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "added backend connection and updated README",
            "distinct": false,
            "url": "https://api.github.com/repos/bridge-school/frontend-starter/commits/cd1c1f75619d664a4ec763bb230aa1c61c7e7ecb"
          },
          {
            "sha": "14ebbcb55b60a3f15181f1464c1cb89941277a56",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "use request from backend-request folder",
            "distinct": false,
            "url": "https://api.github.com/repos/bridge-school/frontend-starter/commits/14ebbcb55b60a3f15181f1464c1cb89941277a56"
          },
          {
            "sha": "0c16a16ae64fc55b07a96b386a11c47f4c3f777d",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "Merge pull request #2 from bridge-school/cohort-8/update\n\n[UPDATE] Cohort 8 Changes",
            "distinct": true,
            "url": "https://api.github.com/repos/bridge-school/frontend-starter/commits/0c16a16ae64fc55b07a96b386a11c47f4c3f777d"
          }
        ]
      },
      "public": true,
      "created_at": "2019-07-29T20:54:21Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10106556087",
      "type": "PullRequestEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 133185017,
        "name": "bridge-school/frontend-starter",
        "url": "https://api.github.com/repos/bridge-school/frontend-starter"
      },
      "payload": {
        "action": "closed",
        "number": 2,
        "pull_request": {
          "url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2",
          "id": 299423447,
          "node_id": "MDExOlB1bGxSZXF1ZXN0Mjk5NDIzNDQ3",
          "html_url": "https://github.com/bridge-school/frontend-starter/pull/2",
          "diff_url": "https://github.com/bridge-school/frontend-starter/pull/2.diff",
          "patch_url": "https://github.com/bridge-school/frontend-starter/pull/2.patch",
          "issue_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2",
          "number": 2,
          "state": "closed",
          "locked": false,
          "title": "[UPDATE] Cohort 8 Changes",
          "user": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "body": "- Updated React Scripts and the starter\r\n- Added backend connection\r\n- Updated README with instructions",
          "created_at": "2019-07-19T17:42:34Z",
          "updated_at": "2019-07-29T20:54:20Z",
          "closed_at": "2019-07-29T20:54:19Z",
          "merged_at": "2019-07-29T20:54:19Z",
          "merge_commit_sha": "0c16a16ae64fc55b07a96b386a11c47f4c3f777d",
          "assignee": null,
          "assignees": [
  
          ],
          "requested_reviewers": [
            {
              "login": "NicholasGWK",
              "id": 6642497,
              "node_id": "MDQ6VXNlcjY2NDI0OTc=",
              "avatar_url": "https://avatars1.githubusercontent.com/u/6642497?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/NicholasGWK",
              "html_url": "https://github.com/NicholasGWK",
              "followers_url": "https://api.github.com/users/NicholasGWK/followers",
              "following_url": "https://api.github.com/users/NicholasGWK/following{/other_user}",
              "gists_url": "https://api.github.com/users/NicholasGWK/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/NicholasGWK/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/NicholasGWK/subscriptions",
              "organizations_url": "https://api.github.com/users/NicholasGWK/orgs",
              "repos_url": "https://api.github.com/users/NicholasGWK/repos",
              "events_url": "https://api.github.com/users/NicholasGWK/events{/privacy}",
              "received_events_url": "https://api.github.com/users/NicholasGWK/received_events",
              "type": "User",
              "site_admin": false
            }
          ],
          "requested_teams": [
  
          ],
          "labels": [
  
          ],
          "milestone": null,
          "commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2/commits",
          "review_comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2/comments",
          "review_comment_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/comments{/number}",
          "comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2/comments",
          "statuses_url": "https://api.github.com/repos/bridge-school/frontend-starter/statuses/14ebbcb55b60a3f15181f1464c1cb89941277a56",
          "head": {
            "label": "bridge-school:cohort-8/update",
            "ref": "cohort-8/update",
            "sha": "14ebbcb55b60a3f15181f1464c1cb89941277a56",
            "user": {
              "login": "bridge-school",
              "id": 30509997,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
              "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bridge-school",
              "html_url": "https://github.com/bridge-school",
              "followers_url": "https://api.github.com/users/bridge-school/followers",
              "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
              "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
              "organizations_url": "https://api.github.com/users/bridge-school/orgs",
              "repos_url": "https://api.github.com/users/bridge-school/repos",
              "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bridge-school/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "repo": {
              "id": 133185017,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzMxODUwMTc=",
              "name": "frontend-starter",
              "full_name": "bridge-school/frontend-starter",
              "private": false,
              "owner": {
                "login": "bridge-school",
                "id": 30509997,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bridge-school",
                "html_url": "https://github.com/bridge-school",
                "followers_url": "https://api.github.com/users/bridge-school/followers",
                "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
                "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
                "organizations_url": "https://api.github.com/users/bridge-school/orgs",
                "repos_url": "https://api.github.com/users/bridge-school/repos",
                "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bridge-school/received_events",
                "type": "Organization",
                "site_admin": false
              },
              "html_url": "https://github.com/bridge-school/frontend-starter",
              "description": "Frontend starter using CRA",
              "fork": false,
              "url": "https://api.github.com/repos/bridge-school/frontend-starter",
              "forks_url": "https://api.github.com/repos/bridge-school/frontend-starter/forks",
              "keys_url": "https://api.github.com/repos/bridge-school/frontend-starter/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/bridge-school/frontend-starter/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/bridge-school/frontend-starter/teams",
              "hooks_url": "https://api.github.com/repos/bridge-school/frontend-starter/hooks",
              "issue_events_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/events{/number}",
              "events_url": "https://api.github.com/repos/bridge-school/frontend-starter/events",
              "assignees_url": "https://api.github.com/repos/bridge-school/frontend-starter/assignees{/user}",
              "branches_url": "https://api.github.com/repos/bridge-school/frontend-starter/branches{/branch}",
              "tags_url": "https://api.github.com/repos/bridge-school/frontend-starter/tags",
              "blobs_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/bridge-school/frontend-starter/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/bridge-school/frontend-starter/languages",
              "stargazers_url": "https://api.github.com/repos/bridge-school/frontend-starter/stargazers",
              "contributors_url": "https://api.github.com/repos/bridge-school/frontend-starter/contributors",
              "subscribers_url": "https://api.github.com/repos/bridge-school/frontend-starter/subscribers",
              "subscription_url": "https://api.github.com/repos/bridge-school/frontend-starter/subscription",
              "commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/bridge-school/frontend-starter/contents/{+path}",
              "compare_url": "https://api.github.com/repos/bridge-school/frontend-starter/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/bridge-school/frontend-starter/merges",
              "archive_url": "https://api.github.com/repos/bridge-school/frontend-starter/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/bridge-school/frontend-starter/downloads",
              "issues_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues{/number}",
              "pulls_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/bridge-school/frontend-starter/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/bridge-school/frontend-starter/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/bridge-school/frontend-starter/labels{/name}",
              "releases_url": "https://api.github.com/repos/bridge-school/frontend-starter/releases{/id}",
              "deployments_url": "https://api.github.com/repos/bridge-school/frontend-starter/deployments",
              "created_at": "2018-05-12T21:33:58Z",
              "updated_at": "2019-02-08T19:57:31Z",
              "pushed_at": "2019-07-29T20:54:19Z",
              "git_url": "git://github.com/bridge-school/frontend-starter.git",
              "ssh_url": "git@github.com:bridge-school/frontend-starter.git",
              "clone_url": "https://github.com/bridge-school/frontend-starter.git",
              "svn_url": "https://github.com/bridge-school/frontend-starter",
              "homepage": null,
              "size": 413,
              "stargazers_count": 0,
              "watchers_count": 0,
              "language": "JavaScript",
              "has_issues": true,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 1,
              "license": null,
              "forks": 0,
              "open_issues": 1,
              "watchers": 0,
              "default_branch": "master"
            }
          },
          "base": {
            "label": "bridge-school:master",
            "ref": "master",
            "sha": "4305f9dc385961fa0d6165c9266ebdfdf9126360",
            "user": {
              "login": "bridge-school",
              "id": 30509997,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
              "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bridge-school",
              "html_url": "https://github.com/bridge-school",
              "followers_url": "https://api.github.com/users/bridge-school/followers",
              "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
              "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
              "organizations_url": "https://api.github.com/users/bridge-school/orgs",
              "repos_url": "https://api.github.com/users/bridge-school/repos",
              "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bridge-school/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "repo": {
              "id": 133185017,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzMxODUwMTc=",
              "name": "frontend-starter",
              "full_name": "bridge-school/frontend-starter",
              "private": false,
              "owner": {
                "login": "bridge-school",
                "id": 30509997,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bridge-school",
                "html_url": "https://github.com/bridge-school",
                "followers_url": "https://api.github.com/users/bridge-school/followers",
                "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
                "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
                "organizations_url": "https://api.github.com/users/bridge-school/orgs",
                "repos_url": "https://api.github.com/users/bridge-school/repos",
                "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bridge-school/received_events",
                "type": "Organization",
                "site_admin": false
              },
              "html_url": "https://github.com/bridge-school/frontend-starter",
              "description": "Frontend starter using CRA",
              "fork": false,
              "url": "https://api.github.com/repos/bridge-school/frontend-starter",
              "forks_url": "https://api.github.com/repos/bridge-school/frontend-starter/forks",
              "keys_url": "https://api.github.com/repos/bridge-school/frontend-starter/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/bridge-school/frontend-starter/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/bridge-school/frontend-starter/teams",
              "hooks_url": "https://api.github.com/repos/bridge-school/frontend-starter/hooks",
              "issue_events_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/events{/number}",
              "events_url": "https://api.github.com/repos/bridge-school/frontend-starter/events",
              "assignees_url": "https://api.github.com/repos/bridge-school/frontend-starter/assignees{/user}",
              "branches_url": "https://api.github.com/repos/bridge-school/frontend-starter/branches{/branch}",
              "tags_url": "https://api.github.com/repos/bridge-school/frontend-starter/tags",
              "blobs_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/bridge-school/frontend-starter/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/bridge-school/frontend-starter/languages",
              "stargazers_url": "https://api.github.com/repos/bridge-school/frontend-starter/stargazers",
              "contributors_url": "https://api.github.com/repos/bridge-school/frontend-starter/contributors",
              "subscribers_url": "https://api.github.com/repos/bridge-school/frontend-starter/subscribers",
              "subscription_url": "https://api.github.com/repos/bridge-school/frontend-starter/subscription",
              "commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/bridge-school/frontend-starter/contents/{+path}",
              "compare_url": "https://api.github.com/repos/bridge-school/frontend-starter/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/bridge-school/frontend-starter/merges",
              "archive_url": "https://api.github.com/repos/bridge-school/frontend-starter/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/bridge-school/frontend-starter/downloads",
              "issues_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues{/number}",
              "pulls_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/bridge-school/frontend-starter/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/bridge-school/frontend-starter/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/bridge-school/frontend-starter/labels{/name}",
              "releases_url": "https://api.github.com/repos/bridge-school/frontend-starter/releases{/id}",
              "deployments_url": "https://api.github.com/repos/bridge-school/frontend-starter/deployments",
              "created_at": "2018-05-12T21:33:58Z",
              "updated_at": "2019-02-08T19:57:31Z",
              "pushed_at": "2019-07-29T20:54:19Z",
              "git_url": "git://github.com/bridge-school/frontend-starter.git",
              "ssh_url": "git@github.com:bridge-school/frontend-starter.git",
              "clone_url": "https://github.com/bridge-school/frontend-starter.git",
              "svn_url": "https://github.com/bridge-school/frontend-starter",
              "homepage": null,
              "size": 413,
              "stargazers_count": 0,
              "watchers_count": 0,
              "language": "JavaScript",
              "has_issues": true,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 1,
              "license": null,
              "forks": 0,
              "open_issues": 1,
              "watchers": 0,
              "default_branch": "master"
            }
          },
          "_links": {
            "self": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2"
            },
            "html": {
              "href": "https://github.com/bridge-school/frontend-starter/pull/2"
            },
            "issue": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2"
            },
            "comments": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2/comments"
            },
            "review_comments": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2/comments"
            },
            "review_comment": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/comments{/number}"
            },
            "commits": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2/commits"
            },
            "statuses": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/statuses/14ebbcb55b60a3f15181f1464c1cb89941277a56"
            }
          },
          "author_association": "MEMBER",
          "merged": true,
          "mergeable": null,
          "rebaseable": null,
          "mergeable_state": "unknown",
          "merged_by": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "comments": 3,
          "review_comments": 0,
          "maintainer_can_modify": false,
          "commits": 3,
          "additions": 10106,
          "deletions": 17666,
          "changed_files": 16
        }
      },
      "public": true,
      "created_at": "2019-07-29T20:54:20Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10106551109",
      "type": "IssueCommentEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 133185017,
        "name": "bridge-school/frontend-starter",
        "url": "https://api.github.com/repos/bridge-school/frontend-starter"
      },
      "payload": {
        "action": "created",
        "issue": {
          "url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2",
          "repository_url": "https://api.github.com/repos/bridge-school/frontend-starter",
          "labels_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2/labels{/name}",
          "comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2/comments",
          "events_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2/events",
          "html_url": "https://github.com/bridge-school/frontend-starter/pull/2",
          "id": 470453510,
          "node_id": "MDExOlB1bGxSZXF1ZXN0Mjk5NDIzNDQ3",
          "number": 2,
          "title": "[UPDATE] Cohort 8 Changes",
          "user": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
  
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
  
          ],
          "milestone": null,
          "comments": 2,
          "created_at": "2019-07-19T17:42:34Z",
          "updated_at": "2019-07-29T20:53:31Z",
          "closed_at": null,
          "author_association": "MEMBER",
          "pull_request": {
            "url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2",
            "html_url": "https://github.com/bridge-school/frontend-starter/pull/2",
            "diff_url": "https://github.com/bridge-school/frontend-starter/pull/2.diff",
            "patch_url": "https://github.com/bridge-school/frontend-starter/pull/2.patch"
          },
          "body": "- Updated React Scripts and the starter\r\n- Added backend connection\r\n- Updated README with instructions"
        },
        "comment": {
          "url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/comments/516157976",
          "html_url": "https://github.com/bridge-school/frontend-starter/pull/2#issuecomment-516157976",
          "issue_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2",
          "id": 516157976,
          "node_id": "MDEyOklzc3VlQ29tbWVudDUxNjE1Nzk3Ng==",
          "user": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "created_at": "2019-07-29T20:53:31Z",
          "updated_at": "2019-07-29T20:53:31Z",
          "author_association": "MEMBER",
          "body": "Thanks @talyh, totally missed that! Updated."
        }
      },
      "public": true,
      "created_at": "2019-07-29T20:53:31Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10106547815",
      "type": "PushEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 133185017,
        "name": "bridge-school/frontend-starter",
        "url": "https://api.github.com/repos/bridge-school/frontend-starter"
      },
      "payload": {
        "push_id": 3867987098,
        "size": 1,
        "distinct_size": 1,
        "ref": "refs/heads/cohort-8/update",
        "head": "14ebbcb55b60a3f15181f1464c1cb89941277a56",
        "before": "cd1c1f75619d664a4ec763bb230aa1c61c7e7ecb",
        "commits": [
          {
            "sha": "14ebbcb55b60a3f15181f1464c1cb89941277a56",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "use request from backend-request folder",
            "distinct": true,
            "url": "https://api.github.com/repos/bridge-school/frontend-starter/commits/14ebbcb55b60a3f15181f1464c1cb89941277a56"
          }
        ]
      },
      "public": true,
      "created_at": "2019-07-29T20:52:59Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10106525302",
      "type": "IssueCommentEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 138066331,
        "name": "bridge-school/node-starter",
        "url": "https://api.github.com/repos/bridge-school/node-starter"
      },
      "payload": {
        "action": "created",
        "issue": {
          "url": "https://api.github.com/repos/bridge-school/node-starter/issues/7",
          "repository_url": "https://api.github.com/repos/bridge-school/node-starter",
          "labels_url": "https://api.github.com/repos/bridge-school/node-starter/issues/7/labels{/name}",
          "comments_url": "https://api.github.com/repos/bridge-school/node-starter/issues/7/comments",
          "events_url": "https://api.github.com/repos/bridge-school/node-starter/issues/7/events",
          "html_url": "https://github.com/bridge-school/node-starter/pull/7",
          "id": 470454352,
          "node_id": "MDExOlB1bGxSZXF1ZXN0Mjk5NDIzODI1",
          "number": 7,
          "title": "[UPDATE] Cohort 8",
          "user": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
  
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
  
          ],
          "milestone": null,
          "comments": 1,
          "created_at": "2019-07-19T17:44:05Z",
          "updated_at": "2019-07-29T20:49:26Z",
          "closed_at": null,
          "author_association": "MEMBER",
          "pull_request": {
            "url": "https://api.github.com/repos/bridge-school/node-starter/pulls/7",
            "html_url": "https://github.com/bridge-school/node-starter/pull/7",
            "diff_url": "https://github.com/bridge-school/node-starter/pull/7.diff",
            "patch_url": "https://github.com/bridge-school/node-starter/pull/7.patch"
          },
          "body": "- Added cors support for frontend (NOTE we'll have to change Terraform config to make sure the env variable for the project name is stored)\r\n- Updated error message for no `firebase-credentials` file\r\n- Updated README with more clear instructions"
        },
        "comment": {
          "url": "https://api.github.com/repos/bridge-school/node-starter/issues/comments/516156698",
          "html_url": "https://github.com/bridge-school/node-starter/pull/7#issuecomment-516156698",
          "issue_url": "https://api.github.com/repos/bridge-school/node-starter/issues/7",
          "id": 516156698,
          "node_id": "MDEyOklzc3VlQ29tbWVudDUxNjE1NjY5OA==",
          "user": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "created_at": "2019-07-29T20:49:26Z",
          "updated_at": "2019-07-29T20:49:26Z",
          "author_association": "MEMBER",
          "body": "Thanks @talyh! Made the changes you suggested."
        }
      },
      "public": true,
      "created_at": "2019-07-29T20:49:26Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10106522863",
      "type": "PushEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 138066331,
        "name": "bridge-school/node-starter",
        "url": "https://api.github.com/repos/bridge-school/node-starter"
      },
      "payload": {
        "push_id": 3867974118,
        "size": 1,
        "distinct_size": 1,
        "ref": "refs/heads/cohort-8/update",
        "head": "fc22b00f90cc12f179920e68d51f986374accf9f",
        "before": "0257b5cbabfd5afac66b5db25abccf82f03e121e",
        "commits": [
          {
            "sha": "fc22b00f90cc12f179920e68d51f986374accf9f",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "addressed PR comments",
            "distinct": true,
            "url": "https://api.github.com/repos/bridge-school/node-starter/commits/fc22b00f90cc12f179920e68d51f986374accf9f"
          }
        ]
      },
      "public": true,
      "created_at": "2019-07-29T20:49:03Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10047487662",
      "type": "PullRequestEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 138066331,
        "name": "bridge-school/node-starter",
        "url": "https://api.github.com/repos/bridge-school/node-starter"
      },
      "payload": {
        "action": "opened",
        "number": 7,
        "pull_request": {
          "url": "https://api.github.com/repos/bridge-school/node-starter/pulls/7",
          "id": 299423825,
          "node_id": "MDExOlB1bGxSZXF1ZXN0Mjk5NDIzODI1",
          "html_url": "https://github.com/bridge-school/node-starter/pull/7",
          "diff_url": "https://github.com/bridge-school/node-starter/pull/7.diff",
          "patch_url": "https://github.com/bridge-school/node-starter/pull/7.patch",
          "issue_url": "https://api.github.com/repos/bridge-school/node-starter/issues/7",
          "number": 7,
          "state": "open",
          "locked": false,
          "title": "[UPDATE] Cohort 8",
          "user": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "body": "- Added cors support for frontend (NOTE we'll have to change Terraform config to make sure the env variable for the project name is stored)\r\n- Updated error message for no `firebase-credentials` file\r\n- Updated README with more clear instructions",
          "created_at": "2019-07-19T17:44:05Z",
          "updated_at": "2019-07-19T17:44:05Z",
          "closed_at": null,
          "merged_at": null,
          "merge_commit_sha": null,
          "assignee": null,
          "assignees": [
  
          ],
          "requested_reviewers": [
            {
              "login": "NicholasGWK",
              "id": 6642497,
              "node_id": "MDQ6VXNlcjY2NDI0OTc=",
              "avatar_url": "https://avatars1.githubusercontent.com/u/6642497?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/NicholasGWK",
              "html_url": "https://github.com/NicholasGWK",
              "followers_url": "https://api.github.com/users/NicholasGWK/followers",
              "following_url": "https://api.github.com/users/NicholasGWK/following{/other_user}",
              "gists_url": "https://api.github.com/users/NicholasGWK/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/NicholasGWK/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/NicholasGWK/subscriptions",
              "organizations_url": "https://api.github.com/users/NicholasGWK/orgs",
              "repos_url": "https://api.github.com/users/NicholasGWK/repos",
              "events_url": "https://api.github.com/users/NicholasGWK/events{/privacy}",
              "received_events_url": "https://api.github.com/users/NicholasGWK/received_events",
              "type": "User",
              "site_admin": false
            }
          ],
          "requested_teams": [
  
          ],
          "labels": [
  
          ],
          "milestone": null,
          "commits_url": "https://api.github.com/repos/bridge-school/node-starter/pulls/7/commits",
          "review_comments_url": "https://api.github.com/repos/bridge-school/node-starter/pulls/7/comments",
          "review_comment_url": "https://api.github.com/repos/bridge-school/node-starter/pulls/comments{/number}",
          "comments_url": "https://api.github.com/repos/bridge-school/node-starter/issues/7/comments",
          "statuses_url": "https://api.github.com/repos/bridge-school/node-starter/statuses/0257b5cbabfd5afac66b5db25abccf82f03e121e",
          "head": {
            "label": "bridge-school:cohort-8/update",
            "ref": "cohort-8/update",
            "sha": "0257b5cbabfd5afac66b5db25abccf82f03e121e",
            "user": {
              "login": "bridge-school",
              "id": 30509997,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
              "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bridge-school",
              "html_url": "https://github.com/bridge-school",
              "followers_url": "https://api.github.com/users/bridge-school/followers",
              "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
              "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
              "organizations_url": "https://api.github.com/users/bridge-school/orgs",
              "repos_url": "https://api.github.com/users/bridge-school/repos",
              "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bridge-school/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "repo": {
              "id": 138066331,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzgwNjYzMzE=",
              "name": "node-starter",
              "full_name": "bridge-school/node-starter",
              "private": false,
              "owner": {
                "login": "bridge-school",
                "id": 30509997,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bridge-school",
                "html_url": "https://github.com/bridge-school",
                "followers_url": "https://api.github.com/users/bridge-school/followers",
                "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
                "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
                "organizations_url": "https://api.github.com/users/bridge-school/orgs",
                "repos_url": "https://api.github.com/users/bridge-school/repos",
                "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bridge-school/received_events",
                "type": "Organization",
                "site_admin": false
              },
              "html_url": "https://github.com/bridge-school/node-starter",
              "description": null,
              "fork": false,
              "url": "https://api.github.com/repos/bridge-school/node-starter",
              "forks_url": "https://api.github.com/repos/bridge-school/node-starter/forks",
              "keys_url": "https://api.github.com/repos/bridge-school/node-starter/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/bridge-school/node-starter/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/bridge-school/node-starter/teams",
              "hooks_url": "https://api.github.com/repos/bridge-school/node-starter/hooks",
              "issue_events_url": "https://api.github.com/repos/bridge-school/node-starter/issues/events{/number}",
              "events_url": "https://api.github.com/repos/bridge-school/node-starter/events",
              "assignees_url": "https://api.github.com/repos/bridge-school/node-starter/assignees{/user}",
              "branches_url": "https://api.github.com/repos/bridge-school/node-starter/branches{/branch}",
              "tags_url": "https://api.github.com/repos/bridge-school/node-starter/tags",
              "blobs_url": "https://api.github.com/repos/bridge-school/node-starter/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/bridge-school/node-starter/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/bridge-school/node-starter/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/bridge-school/node-starter/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/bridge-school/node-starter/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/bridge-school/node-starter/languages",
              "stargazers_url": "https://api.github.com/repos/bridge-school/node-starter/stargazers",
              "contributors_url": "https://api.github.com/repos/bridge-school/node-starter/contributors",
              "subscribers_url": "https://api.github.com/repos/bridge-school/node-starter/subscribers",
              "subscription_url": "https://api.github.com/repos/bridge-school/node-starter/subscription",
              "commits_url": "https://api.github.com/repos/bridge-school/node-starter/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/bridge-school/node-starter/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/bridge-school/node-starter/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/bridge-school/node-starter/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/bridge-school/node-starter/contents/{+path}",
              "compare_url": "https://api.github.com/repos/bridge-school/node-starter/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/bridge-school/node-starter/merges",
              "archive_url": "https://api.github.com/repos/bridge-school/node-starter/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/bridge-school/node-starter/downloads",
              "issues_url": "https://api.github.com/repos/bridge-school/node-starter/issues{/number}",
              "pulls_url": "https://api.github.com/repos/bridge-school/node-starter/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/bridge-school/node-starter/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/bridge-school/node-starter/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/bridge-school/node-starter/labels{/name}",
              "releases_url": "https://api.github.com/repos/bridge-school/node-starter/releases{/id}",
              "deployments_url": "https://api.github.com/repos/bridge-school/node-starter/deployments",
              "created_at": "2018-06-20T17:42:55Z",
              "updated_at": "2019-06-06T15:56:35Z",
              "pushed_at": "2019-07-19T17:40:07Z",
              "git_url": "git://github.com/bridge-school/node-starter.git",
              "ssh_url": "git@github.com:bridge-school/node-starter.git",
              "clone_url": "https://github.com/bridge-school/node-starter.git",
              "svn_url": "https://github.com/bridge-school/node-starter",
              "homepage": null,
              "size": 934,
              "stargazers_count": 0,
              "watchers_count": 0,
              "language": "JavaScript",
              "has_issues": true,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 4,
              "license": null,
              "forks": 0,
              "open_issues": 4,
              "watchers": 0,
              "default_branch": "master"
            }
          },
          "base": {
            "label": "bridge-school:master",
            "ref": "master",
            "sha": "686b0e61dbe785a38f3e0343f24bce9d58765ba8",
            "user": {
              "login": "bridge-school",
              "id": 30509997,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
              "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bridge-school",
              "html_url": "https://github.com/bridge-school",
              "followers_url": "https://api.github.com/users/bridge-school/followers",
              "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
              "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
              "organizations_url": "https://api.github.com/users/bridge-school/orgs",
              "repos_url": "https://api.github.com/users/bridge-school/repos",
              "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bridge-school/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "repo": {
              "id": 138066331,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzgwNjYzMzE=",
              "name": "node-starter",
              "full_name": "bridge-school/node-starter",
              "private": false,
              "owner": {
                "login": "bridge-school",
                "id": 30509997,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bridge-school",
                "html_url": "https://github.com/bridge-school",
                "followers_url": "https://api.github.com/users/bridge-school/followers",
                "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
                "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
                "organizations_url": "https://api.github.com/users/bridge-school/orgs",
                "repos_url": "https://api.github.com/users/bridge-school/repos",
                "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bridge-school/received_events",
                "type": "Organization",
                "site_admin": false
              },
              "html_url": "https://github.com/bridge-school/node-starter",
              "description": null,
              "fork": false,
              "url": "https://api.github.com/repos/bridge-school/node-starter",
              "forks_url": "https://api.github.com/repos/bridge-school/node-starter/forks",
              "keys_url": "https://api.github.com/repos/bridge-school/node-starter/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/bridge-school/node-starter/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/bridge-school/node-starter/teams",
              "hooks_url": "https://api.github.com/repos/bridge-school/node-starter/hooks",
              "issue_events_url": "https://api.github.com/repos/bridge-school/node-starter/issues/events{/number}",
              "events_url": "https://api.github.com/repos/bridge-school/node-starter/events",
              "assignees_url": "https://api.github.com/repos/bridge-school/node-starter/assignees{/user}",
              "branches_url": "https://api.github.com/repos/bridge-school/node-starter/branches{/branch}",
              "tags_url": "https://api.github.com/repos/bridge-school/node-starter/tags",
              "blobs_url": "https://api.github.com/repos/bridge-school/node-starter/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/bridge-school/node-starter/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/bridge-school/node-starter/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/bridge-school/node-starter/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/bridge-school/node-starter/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/bridge-school/node-starter/languages",
              "stargazers_url": "https://api.github.com/repos/bridge-school/node-starter/stargazers",
              "contributors_url": "https://api.github.com/repos/bridge-school/node-starter/contributors",
              "subscribers_url": "https://api.github.com/repos/bridge-school/node-starter/subscribers",
              "subscription_url": "https://api.github.com/repos/bridge-school/node-starter/subscription",
              "commits_url": "https://api.github.com/repos/bridge-school/node-starter/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/bridge-school/node-starter/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/bridge-school/node-starter/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/bridge-school/node-starter/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/bridge-school/node-starter/contents/{+path}",
              "compare_url": "https://api.github.com/repos/bridge-school/node-starter/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/bridge-school/node-starter/merges",
              "archive_url": "https://api.github.com/repos/bridge-school/node-starter/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/bridge-school/node-starter/downloads",
              "issues_url": "https://api.github.com/repos/bridge-school/node-starter/issues{/number}",
              "pulls_url": "https://api.github.com/repos/bridge-school/node-starter/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/bridge-school/node-starter/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/bridge-school/node-starter/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/bridge-school/node-starter/labels{/name}",
              "releases_url": "https://api.github.com/repos/bridge-school/node-starter/releases{/id}",
              "deployments_url": "https://api.github.com/repos/bridge-school/node-starter/deployments",
              "created_at": "2018-06-20T17:42:55Z",
              "updated_at": "2019-06-06T15:56:35Z",
              "pushed_at": "2019-07-19T17:40:07Z",
              "git_url": "git://github.com/bridge-school/node-starter.git",
              "ssh_url": "git@github.com:bridge-school/node-starter.git",
              "clone_url": "https://github.com/bridge-school/node-starter.git",
              "svn_url": "https://github.com/bridge-school/node-starter",
              "homepage": null,
              "size": 934,
              "stargazers_count": 0,
              "watchers_count": 0,
              "language": "JavaScript",
              "has_issues": true,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 4,
              "license": null,
              "forks": 0,
              "open_issues": 4,
              "watchers": 0,
              "default_branch": "master"
            }
          },
          "_links": {
            "self": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/pulls/7"
            },
            "html": {
              "href": "https://github.com/bridge-school/node-starter/pull/7"
            },
            "issue": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/issues/7"
            },
            "comments": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/issues/7/comments"
            },
            "review_comments": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/pulls/7/comments"
            },
            "review_comment": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/pulls/comments{/number}"
            },
            "commits": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/pulls/7/commits"
            },
            "statuses": {
              "href": "https://api.github.com/repos/bridge-school/node-starter/statuses/0257b5cbabfd5afac66b5db25abccf82f03e121e"
            }
          },
          "author_association": "MEMBER",
          "merged": false,
          "mergeable": null,
          "rebaseable": null,
          "mergeable_state": "unknown",
          "merged_by": null,
          "comments": 0,
          "review_comments": 0,
          "maintainer_can_modify": false,
          "commits": 1,
          "additions": 36,
          "deletions": 20,
          "changed_files": 6
        }
      },
      "public": true,
      "created_at": "2019-07-19T17:44:05Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10047478658",
      "type": "PullRequestEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 133185017,
        "name": "bridge-school/frontend-starter",
        "url": "https://api.github.com/repos/bridge-school/frontend-starter"
      },
      "payload": {
        "action": "opened",
        "number": 2,
        "pull_request": {
          "url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2",
          "id": 299423447,
          "node_id": "MDExOlB1bGxSZXF1ZXN0Mjk5NDIzNDQ3",
          "html_url": "https://github.com/bridge-school/frontend-starter/pull/2",
          "diff_url": "https://github.com/bridge-school/frontend-starter/pull/2.diff",
          "patch_url": "https://github.com/bridge-school/frontend-starter/pull/2.patch",
          "issue_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2",
          "number": 2,
          "state": "open",
          "locked": false,
          "title": "[UPDATE] Cohort 8 Changes",
          "user": {
            "login": "pkanal",
            "id": 8810222,
            "node_id": "MDQ6VXNlcjg4MTAyMjI=",
            "avatar_url": "https://avatars3.githubusercontent.com/u/8810222?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "html_url": "https://github.com/pkanal",
            "followers_url": "https://api.github.com/users/pkanal/followers",
            "following_url": "https://api.github.com/users/pkanal/following{/other_user}",
            "gists_url": "https://api.github.com/users/pkanal/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pkanal/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pkanal/subscriptions",
            "organizations_url": "https://api.github.com/users/pkanal/orgs",
            "repos_url": "https://api.github.com/users/pkanal/repos",
            "events_url": "https://api.github.com/users/pkanal/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pkanal/received_events",
            "type": "User",
            "site_admin": false
          },
          "body": "- Updated React Scripts and the starter\r\n- Added backend connection\r\n- Updated README with instructions",
          "created_at": "2019-07-19T17:42:34Z",
          "updated_at": "2019-07-19T17:42:34Z",
          "closed_at": null,
          "merged_at": null,
          "merge_commit_sha": null,
          "assignee": null,
          "assignees": [
  
          ],
          "requested_reviewers": [
            {
              "login": "NicholasGWK",
              "id": 6642497,
              "node_id": "MDQ6VXNlcjY2NDI0OTc=",
              "avatar_url": "https://avatars1.githubusercontent.com/u/6642497?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/NicholasGWK",
              "html_url": "https://github.com/NicholasGWK",
              "followers_url": "https://api.github.com/users/NicholasGWK/followers",
              "following_url": "https://api.github.com/users/NicholasGWK/following{/other_user}",
              "gists_url": "https://api.github.com/users/NicholasGWK/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/NicholasGWK/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/NicholasGWK/subscriptions",
              "organizations_url": "https://api.github.com/users/NicholasGWK/orgs",
              "repos_url": "https://api.github.com/users/NicholasGWK/repos",
              "events_url": "https://api.github.com/users/NicholasGWK/events{/privacy}",
              "received_events_url": "https://api.github.com/users/NicholasGWK/received_events",
              "type": "User",
              "site_admin": false
            }
          ],
          "requested_teams": [
  
          ],
          "labels": [
  
          ],
          "milestone": null,
          "commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2/commits",
          "review_comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2/comments",
          "review_comment_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/comments{/number}",
          "comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2/comments",
          "statuses_url": "https://api.github.com/repos/bridge-school/frontend-starter/statuses/cd1c1f75619d664a4ec763bb230aa1c61c7e7ecb",
          "head": {
            "label": "bridge-school:cohort-8/update",
            "ref": "cohort-8/update",
            "sha": "cd1c1f75619d664a4ec763bb230aa1c61c7e7ecb",
            "user": {
              "login": "bridge-school",
              "id": 30509997,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
              "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bridge-school",
              "html_url": "https://github.com/bridge-school",
              "followers_url": "https://api.github.com/users/bridge-school/followers",
              "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
              "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
              "organizations_url": "https://api.github.com/users/bridge-school/orgs",
              "repos_url": "https://api.github.com/users/bridge-school/repos",
              "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bridge-school/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "repo": {
              "id": 133185017,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzMxODUwMTc=",
              "name": "frontend-starter",
              "full_name": "bridge-school/frontend-starter",
              "private": false,
              "owner": {
                "login": "bridge-school",
                "id": 30509997,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bridge-school",
                "html_url": "https://github.com/bridge-school",
                "followers_url": "https://api.github.com/users/bridge-school/followers",
                "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
                "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
                "organizations_url": "https://api.github.com/users/bridge-school/orgs",
                "repos_url": "https://api.github.com/users/bridge-school/repos",
                "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bridge-school/received_events",
                "type": "Organization",
                "site_admin": false
              },
              "html_url": "https://github.com/bridge-school/frontend-starter",
              "description": "Frontend starter using CRA",
              "fork": false,
              "url": "https://api.github.com/repos/bridge-school/frontend-starter",
              "forks_url": "https://api.github.com/repos/bridge-school/frontend-starter/forks",
              "keys_url": "https://api.github.com/repos/bridge-school/frontend-starter/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/bridge-school/frontend-starter/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/bridge-school/frontend-starter/teams",
              "hooks_url": "https://api.github.com/repos/bridge-school/frontend-starter/hooks",
              "issue_events_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/events{/number}",
              "events_url": "https://api.github.com/repos/bridge-school/frontend-starter/events",
              "assignees_url": "https://api.github.com/repos/bridge-school/frontend-starter/assignees{/user}",
              "branches_url": "https://api.github.com/repos/bridge-school/frontend-starter/branches{/branch}",
              "tags_url": "https://api.github.com/repos/bridge-school/frontend-starter/tags",
              "blobs_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/bridge-school/frontend-starter/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/bridge-school/frontend-starter/languages",
              "stargazers_url": "https://api.github.com/repos/bridge-school/frontend-starter/stargazers",
              "contributors_url": "https://api.github.com/repos/bridge-school/frontend-starter/contributors",
              "subscribers_url": "https://api.github.com/repos/bridge-school/frontend-starter/subscribers",
              "subscription_url": "https://api.github.com/repos/bridge-school/frontend-starter/subscription",
              "commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/bridge-school/frontend-starter/contents/{+path}",
              "compare_url": "https://api.github.com/repos/bridge-school/frontend-starter/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/bridge-school/frontend-starter/merges",
              "archive_url": "https://api.github.com/repos/bridge-school/frontend-starter/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/bridge-school/frontend-starter/downloads",
              "issues_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues{/number}",
              "pulls_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/bridge-school/frontend-starter/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/bridge-school/frontend-starter/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/bridge-school/frontend-starter/labels{/name}",
              "releases_url": "https://api.github.com/repos/bridge-school/frontend-starter/releases{/id}",
              "deployments_url": "https://api.github.com/repos/bridge-school/frontend-starter/deployments",
              "created_at": "2018-05-12T21:33:58Z",
              "updated_at": "2019-02-08T19:57:31Z",
              "pushed_at": "2019-07-19T17:38:57Z",
              "git_url": "git://github.com/bridge-school/frontend-starter.git",
              "ssh_url": "git@github.com:bridge-school/frontend-starter.git",
              "clone_url": "https://github.com/bridge-school/frontend-starter.git",
              "svn_url": "https://github.com/bridge-school/frontend-starter",
              "homepage": null,
              "size": 255,
              "stargazers_count": 0,
              "watchers_count": 0,
              "language": "JavaScript",
              "has_issues": true,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 2,
              "license": null,
              "forks": 0,
              "open_issues": 2,
              "watchers": 0,
              "default_branch": "master"
            }
          },
          "base": {
            "label": "bridge-school:master",
            "ref": "master",
            "sha": "4305f9dc385961fa0d6165c9266ebdfdf9126360",
            "user": {
              "login": "bridge-school",
              "id": 30509997,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
              "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bridge-school",
              "html_url": "https://github.com/bridge-school",
              "followers_url": "https://api.github.com/users/bridge-school/followers",
              "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
              "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
              "organizations_url": "https://api.github.com/users/bridge-school/orgs",
              "repos_url": "https://api.github.com/users/bridge-school/repos",
              "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bridge-school/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "repo": {
              "id": 133185017,
              "node_id": "MDEwOlJlcG9zaXRvcnkxMzMxODUwMTc=",
              "name": "frontend-starter",
              "full_name": "bridge-school/frontend-starter",
              "private": false,
              "owner": {
                "login": "bridge-school",
                "id": 30509997,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjMwNTA5OTk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/30509997?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bridge-school",
                "html_url": "https://github.com/bridge-school",
                "followers_url": "https://api.github.com/users/bridge-school/followers",
                "following_url": "https://api.github.com/users/bridge-school/following{/other_user}",
                "gists_url": "https://api.github.com/users/bridge-school/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bridge-school/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bridge-school/subscriptions",
                "organizations_url": "https://api.github.com/users/bridge-school/orgs",
                "repos_url": "https://api.github.com/users/bridge-school/repos",
                "events_url": "https://api.github.com/users/bridge-school/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bridge-school/received_events",
                "type": "Organization",
                "site_admin": false
              },
              "html_url": "https://github.com/bridge-school/frontend-starter",
              "description": "Frontend starter using CRA",
              "fork": false,
              "url": "https://api.github.com/repos/bridge-school/frontend-starter",
              "forks_url": "https://api.github.com/repos/bridge-school/frontend-starter/forks",
              "keys_url": "https://api.github.com/repos/bridge-school/frontend-starter/keys{/key_id}",
              "collaborators_url": "https://api.github.com/repos/bridge-school/frontend-starter/collaborators{/collaborator}",
              "teams_url": "https://api.github.com/repos/bridge-school/frontend-starter/teams",
              "hooks_url": "https://api.github.com/repos/bridge-school/frontend-starter/hooks",
              "issue_events_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/events{/number}",
              "events_url": "https://api.github.com/repos/bridge-school/frontend-starter/events",
              "assignees_url": "https://api.github.com/repos/bridge-school/frontend-starter/assignees{/user}",
              "branches_url": "https://api.github.com/repos/bridge-school/frontend-starter/branches{/branch}",
              "tags_url": "https://api.github.com/repos/bridge-school/frontend-starter/tags",
              "blobs_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/blobs{/sha}",
              "git_tags_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/tags{/sha}",
              "git_refs_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/refs{/sha}",
              "trees_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/trees{/sha}",
              "statuses_url": "https://api.github.com/repos/bridge-school/frontend-starter/statuses/{sha}",
              "languages_url": "https://api.github.com/repos/bridge-school/frontend-starter/languages",
              "stargazers_url": "https://api.github.com/repos/bridge-school/frontend-starter/stargazers",
              "contributors_url": "https://api.github.com/repos/bridge-school/frontend-starter/contributors",
              "subscribers_url": "https://api.github.com/repos/bridge-school/frontend-starter/subscribers",
              "subscription_url": "https://api.github.com/repos/bridge-school/frontend-starter/subscription",
              "commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/commits{/sha}",
              "git_commits_url": "https://api.github.com/repos/bridge-school/frontend-starter/git/commits{/sha}",
              "comments_url": "https://api.github.com/repos/bridge-school/frontend-starter/comments{/number}",
              "issue_comment_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues/comments{/number}",
              "contents_url": "https://api.github.com/repos/bridge-school/frontend-starter/contents/{+path}",
              "compare_url": "https://api.github.com/repos/bridge-school/frontend-starter/compare/{base}...{head}",
              "merges_url": "https://api.github.com/repos/bridge-school/frontend-starter/merges",
              "archive_url": "https://api.github.com/repos/bridge-school/frontend-starter/{archive_format}{/ref}",
              "downloads_url": "https://api.github.com/repos/bridge-school/frontend-starter/downloads",
              "issues_url": "https://api.github.com/repos/bridge-school/frontend-starter/issues{/number}",
              "pulls_url": "https://api.github.com/repos/bridge-school/frontend-starter/pulls{/number}",
              "milestones_url": "https://api.github.com/repos/bridge-school/frontend-starter/milestones{/number}",
              "notifications_url": "https://api.github.com/repos/bridge-school/frontend-starter/notifications{?since,all,participating}",
              "labels_url": "https://api.github.com/repos/bridge-school/frontend-starter/labels{/name}",
              "releases_url": "https://api.github.com/repos/bridge-school/frontend-starter/releases{/id}",
              "deployments_url": "https://api.github.com/repos/bridge-school/frontend-starter/deployments",
              "created_at": "2018-05-12T21:33:58Z",
              "updated_at": "2019-02-08T19:57:31Z",
              "pushed_at": "2019-07-19T17:38:57Z",
              "git_url": "git://github.com/bridge-school/frontend-starter.git",
              "ssh_url": "git@github.com:bridge-school/frontend-starter.git",
              "clone_url": "https://github.com/bridge-school/frontend-starter.git",
              "svn_url": "https://github.com/bridge-school/frontend-starter",
              "homepage": null,
              "size": 255,
              "stargazers_count": 0,
              "watchers_count": 0,
              "language": "JavaScript",
              "has_issues": true,
              "has_projects": true,
              "has_downloads": true,
              "has_wiki": true,
              "has_pages": false,
              "forks_count": 0,
              "mirror_url": null,
              "archived": false,
              "disabled": false,
              "open_issues_count": 2,
              "license": null,
              "forks": 0,
              "open_issues": 2,
              "watchers": 0,
              "default_branch": "master"
            }
          },
          "_links": {
            "self": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2"
            },
            "html": {
              "href": "https://github.com/bridge-school/frontend-starter/pull/2"
            },
            "issue": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2"
            },
            "comments": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/issues/2/comments"
            },
            "review_comments": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2/comments"
            },
            "review_comment": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/comments{/number}"
            },
            "commits": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/pulls/2/commits"
            },
            "statuses": {
              "href": "https://api.github.com/repos/bridge-school/frontend-starter/statuses/cd1c1f75619d664a4ec763bb230aa1c61c7e7ecb"
            }
          },
          "author_association": "MEMBER",
          "merged": false,
          "mergeable": null,
          "rebaseable": null,
          "mergeable_state": "unknown",
          "merged_by": null,
          "comments": 0,
          "review_comments": 0,
          "maintainer_can_modify": false,
          "commits": 2,
          "additions": 10113,
          "deletions": 17666,
          "changed_files": 16
        }
      },
      "public": true,
      "created_at": "2019-07-19T17:42:35Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10047463294",
      "type": "CreateEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 138066331,
        "name": "bridge-school/node-starter",
        "url": "https://api.github.com/repos/bridge-school/node-starter"
      },
      "payload": {
        "ref": "cohort-8/update",
        "ref_type": "branch",
        "master_branch": "master",
        "description": null,
        "pusher_type": "user"
      },
      "public": true,
      "created_at": "2019-07-19T17:40:07Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "10047456206",
      "type": "CreateEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 133185017,
        "name": "bridge-school/frontend-starter",
        "url": "https://api.github.com/repos/bridge-school/frontend-starter"
      },
      "payload": {
        "ref": "cohort-8/update",
        "ref_type": "branch",
        "master_branch": "master",
        "description": "Frontend starter using CRA",
        "pusher_type": "user"
      },
      "public": true,
      "created_at": "2019-07-19T17:38:57Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9969455635",
      "type": "PushEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 168412238,
        "name": "bridge-school/personal-project-react",
        "url": "https://api.github.com/repos/bridge-school/personal-project-react"
      },
      "payload": {
        "push_id": 3794330162,
        "size": 1,
        "distinct_size": 1,
        "ref": "refs/heads/master",
        "head": "089e7bf6ada0da6bda4032c48fac39677bc06aec",
        "before": "b71f6069d9c841a7043e54e8fdf02a2f75363055",
        "commits": [
          {
            "sha": "089e7bf6ada0da6bda4032c48fac39677bc06aec",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "Update README.md",
            "distinct": true,
            "url": "https://api.github.com/repos/bridge-school/personal-project-react/commits/089e7bf6ada0da6bda4032c48fac39677bc06aec"
          }
        ]
      },
      "public": true,
      "created_at": "2019-07-08T18:06:09Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9793178423",
      "type": "PushEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 190471353,
        "name": "bridge-school/comms-service",
        "url": "https://api.github.com/repos/bridge-school/comms-service"
      },
      "payload": {
        "push_id": 3699157659,
        "size": 1,
        "distinct_size": 1,
        "ref": "refs/heads/master",
        "head": "31a8cb7c86b77bdb88769a72979e48b660858169",
        "before": "ecf2d1ed0eb7b91e4d9785463a5f14ad81c6cf24",
        "commits": [
          {
            "sha": "31a8cb7c86b77bdb88769a72979e48b660858169",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "add slack integration",
            "distinct": true,
            "url": "https://api.github.com/repos/bridge-school/comms-service/commits/31a8cb7c86b77bdb88769a72979e48b660858169"
          }
        ]
      },
      "public": true,
      "created_at": "2019-06-10T19:16:39Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9793021208",
      "type": "PushEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 190471353,
        "name": "bridge-school/comms-service",
        "url": "https://api.github.com/repos/bridge-school/comms-service"
      },
      "payload": {
        "push_id": 3699076419,
        "size": 1,
        "distinct_size": 1,
        "ref": "refs/heads/master",
        "head": "ecf2d1ed0eb7b91e4d9785463a5f14ad81c6cf24",
        "before": "268151fbcfc6ec8eef4c75b18b633d883a476b75",
        "commits": [
          {
            "sha": "ecf2d1ed0eb7b91e4d9785463a5f14ad81c6cf24",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "added email service",
            "distinct": true,
            "url": "https://api.github.com/repos/bridge-school/comms-service/commits/ecf2d1ed0eb7b91e4d9785463a5f14ad81c6cf24"
          }
        ]
      },
      "public": true,
      "created_at": "2019-06-10T18:52:10Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9766741613",
      "type": "CreateEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 190471353,
        "name": "bridge-school/comms-service",
        "url": "https://api.github.com/repos/bridge-school/comms-service"
      },
      "payload": {
        "ref": "master",
        "ref_type": "branch",
        "master_branch": "master",
        "description": null,
        "pusher_type": "user"
      },
      "public": true,
      "created_at": "2019-06-05T21:30:49Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9766738889",
      "type": "CreateEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 190471353,
        "name": "bridge-school/comms-service",
        "url": "https://api.github.com/repos/bridge-school/comms-service"
      },
      "payload": {
        "ref": null,
        "ref_type": "repository",
        "master_branch": "master",
        "description": null,
        "pusher_type": "user"
      },
      "public": true,
      "created_at": "2019-06-05T21:30:20Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9712108504",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 189053816,
        "name": "bridge-school/cicd-bridge",
        "url": "https://api.github.com/repos/bridge-school/cicd-bridge"
      },
      "payload": {
        "member": {
          "login": "tessalt",
          "id": 1789029,
          "node_id": "MDQ6VXNlcjE3ODkwMjk=",
          "avatar_url": "https://avatars3.githubusercontent.com/u/1789029?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/tessalt",
          "html_url": "https://github.com/tessalt",
          "followers_url": "https://api.github.com/users/tessalt/followers",
          "following_url": "https://api.github.com/users/tessalt/following{/other_user}",
          "gists_url": "https://api.github.com/users/tessalt/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/tessalt/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/tessalt/subscriptions",
          "organizations_url": "https://api.github.com/users/tessalt/orgs",
          "repos_url": "https://api.github.com/users/tessalt/repos",
          "events_url": "https://api.github.com/users/tessalt/events{/privacy}",
          "received_events_url": "https://api.github.com/users/tessalt/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-28T15:53:36Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9699910476",
      "type": "PushEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 85522071,
        "name": "pkanal/knope-compliments",
        "url": "https://api.github.com/repos/pkanal/knope-compliments"
      },
      "payload": {
        "push_id": 3648802010,
        "size": 1,
        "distinct_size": 1,
        "ref": "refs/heads/master",
        "head": "6e7bad7b4cb4ff8873f19e18ff66970fe592da6f",
        "before": "602d4df7f2b4a875ef4209b40545efb5235e7eb9",
        "commits": [
          {
            "sha": "6e7bad7b4cb4ff8873f19e18ff66970fe592da6f",
            "author": {
              "email": "purvikanal92@gmail.com",
              "name": "Purvi Kanal"
            },
            "message": "📝 add README",
            "distinct": true,
            "url": "https://api.github.com/repos/pkanal/knope-compliments/commits/6e7bad7b4cb4ff8873f19e18ff66970fe592da6f"
          }
        ]
      },
      "public": true,
      "created_at": "2019-05-26T17:59:40Z"
    },
    {
      "id": "9688395718",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186925536,
        "name": "bridge-school/speakeasier-backend",
        "url": "https://api.github.com/repos/bridge-school/speakeasier-backend"
      },
      "payload": {
        "member": {
          "login": "leticiabecker",
          "id": 23156388,
          "node_id": "MDQ6VXNlcjIzMTU2Mzg4",
          "avatar_url": "https://avatars1.githubusercontent.com/u/23156388?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/leticiabecker",
          "html_url": "https://github.com/leticiabecker",
          "followers_url": "https://api.github.com/users/leticiabecker/followers",
          "following_url": "https://api.github.com/users/leticiabecker/following{/other_user}",
          "gists_url": "https://api.github.com/users/leticiabecker/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/leticiabecker/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/leticiabecker/subscriptions",
          "organizations_url": "https://api.github.com/users/leticiabecker/orgs",
          "repos_url": "https://api.github.com/users/leticiabecker/repos",
          "events_url": "https://api.github.com/users/leticiabecker/events{/privacy}",
          "received_events_url": "https://api.github.com/users/leticiabecker/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-24T00:04:40Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9688395321",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186925541,
        "name": "bridge-school/speakeasier-frontend",
        "url": "https://api.github.com/repos/bridge-school/speakeasier-frontend"
      },
      "payload": {
        "member": {
          "login": "leticiabecker",
          "id": 23156388,
          "node_id": "MDQ6VXNlcjIzMTU2Mzg4",
          "avatar_url": "https://avatars1.githubusercontent.com/u/23156388?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/leticiabecker",
          "html_url": "https://github.com/leticiabecker",
          "followers_url": "https://api.github.com/users/leticiabecker/followers",
          "following_url": "https://api.github.com/users/leticiabecker/following{/other_user}",
          "gists_url": "https://api.github.com/users/leticiabecker/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/leticiabecker/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/leticiabecker/subscriptions",
          "organizations_url": "https://api.github.com/users/leticiabecker/orgs",
          "repos_url": "https://api.github.com/users/leticiabecker/repos",
          "events_url": "https://api.github.com/users/leticiabecker/events{/privacy}",
          "received_events_url": "https://api.github.com/users/leticiabecker/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-24T00:04:34Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9687943683",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186927366,
        "name": "bridge-school/applications-backend",
        "url": "https://api.github.com/repos/bridge-school/applications-backend"
      },
      "payload": {
        "member": {
          "login": "macmillan2020",
          "id": 17674848,
          "node_id": "MDQ6VXNlcjE3Njc0ODQ4",
          "avatar_url": "https://avatars0.githubusercontent.com/u/17674848?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/macmillan2020",
          "html_url": "https://github.com/macmillan2020",
          "followers_url": "https://api.github.com/users/macmillan2020/followers",
          "following_url": "https://api.github.com/users/macmillan2020/following{/other_user}",
          "gists_url": "https://api.github.com/users/macmillan2020/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/macmillan2020/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/macmillan2020/subscriptions",
          "organizations_url": "https://api.github.com/users/macmillan2020/orgs",
          "repos_url": "https://api.github.com/users/macmillan2020/repos",
          "events_url": "https://api.github.com/users/macmillan2020/events{/privacy}",
          "received_events_url": "https://api.github.com/users/macmillan2020/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-23T22:10:01Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9687942453",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186927360,
        "name": "bridge-school/applications-frontend",
        "url": "https://api.github.com/repos/bridge-school/applications-frontend"
      },
      "payload": {
        "member": {
          "login": "macmillan2020",
          "id": 17674848,
          "node_id": "MDQ6VXNlcjE3Njc0ODQ4",
          "avatar_url": "https://avatars0.githubusercontent.com/u/17674848?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/macmillan2020",
          "html_url": "https://github.com/macmillan2020",
          "followers_url": "https://api.github.com/users/macmillan2020/followers",
          "following_url": "https://api.github.com/users/macmillan2020/following{/other_user}",
          "gists_url": "https://api.github.com/users/macmillan2020/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/macmillan2020/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/macmillan2020/subscriptions",
          "organizations_url": "https://api.github.com/users/macmillan2020/orgs",
          "repos_url": "https://api.github.com/users/macmillan2020/repos",
          "events_url": "https://api.github.com/users/macmillan2020/events{/privacy}",
          "received_events_url": "https://api.github.com/users/macmillan2020/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-23T22:09:45Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9671861957",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186927366,
        "name": "bridge-school/applications-backend",
        "url": "https://api.github.com/repos/bridge-school/applications-backend"
      },
      "payload": {
        "member": {
          "login": "cghenne",
          "id": 8653753,
          "node_id": "MDQ6VXNlcjg2NTM3NTM=",
          "avatar_url": "https://avatars0.githubusercontent.com/u/8653753?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/cghenne",
          "html_url": "https://github.com/cghenne",
          "followers_url": "https://api.github.com/users/cghenne/followers",
          "following_url": "https://api.github.com/users/cghenne/following{/other_user}",
          "gists_url": "https://api.github.com/users/cghenne/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cghenne/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cghenne/subscriptions",
          "organizations_url": "https://api.github.com/users/cghenne/orgs",
          "repos_url": "https://api.github.com/users/cghenne/repos",
          "events_url": "https://api.github.com/users/cghenne/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cghenne/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-22T00:46:22Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9671860855",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186927360,
        "name": "bridge-school/applications-frontend",
        "url": "https://api.github.com/repos/bridge-school/applications-frontend"
      },
      "payload": {
        "member": {
          "login": "cghenne",
          "id": 8653753,
          "node_id": "MDQ6VXNlcjg2NTM3NTM=",
          "avatar_url": "https://avatars0.githubusercontent.com/u/8653753?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/cghenne",
          "html_url": "https://github.com/cghenne",
          "followers_url": "https://api.github.com/users/cghenne/followers",
          "following_url": "https://api.github.com/users/cghenne/following{/other_user}",
          "gists_url": "https://api.github.com/users/cghenne/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cghenne/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cghenne/subscriptions",
          "organizations_url": "https://api.github.com/users/cghenne/orgs",
          "repos_url": "https://api.github.com/users/cghenne/repos",
          "events_url": "https://api.github.com/users/cghenne/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cghenne/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-22T00:46:01Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9670153326",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186927360,
        "name": "bridge-school/applications-frontend",
        "url": "https://api.github.com/repos/bridge-school/applications-frontend"
      },
      "payload": {
        "member": {
          "login": "priyanka-np",
          "id": 50060623,
          "node_id": "MDQ6VXNlcjUwMDYwNjIz",
          "avatar_url": "https://avatars3.githubusercontent.com/u/50060623?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/priyanka-np",
          "html_url": "https://github.com/priyanka-np",
          "followers_url": "https://api.github.com/users/priyanka-np/followers",
          "following_url": "https://api.github.com/users/priyanka-np/following{/other_user}",
          "gists_url": "https://api.github.com/users/priyanka-np/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/priyanka-np/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/priyanka-np/subscriptions",
          "organizations_url": "https://api.github.com/users/priyanka-np/orgs",
          "repos_url": "https://api.github.com/users/priyanka-np/repos",
          "events_url": "https://api.github.com/users/priyanka-np/events{/privacy}",
          "received_events_url": "https://api.github.com/users/priyanka-np/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-21T19:10:09Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9670149942",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186927366,
        "name": "bridge-school/applications-backend",
        "url": "https://api.github.com/repos/bridge-school/applications-backend"
      },
      "payload": {
        "member": {
          "login": "priyanka-np",
          "id": 50060623,
          "node_id": "MDQ6VXNlcjUwMDYwNjIz",
          "avatar_url": "https://avatars3.githubusercontent.com/u/50060623?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/priyanka-np",
          "html_url": "https://github.com/priyanka-np",
          "followers_url": "https://api.github.com/users/priyanka-np/followers",
          "following_url": "https://api.github.com/users/priyanka-np/following{/other_user}",
          "gists_url": "https://api.github.com/users/priyanka-np/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/priyanka-np/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/priyanka-np/subscriptions",
          "organizations_url": "https://api.github.com/users/priyanka-np/orgs",
          "repos_url": "https://api.github.com/users/priyanka-np/repos",
          "events_url": "https://api.github.com/users/priyanka-np/events{/privacy}",
          "received_events_url": "https://api.github.com/users/priyanka-np/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-21T19:09:35Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    },
    {
      "id": "9652707243",
      "type": "MemberEvent",
      "actor": {
        "id": 8810222,
        "login": "pkanal",
        "display_login": "pkanal",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pkanal",
        "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
      },
      "repo": {
        "id": 186925536,
        "name": "bridge-school/speakeasier-backend",
        "url": "https://api.github.com/repos/bridge-school/speakeasier-backend"
      },
      "payload": {
        "member": {
          "login": "vanecaro22",
          "id": 6580022,
          "node_id": "MDQ6VXNlcjY1ODAwMjI=",
          "avatar_url": "https://avatars3.githubusercontent.com/u/6580022?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/vanecaro22",
          "html_url": "https://github.com/vanecaro22",
          "followers_url": "https://api.github.com/users/vanecaro22/followers",
          "following_url": "https://api.github.com/users/vanecaro22/following{/other_user}",
          "gists_url": "https://api.github.com/users/vanecaro22/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/vanecaro22/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/vanecaro22/subscriptions",
          "organizations_url": "https://api.github.com/users/vanecaro22/orgs",
          "repos_url": "https://api.github.com/users/vanecaro22/repos",
          "events_url": "https://api.github.com/users/vanecaro22/events{/privacy}",
          "received_events_url": "https://api.github.com/users/vanecaro22/received_events",
          "type": "User",
          "site_admin": false
        },
        "action": "added"
      },
      "public": true,
      "created_at": "2019-05-18T19:38:01Z",
      "org": {
        "id": 30509997,
        "login": "bridge-school",
        "gravatar_id": "",
        "url": "https://api.github.com/orgs/bridge-school",
        "avatar_url": "https://avatars.githubusercontent.com/u/30509997?"
      }
    }
  ]