/* just indicates code will run in 'strict mode' JS will be more conforming */
"use strict";

/* THIS 'READY' ALLOWS THE PAGE TO RUN HOW WE WANT EVEN IF USER DOESN'T HAVE JAVASCRIPT */

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('tabGroup').className = 'ready';

    var tabHeaders = document.getElementsByClassName('tab-header'); // THIS SELECTS ALL THE H3s

    for(var i = 0; i < tabHeaders.length; i++) {
        console.log(tabHeaders[i]); // [i] iterates between all Headers
        tabHeaders[i].addEventListener('click', activateTabs);
    }

    // ACTIVATE TABS
    function activateTabs(e) {
        var myID = this.id, // STORES CLICKED HEADER/TAB
            contentID = myID.replace('header', 'content'); // STORES ASSOCIATED CONTENT - WHAT WE WANT TO REPLACE ('HEADER') WITH WHAT WE WANT TO REPLACE IT WITH ('CONTENT')
            console.log(myID, contentID); 

            deActivateTabs(); // VERIFIED CODE RUNS BELOW****

            document.getElementById(myID).className = 'tab-header active'; // ADDS ACTIVE CLASS ONTO HEADER TAB WHEN CLICKED
            document.getElementById(contentID).className = 'tab-content active';
    };

    function deActivateTabs() {
        console.log('deactivated'); // ****THIS CODE JUST VERIFIES THAT THE ITEMS ARE DEACTIVATED BY SHOWING 'DEACTIVATED' IN CONSOLE (A GOOD WAY TO DEBUG)..don't need to include in code
        document.getElementById('tab-header-1').className = 'tab-header'; // FINDS 'TAB-HEADER-1' AND IT CHANGES THE CLASS NAME TO JUST 'TAB-HEADER'
        document.getElementById('tab-header-2').className = 'tab-header'; 
        document.getElementById('tab-header-3').className = 'tab-header';

        document.getElementById('tab-content-1').className = 'tab-content'; // FINDS 'TAB-CONTENT-1' AND IT CHANGES THE CLASS NAME TO JUST 'TAB-CONTENT'
        document.getElementById('tab-content-2').className = 'tab-content';
        document.getElementById('tab-content-3').className = 'tab-content';
    }

}); // END DOMContentLoaded


