/*311*/window._pwTycheAB={name:'na',type:'A'};;window.pwKinesisCreds={"AccessKeyId":"AKIA44GIABD5R4HPHNN2","SecretAccessKey":"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","Expiration":"2121-11-18T01:20:19.000Z"};window.cmpVersion=2;window.tycheSampling=true;window.tycheSamplingRate=0.05;window.tychePath='https://cdn.intergi.com/hera/releases/4.10.6/tyche.js';window.rampSampling=true;window.rampSamplingRate=0.05;window.rampPath='https://cdn.intergi.com/hera/releases/4.10.6/tyche.js';window.rampMinimal=window.rampMinimal || false;window._pageViewSR=1;window._pageViewSampling=false;window._adImpressionSampling=false;window._adImpressionSR=1;window._pwLogger=window._pwLogger || {"pageos":{},"tyche":{},"bolt":{},"PAGEOS_HEAVY_AD":{},"PAGEOS_REPORTING_OBSERVER":{}};window.excludeMoat=false;window._pwKassandraVer='v3';window._pwUserInCA=false;window._pwFpSampling=1;window._pwUserCC="PL";window._pwUserContentEncoding="br";window.pwEdgeFlags={"pageosVersion":"1.10.31","tycheVersion":"4.10.6"};window.pwEdgeYieldOptions={};(()=>{var e,n,w,a;window.pwEdgeFlags=window.pwEdgeFlags||{},window.PageOS=window.PageOS||{},window.tyche=window.ramp||window.tyche,window.ramp=window.tyche,e=function(){var e=function(){try{return new URLSearchParams(window.location.search)}catch(e){return null}}(),n=e&&e.get("pw_pageos"),w=e&&e.get("pw_tyche");window.ramp.activeConfig=window.ramp.activeConfig||window.ramp.mvpConfig,window.ramp.activeConfig&&"DFP_COPPA"!==window.ramp.activeConfig.server&&(window.ramp.activeConfig.settings.magniteData=!0),n&&(window.pwEdgeFlags.pageosOverride=n),w&&(window.pwEdgeFlags.tycheOverride=w);var a=window.ramp.activeConfig&&window.ramp.activeConfig.ad_code&&window.ramp.activeConfig.ad_code.pageos,o=n||a||window.pwEdgeFlags.pageosVersion,i="dev"===window.pwEdgeFlags.cdn?"devcdn.intergi.com":"cdn.intergient.com",d=document.createElement("script");d.type="text/javascript",d.src="//".concat(i,"/pageos/").concat(o,"/pageos.js"),d.async=!0,document.head.appendChild(d)},window.PageOS.loadedRampCore||(window.PageOS.loadedRampCore=!0,n=void 0!==window.ramp,w=window.ramp&&"string"==typeof window.ramp.config,a=window.PageOS.adsPerformance,!n||w||a?e():window.PageOS.run=function(){delete window.PageOS.run,e()})})();;

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
