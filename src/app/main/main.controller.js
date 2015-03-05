'use strict';
//custom tracking
// angular.module('womenInAdf').factory('tracker', function () {
//     return function (action, label) {
//         GoogleAnalyticsHelper.trackEvent("JobFinderTool", action, label)
//     };
// });
angular.module('womenInAdf').controller('ContainerCtrl', function($scope,
    $state, $rootScope, historyService) {
    // change tracking category based on desktop or mobile
    $scope.trackingCategory = 'Do What you Love';
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
            .test(navigator.userAgent)) {
            $scope.trackingCategory = 'Do What you Love_Mobile';
            $scope.placeHolder = false;
        };
    });
angular.module('womenInAdf').service('historyService', function($cookies) {
    var obj = {
        save: function(data) {
            $cookies.historyService = angular.toJson(data);
        },
        getLastQuestion: function() {
            var data = undefined;
            try {
                data = angular.fromJson($cookies.historyService);
            } catch (e) {}
            var q = 1;
            if (!data || !data.Answers) return q;
            q = _.max(data.Answers, function(el) {
                return el.QNum;
            });
            return q.QNum;
        },
        clear: function() {
            $cookies.historyService = undefined;
        },
        getHistory: function() {
            var data = undefined;
            try {
                data = angular.fromJson($cookies.historyService);
            } catch (e) {}
            return data;
        }
    };
    return obj;
});
angular.module('womenInAdf').controller('MainCtrl', function($scope, $state,
    $rootScope, historyService, $timeout) {
    $scope.iphoneVideo = 'http://youtu.be/8HnPgTZw5fg';
    $timeout(function() {
        $('.jumbotron h1').removeClass('hide').addClass(
            'animated fadeInDown');
        $('.jumbotron p.lead').removeClass('hide').addClass(
            'animated fadeInUp');
        $('.jumbotron p a.btn').removeClass('hide').addClass(
            'animated fadeInUp');
    }, 1000);
    $scope.loveArray = [];
    $scope.loveTitle = [];
    $scope.loves = [{
        'key': 1,
        'class': 'oneline',
        'title': 'see the world',
        'img': 'love1.jpg',
        'longBlurb': 'work all over the world from the Solomon Islands to Afghanistan, even Scotland, and see more of Australia than most Aussies.',
        'shortBlurb': 'to see places other people have never heard of.'
    }, {
        'key': 2,
        'class': 'oneline',
        'title': 'keep learning',
        'img': 'love2.jpg',
        'longBlurb': 'enhance your skills with everything from trade courses to vehicle licences and university education.',
        'shortBlurb': 'on the job training and mentoring, with opportunities for career progression.'
    }, {
        'key': 3,
        'class': 'twoline',
        'title': 'do something meaningful',
        'img': 'love3.jpg',
        'longBlurb': 'be part of peacekeeping and humanitarian aid missions that make a real difference to people\'s lives.',
        'shortBlurb': 'the chance to make a real difference to people\'s lives.'
    }, {
        'key': 4,
        'class': 'oneline',
        'title': 'meet new people',
        'img': 'love4.jpg',
        'longBlurb': 'meet great people and share life changing experiences.',
        'shortBlurb': 'meet great people to share life changing experiences with.'
    }, {
        'key': 5,
        'class': 'twoline',
        'title': 'have a work / life balance',
        'img': 'love5.jpg',
        'longBlurb': 'have a great work life balance so you can have time for the things that matter.',
        'shortBlurb': 'a work/life balance and generous leave entitlements.'
    }, {
        'key': 6,
        'class': 'oneline',
        'title': 'try new things',
        'img': 'love6.jpg',
        'longBlurb': 'experience things you’ll never had imagined. Every day is different.',
        'shortBlurb': 'a chance to push yourself and try new things.'
    }, {
        'key': 7,
        'class': 'oneline',
        'title': 'play sports',
        'img': 'love7.jpg',
        'longBlurb': 'play a range of different sports – almost any you can think of. Even at sea, Navy Personnel play basketball or deck hockey.',
        'shortBlurb': 'the chance to meet lots of new team mates.'
    }, {
        'key': 8,
        'class': 'oneline',
        'title': 'get fit',
        'img': 'love8.jpg',
        'longBlurb': 'exercise every day. The ADF encourages members to maintain a high level of physical fitness and will help you achieve your goals.',
        'shortBlurb': 'to work on your fitness everyday.'
    }, {
        'key': 9,
        'class': 'twoline',
        'title': 'work with the latest technology',
        'img': 'love9.jpg',
        'longBlurb': 'work with some of the most advanced technology and equipment available.',
        'shortBlurb': 'the chance to work with the latest technology. '
    }, {
        'key': 10,
        'class': 'oneline',
        'title': 'lead',
        'img': 'love10.jpg',
        'longBlurb': 'manage and lead like-minded people with continuous possibilities for career progression.',
        'shortBlurb': 'trained to manage and lead like-minded people.'
    }, {
        'key': 11,
        'class': 'twoline',
        'title': 'work with your hands',
        'img': 'love11.jpg',
        'longBlurb': 'work with the latest machinery and technology, like ships, tanks and jets.',
        'shortBlurb': 'the chance to work on ships, tanks and jets.'
    }, {
        'key': 12,
        'class': 'oneline',
        'title': 'be creative',
        'img': 'love12.jpg',
        'longBlurb': 'try things you didn’t imagine personnel would do. There are roles for cooks, musicians, photographers and carpenters.',
        'shortBlurb': 'a competitive salary and financial help.'
    }];
    // SAVED DATA
    $scope.savedData = function(key, title) {
        ////console.log('click');
        // save key to the scope
        $scope.key = key;
        $scope.title = title;
        window.shareLoves = [];
        ////console.log(title);
        // run a check to see if item exsists in array already
        if (jQuery.inArray($scope.key, $scope.loveArray) != -1) {
            ////console.log($scope.key + " is in array");
            // if it's in array, remove it, don't move forward
            $scope.loveArray = $.grep($scope.loveArray, function(
                value) {
                return value != $scope.key;
            });
            ////console.log($scope.loveArray);
            $(".loves[data-key=" + $scope.key + "]").removeClass(
                'active').attr('selected', '');
            $scope.countdown = $scope.countdown + 1;
            if ($scope.countdown == 1) {
                $scope.multipleLovesText = false;
            } else {
                $scope.multipleLovesText = true;
            }
            if ($scope.countdown == 1) {
                ////console.log('hide complete button');
                $scope.countbtn = true;
                $('.loves').removeAttr('disabled');
                $('.loves').attr('hover', 'hover');
            }
        } else {
            if ($scope.loveArray.length < 3) {
                // if it's not in the array already, add it to array
                ////console.log($scope.key + " is NOT in array");
                // push key to the array for storing
                $scope.loveArray.push(key);

                ////console.log($scope.loveArray);
                //$('.loves').removeClass('active');
                $(".loves[data-key=" + key + "]").addClass('active')
                    .attr('selected', 'selected');
                // iterate over each love element, 
                // add active and selected to the element
                /*var i;
            for (var i = 0; i < $scope.loveArray.length; i++) {
              $scope.loveArray[i];
              
              
            
              ////console.log($scope.loveArray[i]);
              ////console.log(i + "counted");

              if( $scope.loveArray.length > 3 ) {
                ////console.log('TOO MUCH');
                $scope.loveArray.pop(key);
                $scope.countdown = 0;
              };
              // countdown the button clicks
             
            };*/
                /*$scope.countdown = 3 - $scope.loveArray.length;

            // Only allow 3 love items to be selected
            if($scope.loveArray.length > 2) {
              //$scope.loveArray.pop(key);
              $scope.countdown = 0;
              // remove countdown button
              $scope.countbtn = false;
            }
            ////console.log($scope.loveArray);*/
                $scope.countdown = 3 - $scope.loveArray.length;
                if ($scope.countdown == 1) {
                    $scope.multipleLovesText = false;
                } else {
                    $scope.multipleLovesText = true;
                }
                if ($scope.countdown === 0) {
                    $scope.countbtn = false;
                    ////console.log('anchor scroll');
                    $('a.go-to-btn').trigger('click');
                    $('.loves').attr('disabled', 'disabled');
                    $('.loves.active').removeAttr('disabled');
                    $('.loves[hover="hover"]').removeAttr('hover');
                }
                $rootScope.savedLoves = $scope.loveArray;
                window.shareLoves = $rootScope.savedLoves;
            }
        } //end if else for adding removing
        // run a check to see if item exsists in array already
        if (jQuery.inArray($scope.title, $scope.loveTitle) != -1) {
            ////console.log($scope.title + " is in array");
            // if it's in array, remove it, don't move forward
            $scope.loveTitle = $.grep($scope.loveTitle, function(
                value) {
                return value != $scope.title;
            });
            ////console.log($scope.loveTitle);
            $(".loves[data-key=" + $scope.key + "]").removeClass(
                'active').attr('selected', '');
            if ($scope.countdown == 1) {
                ////console.log('hide complete button');
                $scope.countbtn = true;
            }
        } else {
            if ($scope.loveTitle.length < 3) {
                // if it's not in the array already, add it to array
                ////console.log($scope.title + " is NOT in array");
                // push key to the array for storing
                $scope.loveTitle.push(title);
                ////console.log($scope.loveTitle);
                //$('.loves').removeClass('active');
                $scope.countdown = 3 - $scope.loveTitle.length;
                if ($scope.countdown === 0) {
                    $scope.countbtn = false;
                }
                $rootScope.savedTitles = $scope.loveTitle;

                window.shareLoves = $rootScope.savedTitles;
            }
        } //end if else for adding removing
    };
    $rootScope.goToResults = function() {
        $state.go('results');
    };
    $rootScope.loves = $scope.loves;
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
    });
});
angular.module('womenInAdf').controller('ResultsCtrl', function($scope, $rootScope, $state, $http, historyService, $timeout) {

    /*$('body, html').animate({
        scrollTop: 0
    },600);*/
    //$(document).scrollTop(0);

    setTimeout(function(){

        $('body, html').animate({
            scrollTop: 0
        },500);

    },500);

    //var womenUrl = 'http://www.defencejobs.local';
    $('.ytp-large-play-button').addClass('HELLO');
    $scope.loaderanim = false;
    // disable check for now
    //$rootScope.savedLoves = [1,2,3];
    // remove the above
    // show placeholder
    $scope.placeHolder = true;
    var jobsData = {
        "Interests": $rootScope.savedLoves
    };
    var benefitsData = {
        "Interests": $rootScope.savedLoves
    };
    // small security check, check if the savedloves is undefined, 
    // if it IS undefined, then go back to the home page
    if ($rootScope.savedLoves == undefined) {
        $state.go('home');
    } else {
        // set the titles, make the request
        $scope.loveTitleOne = $rootScope.savedTitles[0];
        $scope.loveTitleTwo = $rootScope.savedTitles[1];
        $scope.loveTitleThree = $rootScope.savedTitles[2];
        ////console.log($rootScope.savedLoves[0] + " saved Loves key");
        $scope.longBlurbOne = $rootScope.loves[$rootScope.savedLoves[0] -
            1].longBlurb;
        $scope.longBlurbTwo = $rootScope.loves[$rootScope.savedLoves[1] -
            1].longBlurb;
        $scope.shortBlurbOne = $rootScope.loves[$rootScope.savedLoves[2] -
            1].shortBlurb;
    };
    $scope.postData = function() {
        // DO YOUR POST MAN!
        $http.post('/women-in-adf/services/GetJobs.ashx', jobsData)
            .error(function(jobsData, data, status, headers, config,
                response, scope) {
                $scope.jobs = {
                    "WyltPublishedJobs": [{
                        "interestId": 2,
                        "interest": "Keep learning",
                        "isPrimaryJob": true,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35349\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35349\">Save this job</span><a>",
                        "jobEntryKey": "35349_1",
                        "jobId": "bc263316-78a3-4a5d-9208-ca0b96db9ce0",
                        "publishedJobId": 35349,
                        "jobName": "Cryptologic Linguist",
                        "shortName": "CryptologicLinguist",
                        "serviceId": 1,
                        "serviceName": "Army",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": false,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "Interested in entering the world of Signals Intelligence? The Navy is looking for motivated people to work in this highly classified environment providing intelligence support for the Australian Defence Force.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": true,
                        "archetype": 4,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/CryptologicLinguist/",
                        "applyURL": "/olat?PublishedJobID=35349"
                    }, {
                        "interestId": 2,
                        "interest": "Keep learning",
                        "isPrimaryJob": true,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "35382_1",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer LONG COPY LONG COPY Training Systems Officer LONG COPY LONG COPY",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Air Force",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }, {
                        "interestId": 3,
                        "interest": "Keep learning",
                        "isPrimaryJob": true,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "35382_2",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Navy",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }]
                };
                //secondary jobs
                $scope.secondaryJobs = {
                    "WyltPublishedJobs": [{
                        "interestId": 2,
                        "interest": "Keep learning",
                        "isPrimaryJob": true,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35349\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35349\">Save this job</span><a>",
                        "jobEntryKey": "34455349_1",
                        "jobId": "bc263316-78a3-4a5d-9208-ca0b96db9ce0",
                        "publishedJobId": 35349,
                        "jobName": "Training Systems Officer",
                        "shortName": "CryptologicLinguist",
                        "serviceId": 1,
                        "serviceName": "Army",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": false,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "Interested in entering the world of Signals Intelligence? The Navy is looking for motivated people to work in this highly classified environment providing intelligence support for the Australian Defence Force.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": true,
                        "archetype": 4,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/CryptologicLinguist/",
                        "applyURL": "/olat?PublishedJobID=35349"
                    }, {
                        "interestId": 2,
                        "interest": "Keep learning",
                        "isPrimaryJob": false,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "435382_1",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Air Force",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }, {
                        "interestId": 3,
                        "interest": "Keep learning",
                        "isPrimaryJob": false,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "665382_2",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Navy",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }, {
                        "interestId": 3,
                        "interest": "Keep learning",
                        "isPrimaryJob": false,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "95382_2",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Air Force",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }, {
                        "interestId": 3,
                        "interest": "Keep learning",
                        "isPrimaryJob": false,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "85382_2",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer 2",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Army",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }, {
                        "interestId": 3,
                        "interest": "Keep learning",
                        "isPrimaryJob": false,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "75382_2",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer 3",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Navy",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }, {
                        "interestId": 2,
                        "interest": "Keep learning",
                        "isPrimaryJob": true,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35349\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35349\">Save this job</span><a>",
                        "jobEntryKey": "55349_1",
                        "jobId": "bc263316-78a3-4a5d-9208-ca0b96db9ce0",
                        "publishedJobId": 35349,
                        "jobName": "Training Systems Officer",
                        "shortName": "CryptologicLinguist",
                        "serviceId": 1,
                        "serviceName": "Army",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": false,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "Interested in entering the world of Signals Intelligence? The Navy is looking for motivated people to work in this highly classified environment providing intelligence support for the Australian Defence Force.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": true,
                        "archetype": 4,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/CryptologicLinguist/",
                        "applyURL": "/olat?PublishedJobID=35349"
                    }, {
                        "interestId": 2,
                        "interest": "Keep learning",
                        "isPrimaryJob": false,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "15382_1",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Air Force",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }, {
                        "interestId": 3,
                        "interest": "Keep learning",
                        "isPrimaryJob": false,
                        "displayInWylt": true,
                        "fallbackInWylt": true,
                        "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
                        "jobEntryKey": "33382_2",
                        "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
                        "publishedJobId": 35382,
                        "jobName": "Training Systems Officer",
                        "shortName": "TrainingSystemsOfficer",
                        "serviceId": 1,
                        "serviceName": "Navy",
                        "genderRestriction": 1,
                        "isFullTime": true,
                        "isReserve": true,
                        "isGapYear": false,
                        "isAdfa": false,
                        "isAdvertised": true,
                        "summary": "The core function of a Training Systems officer is to provide training systems expertise on all aspects of the Defence Training Model. You will develop, manage and co-ordinate a wide range of training delivery systems and oversee trainers.",
                        "entryTypeId": 1,
                        "entryType": 1,
                        "entryTypeName": "",
                        "maximumAge": 65.0,
                        "isCurrentlyRecruiting": false,
                        "isCritical": false,
                        "archetype": 3,
                        "jobImageURL": "http://www.defencejobs.gov.au/global/images/thumbs/thumbnail.ashx?src=jobs/navyMaritimeWarfareOfficer.jpg&size=jobThumbFeature",
                        "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
                        "applyURL": "/olat?PublishedJobID=35382"
                    }]
                };
                ////console.log('No loves picked');
            }).success(function(jobsData, data, status, headers,
                config, response, scope) {
                $scope.jobs = jobsData;
                $scope.secondaryJobs = jobsData;
                ////console.log(jobsData);
                //console.info(' here lies the data ');
            });
        // DO YOUR POST MAN!
        $http.post('/women-in-adf/services/GetBenefits.ashx',
            benefitsData).error(function(benefitsData, data,
            status, headers, config, response, scope) {
            ////console.log('BENEFITS ERROR');
            $scope.benefitsInfo = {
                "WyltBenefitsData": [{
                    "type": "1",
                    "name": "See the world",
                    "interests": [1, 12],
                    "template": "2",
                    "image": [
                        "assets/images/love4.jpg",
                        "assets/images/love5.jpg",
                        "assets/images/love6.jpg"
                    ],
                    "imageText": "As a member of the ADF, you\'ll earn a highly competitive salary. Pay rates vary depending on your job and seniority, and will continue to increase with your career progression. Click here for the Australian Defence Force Salary Scales in the <a href=\"http://www.defencejobs.gov.au/navy/PayAndBenefits/payDetails.aspx\">Navy</a>, <a href=\"http://www.defencejobs.gov.au/army/army-life/what-you-will-be-paid\">Army</a> and <a href=\"http://www.defencejobs.gov.au/airforce/Lifestyle/pay-details\">Air Force</a>. ",
                    "video": "http://youtu.be/8HnPgTZw5fg",
                    "videoText": "As a member of the ADF, you\'ll earn a highly competitive salary. Pay rates vary depending on your job and seniority, and will continue to increase with your career progression. Click here for the Australian Defence Force Salary Scales in the <a href=\"http://www.defencejobs.gov.au/navy/PayAndBenefits/payDetails.aspx\">Navy</a>, <a href=\"http://www.defencejobs.gov.au/army/army-life/what-you-will-be-paid\">Army</a> and <a href=\"http://www.defencejobs.gov.au/airforce/Lifestyle/pay-details\">Air Force</a>. ",
                    "imageGallery": [
                        "assets/images/love1.jpg",
                        "assets/images/love2.jpg",
                        "assets/images/love3.jpg",
                        "assets/images/love4.jpg"
                    ],
                    "imageGalleryText": "As a member of the Australian Defence Force, you'll work with some of the most advanced technology in the world, and speciality equipment for the air, sea and on the ground. Discover our high tech machinery."
                }, {
                    "type": "1",
                    "name": "Leadership and mentoring",
                    "interests": [10, 11],
                    "template": "1",
                    "image": [
                        "assets/images/love4.jpg",
                        "assets/images/love5.jpg",
                        "assets/images/love6.jpg"
                    ],
                    "imageText": "As a member of the ADF, you\'ll earn a highly competitive salary. Pay rates vary depending on your job and seniority, and will continue to increase with your career progression. Click here for the Australian Defence Force Salary Scales in the <a href=\"http://www.defencejobs.gov.au/navy/PayAndBenefits/payDetails.aspx\">Navy</a>, <a href=\"http://www.defencejobs.gov.au/army/army-life/what-you-will-be-paid\">Army</a> and <a href=\"http://www.defencejobs.gov.au/airforce/Lifestyle/pay-details\">Air Force</a>. ",
                    "video": "http://youtu.be/8HnPgTZw5fg",
                    "videoText": "As a member of the ADF, you\'ll earn a highly competitive salary. Pay rates vary depending on your job and seniority, and will continue to increase with your career progression. Click here for the Australian Defence Force Salary Scales in the <a href=\"http://www.defencejobs.gov.au/navy/PayAndBenefits/payDetails.aspx\">Navy</a>, <a href=\"http://www.defencejobs.gov.au/army/army-life/what-you-will-be-paid\">Army</a> and <a href=\"http://www.defencejobs.gov.au/airforce/Lifestyle/pay-details\">Air Force</a>. ",
                    "imageGallery": [
                        "assets/images/love1.jpg",
                        "assets/images/love2.jpg",
                        "assets/images/love3.jpg",
                        "assets/images/love4.jpg"
                    ],
                    "imageGalleryText": "As a member of the Australian Defence Force, you'll work with some of the most advanced technology in the world, and speciality equipment for the air, sea and on the ground. Discover our high tech machinery."
                }, {
                    "type": "1",
                    "name": "State of the art equipment",
                    "interests": [9, 11],
                    "template": "3",
                    "image": [
                        "assets/images/love1.jpg",
                        "assets/images/love2.jpg",
                        "assets/images/love3.jpg"
                    ],
                    "imageText": "As a member of the ADF, you\'ll earn a highly competitive salary. Pay rates vary depending on your job and seniority, and will continue to increase with your career progression. Click here for the Australian Defence Force Salary Scales in the <a href=\"http://www.defencejobs.gov.au/navy/PayAndBenefits/payDetails.aspx\">Navy</a>, <a href=\"http://www.defencejobs.gov.au/army/army-life/what-you-will-be-paid\">Army</a> and <a href=\"http://www.defencejobs.gov.au/airforce/Lifestyle/pay-details\">Air Force</a>. ",
                    "video": "http://youtu.be/8HnPgTZw5fg",
                    "videoText": "As a member of the ADF, you\'ll earn a highly competitive salary. Pay rates vary depending on your job and seniority, and will continue to increase with your career progression. Click here for the Australian Defence Force Salary Scales in the <a href=\"http://www.defencejobs.gov.au/navy/PayAndBenefits/payDetails.aspx\">Navy</a>, <a href=\"http://www.defencejobs.gov.au/army/army-life/what-you-will-be-paid\">Army</a> and <a href=\"http://www.defencejobs.gov.au/airforce/Lifestyle/pay-details\">Air Force</a>. ",
                    "imageGallery": [
                        "assets/images/love1.jpg",
                        "assets/images/love2.jpg",
                        "assets/images/love3.jpg",
                        "assets/images/love4.jpg"
                    ],
                    "imageGalleryText": "As a member of the Australian Defence Force, you'll work with some of the most advanced technology in the world, and speciality equipment for the air, sea and on the ground. Discover our high tech machinery."
                }]
            };
            ////console.log('No benefits picked');
            ////console.log($scope.benefitsInfo);
            ////console.info(' here lies the STATIC benefitsData ');
            $scope.setBenefitsData();
        }).success(function(benefitsData, data, status, headers,
            config, response, scope) {
            $scope.benefitsInfo = benefitsData;
            ////console.log($scope.benefitsInfo);
            ////console.log("image gallery section");
            //$scope.slider = $scope.benefitsInfo.WyltBenefitsData[2].imageGallery;
            ////console.info(' here lies the benefitsData ');
            $scope.setBenefitsData();
        });
        ////console.log('resultsCtrl ' + $rootScope.savedLoves );
    }; // end postData function
    // INTRO FOR RESULTS
    $('.results-page').addClass('hide');
    $('.rolescontainer').addClass('hide');
    $timeout(function() {
        $scope.postData();
        ////console.log('data posted');
    }, 1000);
    $timeout(function() {
        $('.results-page').removeClass('hide').addClass(
            'animated fadeIn');
        $scope.sliderOne();
        $scope.sliderTwo();
        $scope.sliderThree();
    }, 2000);
    // set url for video
    // setTimeout(function() {
    //   $scope.customVid = 'sMKoNBRZM1M';
    //   //console.log('video loaded?');
    //   $scope.videoName = 'custom video name';
    // }, 2000);
    //$scope.slider = $scope.benefitsInfo.WyltBenefitsData[2].imageGallery;
    //$scope.slider = ['assets/images/love1.jpg','assets/images/love2.jpg','assets/images/love3.jpg','assets/images/love4.jpg','assets/images/love5.jpg','assets/images/love6.jpg','assets/images/love7.jpg','assets/images/love8.jpg','assets/images/love9.jpg','assets/images/love10.jpg','assets/images/love11.jpg','assets/images/love12.jpg'];
    // $scope.postcards = {
    //   main:  'assets/images/love1.jpg',
    //   subone:  'assets/images/love2.jpg',
    //   subtwo:  'assets/images/love3.jpg',
    //   header: 'LEAD THE WAY',
    //   text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod libero purus, sed tempor purus consectetur ut. Ut ac pretium sem, quis malesuada quam. Donec vestibulum tortor ac leo consequat malesuada vel non risus. Quisque molestie aliquet laoreet. Aenean vel elementum ex. Vivamus diam ex, consequat nec volutpat a, accumsan faucibus ante. Maecenas non tincidunt elit, et dictum orci. Donec fermentum libero eget scelerisque convallis. Vestibulum mi libero, porta id dignissim at, placerat eget magna.'
    // };
    $scope.setBenefitsData = function() {
        $scope.titleOne = $scope.benefitsInfo.WyltBenefitsData[0].name;
        $scope.titleTwo = $scope.benefitsInfo.WyltBenefitsData[1].name;
        $scope.titleThree = $scope.benefitsInfo.WyltBenefitsData[2]
            .name;
        $scope.templateOne = $scope.benefitsInfo.WyltBenefitsData[0]
            .template;
        $scope.templateTwo = $scope.benefitsInfo.WyltBenefitsData[1]
            .template;
        $scope.templateThree = $scope.benefitsInfo.WyltBenefitsData[
            2].template;
        // VIDEOS
        // video 1 set
        $timeout(function() {
            $scope.videoOne = $scope.benefitsInfo.WyltBenefitsData[
                0].video;
            $scope.videoOneText = $scope.benefitsInfo.WyltBenefitsData[
                0].videoText;
            // video 2 set
            $scope.videoTwo = $scope.benefitsInfo.WyltBenefitsData[
                1].video;
            $scope.videoTwoText = $scope.benefitsInfo.WyltBenefitsData[
                1].videoText;
            // video 3 set
            $scope.videoThree = $scope.benefitsInfo.WyltBenefitsData[
                2].video;
            $scope.videoThreeText = $scope.benefitsInfo.WyltBenefitsData[
                2].videoText;
        }, 3500);
        // POSTCARDS
        // postcard 1 set
        $scope.postcardOneMain = $scope.benefitsInfo.WyltBenefitsData[0].image[0];
        $scope.postcardOneSubOne = $scope.benefitsInfo.WyltBenefitsData[0].image[1];
        $scope.postcardOneSubTwo = $scope.benefitsInfo.WyltBenefitsData[0].image[2];
        $scope.postcardOneText = $scope.benefitsInfo.WyltBenefitsData[0].imageText;
        // postcard 2 set
        $scope.postcardTwoMain = $scope.benefitsInfo.WyltBenefitsData[1].image[0];
        $scope.postcardTwoSubOne = $scope.benefitsInfo.WyltBenefitsData[1].image[1];
        $scope.postcardTwoSubTwo = $scope.benefitsInfo.WyltBenefitsData[1].image[2];
        $scope.postcardTwoText = $scope.benefitsInfo.WyltBenefitsData[1].imageText;
        // postcard 3 set
        $scope.postcardThreeMain = $scope.benefitsInfo.WyltBenefitsData[2].image[0];
        $scope.postcardThreeSubOne = $scope.benefitsInfo.WyltBenefitsData[2].image[1];
        $scope.postcardThreeSubTwo = $scope.benefitsInfo.WyltBenefitsData[2].image[2];
        $scope.postcardThreeText = $scope.benefitsInfo.WyltBenefitsData[2].imageText;
        // IMAGE GALLERY
        // images gallery 1 set
        $scope.imageGalleryOne = $scope.benefitsInfo.WyltBenefitsData[0].imageGallery;
        $scope.imageGalleryOneText = $scope.benefitsInfo.WyltBenefitsData[0].imageGalleryText;
        // images gallery 2 set
        $scope.imageGalleryTwo = $scope.benefitsInfo.WyltBenefitsData[1].imageGallery;
        $scope.imageGalleryTwoText = $scope.benefitsInfo.WyltBenefitsData[1].imageGalleryText;
        // images gallery 3 set
        $scope.imageGalleryThree = $scope.benefitsInfo.WyltBenefitsData[2].imageGallery;
        $scope.imageGalleryThreeText = $scope.benefitsInfo.WyltBenefitsData[2].imageGalleryText;

        $timeout(function(){

            //mobile useragent check
            var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            if ( !mobile ) {

                if ( skrollr.get() ) {
                    skrollr.get().destroy();
                }
                //setup parallax scrolling
                skrollr.init({forceHeight: false});
            }

        });

    };
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        //you also get the actual event object
        //do stuff, execute functions -- whatever...

        ////console.log('ng repeat finished event');
        if ($('.rolescontainer ul li').is(':visible')) {
            //what you want to do when is visible
            //console.info('VISIBLE');
        }
        //console.info('ROLES VISIBLE');       
        $timeout(function() {
            $scope.loaderanim = true;
            $('.loader-container').addClass(
                'animated fadeOut hide');
            $('.rolescontainer').removeClass('hide').addClass(
                'animated fadeInUp');
            // match the height
        }, 2000);
        $timeout(function() {
            $('.rolescontainer').removeClass('hide').addClass(
                'animated fadeInUp');
            // match the height
            $(
                '.rolescontainer li.job-container .front .inner'
            ).matchHeight();
        }, 2500);
        $('a.save-job').unbind('click').bind('click', function() {
            ////console.log('duplicate click');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active')
            }
        });
        //setup save job button for each job card
        $('.save-job.primary').each(function() {
            ////console.log('PRIMARY JOB');
            var savedJobsPanel;
            var savedJobsPanelNoJs;
            var jobId;
            var entryTypeId;
            var saveJobSelector;
            var savedJobsText;
            var savedJobSelected;
            var savedJobStatus;

            function init(job_id, entry_type_id,
                saveJobSelector) {
                if (saveJobSelector) {
                    savedJobsPanel =
                        saveJobSelector;
                } else {
                    savedJobsPanel = jQuery(
                        "#savedjob");
                }
                savedJobsPanelNoJs = jQuery(
                    "#savedjobnojs");
                savedJobsPanelNoJs.css('display',
                    "none");
                jobId = job_id;
                entryTypeId = entry_type_id;
                savedJobsPanel.click(function(e) {
                    // track link
                    savedJobsText =
                        savedJobsPanel.find(
                            '.text').find(
                            'a').text();
                    savedJobSelected =
                        savedJobsPanel.parent()
                        .find('.view-job').attr(
                            "title");
                    var currentTotal =
                        parseInt($(
                            '.nav-item.nav-saved-jobs .star-counter'
                        ).text());
                    if (savedJobsText ==
                        "SAVE THIS JOB") {
                        //plus one job
                        $(
                            '.nav-item.nav-saved-jobs .star-counter'
                        ).html(
                            currentTotal +
                            1);
                        //GoogleAnalyticsHelper.trackEvent("search_results", "save_job_click", savedJobSelected);
                    } else {
                        //minus one job
                        $(
                            '.nav-item.nav-saved-jobs .star-counter'
                        ).html(
                            currentTotal -
                            1);
                        //GoogleAnalyticsHelper.trackEvent("search_results", "unsave_job_click", savedJobSelected);
                    }
                    // toggle link
                    toggle();
                });
            }

            function status() {
                //Make an async request to see the status of the current job
                var postVars = 'jobid=' + jobId +
                    '&entrytypeid=' + entryTypeId;
                if (window.location.href.indexOf(
                    'https') >= 0) postVars =
                    postVars + '&RequiresSecure=1';
                jQuery.post(
                    '/global/savedjobs/ajax_job_status.aspx',
                    postVars, drawResults);
            }

            function toggle() {
                //Make an async request to toggle the status of the current job
                var postVars = 'jobid=' + jobId +
                    '&entrytypeid=' + entryTypeId;
                if (window.location.href.indexOf(
                    'https') >= 0) postVars =
                    postVars + '&RequiresSecure=1';
                jQuery.post(
                    "/global/savedjobs/ajax_job_toggle.aspx",
                    postVars, drawResults);
            }

            function drawResults(o) {
                savedJobsPanel.find('.text').html(o);
                savedJobsPanel.css('display',
                    "block");
                //Bind the saved jobs.. so it will track again
                $(document).ready(function() {
                    $('div#savedjob a').bind(
                        'click.savedJob',
                        function() {
                            var
                                className =
                                $(this)
                                .attr(
                                    "class"
                                );
                            if (
                                className !=
                                "remove"
                            ) {
                                //get on document data.. if not this will error after ajax is run
                                var
                                    jData =
                                    jQuery
                                    .data(
                                        document
                                        .body,
                                        "googleTrack"
                                    );
                                if (
                                    jData
                                ) {
                                    //GoogleAnalyticsHelper.trackEvent("Job_tools", "button_clicked", "save_job");
                                }
                            }
                        });
                });
            }
            if ($(this).data('job-id')) {
                init($(this).data('job-id'), $(this).data(
                    'entry-id'), $(this));
                status();
            }
        });
        //setup save job button for each job card
        $('.save-job.secondary').each(function() {
            ////console.log('PRIMARY JOB');
            var savedJobsPanel;
            var savedJobsPanelNoJs;
            var jobId;
            var entryTypeId;
            var saveJobSelector;
            var savedJobsText;
            var savedJobSelected;
            var savedJobStatus;

            function init(job_id, entry_type_id,
                saveJobSelector) {
                if (saveJobSelector) {
                    savedJobsPanel =
                        saveJobSelector;
                } else {
                    savedJobsPanel = jQuery(
                        "#savedjob");
                }
                savedJobsPanelNoJs = jQuery(
                    "#savedjobnojs");
                savedJobsPanelNoJs.css('display',
                    "none");
                jobId = job_id;
                entryTypeId = entry_type_id;
                savedJobsPanel.click(function(e) {
                    // track link
                    savedJobsText =
                        savedJobsPanel.find(
                            '.text').find(
                            'a').text();
                    savedJobSelected =
                        savedJobsPanel.parent()
                        .find('.view-job').attr(
                            "title");
                    var currentTotal =
                        parseInt($(
                            '.nav-item.nav-saved-jobs .star-counter'
                        ).text());
                    if (savedJobsText ==
                        "SAVE THIS JOB") {
                        //plus one job
                        $(
                            '.nav-item.nav-saved-jobs .star-counter'
                        ).html(
                            currentTotal +
                            1);
                        //GoogleAnalyticsHelper.trackEvent("search_results", "save_job_click", savedJobSelected);
                    } else {
                        //minus one job
                        $(
                            '.nav-item.nav-saved-jobs .star-counter'
                        ).html(
                            currentTotal -
                            1);
                        //GoogleAnalyticsHelper.trackEvent("search_results", "unsave_job_click", savedJobSelected);
                    }
                    // toggle link
                    toggle();
                });
            }

            function status() {
                //Make an async request to see the status of the current job
                var postVars = 'jobid=' + jobId +
                    '&entrytypeid=' + entryTypeId;
                if (window.location.href.indexOf(
                    'https') >= 0) postVars =
                    postVars + '&RequiresSecure=1';
                jQuery.post(
                    '/global/savedjobs/ajax_job_status.aspx',
                    postVars, drawResults);
            }

            function toggle() {
                //Make an async request to toggle the status of the current job
                var postVars = 'jobid=' + jobId +
                    '&entrytypeid=' + entryTypeId;
                if (window.location.href.indexOf(
                    'https') >= 0) postVars =
                    postVars + '&RequiresSecure=1';
                jQuery.post(
                    "/global/savedjobs/ajax_job_toggle.aspx",
                    postVars, drawResults);
            }

            function drawResults(o) {
                savedJobsPanel.find('.text').html(o);
                savedJobsPanel.css('display',
                    "block");
                //Bind the saved jobs.. so it will track again
                $(document).ready(function() {
                    $('div#savedjob a').bind(
                        'click.savedJob',
                        function() {
                            var
                                className =
                                $(this)
                                .attr(
                                    "class"
                                );
                            if (
                                className !=
                                "remove"
                            ) {
                                //get on document data.. if not this will error after ajax is run
                                var
                                    jData =
                                    jQuery
                                    .data(
                                        document
                                        .body,
                                        "googleTrack"
                                    );
                                if (
                                    jData
                                ) {
                                    //GoogleAnalyticsHelper.trackEvent("Job_tools", "button_clicked", "save_job");
                                }
                            }
                        });
                });
            }
            if ($(this).data('job-id')) {
                init($(this).data('job-id'), $(this).data(
                    'entry-id'), $(this));
                status();
            }
        });
    });
});
angular.module('womenInAdf').directive('loveList', function($rootScope) {
    return {
        link: function($scope, $rootScope, $stateParams, $location,
            $state, go, $element, $attrs, $transclude, $timeout,
            $apply, $stateProvider, $urlRouterProvider) {
            // On click save the interest and add an active state
            // mobile stuff
            $('#interact').find('.btn.main-menu').attr({
                target: '_self'
            }).removeAttr('href');
            $('#interact').find('.btn.search').attr({
                target: '_self'
            }).removeAttr('href');
            $('.btn.main-menu').unbind('click').bind('click',
                function() {
                    ////console.log('touched menu');
                    if ($(this).hasClass('active')) {
                        ////console.log('btn main menu');
                        $(this).removeClass('active');
                        $('#main-menu-nav').removeClass(
                            'active');
                    } else {
                        $(this).addClass('active');
                        $('#main-menu-nav').addClass('active');
                    }
                });
            $('.btn.search').unbind('click').bind('click', function() {
                ////console.log('touched menu');
                if ($(this).hasClass('active')) {
                    ////console.log('.btn.search');
                    $(this).removeClass('active');
                    $('#search-box').removeClass('active');
                } else {
                    $(this).addClass('active');
                    $('#search-box').addClass('active');
                }
            });
            $scope.countdown = 3;
            $scope.multipleLovesText = true;
            // reset button
            $scope.countbtn = true;
            $scope.saveLove = function(key, title) {
                // tell me if the interest is being picked up
                // move the data back to the controller
                //if ($event.stopPropagation) $event.stopPropagation();
                //if ($event.preventDefault) $event.preventDefault();              
                $scope.savedData(key, title);
            };
            $scope.pushAnswers = function() {
                // head on over to the results page
                //$('a.auto-top').trigger('click');
                $scope.goToResults();
            };
        },
    };
});
angular.module('womenInAdf').directive('results', function($rootScope, $state) {
    //console.log('results directive');
    return {
        link: function($scope, scope, $rootScope, $stateParams,
            $location, $state, go, $element, $attrs, $transclude,
            $timeout, $apply, $stateProvider, $urlRouterProvider) {
            // Height hack for android devices
            if (/Android|Opera Mini/i.test(navigator.userAgent)) {
                $('.women').addClass('android');
                $(document).ready(function() {
                    function setHeight() {
                        var windowHeight = $(window).innerHeight();
                        $('.women').css('height',
                            windowHeight);
                        $('.women').css('overflow-x',
                            'scroll');
                        $('.imgPlaceholder').hide();
                    };
                    setHeight();
                });
            };
            $scope.doTheBack = function() {
                //window.history.back();
                document.location.hash = '/';
                setTimeout(function(){

                    $('body, html').animate({
                        scrollTop: $('#intro').offset().top
                    },600);

                },600);
            };
            // On click save the interest and add an active state
            // disable Saved Job clicks
            $('a.nav-grey.media').attr('target', '_self').on(
                'click', function(e) {
                    e.preventDefault();
                    $scope.goToResults();
                });
            // log when you scroll down the page 
            var waypoint = new Waypoint({
                element: document.getElementById(
                    'title-one'),
                handler: function(direction) {
                    if (direction == 'down') {
                        ////console.log('title-one down')
                    }
                }
            });
            var waypoint = new Waypoint({
                element: document.getElementById(
                    'title-two'),
                handler: function(direction) {
                    if (direction == 'down') {
                        //////console.log('title-two down')
                    }
                }
            });
            var waypoint = new Waypoint({
                element: document.getElementById(
                    'title-three'),
                handler: function(direction) {
                    if (direction == 'down') {
                        ////console.log('title-three down')
                    }
                }
            });
            Waypoint.refreshAll();
            // reset button
            $scope.countbtn = true;
            $scope.playVideo = function() {
                // tell me if the interest is being picked up
                // move the data back to the controller
                ////console.log('VIDEO PLAY');
                $scope.placeHolder = false;
                ////console.log('play video');
            };
            $scope.hidePlaceHolder = function() {
                $scope.placeHolder = false;
            }
            $scope.playerVars = {
                controls: 1,
                autoplay: 0
            };
            $scope.pushAnswers = function() {
                // head on over to the results page
                $scope.goToResults();
            };
            // end if scope.$last  
            setTimeout(function() {
                ////console.log('save job code');
                if (Modernizr.touch) {
                    $('.job-container').on('click',
                        function() {
                            ////console.log('job container click');
                            if ($(this).hasClass(
                                'active')) {
                                $(this).removeClass(
                                    'active');
                            } else {
                                $(this).addClass(
                                    'active');
                            }
                        });
                };
            }, 0);
        },
    };
});
angular.module('womenInAdf').directive('sliderOne', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            scope.sliderOne = function() {
                ////console.info('sliderOne example entered');
                $('#sliderOne').flexslider({
                    animation: "slide",
                    controlNav: true,
                    animationLoop: false,
                    slideshow: false,
                    sync: "#carouselOne"
                });
                $('#carouselOne').flexslider({
                    animation: "slide",
                    controlNav: false,
                    directionNav: true,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: 69,
                    itemMargin: 5,
                    prevText: "",
                    nextText: "",
                    asNavFor: '#sliderOne'
                });
            }
        }
    }
});
angular.module('womenInAdf').directive('sliderTwo', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            scope.sliderTwo = function() {
                ////console.info('sliderTwo example entered');
                $('#sliderTwo').flexslider({
                    animation: "slide",
                    controlNav: true,
                    animationLoop: false,
                    slideshow: false,
                    sync: "#carouselTwo"
                });
                $('#carouselTwo').flexslider({
                    animation: "slide",
                    controlNav: false,
                    directionNav: true,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: 69,
                    itemMargin: 5,
                    prevText: "",
                    nextText: "",
                    asNavFor: '#sliderTwo'
                });
            }
        }
    }
});
angular.module('womenInAdf').directive('sliderThree', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            scope.sliderThree = function() {
                ////console.info('sliderThree example entered');
                $('#sliderThree').flexslider({
                    animation: "slide",
                    controlNav: true,
                    animationLoop: false,
                    slideshow: false,
                    sync: "#carouselThree"
                });
                $('#carouselThree').flexslider({
                    animation: "slide",
                    controlNav: false,
                    directionNav: true,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: 69,
                    itemMargin: 5,
                    prevText: "",
                    nextText: "",
                    asNavFor: '#sliderThree'
                });
            }
        }
    }
});
angular.module('womenInAdf').directive('jobCard', function($timeout) {
    ////console.log('job card directive loaded');
    return {
        link: function($scope, element, attrs, jobEntryKey, $timeout) {
            $scope.pinJob = function(jobEntryKey) {
                if ($("li.job-container[data-num=" +
                    jobEntryKey + "]").hasClass('active')) {
                    $("li.job-container[data-num=" +
                        jobEntryKey + "]").removeClass(
                        'active');
                } else {
                    $("li.job-container[data-num=" +
                        jobEntryKey + "]").addClass(
                        'active');
                };
            };
            $('li.job-container').unbind('click').bind('click',
                function() {
                    ////console.log('touched');
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).addClass('active');
                    }
                });
        }
    }
});

angular.module('womenInAdf').directive('social', function($timeout) {
    ////console.log('SOCIAL');
    return {
        link: function($scope, $rootScope, element, attrs, jobEntryKey) {

            $('.social').sharrre({
                share: {
                    googlePlus: true,
                    facebook: true,
                    twitter: true,
                    linkedin: true
                },
                title: "HELLO",
                enableCounter: false,
                template: '<li class="mobile-share"><a href="" ng-click="social()"><span class="icon-link"></span></a></li>' +
                    '<li class="fb"><a class="facebook" href=""><span class="icon-facebook"></span></a></li>' +
                    '<li class="tw"><a class="twitter" href=""><span class="icon-twitter"></span></a></li>' +
                    '<li class="in"><a href=""><span class="icon-linked-in"></span></a></li>' +
                    '<li class="gp"><a class="googleplus" href=""><span class="icon-google-plus"></span></a></li>',
                url: 'http://www.defencejobs.local/women-in-adf/',
                enableHover: false,
                enableTracking: true,
                render: function(api, options) {

                    function shareURL( referer ){

                        referer = referer ? referer : '';

                        if ( window.shareLoves ) {
                            //return chosen loves as query string in url for dynamic share
                            return encodeURIComponent( document.location.href.split('#')[0] + '?referer=' + referer + '&loves=' +  window.shareLoves[0] + ',' + window.shareLoves[1] + ',' + window.shareLoves[2] );
                        } else {
                            //return vanilla url for sharing
                            return encodeURIComponent( document.location.href.split('#')[0] + '?referer=' + referer );
                        }

                    }

                    $(api.element).on('click', '.twitter', function() {
                        var title = $('meta[property="twitter:title"]').attr("content") ? $('meta[property="twitter:title"]').attr("content") : '';
                        window.open('http://www.twitter.com/share?url=' + encodeURIComponent( document.location.href ) + '&sharetype=tw&text=' + encodeURIComponent(title), "window", "status = 1, height = 320, width = 640, resizable = 1");
                    });
                    $(api.element).on('click', '.facebook', function() {
                        window.open('http://www.facebook.com/sharer/sharer.php?u=' + shareURL('facebook') + '&display=popup', "window", "status = 1, height = 320, width = 640, resizable = 1");
                    });
                    $(api.element).on('click', '.googleplus', function() {
                        window.open('https://plus.google.com/share?url=' + shareURL('google'), "window", "status = 1, height = 320, width = 640, resizable = 1");
                    });
                    $(api.element).on('click', '.linkedin', function() {
                        window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + shareURL('linkedin') + '&sharetype=in', "window", "status = 1, height = 320, width = 640, resizable = 1");
                    });      

                }
            });
            var $this = $('ul.social');
            $scope.social = function() {
                if ($this.hasClass('open')) {
                    $this.removeClass('open');
                } else {
                    $this.addClass('open');
                }
            };
        }
    }
});
angular.module('womenInAdf').directive('filterDir', function($timeout) {
    ////console.log('filter directive loaded');
    ////console.log('changed 1206');
    return {
        //require: 'ngModel',
        link: function($scope, element, attrs, jobEntryKey) {
            $scope.typeOptions = [
                {
                    name: 'All',
                    value: 'All'
                },
                {
                    name: 'Navy',
                    value: 'Navy'
                },
                {
                    name: 'Army',
                    value: 'Army'
                },
                {
                    name: 'Air Force',
                    value: 'Air Force'
                }
            ];
            $scope.form = {
                type: $scope.typeOptions[0].value
            };
            $scope.filterJob = function() {
                ////console.log($scope.form.type);
                $('ul.secondary-roles li').hide();
                $("ul.secondary-roles li[data-service-name='" +
                    $scope.form.type + "']").show();
                if ($scope.form.type == 'All') {
                    ////console.log('All selected');
                    $('ul.secondary-roles li').show();
                }
                if ($('ul.secondary-roles li:visible').length ==
                    0) {
                    ////console.log('none');
                    $scope.form.type = 'All';
                    $('ul.secondary-roles li').show();
                }
            };
        }
    }
});
angular.module('womenInAdf').directive('onFinishRender', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    ////console.log('enter ng repeat finished directive');
                    scope.$emit('ngRepeatFinished');
                    $timeout(function() {
                        $(document).on(
                            'li.job-container',
                            'touchstart',
                            function() {
                                ////console.log('wowow')
                            });
                        $('li.job-container').on(
                            'touchstart',
                            function() {
                                ////console.log('touched');
                                if ($(this).hasClass(
                                    'active'
                                )) {
                                    $(this).removeClass(
                                        'active'
                                    );
                                } else {
                                    $(this).addClass(
                                        'active'
                                    );
                                }
                            });
                    }, 1000);
                });
            }
        }
    }
});