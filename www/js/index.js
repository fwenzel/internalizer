/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        // Navigate to subpages on the popstate event.
        window.addEventListener('popstate', function(e) {
            $('section').removeClass('active');

            var curPage = window.location.hash || '#cat1';
            $(curPage).addClass('active');
        });

        $('.rating').starRating({
            minus: false // step minus button
        }).click(function(e) {
            // Not all chosen? If so, disable next button, exit.
            if ($(".rating:not([data-val])").length) {
                $('#cat1 .next').addClass('dis');
                return;
            }

            $('#cat1 .next').removeClass('dis');
        });

        $('#cat1 .next').click(function(e) {
            if ($(this).hasClass('dis')) return false;

            // Calculate level of commitment.
            var commit = (
                parseInt($('.treasures').data('val')) - parseInt($('.troubles').data('val')) +
                parseInt($('.contrib').data('val')) - parseInt($('.choices').data('val'))
            );
            // Normalize from -8..8 to 1--5 stars.
            commit = Math.round((commit + 8) * 4 / 17.0) + 1;

            // Description for this level.
            var desc = [
                'Very Poor',
                'Poor',
                'Average',
                'High',
                'Very High'
            ][commit - 1];

            // Display.
            $('#result').text('');
            for (var i=0; i<commit; i++) {
                $('#result').append('<img src="img/star.gif">');
            }
            $('#result').append('<p>' + desc + '</p>');
        });

        $('#plans .btn').click(function(e) {
            var sel = $(this).data('sel');

            // Show results
            $('#cat3 > div').removeClass('active');
            $('#cat3 > .' + sel).addClass('active');
        });

        $('.btn.reset').click(function(e) {
            window.location.reload();
        });

        // Let's do this.
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        history.pushState({}, '', '#cat1');  // First page.
    }
};

window.onload = function() {
    app.initialize();
};
