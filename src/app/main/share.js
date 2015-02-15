 $(function () {
     var baseUrl = "http://" + document.location.hostname + "/job-finder-tool/default.aspx";

     var getFinalUrl = function (baseUrl) {
         var archetypeResult = $(".archetype .final-share").attr("data-archetype");

         return baseUrl + "?archetype=" + archetypeResult;
     }

     var getTwitterTitle = function () {
         var title = "";
         if ($('meta[property="twitter:title"]').length > 0) {
             title = $('meta[property="twitter:title"]').attr("content");
         }
         return encodeURIComponent(title);
     }
		
		// Bind landing page share
        $(document).on('click', '.socialbox .generic-sharing .fb', function () {
            window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(baseUrl) + '&display=popup', "window", "status = 1, height = 320, width = 640, resizable = 1");
        });

        $(document).on('click', '.socialbox .generic-sharing .tw', function () {
            var title = getTwitterTitle();
            window.open('http://www.twitter.com/share?url=' + encodeURIComponent(baseUrl + '&sharetype=tw') + '&text=' + title, "window", "status = 1, height = 320, width = 640, resizable = 1");
        });

        $(document).on('click', '.socialbox .generic-sharing .gp', function () {
            window.open('https://plus.google.com/share?url=' + encodeURIComponent(baseUrl), "window", "status = 1, height = 320, width = 640, resizable = 1");
        });
        $(document).on('click', '.socialbox .generic-sharing .in', function () {
            window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(baseUrl + '?sharetype=in'), "window", "status = 1, height = 320, width = 640, resizable = 1");
        });
		

		
		// Bind result page share
		
        $(document).on('click', '.final-share .fb', function () {
			 var finalUrl = getFinalUrl(baseUrl);
            window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(finalUrl) + '&display=popup', "window", "status = 1, height = 320, width = 640, resizable = 1");
        });

        $(document).on('click', '.final-share .tw', function () {
            var finalUrl = getFinalUrl(baseUrl);
            var title = getTwitterTitle();
            window.open('http://www.twitter.com/share?url=' + encodeURIComponent(finalUrl + '&sharetype=tw') + '&text=' + encodeURIComponent('I am finding my ideal role using the ADF Job Finder tool'), "window", "status = 1, height = 320, width = 640, resizable = 1");
        });

        $(document).on('click', '.final-share .gp', function () {
			var finalUrl = getFinalUrl(baseUrl);
            window.open('https://plus.google.com/share?url=' + encodeURIComponent(finalUrl), "window", "status = 1, height = 320, width = 640, resizable = 1");
        });
        $(document).on('click', '.final-share .in', function () {
			var finalUrl = getFinalUrl(baseUrl);
            window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(finalUrl + '&sharetype=in'), "window", "status = 1, height = 320, width = 640, resizable = 1");
        });
    });
