'use strict';

angular.module('womenInAdf')
  .controller('MainCtrl', function ($scope, $state, $rootScope) {
    $scope.loveArray = [];

    $scope.loves = [
      {
        'key': 1,
        'class': 'oneline',
        'title': 'see the world',
        'img': 'love1.jpg'
      },
      {
        'key': 2,
        'class': 'oneline',
        'title': 'keep learning',
        'img': 'love2.jpg'
      },
      {
        'key': 3,
        'class': 'twoline',
        'title': 'do something meaningful',
        'img': 'love3.jpg'
      },
      {
        'key': 4,
        'class': 'twoline',
        'title': 'make great friends',
        'img': 'love4.jpg'
      },
      {
        'key': 5,
        'class': 'twoline',
        'title': 'spend time with family',
        'img': 'love5.jpg'
      },
      {
        'key': 6,
        'class': 'oneline',
        'title': 'try new things',
        'img': 'love6.jpg'
      },
      {
        'key': 7,
        'class': 'oneline',
        'title': 'play sports',
        'img': 'love7.jpg'
      },
      {
        'key': 8,
        'class': 'oneline',
        'title': 'get fit',
        'img': 'love8.jpg'
      },
      {
        'key': 9,
        'class': 'twoline',
        'title': 'work with the latest technology',
        'img': 'love9.jpg'
      },
      {
        'key': 10,
        'class': 'oneline',
        'title': 'lead',
        'img': 'love10.jpg'
      },
      {
        'key': 11,
        'class': 'twoline',
        'title': 'work with my hands',
        'img': 'love11.jpg'
      },
      {
        'key': 12,
        'class': 'oneline',
        'title': 'be creative',
        'img': 'love12.jpg'
      }
    ];

    // SAVED DATA
    $scope.savedData = function(key) {
 
      console.log('click');
            

      // save key to the scope
      $scope.key = key;

      // run a check to see if item exsists in array already
      if(jQuery.inArray($scope.key, $scope.loveArray) != -1) {
          console.log($scope.key + " is in array");
          // if it's in array, remove it, don't move forward
          $scope.loveArray = $.grep($scope.loveArray, function(value) {
            return value != $scope.key;
          });

          console.log($scope.loveArray);

          $(".loves[data-key="+ $scope.key +"]")
              .removeClass('active')
              .attr('selected', '');
         
          $scope.countdown = $scope.countdown + 1;
     
          if($scope.countdown == 1) {
            console.log('hide complete button');
            $scope.countbtn = true;
          } 

      } else {

          if ( $scope.loveArray.length < 3 ) {

          // if it's not in the array already, add it to array
          console.log($scope.key + " is NOT in array");
          // push key to the array for storing
            $scope.loveArray.push(key);
            console.log($scope.loveArray);
            //$('.loves').removeClass('active');

            $(".loves[data-key="+ key +"]")
              .addClass('active')
              .attr('selected', 'selected');


            // iterate over each love element, 
            // add active and selected to the element
            /*var i;
            for (var i = 0; i < $scope.loveArray.length; i++) {
              $scope.loveArray[i];
              
              
            
              console.log($scope.loveArray[i]);
              console.log(i + "counted");

              if( $scope.loveArray.length > 3 ) {
                console.log('TOO MUCH');
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
            console.log($scope.loveArray);*/

            $scope.countdown = 3 - $scope.loveArray.length;

            if ( $scope.countdown === 0 ) {
              $scope.countbtn = false;
            }


            $rootScope.savedLoves = $scope.loveArray;

          }

      } //end if else for adding removing


              

    };


    $rootScope.goToResults = function() {

      $state.go('results');
     
    };
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });

angular.module('womenInAdf')
  .controller('ResultsCtrl', function ($scope, $rootScope, $state) {
    // disable check for now
    $rootScope.savedLoves = [1,2,3];
    // remove the above
    // set url for video
    $scope.customVid = 'sMKoNBRZM1M';
    // show placeholder
    $scope.placeHolder = true;
    

    // small security check, check if the savedloves is undefined, 
    // if it IS undefined, then go back to the home page
    if($rootScope.savedLoves == undefined) {
      $state.go('home');
    };

    console.log('resultsCtrl ' + $rootScope.savedLoves );

  $scope.jobs = {"WyltPublishedJobs":[
    {
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
      "jobImageURL": "love1.jpg",
      "jobURL": "/navy/jobs/CryptologicLinguist/",
      "applyURL": "/olat?PublishedJobID=35349"
    },
    {
      "interestId": 2,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_1",
      "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
      "publishedJobId": 35382,
      "jobName": "Training Systems Officer",
      "shortName": "TrainingSystemsOfficer",
      "serviceId": 1,
      "serviceName": "Air",
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
      "jobImageURL": "love2.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
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
      "jobImageURL": "love3.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    }]
  };



    $scope.slider = [
      {
        'img': 'love1.jpg'
      },
      {
        'img': 'love2.jpg'
      },
      {
        'img': 'love3.jpg'
      },
      {
        'img': 'love4.jpg'
      },
      {
        'img': 'love5.jpg'
      },
      {
        'img': 'love6.jpg'
      },
      {
        'img': 'love7.jpg'
      },
      {
        'img': 'love8.jpg'
      },
      {
        'img': 'love9.jpg'
      },
      {
        'img': 'love10.jpg'
      },
      {
        'img': 'love11.jpg'
      },
      {
        'img': 'love12.jpg'
      }
    ];

    $scope.postcards = {
      main:  'love1.jpg',
      subone:  'love2.jpg',
      subtwo:  'love3.jpg',
      header: 'LEAD THE WAY',
      text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod libero purus, sed tempor purus consectetur ut. Ut ac pretium sem, quis malesuada quam. Donec vestibulum tortor ac leo consequat malesuada vel non risus. Quisque molestie aliquet laoreet. Aenean vel elementum ex. Vivamus diam ex, consequat nec volutpat a, accumsan faucibus ante. Maecenas non tincidunt elit, et dictum orci. Donec fermentum libero eget scelerisque convallis. Vestibulum mi libero, porta id dignissim at, placerat eget magna.'
    };


// secondary jobs
  $scope.secondaryJobs = {"WyltPublishedJobs":[
    {
      "interestId": 2,
      "interest": "Keep learning",
      "isPrimaryJob": true,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35349\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35349\">Save this job</span><a>",
      "jobEntryKey": "35349_1",
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
      "jobImageURL": "love1.jpg",
      "jobURL": "/navy/jobs/CryptologicLinguist/",
      "applyURL": "/olat?PublishedJobID=35349"
    },
    {
      "interestId": 2,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_1",
      "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
      "publishedJobId": 35382,
      "jobName": "Training Systems Officer",
      "shortName": "TrainingSystemsOfficer",
      "serviceId": 1,
      "serviceName": "Air",
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
      "jobImageURL": "love2.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
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
      "jobImageURL": "love3.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_2",
      "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
      "publishedJobId": 35382,
      "jobName": "Training Systems Officer",
      "shortName": "TrainingSystemsOfficer",
      "serviceId": 1,
      "serviceName": "Air",
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
      "jobImageURL": "love4.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_2",
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
      "jobImageURL": "love6.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_2",
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
      "jobImageURL": "love5.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },     {
      "interestId": 2,
      "interest": "Keep learning",
      "isPrimaryJob": true,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35349\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35349\">Save this job</span><a>",
      "jobEntryKey": "35349_1",
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
      "jobImageURL": "love1.jpg",
      "jobURL": "/navy/jobs/CryptologicLinguist/",
      "applyURL": "/olat?PublishedJobID=35349"
    },
    {
      "interestId": 2,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_1",
      "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
      "publishedJobId": 35382,
      "jobName": "Training Systems Officer",
      "shortName": "TrainingSystemsOfficer",
      "serviceId": 1,
      "serviceName": "Air",
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
      "jobImageURL": "love2.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
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
      "jobImageURL": "love3.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_2",
      "jobId": "ee550dc2-b6f0-4ecd-9e08-ca0b96db9c5b",
      "publishedJobId": 35382,
      "jobName": "Training Systems Officer",
      "shortName": "TrainingSystemsOfficer",
      "serviceId": 1,
      "serviceName": "Air",
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
      "jobImageURL": "love4.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_2",
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
      "jobImageURL": "love6.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    },
    {
      "interestId": 3,
      "interest": "Keep learning",
      "isPrimaryJob": false,
      "displayInWylt": true,
      "fallbackInWylt": true,
      "saveThisJobLink": "<a title=\"Save this job\" class=\"save-job\" data-jobid=\"35382\"><span class=\"icon-star\"></span><span class=\"text save-unsave\" data-jobid=\"35382\">Save this job</span><a>",
      "jobEntryKey": "35382_2",
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
      "jobImageURL": "love5.jpg",
      "jobURL": "/navy/jobs/TrainingSystemsOfficer/",
      "applyURL": "/olat?PublishedJobID=35382"
    }]
  };
  
});

angular.module('womenInAdf').directive('loveList', function($rootScope) {

    
    
    
    return {


        link: function( $scope, $rootScope, $stateParams, $location, $state, go, $element, $attrs, $transclude, $timeout, $apply, $stateProvider, $urlRouterProvider) {
            // On click save the interest and add an active state
           

            $scope.countdown = 3;
            // reset button
            $scope.countbtn = true;

            $scope.saveLove = function(key, e, $event) {
              // tell me if the interest is being picked up
              // move the data back to the controller
              //if ($event.stopPropagation) $event.stopPropagation();
              //if ($event.preventDefault) $event.preventDefault();              
              $scope.savedData(key);
            };

            $scope.pushAnswers = function() {

              // head on over to the results page
              $scope.goToResults();

            };

        },
     };  

});


angular.module('womenInAdf').directive('results', function($rootScope) {

    console.log('results directive');
    
    
    return {


        link: function( $scope, $rootScope, $stateParams, $location, $state, go, $element, $attrs, $transclude, $timeout, $apply, $stateProvider, $urlRouterProvider) {
            // On click save the interest and add an active state
           

            
            // reset button
            $scope.countbtn = true;

            $scope.playVideo = function(player, customVid) {
              // tell me if the interest is being picked up
              // move the data back to the controller
              $scope.placeHolder = false;
             
              console.log('play video');
            };

            $scope.playerVars = {
              controls: 1,
              autoplay: 0
            };

            $scope.pushAnswers = function() {

              // head on over to the results page
              $scope.goToResults();

            };




        },
     };  

});

angular.module('womenInAdf').directive('slider', function ($timeout) {
  
  return {
    link: function (scope, element, attrs) {
      $timeout((function() {
        element.flexslider({
          animation: "slide",
          controlNav: true,
          animationLoop: false,
          slideshow: false,
          sync: "#carousel"
        });
      }), 0);

    }
  }

  // return {
  //     scope: {
  //         items: "="
  //     },
  //     templateUrl: "/slider.html",
  //     compile: function compile(tElement, tAttrs, transclude) {
  //         return function (scope, element, attrs) {
  //             $timeout((function() {
  //           element.flexslider({
  //             animation: "fade",
  //             controlNav: false,
  //             animationLoop: false,
  //             slideshow: false,
  //             sync: "#carousel"
  //           });
  //         }), 0);
                  
  //              }
  //     }
  // }

});

angular.module('womenInAdf').directive('carousel', function ($timeout) {
  
  return {
    link: function (scope, element, attrs) {
      
      $timeout((function() {
        element.flexslider({
          animation: "slide",
          controlNav: false,
          directionNav: true,
          animationLoop: false,
          slideshow: false,
          itemWidth: 69,
          itemMargin: 5,
          prevText: "",
          nextText: "",   
          asNavFor: '#slider'
        });
      }), 0);      
    }
  }
});


angular.module('womenInAdf').directive('jobCard', function ($timeout) {
  console.log('job card directive loaded');
  return {
    link: function ($scope, element, attrs, jobEntryKey) {
        
        $scope.pinJob = function(jobEntryKey) {
            if($("li.job-container[data-num="+ jobEntryKey +"]").hasClass('active')) {
              $("li.job-container[data-num="+ jobEntryKey +"]").removeClass('active');
            } else {
              $("li.job-container[data-num="+ jobEntryKey +"]").addClass('active');
            };
        };
       
    }
  }
});

angular.module('womenInAdf').directive('parallax', function ($timeout) {
  console.log('parallax directive loaded');
  return {
    link: function ($scope, element, attrs, jobEntryKey) {
        
        $timeout((function() {
       
          var s = skrollr.init();
        }), 0);   
    }
  }
});

angular.module('womenInAdf').directive('filter-dir', function ($timeout) {
  console.log('filter directive loaded');
  return {
    require: 'ngModel',
    link: function ($scope, element, attrs, jobEntryKey) {
      $scope.filters = {
      "'Jobs'": [
          "All",
          "Army",
          "Air",
          "Navy"
        ]
      };

     $scope.items = [
        {ID: '000001', Title: 'Chicago'},
        {ID: '000002', Title: 'New York'},
        {ID: '000003', Title: 'Washington'},     
      ];

      $scope.filterJob = function() {
        console.log('filtered');
      };


  

    }
  }
});