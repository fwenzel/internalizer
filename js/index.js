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
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
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
            if ($(this).hasClass('dis')) return;

            // Calculate level of commitment.
            var commit = (
                parseInt($('.treasures').data('val')) - parseInt($('.troubles').data('val')) +
                parseInt($('.contrib').data('val')) - parseInt($('.choices').data('val'))
            );
            // Normalize to 1--5 stars.
            commit = Math.round((commit + 10) / 4.0);
            if (commit === 0) commit = 1; // Start at 1.

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

            $('section').removeClass('active');
            $('#cat1-res').addClass('active');
        });

        $('#cat1-res .next').click(function(e) {
            $('section').removeClass('active');
            $('#cat2').addClass('active');
        });

        $('#plans .btn').click(function(e) {
            var sel = $(this).data('sel');

            // Switch to cat 3
            $('section').removeClass('active');
            $('#cat3 > div').removeClass('active');
            // Show results
            $('#cat3 > .' + sel).addClass('active');
            $('#cat3').addClass('active');
        });

        $('#cat3 .next').click(function(e) {
            $('section').removeClass('active');
            $('#cat1').addClass('active');
        });

        $('.btn.reset').click(function(e) {
            window.location.reload();
        });
    }
};

window.onload = function() {
    app.initialize();
};
